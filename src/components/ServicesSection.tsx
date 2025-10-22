import { motion } from "framer-motion";
import { Heart, User, Briefcase, Mountain, Package, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  onHover: () => void;
  onLeave: () => void;
}

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Full-day coverage capturing every precious moment of your special day',
    features: ['8-10 hours coverage', '500+ edited photos', 'Online gallery', 'Engagement session']
  },
  {
    icon: User,
    title: 'Portrait Sessions',
    description: 'Professional portraits for individuals, couples, and families',
    features: ['1-2 hour session', '30+ edited photos', 'Location of choice', 'Styling consultation']
  },
  {
    icon: Briefcase,
    title: 'Commercial Work',
    description: 'Brand campaigns, product photography, and corporate headshots',
    features: ['Brand strategy', 'Unlimited revisions', 'Usage rights', 'Full production']
  },
];

const ServicesSection = ({ onHover, onLeave }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-32 px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6">
            Our <span className="italic text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored photography packages designed to meet your unique needs and vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              className="bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 group hover:shadow-elegant"
              whileHover={{ y: -8 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <Sparkles className="mr-2 text-accent" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full mt-8 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
