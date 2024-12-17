import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "education" | "work";
}

const experiences: ExperienceItem[] = [
  {
    title: "Long-term & Short-term Internship",
    organization: "CERN",
    location: "Switzerland",
    period: "2023",
    type: "work"
  },
  {
    title: "Cybersecurity Internship - Firewall Tool Development",
    organization: "Hilti",
    location: "Switzerland",
    period: "2022",
    type: "work"
  },
  {
    title: "Cybersecurity Internship - Penetration Test Automation",
    organization: "Technické sítě Brno",
    location: "Switzerland",
    period: "2022",
    type: "work"
  },
  {
    title: "IT Administrator Internship",
    organization: "True Friends",
    location: "USA",
    period: "2021",
    type: "work"
  },
  {
    title: "ISEP Studies & Internship - Student Tutoring and Summer Research",
    organization: "Truman State University",
    location: "USA",
    period: "2021",
    type: "education"
  },
  {
    title: "Simulation Engineer Internship",
    organization: "Estonian Aviation Academy",
    location: "Estonia",
    period: "2020",
    type: "work"
  },
  {
    title: "Master in Software Engineering",
    organization: "Masaryk University",
    location: "Czech Republic",
    period: "2020-2023",
    type: "education"
  },
  {
    title: "Erasmus Program",
    organization: "HTWG",
    location: "Germany",
    period: "2019-2020",
    type: "education"
  },
  {
    title: "Bachelor in Computer Systems & Communication",
    organization: "Masaryk University",
    location: "Czech Republic",
    period: "2017-2020",
    type: "education"
  },
  {
    title: "PC Hardware & Software Fixing Internship",
    organization: "PC Connect",
    location: "UK",
    period: "2016",
    type: "work"
  },
  {
    title: "High School Diploma",
    organization: "High School of Electrotechnic",
    location: "Slovakia",
    period: "2013-2017",
    type: "education"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden">
                <div
                  className={`absolute left-0 top-0 w-2 h-full ${
                    exp.type === "education" ? "bg-primary" : "bg-blue-500"
                  }`}
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground">
                        {exp.organization} • {exp.location}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-card px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;