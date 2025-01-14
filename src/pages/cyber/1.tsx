import React from 'react';
import {motion} from "framer-motion";
import {ArrowLeft, Home, Shield} from "lucide-react";
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
                <div className="sticky top-5">
                    <div className="flex justify-between">
                        <button
                            onClick={() => navigate("/cybersecurity")}
                            className="flex text-primary hover:text-primary/80 transition-colors rounded-full backdrop-blur-lg"
                        >
                            <ArrowLeft className="mr-2"/> Back to Cybersecurity
                        </button>

                        <button
                            onClick={() => navigate("/")}
                            className="flex text-primary hover:text-primary/80 transition-colors rounded-full backdrop-blur-lg"
                        >
                            <Home className="mr-2"/> Home
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                        <Shield className="w-16 h-16 text-primary"/>
                    </div>

                    <div className="prose prose-invert prose-green max-w-none">
                        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
                            How I Built a Secure Website for Free:
                        </h1>
                        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                            My Step-by-Step Journey
                        </h2>

                        <div className="text-center text-primary mb-8">January 13, 2025</div>

                        <img
                            src="/secure_web.jpg"
                            alt="Secure Website Development"
                            className="w-full h-[400px] object-cover rounded-lg mb-8"
                        />

                        <p className="text-lg mb-6">
                            In the digital age, having a personal website can be a powerful tool to showcase your
                            skills, portfolio, or just express your creativity. However, the journey from idea to a live
                            website is often riddled with challenges. Here’s my story of perseverance, experimentation,
                            and eventual success in creating my personal website, and how you can do it too.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">1. The Beginning of the Journey</h2>
                        <p className="mb-6">
                            Back in 2017, I had my first attempt at building a website. With enthusiasm, I dived into
                            learning the basics of web development. Unfortunately, it quickly became clear that my
                            skills weren’t up to the standard I wanted, and the process wasn’t as enjoyable as I had
                            hoped. After a few months, I shelved the project, thinking perhaps web development wasn’t
                            for me.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">2. Learning and Growing
                            Practices</h2>
                        <p className="mb-6">
                            Over time, I focused on improving my programming skills by working on various projects.
                            Throughout this process, the idea of creating a website was always on my mind. Each time I
                            learned something new, I tried to use that knowledge to build a better website. I worked
                            with several technologies, including:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Python & Django</li>
                            <li>Python & Flask</li>
                            <li>Java & Spring Boot</li>
                            <li>HTML & CSS & php & JavaScript</li>
                            <li>Angular</li>
                            <li>React</li>
                        </ul>
                        <p className="mb-6">
                            Despite trying different combinations of these technologies, I was never fully satisfied
                            with the results. None of the projects felt good enough to share publicly, which led me to
                            keep refining my skills and seeking better solutions. This ongoing journey has helped me
                            grow as a developer and motivated me to keep improving.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">3. Discovering Web Generators</h2>
                        <p className="mb-6">
                            In 2020, I explored web generator tools that allowed me to create websites using
                            pre-designed blocks, simplifying the development process. While these platforms were
                            appealing at first, they presented several significant drawbacks. Most notably, they were
                            typically paid services, and the free versions often included watermarks or advertisements
                            that were nearly impossible to remove. Additionally, the generated code was intentionally
                            obfuscated, making any further customization or extension extremely difficult.
                        </p>
                        <p className="mb-6">
                            From a cybersecurity perspective, these tools posed serious risks. Since the source code was
                            hidden, there was no way to verify the security of the website being deployed. This lack of
                            transparency made it impossible to ensure that the site was free from vulnerabilities or
                            malicious code. Furthermore, the reliance on third-party platforms raised concerns about
                            data privacy and control, as users had to trust that their sensitive information would be
                            handled securely without any clear way to confirm it. These issues ultimately made web
                            generator tools unsuitable for building a secure, reliable, and personalized website.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">4. The Game-Changer: Generative AI</h2>
                        <p className="mb-6">
                            The real breakthrough for me came with the advent of generative AI. At first, you might
                            assume that simply giving a prompt to a model like ChatGPT would instantly build a fully
                            functional website. However, that’s far from reality. While AI has made tremendous strides,
                            the idea of an AI generating a complete, ready-to-launch website isn’t practical at this
                            point. Perhaps in the future, such a capability will exist, but for now, the process still
                            requires significant human input and customization.
                        </p>

                        <p className="mb-6">
                            You might also consider other AI-powered tools like GitHub Copilot or Gemini. These tools
                            can assist in code generation and development, but they still have limitations, particularly
                            when it comes to meeting specific personal requirements. For my projects, I needed:
                        </p>

                        <ul className="list-disc pl-6 mb-6">
                            <li><strong>Editable Code</strong>: Full control over the generated code.</li>
                            <li><strong>Free Generation</strong>: No cost involved for basic usage.</li>
                            <li><strong>No Watermarks or embedded advertisements</strong>: A clean, professional output.
                            </li>
                            <li><strong>Unique Content</strong>: No copy-pasting from existing websites.</li>
                        </ul>
                        <p className="mb-6">
                            After experimenting with several tools, I found my personal favorite: <a
                            href="https://lovable.dev">lovable</a>. To clarify, I have no affiliation with them and
                            receive no support or sponsorship from their team. I simply found their tool to be the best
                            fit for my needs. It offers a clean, customizable codebase without hidden costs or intrusive
                            branding, making it ideal for building the kind of website I had envisioned.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">5. How It Works</h2>
                        <p className="mb-6">
                            After signing up on <a
                            href="https://lovable.dev"
                            className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                            target="_blank"
                            rel="noopener noreferrer">
                            lovable
                        </a>, you can describe your website idea,
                            choose a template, or even use another user’s site as inspiration. The tool connects to your
                            GitHub and generates commits based on your prompts. What’s great is the seamless integration
                            with manual edits—you can clone the GitHub repo to your favorite IDE, make changes, and push
                            them back. The UI reflects all your updates. While the free plan is limited to a few prompts
                            per day, this is still an excellent deal in my opinion. For those who need more, additional
                            prompts can be purchased at a reasonable price, offering flexibility without breaking the
                            bank.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">6. Minor Hiccups</h2>
                        <p className="mb-6">
                            Like any tool, <a href="https://lovable.dev">lovable</a> isn’t perfect:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-4">
                            <li><strong>Limited Scope</strong>: One of the key issues I’ve encountered is that changes
                                made by
                                <a href="https://lovable.dev">lovable</a> aren’t always applied across all relevant
                                components. For example, if you have multiple buttons with similar behavior and you want
                                to update all of them, the tool might only update one button, leaving the others
                                unchanged. This can be frustrating when you expect a holistic update and end up having
                                to manually adjust the remaining components.
                            </li>
                            <li><strong>Simple Errors</strong>: Another notable problem is the occurrence of simple
                                errors. Sometimes,
                                <a href="https://lovable.dev">lovable</a> misses crucial imports, forgets essential
                                keywords, or even introduces syntax errors. These mistakes can be perplexing because
                                they are the kind of issues that a basic Integrated Development Environment (IDE) can
                                easily detect and suggest fixes for. It’s surprising when a sophisticated tool like <a
                                    href="https://lovable.dev">lovable</a> overlooks such basic errors.
                            </li>
                            <li><strong>Prompting Skills</strong>: To get the best results from <a
                                href="https://lovable.dev">lovable</a>, you
                                need to develop a knack for crafting specific and clear prompts. It can be challenging
                                to pinpoint the exact way to phrase your request to achieve the desired outcome. Through
                                experience, I’ve found it particularly helpful to indicate precisely where changes
                                should be made and to explicitly mention the files or include code snippets in your
                                prompt. This level of specificity can significantly improve the tool’s output and ensure
                                that the changes align with your expectations.
                            </li>
                            <li><strong>Limited Memory</strong>: To get the best results from Another issue of the
                                model is limited memory. If your input or webpage component is too lengthy, lovable may
                                only process the first part and either truncate the rest or hallucinate additional
                                content. This can lead to incomplete or incorrect updates. It’s important to
                                double-check all changes to ensure that the entire page remains intact and accurately
                                updated.
                            </li>
                        </ul>
                        <p className="mb-6">
                            Despite these minor issues, the benefits far outweigh the drawbacks for me. The tool’s
                            ability to streamline my workflow and assist in code generation has been invaluable, even if
                            it requires a bit of extra effort to finesse the prompts and correct minor oversights.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">7. Deploying the Website</h2>
                        <p className="mb-6">
                            Once your website is ready, the next step is deployment. I chose GitHub Pages for its
                            simplicity and zero cost. Here’s how you can do it from your local machine:
                        </p>
                        <ol className="list-decimal pl-6 mb-6 space-y-4">
                            <li>Install GitHub Pages Dependency:
                                <pre
                                    className="bg-[#2A303C] p-4 rounded-lg overflow-x-auto mb-6 shadow-lg border border-primary/20">
                                    <code className="text-sm font-mono text-gray-300">
                                        npm install gh-pages --save-dev
                                    </code>
                                </pre>
                            </li>
                            <li>Update <code className="text-sm font-mono text-gray-300">package.json</code> file,
                                typically located near the top of the file, around line 7. Insert the following lines:
                                <pre
                                    className="bg-[#2A303C] p-4 rounded-lg overflow-x-auto mb-6 shadow-lg border border-primary/20">
                                    <code className="text-sm font-mono text-gray-300">
{`  "scripts": {
        ...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
        }`}

                                    </code>
                                </pre>
                            </li>
                            <li>Build and Deploy web:
                                <pre
                                    className="bg-[#2A303C] p-4 rounded-lg overflow-x-auto mb-6 shadow-lg border border-primary/20">
                                    <code className="text-sm font-mono text-gray-300">
                                        npm run deploy
                                    </code>
                                </pre>
                            </li>

                        </ol>
                        <p className="mb-6">
                            Your website will be live in ~1 min at
                            https://&lt;username&gt;.github.io/&lt;repo_name&gt;/.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">8. Adding a Custom Domain</h2>
                        <p className="mb-6">
                            If you prefer to use your own custom domain for a more professional touch instead of the
                            default GitHub Pages URL, you can easily set this up. Here’s a simplified process:</p>

                        <ol className="list-decimal pl-6 mb-6 space-y-4">
                            <li>
                                <strong>Purchase a Domain:</strong>
                                <p>The first step is to buy a domain from a provider of your choice. There are many
                                    domain resellers available, and the differences between them are usually minimal.
                                    Pricing is often the most significant factor, especially when considering
                                    promotional offers. I personally purchased my .eu domain from <a
                                        href="https://www.hostcreators.sk"
                                        className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        hostcreators
                                    </a>, mainly because of my positive past
                                    experiences with their customer support. However, feel free to choose any domain
                                    provider that suits you.</p>
                            </li>
                            <li>
                                <strong>Update DNS Settings:</strong>
                                <p>Log in to your domain provider’s control panel and locate the DNS settings. The
                                    process may vary slightly depending on your host, but here’s what I did for my
                                    provider:</p>

                                <ul className="list-disc pl-6 mb-6">
                                    <li>I logged into my account, selected the domain I wanted to configure, and then
                                        clicked on the DNS settings.
                                    </li>
                                    <li>There you might already have predefined DNS records in place. If so, you can
                                        delete them and add the new DNS records provided by GitHub
                                    </li>
                                </ul>

                                <p>To connect your domain to GitHub Pages, add the
                                    <a
                                        href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"
                                        className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    > following </a>
                                    A records for IPv4 :</p>

                                <pre
                                    className="bg-[#2A303C] p-4 rounded-lg overflow-x-auto mb-6 shadow-lg border border-primary/20">
                                    <p className="text-sm text-gray-400 mb-2"># List of GitHUB pages A records as of the time of writing this article </p>
                                    <code className="text-sm font-mono text-gray-300">
{`185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153`}

                                    </code>
                                </pre>
                                <p>To support IPv6, you should additionally configure AAAA records in your DNS
                                    settings:</p>
                                <pre
                                    className="bg-[#2A303C] p-4 rounded-lg overflow-x-auto mb-6 shadow-lg border border-primary/20">
                                    <p className="text-sm text-gray-400 mb-2"># List of GitHUB pages AAAA records as of the time of writing this article </p>
                                    <code className="text-sm font-mono text-gray-300">
{`2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153`}

                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Configure the Custom Domain in Your GitHub Pages Deployment Settings:</strong>
                                <p>Update <code className="text-sm font-mono text-gray-300">package.json</code> file,
                                    typically located near the top of the file, around line 7. Insert the following
                                    cname flag with your custom domain name:</p>
                                <pre
                                    className="bg-[#2A303C] p-4 rounded-lg overflow-x-auto mb-6 shadow-lg border border-primary/20">
                                    <code className="text-sm font-mono text-gray-300">
{`  "scripts": {
        ...
        "deploy": "gh-pages -d dist --cname <your.domain>"
        }`}

                                    </code>
                                </pre>
                            </li>
                            <li>
                                <strong>Wait for Propagation & Deploy:</strong>
                                <p>Navigate to your repository’s settings on GitHub, scroll down to the GitHub Pages
                                    section, and check your custom domain under the “Custom domain” field. If everything
                                    is in order, you will see a orange "DNS Check in Progress" changed to green check
                                    mark with "DNS check successful" message.</p>
                                <img
                                    src="/domain.jpg"
                                    alt="GitHub DNS Check in Progress"
                                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                                />
                                <p>DNS changes can take anywhere from a few minutes to a few hours to take effect. In my
                                    experience, the changes took about half an hour to propagate fully. However, some
                                    users have reported that it can take up to 24 hours for the changes to take effect.
                                    Once the DNS propagation is complete, your website will be accessible via your
                                    custom domain!</p>
                            </li>
                        </ol>

                        <div className="bg-[#1A1F2C] p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold mb-4 text-primary">Troubleshooting Common Issues</h3>
                            <p className="italic">
                                Building and deploying a website isn't always smooth sailing. Here are two most
                                common issues and how to handle them:
                            </p>
                            <ul className="list-disc pl-6 ">
                                <li>
                                    <strong>Error Page:</strong> If you encounter an error page, it might mean your DNS
                                    records haven’t propagated yet. DNS changes can take time, sometimes up to 24 hours,
                                    so patience is key.
                                </li>
                                <li>
                                    <strong>Blank Page:</strong> A blank page with errors in the web inspector typically
                                    indicates a configuration issue. Ensure the <code
                                    className="text-sm font-mono text-gray-300">homepage</code> value
                                    in <code className="text-sm font-mono text-gray-300">package.json </code>
                                    accurately reflects the deployment domain and verify your routes in <code
                                    className="text-sm font-mono text-gray-300">App.tsx</code>.
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-primary">9. Monitoring and Maintenance</h2>
                        <p className="mb-6">
                            Now, you might wonder, “Where is the security in all of that?” The answer lies in the fact
                            that, while this blog has provided you with the tools to build your application, the
                            responsibility for implementing security measures falls squarely on your shoulders. Since
                            you have full control over the code, it’s up to you to ensure it’s secure. This blog series
                            will dive deeper into how to make your web applications secure in future episodes.
                        </p>
                        <p className="mb-6">
                            But first, we need to build the web. It’s essential to have a solid foundation before you
                            can focus on securing it. The process of securing a website doesn’t have to be expensive or
                            overwhelming. By following best practices, leveraging free resources, and understanding the
                            basics of web security, you can create a robust, secure application that protects your users
                            and their data.
                        </p>
                        <p className="mb-6">
                            Security is an ongoing process. It is good to set up automated monitoring and regular
                            maintenance schedules to ensure the website remains secure over time. This includes:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Weekly security scans</li>
                            <li>Automated dependency updates</li>
                            <li>Regular backups</li>
                            <li>Incident response planning</li>
                        </ul>

                        <p className="mb-6">
                            Building a secure website doesn't have to be expensive or overwhelming. By following these
                            steps and utilizing free resources, you can create a robust, secure web application that
                            protects your users and their data.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">10. Final Thoughts</h2>
                        <p className="mb-6">
                            Building a personal website is a rewarding journey, filled with learning and growth. With
                            tools like <a href="https://lovable.dev">lovable</a> and platforms like GitHub Pages, it’s
                            more accessible than ever. Whether you’re just starting out or refining your existing
                            skills, I hope my story inspires you to create and share your own web presence.
                        </p>

                        <p className="mb-6">
                            Feel free to reach out with any questions or comments. I’d love to hear about your
                            experiences and help where I can!
                        </p>


                    </div>
                </div>

            </motion.div>
        </div>
    );

};

export default Cyber1;
