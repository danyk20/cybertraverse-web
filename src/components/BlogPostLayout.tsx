import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BlogPostLayoutProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

const BlogPostLayout = ({ title, content, icon }: BlogPostLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </button>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            {icon}
          </div>
          
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            {title}
          </h1>
          
          <div className="prose prose-invert prose-green max-w-none">
            {content}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPostLayout;