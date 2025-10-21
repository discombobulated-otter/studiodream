import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import wedding1 from "@/assets/wedding-1.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import product1 from "@/assets/product-1.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import commercial1 from "@/assets/commercial-1.jpg";
import abstract1 from "@/assets/abstract-1.jpg";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const fullCollection = [
  { id: 1, title: 'Eternal Moments', category: 'Wedding', image: wedding1 },
  { id: 2, title: 'Urban Essence', category: 'Portrait', image: portrait1 },
  { id: 3, title: 'Luxury Refined', category: 'Product', image: product1 },
  { id: 4, title: 'Majestic Horizons', category: 'Landscape', image: landscape1 },
  { id: 5, title: 'Corporate Vision', category: 'Commercial', image: commercial1 },
  { id: 6, title: 'Flowing Dreams', category: 'Abstract', image: abstract1 },
  { id: 7, title: 'Golden Hour Love', category: 'Wedding', image: wedding1 },
  { id: 8, title: 'Character Study', category: 'Portrait', image: portrait1 },
  { id: 9, title: 'Product Perfection', category: 'Product', image: product1 },
  { id: 10, title: 'Nature\'s Canvas', category: 'Landscape', image: landscape1 },
  { id: 11, title: 'Brand Story', category: 'Commercial', image: commercial1 },
  { id: 12, title: 'Abstract Emotions', category: 'Abstract', image: abstract1 },
];

const GalleryModal = ({ isOpen, onClose }: GalleryModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-7xl max-h-[90vh] bg-card rounded-3xl shadow-2xl overflow-hidden border border-border"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card/95 backdrop-blur-sm z-10">
              <div>
                <h2 className="text-3xl font-serif font-bold">Full Collection</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Browse all {fullCollection.length} projects
                </p>
              </div>
              <motion.button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-background hover:bg-accent/10 border border-border flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fullCollection.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-accent text-xs font-sans mb-1 tracking-wider uppercase">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl font-serif font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
