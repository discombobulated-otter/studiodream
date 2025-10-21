import { motion } from "framer-motion";
import { useState } from "react";
import wedding1 from "@/assets/wedding-1.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import product1 from "@/assets/product-1.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import commercial1 from "@/assets/commercial-1.jpg";
import abstract1 from "@/assets/abstract-1.jpg";
import GalleryModal from "./GalleryModal";

interface PortfolioSectionProps {
  onHover: () => void;
  onLeave: () => void;
}

const categories = ['All', 'Wedding', 'Portrait', 'Commercial', 'Landscape', 'Product'];

const projects = [
  { id: 1, title: 'Eternal Moments', category: 'Wedding', image: wedding1, desc: 'Luxury wedding at Château de Versailles' },
  { id: 2, title: 'Urban Essence', category: 'Portrait', image: portrait1, desc: 'Editorial fashion portraits in NYC' },
  { id: 3, title: 'Luxury Refined', category: 'Product', image: product1, desc: 'High-end jewelry product photography' },
  { id: 4, title: 'Majestic Horizons', category: 'Landscape', image: landscape1, desc: 'Fine art landscape series' },
  { id: 5, title: 'Corporate Vision', category: 'Commercial', image: commercial1, desc: 'Brand campaign for tech startup' },
  { id: 6, title: 'Flowing Dreams', category: 'Abstract', image: abstract1, desc: 'Abstract art photography collection' },
];

const PortfolioSection = ({ onHover, onLeave }: PortfolioSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6">
            Featured <span className="italic text-accent">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio spanning weddings, portraits, commercial projects, and more.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground shadow-glow'
                  : 'bg-card border border-border hover:border-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5]"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-accent text-sm font-sans mb-2 tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-serif font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="px-8 py-4 bg-card border border-accent text-foreground rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Collection
          </motion.button>
        </motion.div>
      </div>

      <GalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default PortfolioSection;
