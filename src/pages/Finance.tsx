import BlogPostLayout from "@/components/BlogPostLayout";
import {TrendingUp} from "lucide-react";
import invest from "/invest.jpg";

const Finance = () => {
    const articles = [
        {
            title: "Start investing ",
            date: "TBA",
            description: "Will be published soon",
            imageUrl: `${invest}`,
        },
    ];

    return (
        <BlogPostLayout
            title="Financial Technology Trends"
            icon={<TrendingUp className="w-16 h-16 text-primary"/>}
            articles={articles}
            content={
                <>
                    <h2>Financial education is crucial, even for those with high salaries, as understanding how money
                        works can greatly influence long-term wealth-building and financial security. In recent years,
                        the finance field has evolved rapidly, with new investment opportunities, technologies, and
                        markets emerging constantly. This blog is one of the areas I’m most passionate about, where I
                        will share insights and lessons learned from my own experiences, rather than offering quick-fix
                        schemes or promises of becoming a millionaire overnight. My focus will be on helping you become
                        more aware of the various options and risks in the financial world, guiding you towards making
                        informed decisions that support a stable financial future.</h2>
                </>
            }
        />
    );
};

export default Finance;
