import { useState } from 'react';
import { Check, Gift, ChevronDown, ChevronUp, Shield, Users, Palette, Mic, BookOpen, Camera, Plus, X } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';

interface ChildData {
  name: string;
  age: string;
  track: string;
  medicalInfo: string;
}

export default function ParentSection() {
  const { parents } = SITE_CONTENT;
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [children, setChildren] = useState<ChildData[]>([{ name: '', age: '', track: '', medicalInfo: '' }]);
  const [parentData, setParentData] = useState({
    parentName: '',
    email: '',
    phone: '',
    emergencyContact: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const addChild = () => setChildren([...children, { name: '', age: '', track: '', medicalInfo: '' }]);
  const removeChild = (index: number) => { if (children.length > 1) setChildren(children.filter((_, i) => i !== index)); };
  const updateChild = (index: number, field: keyof ChildData, value: string) => {
    const updated = [...children];
    updated[index] = { ...updated[index], [field]: value };
    setChildren(updated);
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Build the baseline parent data structure
    const sheetData: any = {
      ParentName: parentData.parentName,
      Email: parentData.email,
      Phone: parentData.phone,
      EmergencyContact: parentData.emergencyContact,
      SelectedPlan: parents.paymentPlans[selectedPlan].name,
      TotalAmount: parents.paymentPlans[selectedPlan].price,
      Type: "Parent"
    };

    // 2. Loop through each child and break their info into individual spreadsheet columns
    children.forEach((child: any, index: number) => {
      const num = index + 1;
      sheetData[`Child_${num}_Name`] = child.name || child.childName || "";
      sheetData[`Child_${num}_Age`] = child.age || "";
      sheetData[`Child_${num}_Track`] = child.track || "";
      sheetData[`Child_${num}_MedicalInfo`] = child.medicalInfo || child.medical || "None";
    });

    // 3. Send the flattened data package to Sheet Monkey
    await fetch("https://api.sheetmonkey.io/form/6FRHYA2de9PpEbhWnkeEHx", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sheetData),
    });

    setSubmitted(true);
  };

  const getIncludedIcon = (icon: string) => {
    const icons: Record<string, any> = { palette: Palette, mic: Mic, book: BookOpen, camera: Camera, gift: Gift, users: Users };
    const Icon = icons[icon] || Palette;
    return <Icon className="w-5 h-5 text-orama-orange flex-shrink-0" />;
  };

  if (submitted) {
    return (
      <section id="parents" className="py-24 bg-orama-cream">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-orama-navy mb-4">Registration Submitted!</h2>
          <p className="text-orama-gray text-lg mb-8">
            Thank you for registering {children.length} child{children.length > 1 ? 'ren' : ''} for ORAMA Creative Arts Camp. 
            We'll send a confirmation email with payment instructions and the camp handbook within 24 hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setChildren([{ name: '', age: '', track: '', medicalInfo: '' }]); setParentData({ parentName: '', email: '', phone: '', emergencyContact: '' }); }}
            className="px-6 py-3 rounded-xl bg-orama-navy text-white font-semibold hover:bg-orama-blue transition-colors"
          >
            Register Another Child
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="parents" className="py-24 bg-orama-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orama-orange font-semibold text-sm tracking-widest uppercase mb-3">{parents.subtitle}</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orama-navy tracking-tight mb-6">
            {parents.title.split(' ').slice(0, 3).join(' ')} <span className="gradient-text">{parents.title.split(' ').slice(3).join(' ')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-orama-gray leading-relaxed">{parents.description}</p>
        </div>

        {/* What's Included */}
        <div className="p-8 rounded-3xl bg-white shadow-sm border border-orama-warm mb-16">
          <h3 className="text-xl font-bold text-orama-navy mb-6 text-center">What's Included in the 7,000 KES Fee</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {parents.whatsIncluded.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-orama-cream">
                {getIncludedIcon(item.icon)}
                <span className="text-sm text-orama-navy font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-orama-navy mb-2 text-center">Flexible Payment Plans</h3>
          <p className="text-orama-gray text-center mb-8">Choose the plan that works best for your family</p>
          <div className="grid md:grid-cols-3 gap-6">
            {parents.paymentPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                  selectedPlan === i ? 'border-orama-orange shadow-lg shadow-orama-orange/10 bg-white' : 'border-orama-warm bg-white/60 hover:border-orama-orange/30'
                }`}
                onClick={() => setSelectedPlan(i)}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-orama-orange text-white text-xs font-bold">Most Popular</div>
                )}
                <div className="text-center mb-4">
                  <h4 className="font-bold text-orama-navy mb-1">{plan.name}</h4>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-extrabold text-orama-navy">{plan.price}</span>
                    <span className="text-orama-gray text-sm">KES</span>
                  </div>
                  {i > 0 && <span className="text-xs text-orama-gray">per installment</span>}
                  <p className="text-sm text-orama-gray mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-orama-navy/80">
                      <Check className="w-4 h-4 text-orama-orange flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className={`mt-4 w-full h-10 rounded-xl flex items-center justify-center font-semibold text-sm transition-all ${
                  selectedPlan === i ? 'bg-gradient-to-r from-orama-orange to-orama-orange-light text-white' : 'bg-orama-cream text-orama-navy'
                }`}>
                  {selectedPlan === i ? 'Selected' : 'Select Plan'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-white shadow-sm border border-orama-warm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-orama-navy">Registration Form</h3>
              <button onClick={addChild} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orama-orange/10 text-orama-orange font-semibold text-sm hover:bg-orama-orange/20 transition-colors">
                <Plus className="w-4 h-4" /> Add Another Child
              </button>
            </div>
            <p className="text-orama-gray text-center mb-8 text-sm">
              <Shield className="w-4 h-4 inline mr-1 text-orama-orange" />
              Your information is secure. We'll send the parental consent form and camp handbook after registration.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Information */}
              <div className="p-5 rounded-2xl bg-orama-cream border border-orama-warm">
                <h4 className="font-bold text-orama-navy mb-4">Parent/Guardian Information</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-orama-navy mb-1.5">Parent/Guardian Name *</label>
                    <input type="text" required value={parentData.parentName} onChange={e => setParentData({...parentData, parentName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-orama-navy mb-1.5">Email Address *</label>
                    <input type="email" required value={parentData.email} onChange={e => setParentData({...parentData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-orama-navy mb-1.5">Phone Number *</label>
                    <input type="tel" required value={parentData.phone} onChange={e => setParentData({...parentData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="+254 7XX XXX XXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-orama-navy mb-1.5">Emergency Contact</label>
                    <input type="tel" value={parentData.emergencyContact} onChange={e => setParentData({...parentData, emergencyContact: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="Alternative contact number" />
                  </div>
                </div>
              </div>

              {/* Children Information */}
              {children.map((child, index) => (
                <div key={index} className="relative p-5 rounded-2xl bg-orama-cream border border-orama-warm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-orama-navy">Child {index + 1} Information</h4>
                    {children.length > 1 && (
                      <button type="button" onClick={() => removeChild(index)} className="p-2 rounded-lg text-orama-gray hover:text-red-500 hover:bg-red-50 transition-colors"><X className="w-4 h-4" /></button>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-orama-navy mb-1.5">Child's Name *</label>
                      <input type="text" required value={child.name} onChange={e => updateChild(index, 'name', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy" placeholder="Child's full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-orama-navy mb-1.5">Child's Age *</label>
                      <select required value={child.age} onChange={e => updateChild(index, 'age', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy">
                        <option value="">Select age</option>
                        {Array.from({length: 10}, (_, i) => i + 7).map(age => (<option key={age} value={age}>{age} years old</option>))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-orama-navy mb-1.5">Preferred Arts Track</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: 'performing', label: 'Performing Arts', icon: Mic },
                          { value: 'visual', label: 'Visual Arts', icon: Palette },
                          { value: 'literary', label: 'Literary Arts', icon: BookOpen },
                        ].map(track => (
                          <button key={track.value} type="button" onClick={() => updateChild(index, 'track', track.value)} className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1.5 transition-all ${child.track === track.value ? 'border-orama-orange bg-orama-orange/5' : 'border-orama-warm hover:border-orama-orange/30'}`}>
                            <track.icon className="w-5 h-5 text-orama-orange" />
                            <span className="text-sm font-medium text-orama-navy">{track.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-orama-navy mb-1.5">Medical Information / Allergies</label>
                      <textarea value={child.medicalInfo} onChange={e => updateChild(index, 'medicalInfo', e.target.value)} rows={2} className="w-full px-4 py-3 rounded-xl border border-orama-warm bg-white focus:border-orama-orange focus:ring-2 focus:ring-orama-orange/20 outline-none transition-all text-orama-navy resize-none" placeholder="Any medical conditions, allergies, or special needs we should know about" />
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-orama-orange to-orama-orange-light text-white font-bold text-lg hover:shadow-lg hover:shadow-orama-orange/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                  Complete Registration for {children.length} Child{children.length > 1 ? 'ren' : ''} — {parents.paymentPlans[selectedPlan].price} KES {selectedPlan > 0 ? `× ${selectedPlan + 1} per child` : 'per child'}
                </button>
                <p className="text-center text-xs text-orama-gray mt-3">By registering, you agree to our terms and the ORAMA Child Protection Policy. Payment instructions will be sent to your email.</p>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-orama-navy mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {parents.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-white border border-orama-warm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-orama-navy pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-orama-orange flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-orama-orange flex-shrink-0" />}
                </button>
                {openFaq === i && (<div className="px-5 pb-5 text-orama-gray text-sm leading-relaxed animate-fade-in">{faq.a}</div>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
