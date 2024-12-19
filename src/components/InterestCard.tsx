import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface InterestCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
  route: string;
}

const InterestCard = ({ title, description, icon: Icon, delay, route }: InterestCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card p-6 rounded-lg hover:shadow-lg hover:shadow-primary/80 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(route)}
    >
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default InterestCard;