import {Card, CardContent} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
import {useCallback, useEffect, useState} from "react";
import roll_down from "/roll_down.png";
import click from "/click.png";

interface ExperienceItem {
    title: string;
    organization: string;
    location: string;
    period: string;
    type: "education" | "work";
    description: string;
}

const experiences: ExperienceItem[] = [
    {
        title: "Technical Internship",
        organization: "CERN",
        location: "Switzerland 🇨🇭",
        period: "2024-2025",
        type: "work",
        description: "Managed deployment processes and optimized messaging systems using Kubernetes, Docker, and RabbitMQ. Developed and maintained C++ solutions for data acquisition and monitoring at CERN CMS BRIL."
    },
    {
        title: "Cybersecurity Internship",
        organization: "Hilti",
        location: "Switzerland 🇨🇭",
        period: "2023-2024",
        type: "work",
        description: "Designed and implemented an automated firewall analysis tool leveraging Python and Azure cloud technologies to enhance network security and efficiency."
    },
    {
        title: "Summer Student Program",
        organization: "CERN",
        location: "Switzerland 🇨🇭",
        period: "2023",
        type: "work",
        description: "Developed Python-based simulations comparing RESTful APIs and Message-Oriented Middleware (MOM), deploying containerized applications with Kubernetes, Docker, and RabbitMQ."
    },
    {
        title: "Cybersecurity Internship - Penetration Test Automation",
        organization: "Technické sítě Brno ",
        location: "Czech Republic 🇨🇿",
        period: "2023",
        type: "work",
        description: "Created automated penetration testing scripts that identified vulnerabilities on Windows servers and desktops using Python and Metasploit"
    },
    {
        title: "IT Administrator",
        organization: "True Friends",
        location: "USA 🇺🇸",
        period: "2022",
        type: "work",
        description: "Managed IT infrastructure for multiple facilities, resolved Wi-Fi issues, performed end-to-end PC setups (hardware and software), implemented networking solutions, and provided technical support to 100+ users."
    },
    {
        title: "ISEP Internship - Summer Research",
        organization: "Truman State University",
        location: "USA 🇺🇸",
        period: "2022",
        type: "education",
        description: "Developed iOS applications integrating GPS, open APIs, multithreading, and sound alarm to deliver high-performance mobile solutions."
    },
    {
        title: "ISEP Internship - Student Tutoring ",
        organization: "Truman State University",
        location: "USA 🇺🇸",
        period: "2022",
        type: "work",
        description: "Provided C++ and Java tutoring sessions to enhance programming fundamentals and problem-solving skills for students."
    },
    {
        title: "ISEP Studies",
        organization: "Truman State University",
        location: "USA 🇺🇸",
        period: "2022",
        type: "education",
        description: "Improved Java programming skills, contributed to an AI-based weather detection system, mastered advanced networking concepts, and significantly enhanced Russian language proficiency."
    },
    {
        title: "Simulation Engineer Internship",
        organization: "Estonian Aviation Academy",
        location: "Estonia 🇪🇪",
        period: "2021",
        type: "work",
        description: "Conducted simulations using Simio software to optimize aviation workflows and improve operational efficiency."
    },
    {
        title: "Master in Software Engineering",
        organization: "Masaryk University",
        location: "Czech Republic 🇨🇿",
        period: "2021-2024",
        type: "education",
        description: "Gained expertise in software design patterns, clean code practices, enterprise Java with Maven, network and digital forensics, machine learning, and one-chip controller programming."
    },
    {
        title: "Erasmus Program",
        organization: "HTWG",
        location: "Germany 🇩🇪",
        period: "2020-2021",
        type: "education",
        description: "Contributed to AI and 3D computer vision projects, improving teamwork capabilities in software development and advancing German language proficiency."
    },
    {
        title: "Bachelor in Computer Systems & Communication",
        organization: "Masaryk University",
        location: "Czech Republic 🇨🇿",
        period: "2018-2021",
        type: "education",
        description: "Strengthened knowledge in algorithms, data structures, cybersecurity through competitive games, operating systems, and video editing."
    },
    {
        title: "PC Hardware & Software Fixing Internship",
        organization: "PC Connect",
        location: "United Kingdom 🇬🇧",
        period: "2017",
        type: "work",
        description: "Diagnosed and resolved complex hardware and software issues for customer PCs and laptops, ensuring high-quality communication and support."
    },
    {
        title: "Information and Network Technologies",
        organization: "High School of Electrical Engineering",
        location: "Slovakia 🇸🇰",
        period: "2014-2018",
        type: "education",
        description: "Acquired foundational knowledge in electronics and electrotechnics, earned Cisco Certified Network Associate (CCNA) Routing and Switching certification."
    }
];

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const flags = ["🇨🇭", "🇨🇿", "🇺🇸", "🇪🇪", "🇩🇪", "🇬🇧", "🇸🇰"];
    const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
    const [scaleUp, setScaleUp] = useState(false);

    const cycleFlag = useCallback(() => {
        setCurrentFlagIndex((prevIndex) => (prevIndex + 1) % flags.length);
    }, [flags.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setScaleUp(true);
            setTimeout(() => {}, 750)
            cycleFlag();
            setTimeout(() => {
                setScaleUp(false);
            }, 750)
        }, 2000);

        return () => clearInterval(interval); // Clean up on unmount
    }, [cycleFlag])



    if (!isVisible) {
        return (
            <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
                <button
                    className="absolute top-14 left-1/2 transform -translate-x-1/2 rounded-full text-3xl font-bold text-center text-white backdrop-blur-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-primary/80"
                    onClick={() => {
                        setIsVisible(true);
                    }}
                >
                    <img src={roll_down} alt="Roll Down" className="w-6 h-6"/>
                    <span className="relative z-10">List my experience {flags[currentFlagIndex]}</span>
                    <img src={roll_down} alt="Roll Down" className="w-6 h-6"/>
                    <img
                        src={click}
                        alt="Click"
                        style={{
                            transform: scaleUp ? 'scale(1.5)' : 'scale(0.75)',
                            transition: 'transform 1.25s ease-in-out',
                        }}
                        className=" opacity-50 absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 mr-4"
                    />
                </button>

            </div>
        );
    }

    return (
        <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
            <section className="py-12 px-4 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-center text-white">My Experiences: </h2>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-primary hover:text-primary/80 transition-colors rounded-full bg-gray-700 opacity-70 px-4 py-2"
                        >
                            Collapse
                        </button>
                    </div>
                    <ScrollArea className="h-[600px] rounded-md">
                        <div className="grid gap-10 p-10">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 10}}
                                    whileInView={{opacity: 0.7, y: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.3, delay: index * 0.05}}
                                >
                                    <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
                                        <div
                                            className={`absolute left-0 top-0 w-1 h-full ${
                                                exp.type === "education" ? "bg-primary" : "bg-blue-500"
                                            }`}
                                        />
                                        <CardContent className="p-4">
                                            <div className="flex flex-col sm:flex-row justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between">
                                                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                                                        <span
                                                            className="text-sm text-gray-300 px-2 py-0.5 rounded-full">
                                                        {exp.period}
                                                    </span>
                                                    </div>
                                                    <p className="text-sm mb-2 text-gray-300">
                                                        {exp.organization} • {exp.location}
                                                    </p>
                                                    <p className="text-sm text-gray-400">{exp.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </section>
        </div>
    );
};

export default Experience;
