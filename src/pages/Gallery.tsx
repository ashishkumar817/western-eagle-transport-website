import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import { Helmet } from "react-helmet-async";

const Gallery = () => (
  <>
    <Helmet>
      <title>Project Gallery | Western Eagle Transport UAE</title>
      <meta
        name="description"
        content="View our heavy equipment fleet, forklifts, cranes and manlifts in action across UAE."
      />
      <link
        rel="canonical"
        href="https://westerneagletransportllc.com/gallery"
      />
    </Helmet>

    <Header />
    <main>
      <GallerySection />
    </main>
    <Footer />
  </>
);

export default Gallery;
