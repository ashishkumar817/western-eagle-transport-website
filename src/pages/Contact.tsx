import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet-async";

const Contact = () => (
  <>
    <Helmet>
      <title>Contact Western Eagle Transport LLC | Abu Dhabi</title>
      <meta
        name="description"
        content="Contact Western Eagle Transport Company for equipment rental in Abu Dhabi and UAE."
      />
      <link
        rel="canonical"
        href="https://westerneagletransportllc.com/contact"
      />
    </Helmet>

    <Header />
    <main>
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Contact;
