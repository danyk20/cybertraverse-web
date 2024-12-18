import { Shield, TrendingUp, Plane } from "lucide-react";
import InterestCard from "./InterestCard";
import Experience from "@/components/Experience.tsx";
import background from "/background.mp4";

const Interests = () => {
  return (
      <section className="relative w-full h-full">
        {/* Background video */}
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={background}
            autoPlay
            loop
            muted
            playsInline
        />

        {/* Overlay content */}
        <div className="relative py-4">
            <Experience />
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white rounded-full">
                <p className="rounded-full inline-block backdrop-blur-sm p-2">
                    Areas of Interest
                </p>

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
        </div>
      </section>
  );
};

export default Interests;
