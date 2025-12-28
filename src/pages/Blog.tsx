import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { blogPosts } from "@/lib/data";
import { format } from "date-fns";

const Blog = () => {
  const todayDate = format(new Date(), "MMMM d, yyyy");

  return (
    <>
      <Helmet>
        <title>Blog | Heavy Equipment Rental Insights | Western Eagle Transport</title>
        <meta name="description" content="Read the latest articles on heavy equipment rental, construction machinery, and industry insights from Western Eagle Transport Company UAE." />
        <meta name="keywords" content="heavy equipment blog, construction machinery articles, equipment rental tips UAE" />
        <link rel="canonical" href="https://westerneagle.ae/blog" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main className="pt-28">
          {/* Hero Section */}
          <section className="bg-secondary py-16 md:py-20">
            <div className="container-custom px-4 text-center">
              <h1 className="heading-primary text-foreground mb-4">Our Blog</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry insights, equipment guides, and expert tips for construction professionals.
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
                        {todayDate}
                      </div>
                      <h2 className="heading-tertiary text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
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
