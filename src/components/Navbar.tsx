import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/NKANYEZI.png";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Training", href: "#training", id: "training" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              setActiveSection(`#${id}`);
            }
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Nkanyezi Security Logo" className="h-14 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`font-heading text-sm uppercase tracking-widest transition-colors border-b-2 pb-1 ${
                  isActive
                    ? "text-secondary border-secondary"
                    : "text-primary-foreground/80 border-transparent hover:text-secondary hover:border-secondary/60"
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href="tel:+27000000000"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2 rounded font-heading text-sm uppercase tracking-wider hover:bg-gold-dark transition-colors"
          >
            <Phone size={16} /> Call Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 animate-fade-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-heading text-lg uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-secondary"
                      : "text-primary-foreground/80 hover:text-secondary"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
