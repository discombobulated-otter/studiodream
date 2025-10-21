import { motion } from "framer-motion";
import { Award, Camera, Users, Zap } from "lucide-react";

interface AboutSectionProps {
  onHover: () => void;
  onLeave: () => void;
}

const stats = [
  { icon: Camera, label: 'Projects Completed', value: '500+' },
  { icon: Users, label: 'Happy Clients', value: '300+' },
  { icon: Award, label: 'Awards Won', value: '15' },
  { icon: Zap, label: 'Years Experience', value: '10+' },
];

const AboutSection = ({ onHover, onLeave }: AboutSectionProps) => {
  return (
    <section id="about" className="py-32 px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6">
              About <span className="italic text-accent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              I'm a passionate photographer dedicated to capturing life's most precious moments through a unique blend of artistic vision and technical excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience, I've had the privilege of working with hundreds of clients, from intimate weddings to major commercial campaigns. My approach combines documentary-style authenticity with editorial polish.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Based in New York, I'm available for projects worldwide. Let's create something beautiful together.
            </p>
            
            <motion.button
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent transition-all"
                whileHover={{ y: -8 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-accent" size={24} />
                </div>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
