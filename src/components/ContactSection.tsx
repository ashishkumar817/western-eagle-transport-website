import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 50 123 4567", "+971 4 123 4567"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@westerneagle.ae", "support@westerneagle.ae"],
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Dubai, United Arab Emirates"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 6:00 PM"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-heading uppercase tracking-[0.2em] mb-2">
            Get in Touch
          </p>
          <h2 className="heading-secondary text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our equipment or services? Reach out to us and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="heading-tertiary text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted border-border"
                  />
                </div>
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-muted border-border"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-muted border-border resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="btn-primary w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card p-6 rounded-lg border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground uppercase tracking-wide mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-lg border border-border overflow-hidden h-64">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
