import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onHover: () => void;
  onLeave: () => void;
}

const Hero = ({ onHover, onLeave }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-accent text-sm tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Visual Storyteller
          </motion.p>
          
          <h1 className="text-7xl md:text-9xl font-serif font-bold mb-6 text-balance">
            Capturing
            <br />
            <span className="italic text-accent">Timeless</span> Moments
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Award-winning photography that tells your unique story through light, emotion, and artistry.
          </p>
          
          <motion.button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all shadow-glow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-accent" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
