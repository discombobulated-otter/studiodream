import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import wedding1 from "@/assets/wedding-1.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import product1 from "@/assets/product-1.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import commercial1 from "@/assets/commercial-1.jpg";
import abstract1 from "@/assets/abstract-1.jpg";

interface KaleidoscopeViewProps {
  onHover: () => void;
  onLeave: () => void;
}

const images = [wedding1, portrait1, product1, landscape1, commercial1, abstract1];

const KaleidoscopeView = ({ onHover, onLeave }: KaleidoscopeViewProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ rotate: rotation }}
        style={{ transformOrigin: 'center' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-accent via-transparent to-accent" />
      </motion.div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Center large image */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <motion.div
            className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl"
            layoutId={`image-${activeIndex}`}
          >
            <img
              src={images[activeIndex]}
              alt={`Gallery ${activeIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              animate={{
                background: `radial-gradient(circle at ${50 + Math.sin(rotation / 10) * 20}% ${50 + Math.cos(rotation / 10) * 20}%, transparent 0%, rgba(212, 175, 55, 0.1) 100%)`
              }}
            />
          </motion.div>

          {/* Floating title */}
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-md px-8 py-4 rounded-full border border-border"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-xl font-serif font-bold">Image {activeIndex + 1} of {images.length}</span>
          </motion.div>
        </motion.div>

        {/* Circular thumbnail navigation */}
        <div className="relative w-[500px] h-[500px] mx-auto mt-24">
          {images.map((image, index) => {
            const angle = (index / images.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 200;
            const x = Math.cos(angle + rotation / 100) * radius;
            const y = Math.sin(angle + rotation / 100) * radius;

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 cursor-pointer"
                style={{
                  x: x - 60,
                  y: y - 60,
                }}
                animate={{
                  scale: activeIndex === index ? 1.3 : 1,
                  rotate: -rotation / 100 * (180 / Math.PI),
                }}
                onClick={() => handleImageClick(index)}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                whileHover={{ scale: activeIndex === index ? 1.3 : 1.2 }}
              >
                <div className={`w-32 h-32 rounded-full overflow-hidden border-4 transition-all ${
                  activeIndex === index ? 'border-accent shadow-xl' : 'border-border'
                }`}>
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}

          {/* Center orb */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-24 h-24 -ml-12 -mt-12 rounded-full bg-accent/20 backdrop-blur-sm border-2 border-accent flex items-center justify-center"
            animate={{ rotate: rotation }}
          >
            <div className="text-accent font-serif font-bold text-sm">Studio</div>
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.p
          className="text-center text-muted-foreground mt-12 font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Click on the orbiting images to view them
        </motion.p>
      </div>
    </div>
  );
};

export default KaleidoscopeView;
