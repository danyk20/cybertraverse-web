import BlogPostLayout from "@/components/BlogPostLayout";
import { Shield } from "lucide-react";

const Cybersecurity = () => {
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
      title="Cybersecurity Insights"
      icon={<Shield className="w-16 h-16 text-primary" />}
      articles={articles}
      content={
        <>
          <h2>The Growing Importance of Cybersecurity</h2>
          <p>
            In today's interconnected world, cybersecurity has become more critical than ever.
            As organizations continue to digitize their operations and move to cloud-based solutions,
            the attack surface for potential threats continues to expand.
          </p>

          <h2>Key Areas of Focus</h2>
          <ul>
            <li>Network Security</li>
            <li>Cloud Security</li>
            <li>Application Security</li>
            <li>IoT Security</li>
          </ul>

          <h2>Best Practices</h2>
          <p>
            Implementing robust cybersecurity measures requires a multi-layered approach:
          </p>
          <ul>
            <li>Regular security audits</li>
            <li>Employee training programs</li>
            <li>Incident response planning</li>
            <li>Continuous monitoring</li>
          </ul>
        </>
      }
    />
  );
};

export default Cybersecurity;