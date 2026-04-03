import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EquipmentSection from "@/components/EquipmentSection";
import { Helmet } from "react-helmet-async";

const Equipment = () => (
  <>
    <Helmet>
      <title>Equipment Rental in Abu Dhabi | Western Eagle Transport</title>
      <meta
        name="description"
        content="Forklift, wheel loader, manlift, excavator, crane and heavy equipment rental in Abu Dhabi and across UAE."
      />
      <link
        rel="canonical"
        href="https://westerneagletransportllc.com/equipment"
      />
    </Helmet>

    <Header />
    <main>
      <EquipmentSection />
    </main>
    <Footer />
  </>
);

export default Equipment;
