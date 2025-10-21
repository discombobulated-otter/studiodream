import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface BookingSectionProps {
  onHover: () => void;
  onLeave: () => void;
}

const BookingSection = ({ onHover, onLeave }: BookingSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-32 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6">
            Book Your <span className="italic text-accent">Session</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create something amazing? Fill out the form below and let's start planning your perfect shoot.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="portrait">Portrait Session</option>
                <option value="commercial">Commercial Work</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project, vision, and any specific requirements..."
            />
          </div>

          <motion.button
            type="submit"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all shadow-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Booking Request
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
