import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface BlogPostLayoutProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  articles: {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
  }[];
}

const BlogPostLayout = ({ title, content, icon, articles }: BlogPostLayoutProps) => {
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
        
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            {icon}
          </div>
          
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            {title}
          </h1>
          
          <div className="prose prose-invert prose-green max-w-none mb-12">
            {content}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full bg-card hover:bg-card/80 transition-colors cursor-pointer">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-primary text-sm mb-2">{article.date}</div>
                    <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="text-primary hover:text-primary/80 transition-colors text-sm">
                      Read More →
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPostLayout;
