import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle, Instagram } from "lucide-react";

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

  const contactMethods = [
    { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, label: "Email", value: "hello@studio.com", href: "mailto:hello@studio.com" },
    { icon: MessageCircle, label: "WhatsApp", value: "Message Us", href: "https://wa.me/15551234567" },
    { icon: Instagram, label: "Instagram", value: "@photostudio", href: "https://instagram.com/photostudio" },
  ];

  return (
    <section id="booking" className="py-32 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6">
            Get In <span className="italic text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create something amazing? Reach out directly or fill out the form below.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent transition-all group"
            >
              <method.icon className="w-8 h-8 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">{method.label}</h3>
              <p className="text-sm text-muted-foreground">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Booking Form */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-semibold mb-2">Or Book a Session</h3>
          <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours</p>
        </div>

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
