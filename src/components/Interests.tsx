import { Shield, TrendingUp, Plane } from "lucide-react";
import InterestCard from "./InterestCard";

const Interests = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InterestCard
            title="Cybersecurity"
            description="Protecting digital assets and ensuring data privacy through advanced security measures."
            icon={Shield}
            delay={0.2}
          />
          <InterestCard
            title="Finance"
            description="Analyzing market trends and exploring the intersection of technology and finance."
            icon={TrendingUp}
            delay={0.4}
          />
          <InterestCard
            title="Travel"
            description="Discovering new places and sharing experiences through the lens of technology."
            icon={Plane}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Interests;