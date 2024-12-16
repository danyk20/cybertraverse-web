import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <Hero />
      <Interests />
      <Contact />
    </div>
  );
};

export default Index;