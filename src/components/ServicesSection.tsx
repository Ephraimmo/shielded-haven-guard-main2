import { Shield, Camera, Car, UserCheck, Search, Lock, Users, Eye, Building } from "lucide-react";
import servicesCctv from "@/assets/services-cctv.jpg";
import servicesResponse from "@/assets/services-response.jpg";
import servicesVip from "@/assets/services-vip.jpg";

const mainServices = [
  {
    image: servicesResponse,
    title: "Armed & Unarmed Guards",
    desc: "24-hour armed response vehicle, armed and unarmed guard services. Our Active Service Unit and Stand-By Service Unit ensure right officer deployment at all times.",
  },
  {
    image: servicesCctv,
    title: "CCTV & Electronic Security",
    desc: "Analogue and digital CCTV systems, electronic security device installations and monitoring. Complete surveillance solutions for your property.",
  },
  {
    image: servicesVip,
    title: "VIP Protection",
    desc: "Professional close protection for VIPs, crowd control, and specialized criminal prevention services. Discreet and effective protection you can trust.",
  },
];

const allServices = [
  { icon: Shield, label: "24 Hour Armed Response" },
  { icon: UserCheck, label: "Armed & Unarmed Guards" },
  { icon: Camera, label: "CCTV Systems" },
  { icon: Building, label: "Retail Sector Security" },
  { icon: Eye, label: "Secret & Fitting Room Agents" },
  { icon: Search, label: "Private Investigations" },
  { icon: Car, label: "Criminal Mobile Investigation" },
  { icon: Lock, label: "Access Control" },
  { icon: Users, label: "Crowd Control" },
  { icon: Shield, label: "Street Barricading" },
  { icon: UserCheck, label: "VIP Protection" },
  { icon: Eye, label: "Stock Taking Service" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-navy">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-secondary">What We Offer</span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-primary-foreground mt-2">
            Our <span className="text-secondary">Services</span>
          </h2>
        </div>

        {/* Main 3 cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((s) => (
            <div key={s.title} className="group rounded-lg overflow-hidden bg-navy-light border border-gold/10 hover:border-secondary/40 transition-all duration-300">
              <div className="h-52 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl uppercase text-primary-foreground mb-3">{s.title}</h3>
                <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* All services grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allServices.map((s) => (
            <div key={s.label} className="flex items-center gap-3 bg-navy-light/50 border border-gold/10 rounded-lg p-4 hover:border-secondary/30 transition-colors">
              <s.icon className="text-secondary shrink-0" size={20} />
              <span className="font-body text-primary-foreground/80 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
