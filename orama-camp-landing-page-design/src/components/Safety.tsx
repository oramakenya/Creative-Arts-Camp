import { Shield, CheckCircle2, Users, Award, FileCheck, HeartPulse, Lock } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';

function SafetyIcon({ name }: { name: string }) {
  const icons: Record<string, any> = { shield: Shield, users: Users, filecheck: FileCheck, award: Award, heartpulse: HeartPulse, lock: Lock };
  const Icon = icons[name] || Shield;
  return <Icon className="w-6 h-6 text-orama-orange" />;
}

export default function Safety() {
  const { safety } = SITE_CONTENT;

  return (
    <section id="safety" className="py-24 bg-orama-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orama-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orama-orange-light/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orama-orange/10 border border-orama-orange/20 text-orama-orange text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            {safety.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            {safety.title.split(', ')[0]}, <span className="gradient-text">{safety.title.split(', ')[1]}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/50 leading-relaxed">{safety.description}</p>
        </div>

        {/* Safety Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {safety.features.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orama-orange/30 hover:bg-white/8 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orama-orange/15 flex items-center justify-center mb-4 group-hover:bg-orama-orange/25 transition-colors">
                <SafetyIcon name={feature.icon} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-orama-orange/10 to-orama-orange-light/10 border border-orama-orange/20 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-orama-orange/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-8 h-8 text-orama-orange" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{safety.trustBanner.title}</h3>
              <p className="text-white/60 leading-relaxed">{safety.trustBanner.text}</p>
            </div>
          </div>
        </div>

        {/* Supervision Ratio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {safety.stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-3xl font-extrabold text-orama-orange mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
