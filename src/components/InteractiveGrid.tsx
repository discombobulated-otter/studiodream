import { motion } from "framer-motion";
import { useState } from "react";
import wedding1 from "@/assets/wedding-1.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import product1 from "@/assets/product-1.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import commercial1 from "@/assets/commercial-1.jpg";
import abstract1 from "@/assets/abstract-1.jpg";
import GalleryModal from "./GalleryModal";

interface InteractiveGridProps {
  onHover: () => void;
  onLeave: () => void;
}

const projects = [
  { id: 1, title: 'Eternal Moments', category: 'Wedding', image: wedding1, span: 'col-span-2 row-span-2' },
  { id: 2, title: 'Urban Essence', category: 'Portrait', image: portrait1, span: 'col-span-1 row-span-2' },
  { id: 3, title: 'Luxury Refined', category: 'Product', image: product1, span: 'col-span-1 row-span-1' },
  { id: 4, title: 'Majestic Horizons', category: 'Landscape', image: landscape1, span: 'col-span-2 row-span-1' },
  { id: 5, title: 'Corporate Vision', category: 'Commercial', image: commercial1, span: 'col-span-1 row-span-1' },
  { id: 6, title: 'Flowing Dreams', category: 'Abstract', image: abstract1, span: 'col-span-1 row-span-1' },
];

const InteractiveGrid = ({ onHover, onLeave }: InteractiveGridProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-8 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-12"
      >
        <h2 className="text-6xl md:text-8xl font-serif font-bold mb-4 text-balance">
          Our <span className="italic text-accent">Portfolio</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Explore our curated collection of visual stories, each crafted with passion and precision.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-3 auto-rows-[300px] gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${project.span}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => {
              setHoveredId(project.id);
              onHover();
            }}
            onMouseLeave={() => {
              setHoveredId(null);
              onLeave();
            }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{
                scale: hoveredId === project.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === project.id ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <motion.div
              className="absolute inset-0 p-6 flex flex-col justify-end"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: hoveredId === project.id ? 0 : 20,
                opacity: hoveredId === project.id ? 1 : 0.8
              }}
            >
              <span className="text-accent text-sm font-sans mb-2 tracking-wider uppercase">
                {project.category}
              </span>
              <h3 className="text-white text-3xl font-serif font-bold">
                {project.title}
              </h3>
            </motion.div>

            {/* Magnetic corners */}
            {hoveredId === project.id && (
              <>
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                />
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto mt-16 text-center"
      >
        <p className="text-muted-foreground mb-6">Want to see more?</p>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-sans font-medium hover:bg-accent/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Full Collection
        </motion.button>
      </motion.div>

      <GalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default InteractiveGrid;
