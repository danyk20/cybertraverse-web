import BlogPostLayout from "@/components/BlogPostLayout";
import { TrendingUp } from "lucide-react";

const Finance = () => {
  const articles = [
    {
      title: "The Rise of AI in Cybersecurity",
      date: "April 15, 2024",
      description: "How artificial intelligence is revolutionizing threat detection and response in cybersecurity.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    },
    {
      title: "Zero Trust Architecture",
      date: "April 12, 2024",
      description: "Understanding the principles and implementation of Zero Trust security models.",
      imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80",
    },
    {
      title: "Blockchain Security",
      date: "April 10, 2024",
      description: "Exploring security challenges and solutions in blockchain technology.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <BlogPostLayout
      title="Financial Technology Trends"
      icon={<TrendingUp className="w-16 h-16 text-primary" />}
      articles={articles}
      content={
        <>
          <h2>The Evolution of Financial Technology</h2>
          <p>
            Financial technology has transformed how we interact with money and financial services.
            From mobile banking to cryptocurrency, the landscape continues to evolve rapidly.
          </p>

          <h2>Key Innovations</h2>
          <ul>
            <li>Blockchain Technology</li>
            <li>Digital Banking</li>
            <li>Automated Trading</li>
            <li>Personal Finance Apps</li>
          </ul>

          <h2>Future Trends</h2>
          <p>
            The future of finance is being shaped by several emerging technologies:
          </p>
          <ul>
            <li>Decentralized Finance (DeFi)</li>
            <li>AI-powered Financial Advisory</li>
            <li>Open Banking APIs</li>
            <li>Digital Currencies</li>
          </ul>
        </>
      }
    />
  );
};

export default Finance;
