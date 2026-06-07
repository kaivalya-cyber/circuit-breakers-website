import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", interest: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", interest: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "team@qbitrobotics.org", href: "mailto:team@qbitrobotics.org" },
    { icon: Phone, label: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "San Jose, CA", href: null },
    { icon: Clock, label: "Practice", value: "Tue/Thu 3:30-6:00 PM", href: null },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">🚀 Get Involved</span>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">Join <span className="gradient-text">QBIT</span></h2>
          <div className="divider-glow mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Whether you're a student, mentor, sponsor, or just want to learn — we'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Send className="w-5 h-5 text-purple-400" />Send us a message</h3>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="w-8 h-8 text-purple-400" /></div>
                  <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-sm">We'll get back to you within 48 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div><label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label><input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 text-foreground placeholder:text-muted-foreground/50 transition-colors" placeholder="Your full name" /></div>
                  <div><label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label><input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 text-foreground placeholder:text-muted-foreground/50 transition-colors" placeholder="your@email.com" /></div>
                  <div><label htmlFor="interest" className="block text-sm font-medium mb-1.5">I'm interested in</label><select id="interest" name="interest" value={formData.interest} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 text-foreground transition-colors"><option value="" className="bg-background">Select an option</option><option value="student" className="bg-background">Joining as a Student</option><option value="mentor" className="bg-background">Becoming a Mentor</option><option value="sponsor" className="bg-background">Sponsoring the Team</option><option value="camp" className="bg-background">Summer Camp Interest</option><option value="other" className="bg-background">Other</option></select></div>
                  <div><label htmlFor="message" className="block text-sm font-medium mb-1.5">Message *</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 text-foreground placeholder:text-muted-foreground/50 resize-none transition-colors" placeholder="Tell us about yourself..." /></div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-500/5 border border-purple-500/10"><AlertCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" /><p className="text-xs text-purple-300/80">This form is a demo. For real inquiries, email us directly at team@qbitrobotics.org.</p></div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-background font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.5)] disabled:opacity-60">{isSubmitting ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</> : <><Send className="w-4 h-4" />Send Message</>}</button>
                </form>
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors"><info.icon className="w-4 h-4 text-purple-400" /></div>
                    <div><p className="text-xs text-muted-foreground">{info.label}</p>{info.href ? <a href={info.href} className="text-sm font-medium hover:text-purple-400 transition-colors">{info.value}</a> : <p className="text-sm font-medium">{info.value}</p>}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Why Join QBIT?</h3>
              <div className="space-y-3">
                {["Hands-on robotics experience — build real competition robots","Learn programming (Java, Python), CAD, and electronics","Compete in FTC tournaments across the Bay Area","Teach others through our summer camp and workshop programs","Make friends and build leadership skills","No experience required — we'll teach you everything!"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" /><p className="text-sm text-muted-foreground">{item}</p></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
