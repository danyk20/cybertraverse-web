import {Card, CardContent} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

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
        title: "Long-term & Short-term Internship",
        organization: "CERN",
        location: "Switzerland",
        period: "2023",
        type: "work",
        description: "Contributed to the development of particle detector control systems and data acquisition software. Implemented real-time monitoring solutions for experimental setups."
    },
    {
        title: "Cybersecurity Internship - Firewall Tool Development",
        organization: "Hilti",
        location: "Switzerland",
        period: "2022",
        type: "work",
        description: "Developed an automated firewall configuration tool that reduced manual configuration time by 70%. Implemented security best practices and compliance checks."
    },
    {
        title: "Cybersecurity Internship - Penetration Test Automation",
        organization: "Technické sítě Brno",
        location: "Switzerland",
        period: "2022",
        type: "work",
        description: "Created automated penetration testing scripts that identified vulnerabilities in network infrastructure. Improved security testing efficiency by 40%."
    },
    {
        title: "IT Administrator Internship",
        organization: "True Friends",
        location: "USA",
        period: "2021",
        type: "work",
        description: "Managed IT infrastructure for multiple facilities, implemented new backup solutions, and provided technical support to 200+ users."
    },
    {
        title: "ISEP Studies & Internship - Student Tutoring and Summer Research",
        organization: "Truman State University",
        location: "USA",
        period: "2021",
        type: "education",
        description: "Conducted research in machine learning applications. Tutored undergraduate students in computer science courses and achieved 95% positive feedback."
    },
    {
        title: "Simulation Engineer Internship",
        organization: "Estonian Aviation Academy",
        location: "Estonia",
        period: "2020",
        type: "work",
        description: "Developed flight simulation software modules and contributed to training program improvements. Enhanced simulation accuracy by 25%."
    },
    {
        title: "Master in Software Engineering",
        organization: "Masaryk University",
        location: "Czech Republic",
        period: "2020-2023",
        type: "education",
        description: "Specialized in cybersecurity and distributed systems. Completed thesis on advanced intrusion detection systems using machine learning."
    },
    {
        title: "Erasmus Program",
        organization: "HTWG",
        location: "Germany",
        period: "2019-2020",
        type: "education",
        description: "Exchange program focusing on embedded systems and IoT development. Participated in international research projects."
    },
    {
        title: "Bachelor in Computer Systems & Communication",
        organization: "Masaryk University",
        location: "Czech Republic",
        period: "2017-2020",
        type: "education",
        description: "Focused on computer networks and system administration. Graduated with honors and completed practical projects in network security."
    },
    {
        title: "PC Hardware & Software Fixing Internship",
        organization: "PC Connect",
        location: "UK",
        period: "2016",
        type: "work",
        description: "Diagnosed and repaired hardware/software issues for customers. Maintained a 98% customer satisfaction rate."
    },
    {
        title: "High School Diploma",
        organization: "High School of Electrotechnic",
        location: "Slovakia",
        period: "2013-2017",
        type: "education",
        description: "Specialized in electronics and computer technology. Participated in national programming competitions."
    }
];

const Experience = () => {
    return (
        <section className="py-12 px-4 relative">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
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
                                                    <span className="text-sm text-muted-foreground bg-card px-2 py-0.5 rounded-full ml-2">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    {exp.organization} • {exp.location}
                                                </p>
                                                <p className="text-sm text-muted-foreground ">{exp.description}</p>
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
    );
};

export default Experience;
