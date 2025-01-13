import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ErrorBlog from './ErrorBlog';
import Contact from "@/components/Contact.tsx";

const TravelBlogPost = () => {
  const { id } = useParams();
  const [BlogComponent, setBlogComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const Blog = await import(`./travel/${id}.tsx`);
        setBlogComponent(() => Blog.default);
      } catch (error) {
        console.error(`Error loading blog post travel/${id}:`, error);
        setBlogComponent(() => () => <ErrorBlog redirectPath="/travel"  category="Travel" />);
      }
    };

    loadBlog();
  }, [id]);

  if (!BlogComponent) {
    return (
        <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center">
          <div className="animate-pulse text-primary">Loading...</div>
        </div>
    );
  }

  return (
      <div>
        <BlogComponent/>
        <Contact></Contact>
      </div>
  );
};

export default TravelBlogPost;
