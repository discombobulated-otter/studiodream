import { motion } from "framer-motion";
import { Grid3x3, Sparkles, SplitSquareHorizontal, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingNavProps {
  onViewChange: (view: 'mosaic' | 'kaleidoscope' | 'split') => void;
  currentView: 'mosaic' | 'kaleidoscope' | 'split';
  onHover: () => void;
  onLeave: () => void;
}

const FloatingNav = ({ onViewChange, currentView, onHover, onLeave }: FloatingNavProps) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const navItems = [
    { id: 'mosaic' as const, icon: Grid3x3, label: 'Mosaic' },
    { id: 'kaleidoscope' as const, icon: Sparkles, label: 'Kaleidoscope' },
    { id: 'split' as const, icon: SplitSquareHorizontal, label: 'Split' },
  ];

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

      {/* View Mode Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-8 right-8 z-50 flex items-center gap-3"
      >
        <div className="flex gap-2 bg-card/80 backdrop-blur-md rounded-full p-2 border border-border">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              className={`relative p-3 rounded-full transition-all ${
                currentView === item.id
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className="w-5 h-5" />
              <span className="sr-only">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Theme Toggle */}
        <motion.button
          onClick={() => setIsDark(!isDark)}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          className="p-3 rounded-full bg-card/80 backdrop-blur-md border border-border hover:bg-secondary transition-all"
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>
      </motion.div>
    </>
  );
};

export default FloatingNav;
