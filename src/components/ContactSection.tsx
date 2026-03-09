import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    equipment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xregqpap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          equipment: formData.equipment,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", equipment: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
  id="contact"
  className="pt-24 pb-12 sm:pt-32 sm:pb-20 bg-secondary"
>

      <div className="container-custom px-6">
        {/* Header */}
       <div className="text-center mb-10 sm:mb-14">
          <p className="section-label">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground mb-3">
  Contact Us
</h2>

<p className="text-muted-foreground italic text-sm sm:text-base">

            Have questions about our equipment or services? Reach out to us today.
          </p>
        </div>

       <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-card p-6 sm:p-8 rounded-lg border border-border order-1 lg:order-none">

            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="heading-tertiary text-foreground">
                Get Enquiry
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted border-border"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+971 00 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Equipment Interest
                  </label>
                  <Input
                    name="equipment"
                    placeholder="e.g., Excavator, Crane"
                    value={formData.equipment}
                    onChange={handleChange}
                    className="bg-muted border-border"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-muted border-border resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6 order-2 lg:order-none">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-card p-5 rounded-lg border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm text-muted-foreground mb-1">Address</h4>
                  <p className="text-foreground text-sm leading-relaxed">
                    Mussafah-44, Building ELITE Business Zone Investment, Office No.58, Abu Dhabi - U.A.E
                  </p>
                </div>
              </div>

              {/* Phone */}
<div className="bg-card p-5 rounded-lg border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm text-muted-foreground mb-1">Phone</h4>
                  <a href="tel:+971505567467" className="block text-foreground text-sm hover:text-primary transition-colors">
                    +971 50 556 7467
                  </a>
                  <a href="tel:+971565881099" className="block text-foreground text-sm hover:text-primary transition-colors">
                    +971 56 588 1099
                  </a>
                </div>
              </div>

              {/* Email */}
<div className="bg-card p-5 rounded-lg border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm text-muted-foreground mb-1">Email</h4>
                  <a href="mailto:sales@westerneagletransportllc.com" className="block text-foreground text-sm hover:text-primary transition-colors break-all">
                    sales@westerneagletransportllc.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
<div className="bg-card p-5 rounded-lg border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm text-muted-foreground mb-1">Working Hours</h4>
                  <p className="text-foreground text-sm">
                    Mon - Sat 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
              <div>
                <div className="flex items-center gap-2 mb-4 justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="heading-tertiary text-foreground">Our Location</h3>
                </div>

                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.0258213263446!2d54.471253875354506!3d24.345593178268913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e405eeee92e83%3A0xec5e3e72ef2bb44c!2sElite%20Business%20Zone%20Investment!5e0!3m2!1sen!2sin!4v1766849313822!5m2!1sen!2sin"
                    className="w-full h-64 sm:h-80"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Western Eagle Transport Location"
                  />
                </div>
              </div>

          </div>
        </div>
      </div>
      <center><h2>Contact Heavy Equipment Rental Company in Abu Dhabi</h2></center>

    </section>
  );
};

export default ContactSection;
