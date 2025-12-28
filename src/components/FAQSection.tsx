import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Do you provide heavy equipment rental across the UAE?",
    answer:
      "Yes, Western Eagle Transport Company provides heavy equipment rental services across Dubai, Abu Dhabi, Sharjah, and other UAE locations.",
  },
  {
    question: "Is Western Eagle Transport Company ICV certified?",
    answer:
      "Yes, we are an ICV-certified company, compliant with UAE government standards and procurement requirements.",
  },
  {
    question: "Do you provide operators with the equipment?",
    answer:
      "Yes, we supply skilled and certified operators along with our heavy equipment to ensure safe and efficient project execution.",
  },
  {
    question: "What types of equipment do you offer for rent?",
    answer:
      "We offer forklifts, excavators, cranes, boom lifts, scissor lifts, generators, skid steer loaders, backhoe loaders, and passenger buses.",
  },
  {
    question: "How can I request a quote for equipment rental?",
    answer:
      "You can request a quote through our website contact form, WhatsApp, or by calling us directly.",
  },
];

const FAQSection = () => {
  // Generate FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-padding bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <div className="container-custom px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-label">
            Got Questions?
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our heavy equipment rental services in the UAE.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="font-heading text-foreground font-medium">
                      {faq.question}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
