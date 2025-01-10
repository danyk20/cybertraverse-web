import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

const TravelBlogPost = () => {
    const {id} = useParams();
    const [BlogComponent, setBlogComponent] = useState<React.FC | null>(null);
    const Loading = () => <div>Loading...</div>;

    useEffect(() => {
        const loadBlog = async () => {
            try {
                // Dynamically import the blog component based on ID
                const Blog = await import(`./travel/${id}.tsx`);
                setBlogComponent(() => Blog.default);
            } catch (error) {
                console.error(`Error loading blog post travel/${id}:`, error);
                setBlogComponent(() => () => <div>Blog post not found.</div>);
            }
        };

        loadBlog();
    }, [id]);

    if (!BlogComponent) return <Loading/>;

    return <BlogComponent/>;
};

export default TravelBlogPost;
