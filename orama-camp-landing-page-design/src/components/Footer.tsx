import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SITE_CONTENT } from '../config/siteContent';
import LogoWordmark from './LogoWordmark';

export default function Footer() {
  const { footer } = SITE_CONTENT;

  return (
    <footer className="bg-orama-navy text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              {footer.cta.title.split(' ').slice(0, 4).join(' ')} <span className="gradient-text">{footer.cta.title.split(' ').slice(4).join(' ')}</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">{footer.cta.text}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {footer.cta.buttons.map((btn, i) => (
                <a key={i} href={btn.href} className="px-8 py-4 rounded-xl bg-gradient-to-r from-orama-orange to-orama-orange-light text-white font-bold hover:shadow-lg hover:shadow-orama-orange/30 transition-all hover:-translate-y-0.5">
                  {btn.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 origin-left scale-90">
              <LogoWordmark variant="light" size="sm" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">{footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Program', 'Safety', 'Parents', 'Volunteers', 'Sponsors'].map(link => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-orama-orange text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Policies & Documents</h4>
            <ul className="space-y-2">
              {footer.policies.map(doc => (<li key={doc}><span className="text-white/40 text-sm cursor-default">{doc}</span></li>))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/40 text-sm">
                <Mail className="w-4 h-4 text-orama-orange flex-shrink-0" />
                {footer.contact.email}
              </li>
              <li className="flex items-center gap-2 text-white/40 text-sm">
                <Phone className="w-4 h-4 text-orama-orange flex-shrink-0" />
                {footer.contact.phone}
              </li>
              <li className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin className="w-4 h-4 text-orama-orange flex-shrink-0" />
                {footer.contact.address}
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orama-orange/20 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orama-orange/20 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orama-orange/20 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">{footer.copyright}</p>
          <p className="text-white/30 text-sm flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-orama-orange" /> for Kenya's young creatives
          </p>
        </div>
      </div>
    </footer>
  );
}
