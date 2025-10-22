import { motion } from "framer-motion";
import { Camera, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

interface FloatingNavProps {
  onHover: () => void;
  onLeave: () => void;
}

const FloatingNav = ({ onHover, onLeave }: FloatingNavProps) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Prints', href: '#prints' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#booking' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-8 left-8 z-50"
      >
        <h1 className="text-2xl font-serif font-bold text-foreground">
          Studio <span className="text-accent">dReam</span>
        </h1>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-full px-6 py-3 shadow-elegant">
          <div className="flex items-center gap-6">
            <Camera className="text-accent" size={24} />
            
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="text-sm font-medium hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}

            <div className="w-px h-6 bg-border" />

            <motion.button
              onClick={() => setIsDark(!isDark)}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              className="p-2 rounded-full hover:bg-accent/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default FloatingNav;
