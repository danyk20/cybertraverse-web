import React from 'react';
import {motion} from "framer-motion";
import {ArrowLeft, Shield} from "lucide-react";
import {useNavigate} from "react-router-dom";

const Cyber1 = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#1A1F2C] text-white">
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
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
                            className="w-full h-[400px] object-cover rounded-lg mb-8"
                        />

                        <p className="text-lg mb-6">
                            In today's digital landscape, creating a secure website isn't just about aesthetics—it's
                            about
                            protecting your users' data and maintaining their trust. After months of research and
                            hands-on
                            experience, I've developed a comprehensive approach to building secure websites that won't
                            break
                            the bank.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">1. Choosing the Right Foundation</h2>
                        <p className="mb-6">
                            The first step in building a secure website is selecting the right tools and frameworks. I
                            opted
                            for React with TypeScript for its robust type checking and security features. Combined with
                            Vite
                            for blazing-fast development and TailwindCSS for styling, this stack provides a solid
                            foundation
                            for security-conscious development.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">2. Implementing Security Best
                            Practices</h2>
                        <p className="mb-6">
                            Security isn't an afterthought—it's built into every layer of the application. From input
                            validation to XSS prevention, here are some key practices I implemented:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>HTTPS enforcement using modern SSL/TLS protocols</li>
                            <li>Content Security Policy (CSP) headers</li>
                            <li>Regular security audits using automated tools</li>
                            <li>Secure session management</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4 text-primary">3. Leveraging Free Security Tools</h2>
                        <p className="mb-6">
                            You don't need a big budget to implement robust security. Here are some free tools I used:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Let's Encrypt for SSL certificates</li>
                            <li>OWASP ZAP for security testing</li>
                            <li>GitHub Security features</li>
                            <li>Snyk for dependency scanning</li>
                        </ul>

                        <div className="bg-card p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold mb-4 text-primary">Pro Tip</h3>
                            <p className="italic">
                                "Always keep your dependencies updated and regularly audit your npm packages. It's one
                                of
                                the simplest yet most effective security practices."
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-primary">4. Monitoring and Maintenance</h2>
                        <p className="mb-6">
                            Security is an ongoing process. I've set up automated monitoring and regular maintenance
                            schedules to ensure the website remains secure over time. This includes:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Weekly security scans</li>
                            <li>Automated dependency updates</li>
                            <li>Regular backups</li>
                            <li>Incident response planning</li>
                        </ul>

                        <p className="text-lg mb-6">
                            Building a secure website doesn't have to be expensive or overwhelming. By following these
                            steps
                            and utilizing free resources, you can create a robust, secure web application that protects
                            your
                            users and their data.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );

};

export default Cyber1;
