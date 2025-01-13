import React from 'react';
import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cyber1 = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#1A1F2C] text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="container mx-auto px-4 py-8"
            >
                <button
                    onClick={() => navigate("/cybersecurity")}
                    className="flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2"/> Back to Cybersecurity
                </button>

                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                        <Shield className="w-16 h-16 text-primary"/>
                    </div>

                    <div className="prose prose-invert prose-green max-w-none">
                        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                            How I Built a Secure Website for Free: My Step-by-Step Journey
                        </h1>

                        <div className="text-center text-primary mb-8">January 10, 2025</div>

                        <img
                            src="/secure_web.jpg"
                            alt="Secure Website Development"
                            className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-lg"
                        />

                        <p className="text-lg mb-6 leading-relaxed">
                            In the digital age, having a personal website can be a powerful tool to showcase your
                            skills, portfolio, or just express your creativity. However, the journey from idea to a live
                            website is often riddled with challenges. Here's my story of perseverance, experimentation,
                            and eventual success in creating my personal website, and how you can do it too.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary border-b border-primary/20 pb-2">
                            1. The Beginning of the Journey
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Back in 2017, I had my first attempt at building a website. With enthusiasm, I dived into
                            learning the basics of web development. Unfortunately, it quickly became clear that my
                            skills weren't up to the standard I wanted, and the process wasn't as enjoyable as I had
                            hoped. After a few months, I shelved the project, thinking perhaps web development wasn't
                            for me.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary border-b border-primary/20 pb-2">
                            2. Learning and Growing Practices
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            Over time, I focused on improving my programming skills by working on various projects.
                            Throughout this process, the idea of creating a website was always on my mind. Each time I
                            learned something new, I tried to use that knowledge to build a better website. I worked
                            with several technologies, including:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li className="text-gray-300">Python & Django</li>
                            <li className="text-gray-300">Python & Flask</li>
                            <li className="text-gray-300">Java & Spring Boot</li>
                            <li className="text-gray-300">HTML & CSS & php & JavaScript</li>
                            <li className="text-gray-300">Angular</li>
                            <li className="text-gray-300">React</li>
                        </ul>

                        <div className="bg-card/50 p-6 rounded-lg mb-8 shadow-lg border border-primary/20">
                            <p className="text-sm text-gray-400 mb-2">Pro Tip:</p>
                            <p className="italic text-gray-300">
                                "When learning web development, focus on one technology stack at a time. Master the basics before moving on to more complex frameworks."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-primary border-b border-primary/20 pb-2">
                            3. Code Implementation Example
                        </h2>
                        <p className="mb-4">Here's an example of how to set up a basic React component:</p>
                        <pre className="bg-[#2A303C] p-4 rounded-lg overflow-x-auto mb-6 shadow-lg border border-primary/20">
                            <code className="text-sm font-mono text-gray-300">
{`import React from 'react';

const SecureComponent = () => {
    const [isSecure, setIsSecure] = useState(false);
    
    useEffect(() => {
        // Check security implementation
        checkSecurity().then(result => {
            setIsSecure(result);
        });
    }, []);

    return (
        <div className="secure-wrapper">
            {isSecure ? (
                <p>Your connection is secure</p>
            ) : (
                <p>Warning: Insecure connection</p>
            )}
        </div>
    );
};

export default SecureComponent;`}
                            </code>
                        </pre>

                        <h2 className="text-2xl font-bold mb-4 text-primary border-b border-primary/20 pb-2">
                            4. Implementation Steps
                        </h2>
                        <ol className="list-decimal pl-6 mb-6 space-y-4">
                            <li className="text-gray-300">
                                <span className="font-semibold text-primary">Setup Development Environment</span>
                                <p className="mt-2">Install Node.js, npm, and your preferred code editor.</p>
                            </li>
                            <li className="text-gray-300">
                                <span className="font-semibold text-primary">Create React Project</span>
                                <p className="mt-2">Use Create React App or Vite to bootstrap your project.</p>
                            </li>
                            <li className="text-gray-300">
                                <span className="font-semibold text-primary">Add Security Measures</span>
                                <p className="mt-2">Implement HTTPS, CSP headers, and XSS protection.</p>
                            </li>
                        </ol>

                        <div className="flex items-center gap-4 my-8 p-6 bg-card/50 rounded-lg border border-primary/20">
                            <div className="flex-shrink-0">
                                <Shield className="w-12 h-12 text-primary"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">Security First Approach</h3>
                                <p className="text-gray-300">
                                    Always prioritize security in your development process. It's easier to implement security measures from the start than to add them later.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-primary border-b border-primary/20 pb-2">
                            5. Useful Resources
                        </h2>
                        <ul className="space-y-2 mb-8">
                            <li>
                                <a 
                                    href="https://reactjs.org" 
                                    className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    React Documentation →
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://nodejs.org" 
                                    className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Node.js Official Website →
                                </a>
                            </li>
                        </ul>

                        <div className="bg-card/50 p-6 rounded-lg mb-8 shadow-lg border border-primary/20">
                            <h3 className="text-lg font-semibold text-primary mb-4">Key Takeaways</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Start with a solid foundation in web development basics</li>
                                <li>• Focus on security from the beginning</li>
                                <li>• Use modern tools and frameworks</li>
                                <li>• Keep learning and improving</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Cyber1;