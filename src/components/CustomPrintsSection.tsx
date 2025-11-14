import { motion } from "framer-motion";
import { Shirt, KeyRound, Coffee, Image } from "lucide-react";

interface CustomPrintsSectionProps {
  onHover: () => void;
  onLeave: () => void;
}

const printProducts = [
  {
    icon: Shirt,
    title: 'Custom T-Shirts',
    description: 'High-quality prints on premium fabric. Your favorite moments, perfectly wearable.',
    features: ['Premium cotton', 'Fade-resistant prints', 'All sizes available', 'Quick turnaround']
  },
  {
    icon: KeyRound,
    title: 'Keychains',
    description: 'Personalized photo keychains that travel with you everywhere.',
    features: ['Durable material', 'Clear photo quality', 'Custom shapes', 'Perfect gift idea']
  },
  {
    icon: Coffee,
    title: 'Custom Mugs',
    description: 'Start your day with cherished memories on ceramic mugs.',
    features: ['Dishwasher safe', 'High-quality ceramic', 'Vibrant colors', 'Multiple sizes']
  },
  {
    icon: Image,
    title: 'Posters (Any Size)',
    description: 'Professional poster prints in any size you need for your space.',
    features: ['Any custom size', 'Museum-quality paper', 'Framing available', 'Matte or glossy finish']
  },
];

const CustomPrintsSection = ({ onHover, onLeave }: CustomPrintsSectionProps) => {
  return (
    <section id="prints" className="py-32 px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6">
            Custom <span className="italic text-accent">Prints</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your favorite photos into tangible memories. We create custom prints on a variety of products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {printProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              className="bg-card border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 group hover:shadow-elegant"
              whileHover={{ y: -8 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--highlight))]/20 transition-colors">
                  <product.icon className="text-[hsl(var(--highlight))] group-hover:text-[hsl(var(--highlight))]" size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-muted-foreground">
                    <span className="mr-2 text-[hsl(var(--highlight))] mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Order Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Need a different product or custom size?</p>
          <motion.button
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="px-8 py-4 bg-card border border-accent text-foreground rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for Custom Orders
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomPrintsSection;