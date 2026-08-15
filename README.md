# 🏗️ Western Eagle Transport LLC Website

A modern, responsive website for a heavy equipment rental and transport company serving customers across the UAE.

The website showcases available equipment, services, company information, project images, articles, and contact options.

## ✨ Features

- 🏠 Modern responsive homepage
- 🚜 Heavy equipment catalogue
- 🔍 Equipment detail and variant pages
- 🛠️ Service listing and detail pages
- 🖼️ Project and equipment gallery
- 📝 Blog and article section
- 📞 Contact and enquiry forms
- 🌙 Dark and light theme support
- 📱 Mobile-friendly navigation
- ⚡ Fast client-side page navigation
- 🔎 SEO-friendly page metadata
- 📄 Downloadable brochures and company documents
- 🎨 Reusable design components and animations

## 🧰 Technology Stack

- ⚛️ React
- 📘 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧩 Radix UI components
- 🧭 React Router
- 🎯 Lucide icons
- 🔍 React Helmet Async for SEO
- 🚀 Vercel-ready deployment configuration

## 📁 Project Structure

```text
.
├── public/
│   ├── assets/
│   │   ├── equipment/       Equipment images
│   │   ├── gallery/         Gallery images
│   │   └── services/        Service images
│   ├── brochures/           Equipment brochures
│   ├── favicon files
│   ├── robots.txt
│   └── site.webmanifest
│
├── src/
│   ├── assets/              Bundled website images
│   ├── components/          Reusable website components
│   │   ├── equipment/       Equipment detail layouts
│   │   └── ui/              Reusable UI components
│   ├── hooks/                Custom React hooks
│   ├── lib/                  Website content and data
│   ├── pages/                Route-level pages
│   ├── App.tsx               Application routes and providers
│   ├── main.tsx              Application entry point
│   ├── index.css             Global styles and theme variables
│   └── App.css               Additional styles
│
├── index.html                Main HTML document
├── package.json              Project scripts and dependencies
├── vite.config.ts            Vite configuration
├── tailwind.config.ts        Tailwind configuration
├── tsconfig*.json            TypeScript configuration
├── vercel.json               Deployment configuration
└── eslint.config.js          ESLint configuration
```

## 🧭 Website Pages

| Page | Route |
| --- | --- |
| 🏠 Home | `/` |
| ℹ️ About | `/about` |
| 🚜 Equipment | `/equipment` |
| 🔧 Equipment Details | `/equipment/:slug` |
| 🧰 Equipment Variants | `/equipment/:slug/:variantSlug` |
| 🛠️ Services | `/services` |
| 📋 Service Details | `/services/:slug` |
| 🖼️ Gallery | `/gallery` |
| 📩 Contact | `/contact` |
| 📝 Blog | `/blog` |
| 📖 Blog Article | `/blog/:slug` |

Unknown URLs are handled by a dedicated not-found page.

## 🗂️ Content Management

Website content is stored locally inside the project.

- `src/lib/data.ts` contains general website lists and blog content.
- `src/lib/equipmentData.ts` contains detailed equipment information.
- `src/lib/serviceData.ts` contains detailed service information.
- `src/lib/serviceImages.ts` contains service image mappings.
- `public/assets/` contains publicly served images and documents.
- `public/brochures/` contains downloadable equipment brochures.

When adding new equipment or services, keep the following synchronized:

- Display names
- URL slugs
- Images
- Related links
- Detail records
- Navigation links

## 🎨 Design System

The website uses a dark industrial visual style with accent colors and responsive layouts.

Main design features include:

- Dark and light themes
- Industrial color palette
- Responsive spacing and typography
- Reusable cards and buttons
- Scroll-based animations
- Mobile navigation
- Accessible interactive elements
- Consistent page layouts

Global styles and design variables are maintained in:

```text
src/index.css
tailwind.config.ts
```

## 🖼️ Assets

The project uses two types of assets:

### Bundled Assets

Images inside `src/assets/` are imported directly into React components and processed by Vite.

### Public Assets

Images and documents inside `public/assets/` and `public/brochures/` are accessed using public paths.

Example:

```tsx
<img src="/assets/equipment/excavator.webp" />
```

Keep existing filenames and paths stable when replacing assets.

## 🚀 Local Development

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The development server runs on the port configured in `vite.config.ts`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## 🌐 Deployment

The project is configured for deployment on Vercel.

The production build:

```text
npm run build
```

generates the website output inside:

```text
dist/
```

Because the application uses client-side routing, the hosting platform should serve the main application page for nested routes.

## 🔐 Privacy and Security

This README intentionally does not include:

- Private contact details
- Credentials or API keys
- Form service identifiers
- Private business information
- Internal deployment secrets
- Customer information
- Server or database credentials

Sensitive values should be stored securely and should never be committed to the repository.

## 🧪 Testing

There is currently no dedicated automated test suite in the project.

Before publishing changes, manually verify:

- Homepage navigation
- Equipment pages
- Service pages
- Blog pages
- Contact form
- Mobile layout
- Theme switcher
- Download links
- Direct access to nested routes
- Production build

## 📝 Maintenance Guidelines

- Keep URL slugs stable.
- Reuse existing components where possible.
- Store repeated content in the data files.
- Keep image paths synchronized with the content records.
- Avoid placing private information directly in source files.
- Use environment variables for future secrets or private configuration.
- Keep dependency management consistent.
- Do not edit generated folders such as `node_modules/` or `dist/`.

## 📄 License

This project is proprietary website software.  
All branding, content, images, documents, and business materials belong to their respective owners.
