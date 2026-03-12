import { GraduationCap, RefreshCw, TrendingUp } from "lucide-react";

const trainingItems = [
  {
    icon: GraduationCap,
    title: "Spot Training",
    desc: "Once off training is insufficient in ensuring optimum levels at all times. Security staff are constantly retrained and tested in various aspects of their duties specific to the facility in which they serve.",
  },
  {
    icon: RefreshCw,
    title: "Drilling Specialist Training",
    desc: "We frequently assess the need and benefit of additional and specialist training to keep our officers at the highest standard of readiness.",
  },
  {
    icon: TrendingUp,
    title: "Development Training",
    desc: "NKANYEZI Security Services has an in-house programme of training for all new supervisors and senior staff that provides them with the tools necessary to fulfill their roles in dynamic environments. This facilitates improved staff retention and provides a clear progression path.",
  },
];

const TrainingSection = () => {
  return (
    <section id="training" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-secondary">Excellence Through Training</span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mt-2">
            Security <span className="text-primary">Training</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainingItems.map((t) => (
            <div key={t.title} className="glass-card rounded-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6">
                <t.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-heading text-xl uppercase text-foreground mb-4">{t.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
