import AboutUs from "@/components/AboutUs";
import ContactComponent from "@/components/Contact";
import FAQComponent from "@/components/FAQ";
import FooterSection from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import ServiceComponent from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <News/>
      <AboutUs />
      <ServiceComponent/>
      <Industries/>
      <FAQComponent />
      <ContactComponent/>
      <FooterSection />
    </main>
  );
}
