import AboutUs from "@/components/AboutUs";
import FooterSection from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import News from "@/components/News";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <AboutUs />
      <News/>
      <FooterSection />
    </main>
  );
}
