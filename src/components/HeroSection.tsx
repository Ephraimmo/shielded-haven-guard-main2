import { Shield, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy via-navy/95 to-background pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-navy/95" />
        <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-5 py-2 mb-8">
            <Shield size={18} className="text-secondary" />
            <span className="font-body text-sm text-secondary tracking-wide uppercase">PSIRA Registered • B-BBEE Level 1</span>
          </div>
        </div>

        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight text-primary-foreground mb-6 animate-fade-in-up drop-shadow-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Nkanyezi<br />
          <span className="text-secondary">Security Services</span>
        </h1>

        <p
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          When our security machinery fails, we absorb the blame. But when we succeed, we sincerely share the joy of success with our customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a href="#services" className="bg-secondary text-secondary-foreground px-8 py-4 rounded font-heading text-lg uppercase tracking-wider hover:bg-gold-dark transition-colors">
            Our Services
          </a>
          <a href="#contact" className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded font-heading text-lg uppercase tracking-wider hover:border-secondary hover:text-secondary transition-colors">
            Get a Quote
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
