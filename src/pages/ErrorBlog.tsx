import React from 'react';
import { motion } from "framer-motion";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ErrorBlogProps {
    redirectPath: string;
    category: string;
}

const ErrorBlog: React.FC<ErrorBlogProps> = ({ redirectPath, category }) => {
    const navigate = useNavigate();

    return (
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
                        This blog post is not publicly available at the moment. Please check back later or explore my other articles.
                    </p>
                    <button
                        onClick={() => navigate(redirectPath)}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back to {category}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ErrorBlog;
