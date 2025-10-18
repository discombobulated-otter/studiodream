import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Grid3x3, Sparkles, Image as ImageIcon, Zap } from "lucide-react";
import MagneticCursor from "@/components/MagneticCursor";
import FloatingNav from "@/components/FloatingNav";
import InteractiveGrid from "@/components/InteractiveGrid";
import SplitHero from "@/components/SplitHero";
import KaleidoscopeView from "@/components/KaleidoscopeView";
import ContactOrb from "@/components/ContactOrb";

type ViewMode = 'mosaic' | 'kaleidoscope' | 'split';

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('mosaic');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'view'>('default');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <MagneticCursor variant={cursorVariant} />
      
      <FloatingNav 
        onViewChange={setViewMode} 
        currentView={viewMode}
        onHover={() => setCursorVariant('hover')}
        onLeave={() => setCursorVariant('default')}
      />

      <AnimatePresence mode="wait">
        {viewMode === 'mosaic' && (
          <motion.div
            key="mosaic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InteractiveGrid onHover={() => setCursorVariant('view')} onLeave={() => setCursorVariant('default')} />
          </motion.div>
        )}

        {viewMode === 'kaleidoscope' && (
          <motion.div
            key="kaleidoscope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <KaleidoscopeView onHover={() => setCursorVariant('view')} onLeave={() => setCursorVariant('default')} />
          </motion.div>
        )}

        {viewMode === 'split' && (
          <motion.div
            key="split"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SplitHero onHover={() => setCursorVariant('hover')} onLeave={() => setCursorVariant('default')} />
          </motion.div>
        )}
      </AnimatePresence>

      <ContactOrb onHover={() => setCursorVariant('hover')} onLeave={() => setCursorVariant('default')} />
    </div>
  );
};

export default Index;
