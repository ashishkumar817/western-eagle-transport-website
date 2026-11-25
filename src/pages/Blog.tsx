import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { blogPosts } from "@/lib/data";
import { format } from "date-fns";

const Blog = () => {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Heavy Equipment Rental Insights",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://westerneagletransportllc.com/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Heavy Equipment Rental Blog UAE | Western Eagle Transport</title>
        <meta name="description" content="Practical guides and expert insights on heavy equipment rental, forklifts, cranes, loaders, maintenance, and construction projects in Abu Dhabi and the UAE." />
        <meta name="keywords" content="heavy equipment rental blog UAE, construction equipment tips Abu Dhabi, forklift rental advice" />
        <meta property="og:title" content="Heavy Equipment Rental Blog UAE | Western Eagle Transport" />
        <meta property="og:description" content="Practical guides and expert insights on heavy equipment rental and construction machinery in Abu Dhabi and the UAE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://westerneagletransportllc.com/blog" />
        <link rel="canonical" href="https://westerneagletransportllc.com/blog" />
        <script type="application/ld+json">{JSON.stringify(blogListSchema)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-28">
          {/* Hero Section */}
          <section className="bg-secondary py-16 md:py-20">
            <div className="container-custom px-4 text-center">
              <span className="inline-block text-primary text-sm font-medium mb-3">Our Blog</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                Latest News & Insights
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest news, tips, and insights about heavy equipment rental and transport services.
              </p>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="section-padding">
            <div className="container-custom px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-gold transition-all duration-300 group"
                  >
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
                      </div>
                      <h2 className="font-heading text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary font-semibold hover:underline"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
