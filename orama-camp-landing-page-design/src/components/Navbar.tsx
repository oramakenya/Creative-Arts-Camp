import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoWordmark from './LogoWordmark';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Program', href: '#program' },
  { label: 'Safety', href: '#safety' },
  { label: 'Parents', href: '#parents' },
  { label: 'Volunteers', href: '#volunteers' },
  { label: 'Sponsors', href: '#sponsors' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-orama-navy/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <LogoWordmark variant={scrolled ? 'dark' : 'light'} size="sm" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all hover:bg-orama-orange/10 ${
                scrolled ? 'text-orama-navy/80 hover:text-orama-orange' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#parents"
            className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orama-orange to-orama-orange-light rounded-xl hover:shadow-lg hover:shadow-orama-orange/30 transition-all hover:-translate-y-0.5"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-orama-navy' : 'text-white'}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 mx-4 p-4 rounded-2xl glass shadow-xl border border-white/20 animate-scale-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-orama-navy/80 font-medium hover:text-orama-orange hover:bg-orama-orange/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#parents"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 mx-4 px-5 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-orama-orange to-orama-orange-light rounded-xl"
          >
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
}
