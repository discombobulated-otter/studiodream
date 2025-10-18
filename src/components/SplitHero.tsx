import { motion } from "framer-motion";
import { useState } from "react";
import wedding1 from "@/assets/wedding-1.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import { Camera, Mail, Phone } from "lucide-react";

interface SplitHeroProps {
  onHover: () => void;
  onLeave: () => void;
}

const SplitHero = ({ onHover, onLeave }: SplitHeroProps) => {
  const [split, setSplit] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSplit(percentage);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Left Side - About */}
      <motion.div
        className="absolute inset-y-0 left-0 bg-background"
        style={{ width: `${split}%` }}
        transition={{ type: "tween", duration: 0 }}
      >
        <div className="relative h-full flex items-center justify-center overflow-hidden">
          <img
            src={wedding1}
            alt="Wedding"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 max-w-lg px-12 text-left">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Camera className="w-16 h-16 mb-6 text-accent" />
            </motion.div>
            
            <motion.h2
              className="text-6xl font-serif font-bold mb-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Where Moments Become <span className="text-accent italic">Art</span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              At Studio dReam, we don't just take photographs—we craft visual stories that transcend time. 
              Each frame is a carefully composed narrative, blending technical mastery with artistic vision.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold">10+ Years</h4>
                  <p className="text-sm text-muted-foreground">Professional Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">500+</span>
                </div>
                <div>
                  <h4 className="font-serif font-semibold">Happy Clients</h4>
                  <p className="text-sm text-muted-foreground">Across Multiple Countries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Contact */}
      <motion.div
        className="absolute inset-y-0 right-0 bg-card"
        style={{ width: `${100 - split}%` }}
        transition={{ type: "tween", duration: 0 }}
      >
        <div className="relative h-full flex items-center justify-center overflow-hidden">
          <img
            src={portrait1}
            alt="Portrait"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 max-w-lg px-12">
            <motion.h2
              className="text-6xl font-serif font-bold mb-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Let's Create <span className="text-accent italic">Together</span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-muted-foreground mb-12"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Ready to transform your vision into stunning imagery? Get in touch.
            </motion.p>

            <motion.div
              className="space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="mailto:hello@studiodream.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-accent transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-sans font-medium">hello@studiodream.com</p>
                </div>
              </a>

              <a
                href="tel:+911234567890"
                className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-accent transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-sans font-medium">+91 123 456 7890</p>
                </div>
              </a>

              <motion.button
                className="w-full py-4 bg-accent text-accent-foreground rounded-full font-sans font-medium hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Session
              </motion.button>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Available for weddings, portraits, commercial & product photography
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Divider Line */}
      <motion.div
        className="absolute inset-y-0 w-1 bg-accent shadow-2xl z-20"
        style={{ left: `${split}%` }}
        transition={{ type: "tween", duration: 0 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-xl">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-background rounded-full" />
            <div className="w-1 h-4 bg-background rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Instruction */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-md px-6 py-3 rounded-full border border-border z-30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-sm text-muted-foreground font-sans">
          Move your cursor to explore ←→
        </p>
      </motion.div>
    </div>
  );
};

export default SplitHero;
