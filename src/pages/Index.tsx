import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Interests />
      <Contact />
    </div>
  );
};

export default Index;