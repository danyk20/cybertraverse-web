import BlogPostLayout from "@/components/BlogPostLayout";
import {Shield} from "lucide-react";
import secure_web from "/secure_web.jpg";
import { useNavigate } from "react-router-dom";

const Cybersecurity = () => {
    const navigate = useNavigate();
    const articles = [
        {
            title: "How I Built a Secure Website for Free: My Step-by-Step Journey",
            date: "January 10, 2025",
            description: "After months of work, I'm sharing how you can build and deploy a secure website in minutes using AI—at zero cost!",
            imageUrl: `${secure_web}`,
        },
    ];

    return (
        <BlogPostLayout
            title="Cybersecurity Insights"
            icon={<Shield className="w-16 h-16 text-primary"/>}
            articles={articles}
            content={
                <>
                    <h2>In today's digital world, cybersecurity has become an essential part of protecting personal,
                        corporate, and governmental data from increasingly sophisticated threats. As technology evolves,
                        the importance of cybersecurity grows every day, requiring constant vigilance and adaptation to
                        safeguard against cyberattacks. This blog will not only focus on cybersecurity but also explore
                        related fields within the tech industry, such as software engineering, data privacy, and more.
                        My goal is to share my knowledge in an accessible way—writing simply enough for beginners to
                        grasp the concepts, while maintaining a level of professionalism that will also help seasoned
                        professionals enhance their skill set.</h2>
                </>
            }
            onReadMore={() => navigate("/cybersecurity/blog/1")}
        />
    );
};

export default Cybersecurity;