import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/NKANYEZI.png";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const SUBJECTS = [
  "Armed Response",
  "CCTV & Surveillance",
  "VIP Protection",
  "Security Training",
  "Access Control",
  "Event Security",
  "General Inquiry",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      toast({
        title: "Contact form not configured",
        description: "Add VITE_WEB3FORMS_ACCESS_KEY to your .env file. Get a free key at web3forms.com",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: `[Nkanyezi Website] ${form.subject}`,
          message: form.message,
          botcheck: "",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send");
      }

      toast({ title: "Message sent successfully!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      toast({ title: "Failed to send message", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-secondary">Get In Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mt-2">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Make the right decision today by partnering with NKANYEZI Security. You, your tenants and their guests will enjoy a practically secure tomorrow and a safe future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Phone className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground">Phone</h4>
                <p className="font-body text-muted-foreground">+27 60 359 5202</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Mail className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground">Email</h4>
                <p className="font-body text-muted-foreground">info@nkanyezisecurity.co.za</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <MapPin className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground">Location</h4>
                <p className="font-body text-muted-foreground">South Africa</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Clock className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground">Availability</h4>
                <p className="font-body text-muted-foreground">24 Hours / 7 Days a Week / 365 Days a Year</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="glass-card rounded-lg p-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="font-heading text-sm uppercase tracking-wider text-foreground">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-muted border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="font-heading text-sm uppercase tracking-wider text-foreground">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-muted border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="font-heading text-sm uppercase tracking-wider text-foreground">Subject</label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-muted border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              >
                <option value="">Select a subject...</option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-heading text-sm uppercase tracking-wider text-foreground">Message</label>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-muted border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                placeholder="Tell us about your security needs..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-secondary-foreground py-4 rounded-lg font-heading text-lg uppercase tracking-wider hover:bg-gold-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-border pt-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Nkanyezi Logo" className="h-10 w-auto" />
            <span className="font-heading text-lg uppercase text-foreground">Nkanyezi (PTY) Ltd</span>
          </div>
          <p className="font-body text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Nkanyezi Security Services. All rights reserved. PSIRA Accreditation: 161999692568
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
