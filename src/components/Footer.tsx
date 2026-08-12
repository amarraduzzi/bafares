import React, { useState } from 'react';
import { ArrowUp, Instagram, MessageCircle, Phone, MapPin, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ASSETS } from '../data/menuData';
import { LegalNoticeModal } from './LegalNoticeModal';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#histoire', label: t.nav.story },
    { href: '#menu', label: t.nav.menu },
    { href: '#galerie', label: t.nav.gallery },
    { href: '#avis', label: t.nav.reputation },
    { href: '#nous-trouver', label: t.nav.findUs },
  ];

  const whatsappUrl = `https://wa.me/212537660057?text=${encodeURIComponent(t.whatsappMsg)}`;

  return (
    <footer className="bg-[#3B1F0F] text-[#FAF6EE] pt-16 pb-8 border-t-4 border-[#F2C230] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FAF6EE]/15 text-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl border-2 border-[#F2C230] bg-[#F2C230] shadow-sm overflow-hidden flex-shrink-0 p-0.5">
                <img
                  src={ASSETS.chefMascot}
                  alt="Chef Mascot Ba Fares"
                  className="w-full h-full object-cover object-[center_12%] rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-2xl font-black font-serif text-[#F2C230] tracking-wider block">
                  BA FARES
                </span>
                <span className="text-xs text-[#FAF6EE]/70 font-medium">
                  {lang === 'ar' ? 'منذ 1957 بالرباط' : 'Depuis 1957 à Rabat'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF6EE]/80 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/bafares.1957"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#FAF6EE]/10 hover:bg-[#F2C230] text-[#FAF6EE] hover:text-[#3B1F0F] flex items-center justify-center transition-colors"
                aria-label="Instagram @bafares.1957"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#FAF6EE]/10 hover:bg-[#F2C230] text-[#FAF6EE] hover:text-[#3B1F0F] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="tel:0537660057"
                className="w-9 h-9 rounded-xl bg-[#FAF6EE]/10 hover:bg-[#F2C230] text-[#FAF6EE] hover:text-[#3B1F0F] flex items-center justify-center transition-colors"
                aria-label="Telephone 0537660057"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#F2C230] font-serif">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#FAF6EE]/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#F2C230] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#F2C230] font-serif">
              Contact & Adresse
            </h4>
            
            <div className="space-y-2 text-xs text-[#FAF6EE]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F2C230] shrink-0 mt-0.5" />
                <span>Avenue Al Ghazali, Imm. Frej N2, Diour Jamaa, Rabat, Maroc</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F2C230] shrink-0" />
                <span>0537 660 057</span>
              </p>

              <p className="text-[11px] text-[#FAF6EE]/60 pt-1">
                Ouvert tous les jours de 07h00 à 00h00 (7j/7)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6EE]/60">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Ba Fares. {t.footer.rights}</span>
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-[#F2C230] transition-colors underline"
            >
              {t.footer.legalNotice}
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF6EE]/10 hover:bg-[#F2C230] hover:text-[#3B1F0F] transition-all text-xs font-bold"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Notice Modal */}
      <LegalNoticeModal
        isOpen={legalModalOpen}
        lang={lang}
        onClose={() => setLegalModalOpen(false)}
      />

    </footer>
  );
};
