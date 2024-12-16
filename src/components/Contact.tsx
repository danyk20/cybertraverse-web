import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-8">
          {[
            { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:your@email.com", label: "Email" },
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-background rounded-full hover:bg-primary/20 transition-colors duration-300"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-primary" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;