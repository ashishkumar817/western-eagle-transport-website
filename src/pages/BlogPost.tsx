import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowLeft, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { blogPosts } from "@/lib/data";
import { format } from "date-fns";

const phoneNumber = "971505567467";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  
  // Get recent posts excluding current post
  const recentPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 text-center">
          <h1 className="heading-secondary text-foreground">Blog Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline mt-4 inline-block">
            Go back to blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");
  const pageUrl = `https://westerneagletransportllc.com/blog/${post.slug}`;
  const imageUrl = `https://westerneagletransportllc.com${post.image}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: `${post.date}T00:00:00+04:00`,
    author: {
      "@type": "Organization",
      name: "Western Eagle Transport LLC",
      url: "https://westerneagletransportllc.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Western Eagle Transport LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://westerneagletransportllc.com/assets/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://westerneagletransportllc.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://westerneagletransportllc.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Western Eagle Transport</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.title}, heavy equipment rental UAE, construction equipment Abu Dhabi`} />
        <meta name="author" content="Western Eagle Transport LLC" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={post.title} />
        <meta property="article:published_time" content={`${post.date}T00:00:00+04:00`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={imageUrl} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-28">
          <article className="section-padding">
            <div className="container-custom px-4 max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
              </Link>
              
              {/* Featured Image */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  width="1200"
                  height="675"
                  className="w-full h-full object-cover"
                />
              </div>

              <header className="mb-8">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded mb-4">
                  Blog Post
                </span>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{formattedDate}</time>
                  <span aria-hidden="true">·</span>
                  <span>By Western Eagle Transport LLC</span>
                </div>
              </header>

              <div className="prose prose-invert max-w-none">
                {/* Intro Paragraphs */}
                {post.content.intro.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
                
                {/* Content Sections */}
                {post.content.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mt-10">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    
                    {section.paragraphs?.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground text-lg leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                    
                    {section.bullets && (
                      <ul className="space-y-2 mb-4">
                        {section.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2 text-lg text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Conclusion */}
                <div className="mt-10 pt-6 border-t border-border">
                  {post.content.conclusion.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-card p-8 rounded-lg border border-border mt-12 text-center">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Need Equipment for Your Project?</h3>
                <p className="text-muted-foreground mb-6">Contact us for a free consultation and quote.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="btn-primary" asChild>
                    <a href={`tel:+${phoneNumber}`}>
                      <Phone className="w-4 h-4 mr-2" /> Call Now
                    </a>
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                    <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Recent Posts Section */}
              {recentPosts.length > 0 && (
                <div className="mt-16">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-8">Recent Posts</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {recentPosts.map((recentPost) => (
                      <Link 
                        key={recentPost.id} 
                        to={`/blog/${recentPost.slug}`}
                        className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
                      >
                        <div className="aspect-video bg-muted overflow-hidden">
                          <img
                            src={recentPost.image}
                            alt={recentPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                            <Calendar className="w-3 h-3" />
                            {format(new Date(recentPost.date), "MMMM d, yyyy")}
                          </div>
                          <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {recentPost.title}
                          </h4>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                            {recentPost.excerpt}
                          </p>
                          <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
