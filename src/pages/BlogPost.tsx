import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { blogPosts } from "@/lib/data";

const phoneNumber = "9108291462";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

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
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
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
                    <a href={`tel:+91${phoneNumber}`}>
                      <Phone className="w-4 h-4 mr-2" /> Call Now
                    </a>
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                    <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
