import React, {useState} from 'react';
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {ArrowLeft, Home, Shield, AlertTriangle} from "react-feather";

const TorNetwork = () => {
    const navigate = useNavigate();
    const [showWarning, setShowWarning] = useState(true); // Control the warning window

    const closeWarning = () => {
        setShowWarning(false);
    };
    return (
        <div className="min-h-screen bg-[#1A1F2C] text-white">
            {showWarning && (
                <div className="fixed top-0 left-0 w-full h-full bg-[#1A1F2C]/90 backdrop-blur-md z-50 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-2xl w-full mx-auto bg-[#282E3E] rounded-lg shadow-lg p-6 m-4" // Added m-4 for mobile spacing
                    >
                        <div className="flex items-center mb-4">
                            <AlertTriangle className="text-yellow-500 mr-2 w-6 h-6" />
                            <h2 className="text-xl font-semibold">Dark Web Warning</h2>
                        </div>
                        <p className="text-sm mb-6">
                            This article covers the Tor network and the dark web, which can be dangerous. While it's possible to find illegal marketplaces and forums there, you're also much more likely to encounter serious risks like advanced malware, including ransomware and spyware, that can severely damage your devices and steal your information. The anonymity on the dark web attracts skilled cybercriminals, making phishing attacks and scams more sophisticated and harder to detect than those you'd see on regular websites. Be extremely cautious and understand the potential dangers before exploring the dark web.
                        </p>
                        <p className="text-sm mb-6">
                            This information is for defense and educational purposes only. The dark web's risks are significant, and exploration without deep cybersecurity knowledge is strongly discouraged. Use this knowledge to improve security, educate others, and research cybercrime. Illegal activity or reckless exploration can have severe consequences.
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={closeWarning}
                                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm"
                            >
                                Got it
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
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
                            The Tor Network: An Essential Tool for Online Anonymity and Privacy
                        </h1>

                        <p className="text-lg mb-6">
                            The internet is a vast network where privacy is often at risk. Whether it's corporations tracking browsing habits, governments monitoring online activity, or cybercriminals attempting to intercept data, ensuring anonymity has become a crucial aspect of cybersecurity. One of the most commonly used tool available to enhance online privacy is the Tor Network.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">What is Tor?</h2>
                        <p className="mb-6">
                            Tor, short for The Onion Router, is a decentralized network that allows users to browse the web anonymously. It was initially developed by the <a
                            href="https://www.torproject.org/about/history/"
                            className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >U.S. Navy </a>
                            to protect government communications but has since evolved into a widely used privacy tool accessible to anyone.
                        </p>
                        <p className="mb-6">
                            Tor routes internet traffic through a series of volunteer-operated servers, encrypting data multiple times along the way. This technique, known as onion routing, ensures that no single node in the network knows both the origin and destination of the traffic.
                        </p>

                        <h2 className="text-2xl font-bold mb-4 text-primary">How Does Tor Work?</h2>

                        <h3 className="text-xl font-bold mb-4 text-primary">1. Onion Routing</h3>
                        <p className="mb-6">
                            Tor works by relaying your internet traffic through multiple servers, known as nodes or relays. The process follows these steps:
                        </p>
                        <ol className="list-decimal pl-6 mb-6 space-y-4">
                            <li>Source selects a random 3 nodes from a list provided by a "directory server".</li>
                            <li>Your device create random path so called circuit through those selected Tor nodes.</li>
                            <li>The data is encrypted multiple times, each layer being peeled away as it passes through each node (like an onion).</li>
                            <li>The final node, known as the exit node, decrypts the final layer and sends the request to the destination website.</li>
                        </ol>

                        <a href="https://jaydev-joshi-blog.medium.com/lets-connect-to-tor-8fd1dd3171e3"
                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                           target="_blank"
                           rel="noopener noreferrer">
                            <img
                                src="/tor_path.jpg"
                                alt="Tor selecting path"
                                className="w-full h-[510px] object-cover rounded-lg mb-8"

                            />
                        </a>


                        <h3 className="text-xl font-bold mb-2 text-primary">2. Tor Circuits</h3>
                        <p className="mb-6">
                            Every time you start a new browsing session, Tor creates a new circuit, a path of nodes your traffic will pass through. This circuit changes periodically (every <a
                            href="https://pages.github.com"
                            className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >10 min</a>), making tracking even more difficult.
                        </p>
                        <p className="mb-6">
                            Circuits rely on a layered encryption approach using a network of relays. When a user sends data, it's encrypted three times, once for each relay in the chosen path. Each Tor relay has a unique public/private key pair, part of Tor's public key infrastructure (PKI). The client obtains the public keys of the relays and uses them to establish a secure connection to echange symetric key. The data is encrypted with a series of symmetric keys, each intended for a specific relay. As the data passes through each relay, the relay uses its private key to decrypt one layer of encryption, revealing the next relay's address and the next layer of encryption. This process continues until the final relay, the exit node, decrypts the last layer and sends the original data to its destination.
                        </p>
                        <div className="mb-6 bg-[#282E3E] text-gray-300 p-4 rounded-lg border-l-4 border-green-400 mt-4">
                            <strong>Note:</strong> While current PKI systems, including those used in Tor, remain secure against classical computing attacks, they rely on cryptographic Diffie–Hellman algorithm, which is theoretically
                            <a href="https://csrc.nist.gov/csrc/media/events/workshop-on-cybersecurity-in-a-post-quantum-world/documents/papers/session3-kate-paper.pdf"
                               className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                               target="_blank"
                               rel="noopener noreferrer"> vulnerable to quantum computing
                            </a>
                            . Although no large-scale quantum computer has yet been publicly demonstrated to break these encryptions, advancements in quantum technology could make such attacks feasible in the near future, potentially compromising the anonymity and security of encrypted circuits.
                        </div>
                        <a href="https://en.wikipedia.org/wiki/Onion_routing"
                        className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img
                                src="/onion_message.png"
                                alt="Onion layers of the message"
                                className="w-full h-[500px] object-cover rounded-lg mb-8"

                            />
                        </a>
                        <p className="mb-6">
                            To complete the picture, it's important to understand how data returns through the Tor network. The return journey essentially mirrors the outbound process, but in reverse. When the destination server responds, the data is encrypted and sent back through the same Tor circuit. Each relay, starting with the exit node, adds an aditional layer of encryption, using the same symmetric keys that were used for decryption. This ensures that only the orginal source can decrypt the all layers. Therefore, the return path is also protected by the same layered encryption, maintaining end-to-end anonymity.
                        </p>

                        <a href="https://medium.com/systems-and-network-security/tor-anonymity-for-better-or-for-worse-d8407b1d9287"
                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                           target="_blank"
                           rel="noopener noreferrer">
                            <img
                                src="/tor_reply.png"
                                alt="Tor comunicaiton"
                                className="w-full h-[500px] object-cover rounded-lg mb-8"

                            />
                        </a>

                        <h2 className="text-2xl font-bold mb-4 text-primary">Why Use Tor?</h2>
                        <ul className="list-disc pl-6 mb-6 space-y-4">
                            <li><strong>Anonymity:</strong> Tor helps users avoid surveillance, censorship, and tracking by obscuring their IP address.</li>
                            <li><strong>Accessing Restricted Content:</strong> It enables users to access region-blocked content and bypass censorship in restrictive countries.</li>
                            <li><strong>Journalism and Activism:</strong> Many journalists and activists use Tor to protect sources and communicate securely.</li>
                            <li><strong>Dark Web:</strong> The dark web can be used for accessing various content, but it may also contain illegal material. In some countries, even
                                <a href="https://www.foleygriffin.com/blog/2022/june/what-is-illegal-and-legal-on-the-internet-/"
                                   className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                   target="_blank"
                                   rel="noopener noreferrer"> searching or viewing </a>
                                 such content may be illegal. Exercise extreme caution and be aware of the potential risks before deciding to visit the dark web.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4 text-primary">The Spectrum of Dark Web Content</h2>

                        <p className="mb-6">
                            Searching on the dark web differs significantly from standard internet searches. Because typical search engines don't index dark web sites (.onion addresses), specialized
                            <a href="https://www.avast.com/c-best-dark-web-search-engines"
                               className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                               target="_blank"
                               rel="noopener noreferrer"> dark web search engines </a>
                              are required. These engines operate within the Tor network, indexing the hidden services there. They crawl the dark web, but due to its dynamic and often ephemeral nature, their indexing is less comprehensive than that of surface web search engines. Additionally, because of the anonymity focus, dark web search engines often prioritize privacy, and may have varying degrees of effectiveness and safety. Therefore, users must use extreme caution when using them.
                        </p>

                        <a href="https://www.zerofox.com/glossary/deep-and-dark-web/"
                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                           target="_blank"
                           rel="noopener noreferrer">
                            <img
                                src="/tor_dark_web.jpg"
                                alt="Tor dark web - deep web - surface web"
                                className="w-full h-[560px] object-cover rounded-lg mb-8"

                            />
                        </a>

                        <h3 className="text-2 font-bold mb-4 text-primary">Illicit Activities on the Dark Web</h3>
                        <p className="mb-6">
                            The dark web is infamous for hosting illicit marketplaces and services, facilitating a wide array of illegal activities. Beyond the well-known trading of narcotics, weapons, and counterfeit goods, it serves as a hub for stolen financial information, including credit card details, bank account credentials, and complete identity packages. Cybercriminals also peddle hacking tools and services, such as malware, ransomware, and DDoS attack capabilities, alongside stolen data and tutorials on unauthorized system access. Furthermore, the dark web is a breeding ground for the distribution of illegal pornography, including child sexual abuse material, and platforms that facilitate human trafficking and exploitation.
                        </p>
                        <p className="mb-6">
                            In addition to these, the dark web is used for the distribution of counterfeit documents like passports and driver's licenses, and the sale of stolen online accounts. Political and ideological extremist groups utilize hidden forums for communication and propaganda dissemination. Alleged hitman services and assassination markets, though often scams, also operate within this space. Furthermore, the sale of items that help maintain anonymity, like burner phones and prepaid sim cards, and also the sale of malicious software, like keyloggers and Remote access trojans, are also very common.
                        </p>
                        <a href="https://www.wired.com/story/alphabay-dark-web-market-ranking/"
                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                           target="_blank"
                           rel="noopener noreferrer">
                            <img
                                src="/tor_market.png"
                                alt="Darknet marketplace unique items plot"
                                className="w-full h-[560px] object-cover rounded-lg mb-8"

                            />
                        </a>
                        <h3 className="text-2 font-bold mb-4 text-primary">Legitimate Uses of the Dark Web</h3>
                        <p className="mb-6">
                            Despite its notoriety, the Dark Web also serves as a haven for individuals seeking privacy and freedom from censorship. Journalists, activists, and whistleblowers operating under oppressive regimes utilize the Dark Web to communicate securely and share information without fear of retribution. Platforms like SecureDrop, accessible via Tor, enable whistleblowers to submit sensitive documents to media outlets anonymously. Furthermore, social media platforms have established Dark Web versions of their sites to address privacy concerns and ensure accessibility in regions where their services are blocked.
                        </p>
                        <h3 className="text-2 font-bold mb-4 text-primary">Content Diversity on the Dark Web</h3>
                        <p className="mb-6">
                            The content hosted on the Dark Web is varied. While illegal activities are prominent, there are also numerous forums and communities centered around topics like technology, politics, and social issues. Some sites offer software repositories, blogs, and platforms for political discourse, providing spaces for free expression away from mainstream internet surveillance. Research indicates that about half of the visible Dark Web content relates to apparently licit activities, including software repositories, blogs, and activism-related websites.
                        </p>
                        <a href="https://www.helpnetsecurity.com/2016/11/03/dark-web-legal/"
                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                           target="_blank"
                           rel="noopener noreferrer">
                            <img
                                src="/tor_legal.jpg"
                                alt="Darknet marketplace unique items plot"
                                className="w-full h-[550px] object-cover rounded-lg mb-8"

                            />
                        </a>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Proper Usage and Security Tips</h2>

                            <h3 className="text-xl font-bold mb-2 text-primary">I. Actions to Take (Enhancing Security and Anonymity):</h3>
                            <ol className="list-decimal pl-6 mb-6 space-y-4">
                                <li>
                                    <strong>Use the Official Tor Browser:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Download it exclusively from the official
                                            <a href="https://www.torproject.org"
                                               className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                               target="_blank"
                                               rel="noopener noreferrer"> Tor Project </a>
                                             website.</li>
                                        <li>Verify the digital signature of the downloaded file to ensure its authenticity.</li>
                                        <li>Keep the Tor Browser updated to the latest stable version. Enable automatic updates if possible.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Use .onion Services and HTTPS:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Prioritize accessing websites through their
                                            <a href="https://support.torproject.org/onionservices/onionservices-2/"
                                               className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                               target="_blank"
                                               rel="noopener noreferrer"> .onion </a>
                                            addresses whenever available. This keeps your traffic within the Tor network.</li>
                                        <li>Always ensure that websites you visit use HTTPS. Look for the padlock icon in the address bar.</li>
                                        <li>Never send unencrypted data.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Minimize
                                        <a href="https://dl.acm.org/doi/abs/10.1145/3386040"
                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                           target="_blank"
                                           rel="noopener noreferrer"> Browser Fingerprinting</a>
                                        :</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Resist the urge to resize the Tor Browser window. Websites can use window size to help identify you. Keep it the default size, or maximized.</li>
                                        <li>Avoid installing extra browser extensions or themes that could alter the Tor Browser's fingerprint.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Use Secure Operating Systems:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Consider using operating systems designed with privacy and security as core principles. These systems provide additional layers of protection beyond the Tor Browser itself:</li>
                                        <ul className="list-disc pl-6 mb-6">
                                            <li><strong> <a href="https://tails.net"
                                                            className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                                            target="_blank"
                                                            rel="noopener noreferrer">Tails </a>  (The Amnesic Incognito Live System):</strong> Tails is a live operating system that can be booted from a USB drive or DVD. It forces all internet traffic through the Tor network, leaving no trace on the host computer. It's designed for maximum privacy and anonymity.</li>
                                            <li><strong><a href="https://www.whonix.org"
                                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                                           target="_blank"
                                                           rel="noopener noreferrer">Whonix </a>:</strong> Whonix consists of two virtual machines: a "Workstation" and a "Gateway." The Gateway routes all traffic through Tor, while the Workstation runs your applications. This isolation prevents IP leaks and other potential security vulnerabilities. Whonix is designed to be used inside of Virtualbox or KVM.</li>
                                            <li><strong><a href="https://www.qubes-os.org"
                                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                                           target="_blank"
                                                           rel="noopener noreferrer">Qubes OS </a>:</strong> Qubes OS uses virtualization to isolate different applications and activities into separate virtual machines (qubes). This compartmentalization minimizes the impact of a compromised application or qube. Qubes can be configured to route specific qubes through Tor, providing a strong security layer. Qubes is a very advanced OS, and has a steep learning curve, but provides extremely strong security.</li>
                                        </ul>
                                        <li><strong>Warning about Windows:</strong> Windows is known for its data collection practices, which can compromise your privacy. If you must use Windows, minimize the amount of personal data on the system, disable unnecessary tracking features, and ensure it's updated with the latest security patches. Running within a Virtual Machine can also add some security.</li>
                                        <li>If using a regular OS (macOS, Linux), ensure it's updated with the latest security patches.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Use Secure Search Engines:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Opt for
                                            <a href="https://proton.me/blog/alternative-search-engines"
                                               className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                               target="_blank"
                                               rel="noopener noreferrer"> privacy-focused search engines</a>
                                            , which do not track your searches.</li>
                                        <li>Use .onion search engines if you can find them.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Use a strong password manager:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Use a
                                            <a href="https://www.cnet.com/tech/services-and-software/best-password-manager/"
                                               className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                               target="_blank"
                                               rel="noopener noreferrer"> password manager </a>
                                            that can generate and store strong and unique passwords.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Understand and configure security levels:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Explore the
                                            <a href="https://tb-manual.torproject.org/security-settings/"
                                               className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                               target="_blank"
                                               rel="noopener noreferrer"> Tor Browsers security level settings</a>
                                            , and understand what each level does.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Create email from one of the security focused companies:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>When an email address is required, create an anonymous email account with a
                                            <a href="https://www.techradar.com/best/best-secure-email-providers"
                                               className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                               target="_blank"
                                               rel="noopener noreferrer"> provider known for its strong privacy policies</a>

                                            . ProtonMail, Tutanota, or similar services are recommended. Avoid using mainstream email providers that may log your IP address.</li>
                                    </ul>
                                </li>
                            </ol>

                            <h3 className="text-xl font-bold mb-2 text-primary">II. Actions to Avoid (Preventing Compromises):</h3>
                            <ol className="list-decimal pl-6 mb-6 space-y-4">
                                <li>
                                    <strong>Avoid Logging into Personal Accounts:</strong>
                                    <ul >
                                        <li>Never log into personal accounts (email, social media, banking) while using Tor. This directly links your online activity to your real-world identity.</li>
                                        <li>If you must access an account, create a new, anonymous account specifically for Tor use.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Disable Scripts and Plugins:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Disable JavaScript and other browser plugins like Flash or Java unless absolutely necessary. These can reveal your real IP address.</li>
                                        <li>The Tor Browser's "Security Settings" allow you to control script execution. Set them to "Safer" or "Safest" for maximum protection.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Do Not Open Downloaded Files Directly:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Avoid opening downloaded documents (PDFs, Word files, etc.) while online. These files can contain embedded code that could reveal your IP address.</li>
                                        <li>Download files, disconnect from the internet, and then open them. Or open them in a virtual machine that is not connected to the internet.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Do Not Use Torrenting Services:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Tor is not designed for peer-to-peer file sharing. Torrenting over Tor is extremely slow and can expose your IP address.</li>
                                        <li>Torrenting can also put heavy strain on the Tor network.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Be Cautious with VPN and Tor Combinations:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Using a
                                            <a href="https://gitlab.torproject.org/legacy/trac/-/wikis/doc/TorPlusVPN"
                                               className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                               target="_blank"
                                               rel="noopener noreferrer"> VPN with Tor </a>
                                            can add complexity and may not always increase security. If done incorrectly, it can actually weaken your anonymity.</li>
                                        <li>If you decide to combine them, research thoroughly and understand the potential risks. Generally, Tor over VPN is considered better than VPN over Tor.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Do Not Engage in Illegal Activities:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Tor is not a shield for illegal activities. Law enforcement agencies have methods to track and identify users, even on Tor.</li>
                                        <li>Using Tor for illegal purposes puts you at significant risk.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Do not use external applications while tor is running:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Any application that uses the internet while tor is running, could leak your real IP address.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Do not trust all .onion services:</strong>
                                    <ul className="list-disc pl-6 mb-6">
                                        <li>Just because a service is a .onion service, that does not make it safe. Be as cautious as you would on the clearnet.</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <h2 className="text-2xl font-bold mb-4 text-primary">Documented Cases of Tracking on Tor</h2>
                        <p className="mb-6">While Tor is highly secure, there have been cases of user de-anonymization using following techniques:</p>
                        <ul className="list-disc pl-6 mb-6">
                            <li><strong>Malicious Exit Nodes:</strong> Some exit nodes have been found logging traffic, especially unencrypted data.

                                <p className="mb-6">In November 2021, security researcher
                                    <a href="https://nusenu.medium.com/is-kax17-performing-de-anonymization-attacks-against-tor-users-42e566defce8"
                                       className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                       target="_blank"
                                       rel="noopener noreferrer"> Nusenu reported </a>
                                     on a threat actor known as “KAX17,” who managed to control a significant number of Tor exit nodes over several years. These malicious nodes were used to intercept and potentially de-anonymize user traffic. The
                                    <a href="https://www.malwarebytes.com/blog/news/2021/12/was-threat-actor-kax17-de-anonymizing-the-tor-network"
                                       className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                       target="_blank"
                                       rel="noopener noreferrer"> Tor Project confirmed </a>
                                     the removal of these malicious relays in December 2021.</p>
                                <a href="https://securityaffairs.com/29589/cyber-crime/tor-exit-node-serves-malware.html"
                                   className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <div className="flex justify-center">
                                        <img
                                            src="/tor_exit_node.png"
                                            alt="Tor selecting path"
                                            className=" h-[350px] object-cover rounded-lg mb-8"

                                        />
                                    </div>
                                </a>
                            </li>
                            <li><strong>Correlation Attacks:</strong> Advanced attackers, such as government agencies, have attempted to analyze internet traffic patterns to trace users.
                                <a href="https://blog.daknob.net/guarding-your-tor-exits-dns/"
                                   className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <div className="flex justify-center">
                                        <img
                                            src="/tor_attack.png"
                                            alt="traffic time analysis"
                                            className="h-[300px] object-cover rounded-lg mb-8"

                                        />
                                    </div>
                                </a>
                                <p className="mb-6">In 2024, German law enforcement agencies successfully

                                    <a href="https://www.ndr.de/fernsehen/sendungen/panorama/aktuell/Investigations-in-the-so-called-darknet-Law-enforcement-agencies-undermine-Tor-anonymisation,toreng100.html"
                                       className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                       target="_blank"
                                       rel="noopener noreferrer"> de-anonymized users of the “Boystown” darknet </a>
                                    platform. They achieved this by operating their own Tor servers and conducting timing analysis attacks, correlating the timing of data packets to trace activities back to individual users. This marked one of the first documented cases of such an attack being used effectively within the Tor network.  </p>
                            </li>
                            <li><strong>JavaScript Exploits:</strong> Some vulnerabilities in the Tor Browser have been exploited to reveal user identities.
                            <p className="mb-6">In 2012, the
                                <a href="https://www.wired.com/2014/08/operation-torpedo/"
                                   className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                   target="_blank"
                                   rel="noopener noreferrer"> FBI utilized a vulnerability </a>in the Firefox browser, which the Tor Browser is based on, to deploy a JavaScript exploit. This exploit targeted users of certain Tor-hidden services, leading to the de-anonymization of individuals involved in illegal activities. The exploit collected identifying information from users’ computers, effectively bypassing the anonymity provided by Tor.</p>
                            </li>

                            <li><strong>Lack of Security:</strong> Hacktivists Expose Lax Security of Freedom Hosting II and dump data.
                                <p className="mb-6">In February 2017, hacktivists from <a href="https://therecord.media/freedom-hosting-admin-gets-27-years-in-prison-for-hosting-child-pornography"
                                       className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                       target="_blank"
                                       rel="noopener noreferrer"> Anonymous took down Freedom Hosting II</a>
                                    , a darknet hosting provider that operated as the successor to the original Freedom Hosting. After breaching its servers, they discovered that over 50% of the hosted sites contained child exploitation material, despite the service’s claim of banning such content. In response, the hackers wiped the entire platform, shutting down around 10,000 websites and leaving a message condemning the illegal content. They also leaked over 74GB of data, exposing internal server details and user information. This was one of the largest hacktivist-led operations against darknet services, striking a major blow against illicit activities on Tor.

                                </p>
                            </li>

                        </ul>

                        <h2 className="text-2xl font-bold mb-4 text-primary">Tor Alternatives</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li><strong><a href="https://geti2p.net/en/"
                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                           target="_blank"
                                           rel="noopener noreferrer">I2P </a>:</strong> asymmetric tunnels P2P networking</li>
                            <li><strong><a href="https://freenet.org"
                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                           target="_blank"
                                           rel="noopener noreferrer">Freenet </a>:</strong> supports decentralized and anonymous file sharing </li>
                            <li><strong><a href="https://lokinet.org"
                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                           target="_blank"
                                           rel="noopener noreferrer">Lokinet </a>:</strong> paid “Tor & I2P hybrid” on blockchain</li>
                            <li><strong><a href="https://www.techlore.tech/vpn"
                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                           target="_blank"
                                           rel="noopener noreferrer">VPNs </a>:</strong> hide from ISP</li>
                            <li><strong><a href="https://www.gnunet.org/en/"
                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                           target="_blank"
                                           rel="noopener noreferrer">GNUnet </a>:</strong> framework for P2P networking</li>
                            <li><strong><a href="https://psiphon.ca"
                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                           target="_blank"
                                           rel="noopener noreferrer">Psiphon </a>:</strong> find non censored path using VPN, SSH and proxy for free</li>
                            <li><strong><a href="https://www.orchid.com/vpn/"
                                           className="text-primary hover:text-primary/80 underline decoration-dotted underline-offset-4"
                                           target="_blank"
                                           rel="noopener noreferrer">Orchid </a>:</strong> decentralised VPNs marketplace</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4 text-primary">Conclusion</h2>
                        <p className="mb-6">
                            In conclusion, the Tor Network stands as a powerful and accessible tool for enhancing online anonymity and privacy. Its layered encryption and decentralized structure offer a significant barrier against surveillance and tracking. While no system is completely foolproof, and documented cases of de-anonymization exist, understanding Tor's implementation and adhering to best practices can significantly reduce the risks. By using the official Tor Browser, prioritizing .onion services and HTTPS, minimizing browser fingerprinting, and avoiding common pitfalls like logging into personal accounts or engaging in torrenting, users can maximize their protection. Combining this knowledge with the exploration of alternative privacy tools allows users to tailor their security strategy to their specific needs. Ultimately, Tor empowers individuals to take control of their online privacy, reinforcing the importance of informed and cautious internet usage in today's digital landscape.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TorNetwork;
