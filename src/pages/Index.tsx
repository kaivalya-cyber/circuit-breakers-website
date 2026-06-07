import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TeamMembers from "@/components/TeamMembers";
import Achievements from "@/components/Achievements";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <TeamMembers />
      <Achievements />
      <Stats />
      <Gallery />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
