import {motion} from "framer-motion";
import hero from "/hero.png"

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Daniel Košč</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Scaling new heights in cybersecurity and software development, just as I conquered Alpine peaks, I thrive on tackling the toughest challenges. With experience spanning government, private, and nonprofit sectors across multiple countries, I bring a global perspective to innovative solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
