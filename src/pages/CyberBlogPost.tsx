import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, AlertCircle } from "lucide-react";

const CyberBlogPost = () => {
  const { id } = useParams();
  const [BlogComponent, setBlogComponent] = useState<React.FC | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const loadBlog = async () => {
      try {
        // Dynamically import the blog component based on ID
        const Blog = await import(`./cyber/${id}.tsx`);
        setBlogComponent(() => Blog.default);
      } catch (error) {
        console.error(`Error loading blog post cyber/${id}:`, error);
        setBlogComponent(() => () => (
          <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md w-full"
            >
              <div className="bg-card rounded-lg p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#2A303C] flex items-center justify-center"
                >
                  <AlertCircle className="w-10 h-10 text-primary" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-4">Oops! Page Not Available</h2>
                <p className="text-gray-400 mb-8">
                  This blog post is not publicly available at the moment. Please check back later or explore our other articles.
                </p>
                <button
                  onClick={() => navigate("/cybersecurity")}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Cybersecurity
                </button>
              </div>
            </motion.div>
          </div>
        ));
      }
    };

    loadBlog();
  }, [id, navigate]);

  if (!BlogComponent) {
    return (
      <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  return <BlogComponent />;
};

export default CyberBlogPost;