import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: 'Sarah & Michael',
    role: 'Wedding Clients',
    text: 'Absolutely phenomenal! Our wedding photos exceeded all expectations. Every moment was captured with such artistry and emotion. We couldn\'t be happier!',
    rating: 5
  },
  {
    name: 'Jessica Thompson',
    role: 'Portrait Client',
    text: 'The portrait session was incredible. Professional, creative, and made me feel completely comfortable. The results speak for themselves!',
    rating: 5
  },
  {
    name: 'TechStart Inc.',
    role: 'Commercial Client',
    text: 'Outstanding commercial work. Delivered exactly what we needed for our brand campaign, on time and beyond our creative vision.',
    rating: 5
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6">
            Client <span className="italic text-accent">Love</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients have to say about their experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-accent text-accent" size={18} />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
              
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
