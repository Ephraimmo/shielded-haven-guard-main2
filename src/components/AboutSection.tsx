import { CheckCircle, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Clock, label: "24/7", desc: "Armed Response" },
  { icon: Award, label: "PSIRA", desc: "Registered" },
  { icon: Users, label: "B-BBEE", desc: "Level 1" },
  { icon: CheckCircle, label: "100%", desc: "Black Owned" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-lg p-6 text-center">
              <s.icon className="mx-auto mb-3 text-secondary" size={32} />
              <div className="font-heading text-2xl text-primary">{s.label}</div>
              <div className="font-body text-sm text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-heading text-sm uppercase tracking-[0.3em] text-secondary">About Us</span>
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mt-2 mb-6">
              Company <span className="text-primary">Background</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              NKANYEZI Security Services is a company that specializes in security and training services. From the time of its conception in 2025, the company has grown in its cliental numbers and the quality of services offered has increased as well. We are proud to say that our company is no longer just the 'book-say' security — experience in the industry of both security and training has helped us to offer the best services possible.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              We assist in identifying security-high-risk areas, analyze, recommend and implement effective security control methods and devise prevention and detection strategies to avoid recurrence of illicit criminal activities and bring an end to textbook security.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              <strong className="text-foreground">Accreditation Number:</strong> 161999692568
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-2xl uppercase text-foreground">Registered With</h3>
            {["CIPC", "Broad Based Black Economic Empowerment (Level 1)", "PSIRA", "Provident Fund", "SARS"].map((r) => (
              <div key={r} className="flex items-center gap-3 bg-muted rounded-lg p-4">
                <CheckCircle className="text-secondary shrink-0" size={20} />
                <span className="font-body text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
