import { Button } from "@/components/ui/button";

const SupportCTA = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container-custom px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-wide text-primary-foreground mb-2">
              We Help Industry Utilize Heavy Equipment More Efficiently
            </h2>
            <p className="text-primary-foreground/80">
              Get in touch with our team for quick support and customized rental solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-background bg-transparent text-background font-semibold hover:bg-background hover:text-primary"
              onClick={scrollToContact}
            >
              Get Quick Support
            </Button>
            <Button
              size="lg"
              className="bg-background text-primary font-semibold hover:bg-background/90"
              onClick={scrollToContact}
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportCTA;
