import { Quote, Star } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';

export default function Testimonials() {
  const { testimonials } = SITE_CONTENT;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orama-orange font-semibold text-sm tracking-widest uppercase mb-3">{testimonials.subtitle}</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orama-navy tracking-tight mb-6">
            {testimonials.title.split(' ')[0]} <span className="gradient-text">{testimonials.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((t, i) => (
            <div key={i} className="relative p-8 rounded-3xl bg-orama-cream border border-orama-warm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Quote className="w-8 h-8 text-orama-orange/20 mb-4" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="w-4 h-4 text-orama-orange fill-orama-orange" />))}
              </div>
              <p className="text-orama-navy/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-orama-warm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orama-orange to-orama-orange-light flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-orama-navy text-sm">{t.name}</div>
                  <div className="text-orama-gray text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
