import BlogPostLayout from "@/components/BlogPostLayout";
import { Plane } from "lucide-react";
import hidden_gems from "/Hidden_Gems.jpg";

const Travel = () => {
  const articles = [
    {
      title: "Hidden Gems in Europe",
      date: "TBA",
      description: "Will be published soon",
      imageUrl: `${hidden_gems}`,
    },
  ];
  return (
    <BlogPostLayout
      title="Travel & Technology"
      icon={<Plane className="w-16 h-16 text-primary" />}
      articles={articles}
      content={
        <>
          <h2>The Digital Transformation of Travel</h2>
          <p>
            Technology has revolutionized how we plan, book, and experience travel.
            From virtual reality tours to AI-powered travel assistants, the future of travel
            is becoming increasingly digital.
          </p>

          <h2>Modern Travel Tools</h2>
          <ul>
            <li>Smart Booking Platforms</li>
            <li>Virtual Tours</li>
            <li>Travel Apps</li>
            <li>Digital Payment Solutions</li>
          </ul>

          <h2>Future of Travel</h2>
          <p>
            Emerging technologies are shaping the future of travel:
          </p>
          <ul>
            <li>Augmented Reality Guides</li>
            <li>Sustainable Travel Tech</li>
            <li>Contactless Solutions</li>
            <li>Personalized Experiences</li>
          </ul>
        </>
      }
    />
  );
};

export default Travel;
