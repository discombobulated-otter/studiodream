import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface ContactOrbProps {
  onHover: () => void;
  onLeave: () => void;
}

const ContactOrb = ({ onHover, onLeave }: ContactOrbProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 bg-accent text-accent-foreground rounded-full shadow-2xl z-50 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isOpen 
            ? '0 0 0 0 rgba(212, 175, 55, 0)' 
            : ['0 0 0 0 rgba(212, 175, 55, 0.7)', '0 0 0 20px rgba(212, 175, 55, 0)']
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Contact Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-8 w-96 bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-40"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 border-b border-border">
              <h3 className="text-2xl font-serif font-bold mb-1">Get in Touch</h3>
              <p className="text-sm text-muted-foreground">Let's create something amazing together</p>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-sans text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-sans text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-sans text-muted-foreground mb-2 block">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  rows={4}
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                className="w-full py-3 bg-accent text-accent-foreground rounded-xl font-sans font-medium flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </div>

            {/* Quick Links */}
            <div className="px-6 pb-6 pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Or reach us directly:</p>
              <div className="flex gap-2">
                <a
                  href="mailto:hello@studiodream.com"
                  className="flex-1 py-2 px-3 bg-background hover:bg-accent/10 border border-border rounded-lg text-xs text-center transition-colors"
                >
                  Email
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex-1 py-2 px-3 bg-background hover:bg-accent/10 border border-border rounded-lg text-xs text-center transition-colors"
                >
                  Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactOrb;
