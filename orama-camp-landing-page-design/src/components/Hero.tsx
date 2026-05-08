import { ArrowDown, Users, Heart, HandHeart, Sparkles, Palette, BookOpen, Mic, Paintbrush, Guitar, PenTool } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';

function TrackIcon({ name }: { name: string }) {
  switch (name) {
    case 'mic': return <Mic className="w-4 h-4 text-orama-orange" />;
    case 'palette': return <Palette className="w-4 h-4 text-orama-orange" />;
    case 'book': return <BookOpen className="w-4 h-4 text-orama-orange" />;
    default: return <Palette className="w-4 h-4 text-orama-orange" />;
  }
}

function PathwayIcon({ name }: { name: string }) {
  switch (name) {
    case 'users': return <Users className="w-6 h-6 text-orama-orange" />;
    case 'heart': return <Heart className="w-6 h-6 text-orama-orange" />;
    case 'handheart': return <HandHeart className="w-6 h-6 text-orama-orange" />;
    default: return <Users className="w-6 h-6 text-orama-orange" />;
  }
}

const pathways = [
  { name: 'Parents', href: '#parents', icon: 'users', description: 'Register your child for the camp experience' },
  { name: 'Volunteers', href: '#volunteers', icon: 'heart', description: 'Join our team and shape young creative minds' },
  { name: 'Sponsors', href: '#sponsors', icon: 'handheart', description: 'Invest in the next generation of creatives' },
];

export default function Hero() {
  const { hero } = SITE_CONTENT;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-orama-navy">
      {/* Background - Product Illustrations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orama-navy/90 via-orama-navy/70 to-orama-navy" />
        
        {/* Floating art product elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orama-orange/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orama-orange-light/8 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
        
        {/* Product icons scattered */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Palette className="w-full h-full text-orama-orange" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
          <Mic className="w-full h-full text-orama-orange" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-14 h-14 opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>
          <BookOpen className="w-full h-full text-orama-orange" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Guitar className="w-full h-full text-orama-orange" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '0.8s' }}>
          <Paintbrush className="w-full h-full text-orama-orange" />
        </div>
        <div className="absolute top-1/4 right-1/5 w-10 h-10 opacity-10 animate-float" style={{ animationDelay: '1.2s' }}>
          <PenTool className="w-full h-full text-orama-orange" />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium mb-8 animate-fade-in-up backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-orama-orange" />
          {hero.badge}
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6 animate-fade-in-up delay-100">
          {hero.title.split(' ').slice(0, 2).join(' ')}
          <br />
          <span className="gradient-text">{hero.title.split(' ').slice(2).join(' ')}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed mb-4 animate-fade-in-up delay-200 font-light">
          {hero.subtitle}
        </p>

        {/* Arts tracks */}
        <div className="flex items-center justify-center gap-6 mb-12 animate-fade-in-up delay-300">
          {hero.tracks.map((track, i) => (
            <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
              <TrackIcon name={track.icon} />
              <span>{track.name}</span>
            </div>
          ))}
        </div>

        {/* Three Pathways */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {pathways.map((pathway, i) => (
            <a
              key={i}
              href={pathway.href}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orama-orange/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up backdrop-blur-sm"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-orama-orange/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-orama-orange/30 transition-colors">
                <PathwayIcon name={pathway.icon} />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{pathway.name}</h3>
              <p className="text-white/50 text-sm">{pathway.description}</p>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="inline-flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors animate-fade-in-up delay-600">
          <span className="text-xs font-medium tracking-widest uppercase">Discover More</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
