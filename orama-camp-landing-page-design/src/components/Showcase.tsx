import { Camera, Mic, Palette, Star, Users, Sparkles, Music, Paintbrush, BookOpen, Guitar } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, any> = {
    palette: Palette,
    mic: Mic,
    users: Users,
    camera: Camera,
    star: Star,
    sparkles: Sparkles,
  };
  const Icon = icons[name] || Palette;
  return <Icon className="w-5 h-5 text-white" />;
}

function ProductIllustration() {
  return (
    <div className="relative">
      <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orama-cream to-white p-8 h-full min-h-[300px] flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
          {[
            { icon: Palette, label: 'Paintings', color: 'from-rose-400 to-pink-500' },
            { icon: Guitar, label: 'Instruments', color: 'from-violet-400 to-purple-500' },
            { icon: Mic, label: 'Mics', color: 'from-blue-400 to-cyan-500' },
            { icon: BookOpen, label: 'Journals', color: 'from-amber-400 to-orange-500' },
            { icon: Paintbrush, label: 'Brushes', color: 'from-emerald-400 to-green-500' },
            { icon: Music, label: 'Stage', color: 'from-orama-orange to-orama-orange-light' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-[10px] font-medium text-orama-navy/60">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-orama-orange text-white shadow-lg font-bold text-sm flex items-center gap-1.5">
        <Sparkles className="w-4 h-4" />
        Day 4 — Open to All Families
      </div>
    </div>
  );
}

export default function Showcase() {
  const { showcase } = SITE_CONTENT;

  return (
    <section className="py-24 bg-gradient-to-b from-orama-cream to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orama-orange/20 to-transparent" />
      <div className="absolute -top-20 right-20 w-64 h-64 bg-orama-orange/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orama-orange/10 text-orama-orange text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {showcase.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orama-navy tracking-tight mb-6">
            {showcase.title.split(' ')[0]} <span className="gradient-text">& {showcase.title.split(' ')[2]}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-orama-gray leading-relaxed">
            {showcase.description}
          </p>
        </div>

        {/* Product Illustration + Features Layout */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2 relative">
            <ProductIllustration />
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {showcase.features.map((item, i) => {
              const gradients: Record<string, string> = {
                palette: 'from-rose-400 to-pink-500',
                mic: 'from-violet-400 to-purple-500',
                users: 'from-blue-400 to-cyan-500',
                camera: 'from-amber-400 to-orange-500',
                star: 'from-emerald-400 to-green-500',
                sparkles: 'from-orama-orange to-orama-orange-light',
              };
              return (
                <div key={i} className="group p-5 rounded-2xl bg-white shadow-sm border border-orama-warm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradients[item.icon]} flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform`}>
                    <FeatureIcon name={item.icon} />
                  </div>
                  <h3 className="text-base font-bold text-orama-navy mb-1">{item.title}</h3>
                  <p className="text-orama-gray text-xs leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Invitation Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-orama-navy to-orama-blue relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-orama-orange/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-20 w-32 h-32 bg-orama-orange-light/5 rounded-full blur-2xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-orama-orange/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-8 h-8 text-orama-orange" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{showcase.invitation.title}</h3>
              <p className="text-white/60 leading-relaxed">{showcase.invitation.text}</p>
            </div>
            <a href="#parents" className="px-6 py-3 rounded-xl bg-orama-orange text-white font-bold hover:bg-orama-orange-light transition-colors flex-shrink-0">
              {showcase.invitation.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
