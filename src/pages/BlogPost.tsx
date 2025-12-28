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

  return (
    <>
      <Helmet>
        <title>{post.title} | Western Eagle Transport Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content="heavy equipment rental, construction equipment UAE, equipment tips, Abu Dhabi" />
        <link rel="canonical" href={`https://westerneagle.ae/blog/${slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
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
                  className="w-full h-full object-cover"
                />
              </div>

              <header className="mb-8">
                <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded mb-4">
                  Blog Post
                </span>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {post.excerpt}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
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
                      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                        {section.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="text-lg leading-relaxed">
                            <span className="text-primary">•</span> {bullet}
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
