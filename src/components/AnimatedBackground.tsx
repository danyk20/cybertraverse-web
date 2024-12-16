import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const elements = [
    { size: "25vw", color: "bg-primary/20", delay: 0 },
    { size: "35vw", color: "bg-blue-500/15", delay: 5 },
    { size: "30vw", color: "bg-purple-500/15", delay: 2 },
    { size: "40vw", color: "bg-primary/15", delay: 8 },
    { size: "28vw", color: "bg-orange-500/15", delay: 3 },
    { size: "32vw", color: "bg-pink-500/15", delay: 6 }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {elements.map((element, i) => (
        <motion.div
          key={i}
          className={`absolute blur-3xl ${element.color} rounded-full`}
          style={{
            width: element.size,
            height: element.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, Math.random() * 300 - 150, 0],
            y: [0, Math.random() * 300 - 150, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
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