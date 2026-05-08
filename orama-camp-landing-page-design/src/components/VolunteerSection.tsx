import { useState } from 'react';
import { Clock, MapPin, Shield, CheckCircle2, Send, Calendar, BookOpen, Heart, Users } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';

function InfoIcon({ name }: { name: string }) {
  const icons: Record<string, any> = { clock: Clock, mappin: MapPin, shield: Shield };
  const Icon = icons[name] || Clock;
  return <Icon className="w-6 h-6 text-orama-orange flex-shrink-0" />;
}

function RoleIcon({ name }: { name: string }) {
  const icons: Record<string, any> = { bookopen: BookOpen, users: Users, calendar: Calendar, heart: Heart };
  const Icon = icons[name] || BookOpen;
  return <Icon className="w-5 h-5 text-orama-orange" />;
}

export default function VolunteerSection() {
  const { volunteers } = SITE_CONTENT;
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', availability: '', experience: '', motivation: '', codeOfConduct: false });
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("https://api.sheetmonkey.io/form/v1/6FRHYA2de9PpEbhWnkeEHx", {
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
      <section id="volunteers" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-orama-orange/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-orama-orange" />
          </div>
          <h2 className="text-3xl font-extrabold text-orama-navy mb-4">Thank You for Volunteering!</h2>
          <p className="text-orama-gray text-lg mb-8">Your application has been received. Our volunteer coordinator will reach out within 48 hours with next steps, including the Volunteer Code of Conduct and orientation details.</p>
          <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', role: '', availability: '', experience: '', motivation: '', codeOfConduct: false }); }} className="px-6 py-3 rounded-xl bg-orama-navy text-white font-semibold hover:bg-orama-blue transition-colors">Submit Another Application</button>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orama-orange font-semibold text-sm tracking-widest uppercase mb-3">{volunteers.subtitle}</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orama-navy tracking-tight mb-6">
            {volunteers.title.split(' ')[0]} <span className="gradient-text">{volunteers.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-orama-gray leading-relaxed">{volunteers.description}</p>
        </div>

        {/* Key Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {volunteers.keyInfo.map((info, i) => (
            <div key={i} className="flex items-center gap-3 p-5 rounded-2xl bg-orama-cream border border-orama-warm">
              <InfoIcon name={info.icon} />
              <div>
                <div className="font-bold text-orama-navy text-sm">{info.title}</div>
                <div className="text-orama-gray text-xs">{info.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Roles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-orama-navy mb-6 text-center">Volunteer Roles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {volunteers.roles.map((role, i) => (
              <div key={i} className="p-6 rounded-2xl bg-orama-cream border border-orama-warm hover:border-orama-orange/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orama-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orama-orange/20 transition-colors">
                    <RoleIcon name={role.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold text-orama-navy mb-1">{role.title}</h4>
                    <p className="text-orama-gray text-sm leading-relaxed mb-3">{role.description}</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orama-orange/10 text-orama-orange text-xs font-semibold">
                      <Clock className="w-3 h-3" />
                      {role.commitment}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-orama-navy to-orama-blue mb-16">
          <h3 className="text-xl font-bold text-white mb-6 text-center">What You'll Gain</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {volunteers.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-orama-orange flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl bg-orama-cream border border-orama-warm">
            <h3 className="text-2xl font-bold text-orama-navy mb-2 text-center">Volunteer Application</h3>
            <p className="text-orama-gray text-center mb-8 text-sm">Fill out the form below and our team will get back to you within 48 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-orama-navy mb-1.5">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-orama-navy mb-1.5">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="you@example.com" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-orama-navy mb-1.5">Phone Number *</label>
                  <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="+254 7XX XXX XXX" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-orama-navy mb-1.5">Preferred Role *</label>
                  <select required value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy">
                    <option value="">Select a role</option>
                    {volunteers.roles.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-orama-navy mb-1.5">Availability *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['All 4 days', 'Days 1–2', 'Days 3–4', 'Day 4 only'].map(opt => (
                    <button key={opt} type="button" onClick={() => setFormData({...formData, availability: opt})} className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${formData.availability === opt ? 'border-orama-orange bg-orama-orange/5 text-orama-navy' : 'border-orama-warm text-orama-gray hover:border-orama-orange/30'}`}>{opt}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-orama-navy mb-1.5">Relevant Experience</label>
                <textarea value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy resize-none" placeholder="Any experience working with children, arts education, or relevant skills" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-orama-navy mb-1.5">Why do you want to volunteer?</label>
                <textarea value={formData.motivation} onChange={e => setFormData({...formData, motivation: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy resize-none" placeholder="Tell us what motivates you to join the ORAMA team" />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" required checked={formData.codeOfConduct} onChange={e => setFormData({...formData, codeOfConduct: e.target.checked})} className="mt-1 w-5 h-5 rounded border-orama-warm text-orama-orange focus:ring-orama-orange/20" />
                <label className="text-sm text-orama-gray">I agree to abide by the <span className="text-orama-orange font-semibold">ORAMA Volunteer Code of Conduct</span> and the <span className="text-orama-orange font-semibold">Child Protection Policy</span>. I understand that a background check will be conducted as part of the vetting process. *</label>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-orama-navy to-orama-blue text-white font-bold text-lg hover:shadow-lg hover:shadow-orama-navy/20 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Submit Volunteer Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
