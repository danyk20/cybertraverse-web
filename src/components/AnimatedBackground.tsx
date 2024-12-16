import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const elements = [
    { size: "15vw", color: "bg-primary/10", delay: 0 },
    { size: "25vw", color: "bg-blue-500/5", delay: 5 },
    { size: "20vw", color: "bg-purple-500/5", delay: 2 },
    { size: "30vw", color: "bg-primary/5", delay: 8 },
    { size: "18vw", color: "bg-orange-500/5", delay: 3 },
    { size: "22vw", color: "bg-pink-500/5", delay: 6 }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {elements.map((element, i) => (
        <motion.div
          key={i}
          className={`absolute blur-xl ${element.color} rounded-full`}
          style={{
            width: element.size,
            height: element.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;