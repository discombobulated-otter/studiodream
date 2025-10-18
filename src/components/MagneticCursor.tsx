import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MagneticCursorProps {
  variant: 'default' | 'hover' | 'view';
}

const MagneticCursor = ({ variant }: MagneticCursorProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  const getSize = () => {
    switch (variant) {
      case 'hover': return 60;
      case 'view': return 100;
      default: return 20;
    }
  };

  const size = getSize();

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          width: size,
          height: size,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div 
          className="w-full h-full rounded-full border-2 border-white"
          style={{
            boxShadow: variant === 'view' ? '0 0 20px rgba(255,255,255,0.5)' : 'none'
          }}
        />
      </motion.div>
      
      {variant === 'view' && (
        <motion.div
          className="fixed pointer-events-none z-[9998] text-white text-xs font-sans"
          animate={{
            x: mousePosition.x + 15,
            y: mousePosition.y + 15,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          VIEW
        </motion.div>
      )}
    </>
  );
};

export default MagneticCursor;
