import BlogPostLayout from "@/components/BlogPostLayout";
import { TrendingUp } from "lucide-react";

const Finance = () => {
  return (
    <BlogPostLayout
      title="Financial Technology Trends"
      icon={<TrendingUp className="w-16 h-16 text-primary" />}
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