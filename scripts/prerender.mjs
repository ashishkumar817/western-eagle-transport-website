import fs from "node:fs/promises";
import path from "node:path";
import { PassThrough } from "node:stream";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { createServer } from "vite";

const root = process.cwd();
const distDir = path.join(root, "dist");

const coreRoutes = [
  "/",
  "/about",
  "/services",
  "/equipment",
  "/gallery",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

const renderWithVite = (streamRenderer) => new Promise((resolve, reject) => {
  let output = "";
  const passThrough = new PassThrough();
  passThrough.on("data", (chunk) => {
    output += chunk.toString();
  });
  passThrough.on("end", () => resolve(output));
  passThrough.on("error", reject);
  streamRenderer(passThrough, reject);
});

const renderRoute = async (PrerenderApp, route) => {
  const helmetContext = {};
  const html = await renderWithVite((passThrough, reject) => {
    let didError = false;
    const stream = renderToPipeableStream(
      React.createElement(PrerenderApp, { url: route, helmetContext }),
      {
        onAllReady() {
          stream.pipe(passThrough);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = true;
          console.error(`[prerender] ${route}:`, error);
        },
      },
    );

    if (didError) {
      reject(new Error(`Failed to prerender ${route}`));
    }
  });

  return { html, helmet: helmetContext.helmet };
};

const removeDynamicHeadTags = (template) => template
  .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
  .replace(/\s*<meta\s+name="description"[^>]*>/i, "")
  .replace(/\s*<meta\s+name="keywords"[^>]*>/i, "")
  .replace(/\s*<meta\s+property="og:[^"]+"[^>]*>/gi, "")
  .replace(/\s*<meta\s+name="twitter:[^"]+"[^>]*>/gi, "")
  .replace(/\s*<link\s+rel="canonical"[^>]*>/i, "");

const getRoutes = async (vite) => {
  const equipmentModule = await vite.ssrLoadModule("/src/lib/equipmentData.ts");
  const dataModule = await vite.ssrLoadModule("/src/lib/data.ts");
  const routes = new Set(coreRoutes);

  for (const equipment of Object.values(equipmentModule.equipmentData)) {
    routes.add(`/equipment/${equipment.slug}`);
    for (const variant of equipment.variants ?? []) {
      routes.add(`/equipment/${equipment.slug}/${variant.slug}`);
    }
  }

  for (const service of dataModule.servicesList) {
    routes.add(`/services/${service.slug}`);
  }

  for (const post of dataModule.blogPosts) {
    routes.add(`/blog/${post.slug}`);
  }

  return [...routes];
};

const writeRoute = async (template, route, renderedBody, helmet) => {
  const titleTag = helmet?.title?.toString() ?? "";
  const metaTags = helmet?.meta?.toString() ?? "";
  const linkTags = helmet?.link?.toString() ?? "";
  const pageTitle = titleTag.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
  const description = metaTags.match(/name="description"[^>]*content="([^"]*)"/i)?.[1]
    ?? "Heavy equipment rental, machinery leasing, and industrial services across Abu Dhabi and the UAE.";
  const canonical = linkTags.match(/rel="canonical"[^>]*href="([^"]+)"/i)?.[1]
    ?? `https://westerneagletransportllc.com${route === "/" ? "/" : route}`;

  const headTags = [
    titleTag,
    metaTags,
    linkTags,
    helmet?.script?.toString(),
    !metaTags.includes('property="og:title"') && `<meta property="og:title" content="${pageTitle}"/>`,
    !metaTags.includes('property="og:description"') && `<meta property="og:description" content="${description}"/>`,
    !metaTags.includes('property="og:url"') && `<meta property="og:url" content="${canonical}"/>`,
    !metaTags.includes('name="twitter:card"') && '<meta name="twitter:card" content="summary_large_image"/>',
    !metaTags.includes('name="twitter:title"') && `<meta name="twitter:title" content="${pageTitle}"/>`,
    !metaTags.includes('name="twitter:description"') && `<meta name="twitter:description" content="${description}"/>`,
  ].filter(Boolean).join("\n    ");

  const page = removeDynamicHeadTags(template)
    .replace("</head>", `    ${headTags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${renderedBody}</div>`);

  const outputPath = route === "/"
    ? path.join(distDir, "index.html")
    : path.join(distDir, `${route.slice(1)}.html`);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, page, "utf8");
};

const commonPageSources = [
  "src/App.tsx",
  "src/components/Header.tsx",
  "src/components/Footer.tsx",
];

const getRouteSourceFiles = (route) => {
  if (route === "/") {
    return [
      ...commonPageSources,
      "src/pages/Index.tsx",
      "src/components/HeroSection.tsx",
      "src/components/AboutSection.tsx",
      "src/components/EquipmentSection.tsx",
      "src/components/WhyChooseUs.tsx",
      "src/components/FAQSection.tsx",
      "src/components/StatsSection.tsx",
      "src/components/CTASection.tsx",
      "src/components/FeaturedServices.tsx",
      "src/components/GallerySection.tsx",
      "src/components/SupportCTA.tsx",
      "src/components/ContactSection.tsx",
      "src/lib/data.ts",
      "src/lib/equipmentData.ts",
    ];
  }

  if (route === "/about") {
    return [...commonPageSources, "src/pages/About.tsx", "src/components/AboutSection.tsx"];
  }
  if (route === "/equipment") {
    return [...commonPageSources, "src/pages/Equipment.tsx", "src/lib/equipmentData.ts"];
  }
  if (route.startsWith("/equipment/")) {
    return [
      ...commonPageSources,
      "src/lib/equipmentData.ts",
      "src/pages/EquipmentDetail.tsx",
      "src/pages/EquipmentVariant.tsx",
      "src/components/EquipmentVariantCard.tsx",
      "src/components/equipment/CenteredMinimalLayout.tsx",
      "src/components/equipment/FullwidthImageLayout.tsx",
      "src/components/equipment/ImageStatsLayout.tsx",
      "src/components/equipment/SplitPanelsLayout.tsx",
    ];
  }
  if (route === "/services") {
    return [...commonPageSources, "src/pages/Services.tsx", "src/lib/data.ts"];
  }
  if (route.startsWith("/services/")) {
    return [...commonPageSources, "src/pages/ServiceDetail.tsx", "src/lib/data.ts"];
  }
  if (route === "/blog") {
    return [...commonPageSources, "src/pages/Blog.tsx", "src/lib/data.ts"];
  }
  if (route.startsWith("/blog/")) {
    return [...commonPageSources, "src/pages/BlogPost.tsx", "src/lib/data.ts"];
  }
  if (route === "/gallery") {
    return [...commonPageSources, "src/pages/Gallery.tsx", "src/components/GallerySection.tsx"];
  }
  if (route === "/contact") {
    return [...commonPageSources, "src/pages/Contact.tsx", "src/components/ContactSection.tsx"];
  }
  if (route === "/privacy-policy") {
    return [...commonPageSources, "src/pages/PrivacyPolicy.tsx", "src/components/LegalPageShell.tsx"];
  }
  if (route === "/terms-and-conditions") {
    return [...commonPageSources, "src/pages/TermsAndConditions.tsx", "src/components/LegalPageShell.tsx"];
  }

  return commonPageSources;
};

const getRouteLastmod = async (route) => {
  const timestamps = await Promise.all(
    getRouteSourceFiles(route).map(async (sourceFile) => {
      try {
        const stat = await fs.stat(path.join(root, sourceFile));
        return stat.mtimeMs;
      } catch {
        return 0;
      }
    }),
  );
  const lastModified = Math.max(...timestamps);
  if (!lastModified) throw new Error(`Could not determine lastmod for ${route}`);
  return new Date(lastModified).toISOString().slice(0, 10);
};

const writeSitemap = async (routes) => {
  const urls = await Promise.all(routes.map(async (route) => {
    const encodedRoute = route.split("/").map(encodeURIComponent).join("/");
    const loc = `https://westerneagletransportllc.com${encodedRoute}`;
    const lastmod = await getRouteLastmod(route);
    return [`  <url>`, `    <loc>${loc}</loc>`, `    <lastmod>${lastmod}</lastmod>`, `  </url>`].join("\n");
  }));
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");

  await Promise.all([
    fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8"),
    fs.writeFile(path.join(root, "public", "sitemap.xml"), sitemap, "utf8"),
  ]);
};

const vite = await createServer({
  root,
  appType: "custom",
  server: { middlewareMode: true },
  ssr: { noExternal: ["react-helmet-async"] },
});

try {
  const { PrerenderApp } = await vite.ssrLoadModule("/src/prerender-entry.tsx");
  const routes = await getRoutes(vite);
  const template = removeDynamicHeadTags(await fs.readFile(path.join(distDir, "index.html"), "utf8"));

  for (const route of routes) {
    const { html, helmet } = await renderRoute(PrerenderApp, route);
    await writeRoute(template, route, html, helmet);
  }

  await writeSitemap(routes);
  console.log(`[prerender] Generated ${routes.length} route pages`);
} finally {
  await vite.close();
}
