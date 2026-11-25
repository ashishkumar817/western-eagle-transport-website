import { Link } from "react-router-dom";
import { ArrowRight, Home, Phone, Truck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Western Eagle Transport LLC</title>
        <meta
          name="description"
          content="This page could not be found. Visit Western Eagle Transport for heavy equipment rental and services in Abu Dhabi."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 md:pt-20">
          <section className="flex min-h-[68vh] items-center bg-background py-20 sm:py-24">
            <div className="container-custom w-full px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-2 font-heading text-8xl font-bold leading-none tracking-tight text-primary sm:text-9xl">
                  404
                </div>
                <h1 className="mb-4 text-3xl font-heading font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Page Not Found
                </h1>
                <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                  Sorry, the page you’re looking for doesn’t exist or may have moved.
                </p>

                <div className="mt-14 flex flex-col justify-center gap-3 sm:mt-16 sm:flex-row">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/">
                      <Home className="mr-2 h-5 w-5" aria-hidden="true" />
                      Back to Home
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="group border-primary/50 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to="/equipment">
                      <Truck className="mr-2 h-5 w-5 text-primary group-hover:text-primary-foreground" aria-hidden="true" />
                      Browse Equipment
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:text-primary-foreground" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>

                <div className="mx-auto mt-12 flex max-w-lg items-center justify-center gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>Need help finding equipment?</span>
                  <Link to="/contact" className="font-medium text-primary transition-colors hover:text-primary/80">
                    Contact our team
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
