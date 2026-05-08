import { Target, Eye, Lightbulb, Star, Palette, Mic, BookOpen, Paintbrush, Guitar, PenTool } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';

function ProductIllustration() {
  return (
    <div className="relative">
      <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orama-cream to-white p-8 h-80 lg:h-[420px] flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
          {[
            { icon: Palette, label: 'Paints & Brushes', color: 'from-rose-400 to-pink-500' },
            { icon: Mic, label: 'Microphones', color: 'from-violet-400 to-purple-500' },
            { icon: BookOpen, label: 'Journals', color: 'from-blue-400 to-cyan-500' },
            { icon: Guitar, label: 'Instruments', color: 'from-amber-400 to-orange-500' },
            { icon: Paintbrush, label: 'Canvases', color: 'from-emerald-400 to-green-500' },
            { icon: PenTool, label: 'Writing Kits', color: 'from-orama-orange to-orama-orange-light' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs font-medium text-orama-navy/60">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-6 -right-4 lg:-right-8 p-5 rounded-2xl bg-white shadow-xl border border-orama-warm">
        <div className="text-3xl font-extrabold text-orama-orange">4</div>
        <div className="text-sm text-orama-navy font-medium">Days of Creative<br />Transformation</div>
      </div>
    </div>
  );
}

export default function About() {
  const { about } = SITE_CONTENT;

  return (
    <section id="about" className="py-24 bg-orama-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orama-orange font-semibold text-sm tracking-widest uppercase mb-3">{about.subtitle}</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orama-navy tracking-tight mb-6">
            {about.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-orama-gray leading-relaxed">
            {about.description}
          </p>
        </div>

        {/* Product Illustration + Content Split */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ProductIllustration />

          <div className="space-y-6">
            {/* Mission */}
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-orama-warm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orama-orange/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-orama-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-orama-navy mb-2">{about.mission.title}</h3>
                  <p className="text-orama-gray text-sm leading-relaxed">{about.mission.text}</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="p-6 rounded-2xl bg-white shadow-sm border border-orama-warm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orama-orange/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-orama-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-orama-navy mb-2">{about.vision.title}</h3>
                  <p className="text-orama-gray text-sm leading-relaxed">{about.vision.text}</p>
                </div>
              </div>
            </div>

            {/* Why ORAMA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orama-navy to-orama-blue text-white">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orama-orange/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-orama-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{about.why.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{about.why.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {about.stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white shadow-sm border border-orama-warm text-center hover:shadow-md transition-shadow">
              <Star className="w-6 h-6 text-orama-orange mx-auto mb-3" />
              <div className="text-2xl font-extrabold text-orama-navy mb-1">{stat.value}</div>
              <div className="text-sm text-orama-gray">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Location & Date */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-orama-navy to-orama-blue text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-orama-orange font-semibold text-sm tracking-widest uppercase mb-2">{about.location.when.label}</div>
              <div className="text-xl font-bold">{about.location.when.value}</div>
              <div className="text-white/60 text-sm mt-1">{about.location.when.detail}</div>
            </div>
            <div>
              <div className="text-orama-orange font-semibold text-sm tracking-widest uppercase mb-2">{about.location.where.label}</div>
              <div className="text-xl font-bold">{about.location.where.value}</div>
              <div className="text-white/60 text-sm mt-1">{about.location.where.detail}</div>
            </div>
            <div>
              <div className="text-orama-orange font-semibold text-sm tracking-widest uppercase mb-2">{about.location.culmination.label}</div>
              <div className="text-xl font-bold">{about.location.culmination.value}</div>
              <div className="text-white/60 text-sm mt-1">{about.location.culmination.detail}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
