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
  const todayDate = format(new Date(), "MMMM d, yyyy");
  
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

  return (
    <>
      <Helmet>
        <title>{post.title} | Western Eagle Transport Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content="heavy equipment rental, construction equipment UAE, equipment tips" />
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
              
              <header className="mb-8">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {todayDate}
                </div>
                <h1 className="heading-primary text-foreground mb-4">{post.title}</h1>
                <p className="text-xl text-muted-foreground">{post.excerpt}</p>
              </header>

              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At Western Eagle Transport Company, we are committed to providing the best heavy equipment rental services in the UAE. With over 10 years of experience in the industry, we understand the unique needs of construction projects in Dubai, Abu Dhabi, and Sharjah.
                </p>
                
                <h2 className="heading-secondary text-foreground mt-8 mb-4">Why Choose Professional Equipment Rental</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Renting heavy equipment offers numerous advantages over purchasing. It allows you to access the latest machinery without the burden of maintenance, storage, and depreciation costs. Our fleet is regularly serviced and inspected to ensure optimal performance on your job site.
                </p>

                <h2 className="heading-secondary text-foreground mt-8 mb-4">Our Commitment to Quality</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Every piece of equipment in our fleet undergoes rigorous quality checks. We provide trained operators who are certified to handle complex machinery safely and efficiently. Our 24/7 support ensures that any issues are resolved quickly to minimize downtime.
                </p>

                <h2 className="heading-secondary text-foreground mt-8 mb-4">Get Started Today</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Whether you need excavators, cranes, forklifts, or any other heavy equipment, Western Eagle Transport Company has you covered. Contact us today for competitive rates and reliable service.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-card p-8 rounded-lg border border-border mt-12 text-center">
                <h3 className="heading-tertiary text-foreground mb-4">Need Equipment for Your Project?</h3>
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
                  <h3 className="heading-secondary text-foreground mb-8">Recent Posts</h3>
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
                            {todayDate}
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
