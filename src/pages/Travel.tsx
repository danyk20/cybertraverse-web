import BlogPostLayout from "@/components/BlogPostLayout";
import {Plane} from "lucide-react";
import hidden_gems from "/Hidden_Gems.jpg";

const Travel = () => {
    const articles = [
        {
            id: 1,
            title: "Hidden Gems in Europe",
            date: "TBA",
            description: "Will be published soon",
            imageUrl: `${hidden_gems}`,
        },
    ];
    return (
        <BlogPostLayout
            title="Travel & Explore"
            icon={<Plane className="w-16 h-16 text-primary"/>}
            articles={articles}
            category="travel"
            content={
                <>
                    <h2>Traveling is one of the most enriching experiences, offering a chance to relax, explore new
                        cultures, and recharge. Even with a limited budget, there are countless ways to make the most of
                        your trips and discover hidden gems away from the typical tourist spots. In this category, I’ll
                        be sharing my best tips on how to enjoy traveling without breaking the bank, as well as the
                        benefits of visiting less popular destinations. For me, traveling is the perfect way to unwind
                        after a busy work period, and I’m excited to share these personal experiences and insights with
                        you, hoping they inspire you to embark on your own adventures.</h2>
                </>
            }
        />
    );
};

export default Travel;
