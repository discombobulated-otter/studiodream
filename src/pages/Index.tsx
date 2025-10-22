import { useState, useEffect } from "react";
import MagneticCursor from "@/components/MagneticCursor";
import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import CustomPrintsSection from "@/components/CustomPrintsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";

const Index = () => {
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'view'>('default');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MagneticCursor variant={cursorVariant} />
      
      <FloatingNav 
        onHover={() => setCursorVariant('hover')}
        onLeave={() => setCursorVariant('default')}
      />

      <Hero onHover={() => setCursorVariant('hover')} onLeave={() => setCursorVariant('default')} />
      
      <PortfolioSection onHover={() => setCursorVariant('view')} onLeave={() => setCursorVariant('default')} />
      
      <ServicesSection onHover={() => setCursorVariant('hover')} onLeave={() => setCursorVariant('default')} />
      
      <CustomPrintsSection onHover={() => setCursorVariant('hover')} onLeave={() => setCursorVariant('default')} />
      
      <TestimonialsSection />
      
      <AboutSection onHover={() => setCursorVariant('hover')} onLeave={() => setCursorVariant('default')} />
      
      <BookingSection onHover={() => setCursorVariant('hover')} onLeave={() => setCursorVariant('default')} />
    </div>
  );
};

export default Index;
