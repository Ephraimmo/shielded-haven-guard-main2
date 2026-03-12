import { AlertTriangle } from "lucide-react";

const emergencyDuties = [
  "Safeguard the building at all times.",
  "Apply access control, even in an emergency — only authorized personnel (SAPS, Firemen, Ambulance) may enter.",
  "Do not allow visitors into the building during an emergency.",
  "Open all main entrances during evacuation.",
  "Summon all lifts to ground floor and keep them there.",
  "Ensure periodic checks that all entrances are clear and litter-free.",
  "Ensure all staff leave the building in an orderly way.",
  "Lock all outer doors after staff and emergency teams have vacated.",
];

const EmergencySection = () => {
  return (
    <section className="section-padding bg-navy">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-5 py-2 mb-4">
            <AlertTriangle size={18} className="text-secondary" />
            <span className="font-body text-sm text-secondary uppercase tracking-wide">Contingency Planning</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl uppercase text-primary-foreground">
            Emergency <span className="text-secondary">Procedures</span>
          </h2>
          <p className="font-heading text-base text-secondary/80 mt-4 italic">
            "When it feels more peaceful and at ease, a security disaster is about to strike."
          </p>
        </div>

        <div className="space-y-3">
          {emergencyDuties.map((duty, i) => (
            <div key={i} className="flex gap-4 items-start bg-navy-light/50 border border-gold/10 rounded-lg p-4">
              <span className="font-heading text-secondary text-lg shrink-0 w-8">{i + 1}.</span>
              <p className="font-body text-primary-foreground/80 text-sm">{duty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
