import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/hotelitaca', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: t('home'), href: '#home' },
    { label: t('rooms'), href: '#rooms' },
    { label: t('availability'), href: '#availability' },
    { label: t('contact'), href: '#contact' },
    { label: t('about'), href: '#about' },
  ];

  const legalLinks = [
    { label: t('privacyPolicy'), href: '/privacy' },
    { label: t('termsConditions'), href: '/terms' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Itaca Casa Vacanze</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Experience Mediterranean luxury in the neighbourhood of Marina di Ragusa, Sicily. Where timeless elegance meets modern comfort.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary-foreground">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-foreground/60 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary-foreground">{t('followUs')}</h4>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-primary-foreground/70" />
              <span className="text-sm text-primary-foreground/80">
                {t('address')}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary-foreground/70" />
              <a href="tel:+390932123456" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                +39 3397056128
                +34 644925499
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-primary-foreground/70" />
              <a href="mailto:info@itacasavacanze.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                info@itacasavacanze.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Itaca Casa Vacanze. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};