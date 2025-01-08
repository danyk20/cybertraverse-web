import BlogPostLayout from "@/components/BlogPostLayout";
import { Shield } from "lucide-react";
import secure_web from "/secure_web.jpg";

const Cybersecurity = () => {
  const articles = [
    {
      title: "How I Built a Secure Website for Free: My Step-by-Step Journey",
      date: "January 10, 2025",
      description: "After months of work, I’m sharing how you can build and deploy a secure website in minutes using AI—at zero cost!",
      imageUrl: `${secure_web}`,
    },
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