import { useState } from 'react';
import { Crown, Gem, Palette, CheckCircle2, TrendingUp, BarChart3, Heart, Send, ExternalLink } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';

function TierIcon({ name }: { name: string }) {
  const icons: Record<string, any> = { crown: Crown, gem: Gem, palette: Palette };
  const Icon = icons[name] || Palette;
  return <Icon className="w-7 h-7 text-white" />;
}

function StatIcon({ name }: { name: string }) {
  const icons: Record<string, any> = { trendingup: TrendingUp, barchart: BarChart3, heart: Heart, checkcircle: CheckCircle2 };
  const Icon = icons[name] || Heart;
  return <Icon className="w-6 h-6 text-orama-orange" />;
}

export default function DonorSection() {
  const { donors } = SITE_CONTENT;
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', organization: '', email: '', phone: '', tier: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("https://api.sheetmonkey.io/form/6FRHYA2de9PpEbhWnkeEHx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        Type: "Donor/Sponsor",
        SelectedTier: selectedTier !== null ? donors.tiers[selectedTier].name : "None"
      }),
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="sponsors" className="py-24 bg-orama-warm">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-orama-orange/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-orama-orange" />
          </div>
          <h2 className="text-3xl font-extrabold text-orama-navy mb-4">Thank You for Your Generosity!</h2>
          <p className="text-orama-gray text-lg mb-8">Your sponsorship inquiry has been received. Our partnerships team will contact you within 48 hours with a detailed proposal, sponsorship agreement, and payment instructions.</p>
          <button onClick={() => { setSubmitted(false); setSelectedTier(null); setFormData({ name: '', organization: '', email: '', phone: '', tier: '', message: '' }); }} className="px-6 py-3 rounded-xl bg-orama-navy text-white font-semibold hover:bg-orama-blue transition-colors">Submit Another Inquiry</button>
        </div>
      </section>
    );
  }

  const tierColors = ['from-amber-400 to-yellow-500', 'from-slate-400 to-slate-500', 'from-orama-orange to-orama-orange-light'];
  const tierBgLights = ['bg-amber-50', 'bg-slate-50', 'bg-orange-50'];

  return (
    <section id="sponsors" className="py-24 bg-orama-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orama-orange font-semibold text-sm tracking-widest uppercase mb-3">{donors.subtitle}</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orama-navy tracking-tight mb-6">
            {donors.title.split(' ')[0]} <span className="gradient-text">{donors.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-orama-gray leading-relaxed">{donors.description}</p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {donors.stats.map((stat, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white shadow-sm border border-orama-warm text-center">
              <StatIcon name={stat.icon} />
              <div className="text-2xl font-extrabold text-orama-navy mt-2">{stat.value}</div>
              <div className="text-xs text-orama-gray mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-orama-navy mb-8 text-center">Sponsorship Tiers</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {donors.tiers.map((tier, i) => (
              <div key={i} className={`relative rounded-3xl bg-white border-2 overflow-hidden transition-all ${selectedTier === i ? 'border-orama-orange shadow-xl shadow-orama-orange/10 scale-[1.02]' : 'border-orama-warm hover:border-orama-orange/30 hover:shadow-lg'}`}>
                <div className={`p-6 bg-gradient-to-r ${tierColors[i]}`}>
                  <div className="flex items-center gap-3">
                    <TierIcon name={['crown', 'gem', 'palette'][i]} />
                    <div>
                      <h4 className="text-white font-bold text-lg">{tier.name}</h4>
                      <div className="text-white/80 text-sm">{tier.amount} KES</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-orama-gray text-sm mb-4">{tier.description}</p>
                  <div className={`p-4 rounded-xl ${tierBgLights[i]} mb-5`}>
                    <div className="text-xs font-bold text-orama-navy uppercase tracking-wider mb-1">Your Impact</div>
                    <p className="text-sm text-orama-navy/70 leading-relaxed">{tier.impact}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-orama-navy/80">
                        <CheckCircle2 className="w-4 h-4 text-orama-orange flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => { setSelectedTier(i); setFormData({...formData, tier: tier.name}); }} className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${selectedTier === i ? 'bg-gradient-to-r from-orama-orange to-orama-orange-light text-white' : 'bg-orama-cream text-orama-navy hover:bg-orama-orange/10'}`}>
                    {selectedTier === i ? 'Selected ✓' : 'Select This Tier'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Transparency */}
        <div className="p-8 rounded-3xl bg-white shadow-sm border border-orama-warm mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <h3 className="text-xl font-bold text-orama-navy mb-3">{donors.transparency.title}</h3>
              <p className="text-orama-gray text-sm leading-relaxed mb-4">{donors.transparency.text}</p>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-orama-orange/10 text-orama-orange text-xs font-semibold">
                <ExternalLink className="w-3.5 h-3.5" />
                {donors.transparency.note}
              </div>
            </div>
            <div className="md:w-2/3 space-y-3">
              {donors.transparency.breakdown.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-40 text-sm font-medium text-orama-navy flex-shrink-0">{item.category}</div>
                  <div className="flex-1 h-3 rounded-full bg-orama-cream overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-orama-orange to-orama-orange-light transition-all duration-1000" style={{ width: `${item.percentage}%` }} />
                  </div>
                  <div className="w-24 text-right">
                    <span className="text-sm font-bold text-orama-navy">{item.percentage}%</span>
                    <span className="text-xs text-orama-gray ml-1">({item.amount})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsor Inquiry Form */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl bg-white shadow-sm border border-orama-warm">
            <h3 className="text-2xl font-bold text-orama-navy mb-2 text-center">Sponsorship Inquiry</h3>
            <p className="text-orama-gray text-center mb-8 text-sm">Tell us about your interest and we'll prepare a customized sponsorship proposal for you.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-orama-navy mb-1.5">Your Name *</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-orama-cream focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-orama-navy mb-1.5">Organization (Optional)</label>
                  <input type="text" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-orama-cream focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="Company or foundation name" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-orama-navy mb-1.5">Email *</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-orama-cream focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="you@organization.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-orama-navy mb-1.5">Phone *</label>
                  <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-orama-cream focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="+254 7XX XXX XXX" />
                </div>
              </div>

              {selectedTier !== null && (
                <div className="p-4 rounded-xl bg-orama-orange/5 border border-orama-orange/20">
                  <div className="text-sm font-semibold text-orama-navy mb-1">Selected Tier</div>
                  <div className="text-orama-orange font-bold">{donors.tiers[selectedTier].name} — {donors.tiers[selectedTier].amount} KES</div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-orama-navy mb-1.5">Message (Optional)</label>
                <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-orama-cream focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy resize-none" placeholder="Tell us about your sponsorship goals, any specific requirements, or questions you have" />
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-orama-orange to-orama-orange-light text-white font-bold text-lg hover:shadow-lg hover:shadow-orama-orange/30 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Submit Sponsorship Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
