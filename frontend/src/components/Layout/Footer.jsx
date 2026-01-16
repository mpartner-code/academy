import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.programs, path: '/programs' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.instructors, path: '/instructors' },
    { label: t.nav.events, path: '/events' },
    { label: t.nav.apply, path: '/apply' },
  ];

  const programLinks = [
    { label: 'Digital Marketinq', path: '/programs' },
    { label: 'Brend Menecmenti', path: '/programs' },
    { label: 'Marketinq Analitikası', path: '/programs' },
    { label: 'Content Marketinq', path: '/programs' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900"></div>
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-brand-accent flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white leading-tight block">
                  Marketinq
                </span>
                <span className="text-xs text-gray-400 -mt-1 block">
                  Akademiyası
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-5">{t.nav.programs}</h4>
            <ul className="space-y-3">
              {programLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Nizami küç. 203B, {t.footer.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <a
                  href="tel:+994501234567"
                  className="text-gray-400 text-sm hover:text-brand-accent transition-colors"
                >
                  +994 50 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <a
                  href="mailto:info@marketinq.az"
                  className="text-gray-400 text-sm hover:text-brand-accent transition-colors"
                >
                  info@marketinq.az
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Marketinq Akademiyası. {t.footer.rights}.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;