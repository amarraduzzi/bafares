import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Globe,
  ChevronDown,
  Home,
  BookOpen,
  UtensilsCrossed,
  Camera,
  Star,
  MapPin,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ASSETS } from '../data/menuData';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');

  const t = translations[lang];

  // IntersectionObserver & Hash tracking to accurately update active nav link on scroll
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    const handleScroll = () => {
      const sections = ['hero', 'histoire', 'menu', 'galerie', 'avis', 'nous-trouver'];
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveHash(`#${sectionId}`);
            break;
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  const navLinks = [
    { href: '#hero', label: t.nav.home, icon: Home },
    { href: '#histoire', label: t.nav.story, icon: BookOpen },
    { href: '#menu', label: t.nav.menu, icon: UtensilsCrossed },
    { href: '#galerie', label: t.nav.gallery, icon: Camera },
    { href: '#avis', label: t.nav.reputation, icon: Star },
    { href: '#nous-trouver', label: t.nav.findUs, icon: MapPin },
  ];

  const whatsappUrl = `https://wa.me/212537660057?text=${encodeURIComponent(t.whatsappMsg)}`;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FAF6EE]/90 border-b border-[#EADBC4] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Mascot */}
          <a
            href="#hero"
            onClick={() => setActiveHash('#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border-2 border-[#3B1F0F]/15 bg-[#F2C230] shadow-sm overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md p-0.5">
              <img
                src={ASSETS.chefMascot}
                alt="Chef Mascot Ba Fares"
                className="w-full h-full object-cover object-[center_12%] rounded-lg sm:rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#3B1F0F] font-serif group-hover:text-[#D8A517] transition-colors">
                BA FARES
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#8C5E3C] bg-[#F2E9D8] px-1.5 py-0.5 rounded">
                  {lang === 'ar' ? 'منذ 1957' : 'Depuis 1957'}
                </span>
                <span className="text-[10px] text-[#D8A517] font-semibold">★ Rabat</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeHash === link.href
                    ? 'text-[#3B1F0F] bg-[#F2E9D8] font-bold shadow-2xs'
                    : 'text-[#3B1F0F]/80 hover:text-[#D8A517] hover:bg-[#F2E9D8]/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Lang selector & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-[#3B1F0F] bg-[#FFFDF9] border border-[#EADBC4] hover:border-[#F2C230] shadow-sm transition-all focus:outline-none"
              >
                <Globe className="w-4 h-4 text-[#D8A517]" />
                <span>{currentLangObj.flag}</span>
                <span>{currentLangObj.code.toUpperCase()}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#8C5E3C] transition-transform ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-36 bg-[#FFFDF9] rounded-xl border border-[#EADBC4] shadow-lg py-1 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2 text-xs text-start font-medium transition-colors ${
                        lang === l.code
                          ? 'bg-[#F2E9D8] text-[#3B1F0F] font-bold'
                          : 'text-[#3B1F0F]/80 hover:bg-[#FAF6EE]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#3B1F0F] bg-[#F2C230] hover:bg-[#D8A517] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-[#3B1F0F] text-[#F2C230]" />
              <span>{t.nav.whatsappCta}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button in Header */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Lang Switcher Pill for mobile header */}
            <button
              onClick={() => setLang(lang === 'fr' ? 'ar' : lang === 'ar' ? 'en' : 'fr')}
              className="px-2.5 py-1.5 rounded-lg text-xs font-extrabold text-[#3B1F0F] bg-[#FFFDF9] border border-[#EADBC4] shadow-2xs active:scale-95 transition-transform"
              title="Changer de langue"
            >
              {lang.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#3B1F0F] bg-[#FFFDF9] border border-[#EADBC4] hover:bg-[#F2E9D8] focus:outline-none active:scale-95 transition-transform"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Drawer Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#3B1F0F]/30 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Slide-down Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.215, 0.61, 0.355, 1] }}
              className="absolute top-full left-0 right-0 bg-[#FAF6EE] border-b-2 border-[#EADBC4] shadow-2xl px-4 pt-3 pb-6 z-50 lg:hidden overflow-hidden"
            >
              {/* Subtle Elegant Watermark Pattern Background */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none flex flex-col justify-center gap-3 overflow-hidden z-0">
                <div className="whitespace-nowrap text-xl font-black font-serif text-[#3B1F0F] tracking-widest text-center">
                  BAFARES 1957 • RABAT DIOUR JAMAA • LE GOÛT DU BLED
                </div>
                <div className="whitespace-nowrap text-xl font-black font-serif text-[#3B1F0F] tracking-widest text-center">
                  CUISINE BELDI • BAFARES 1957 • DEPUIS 1957
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                {/* Dedicated Top Bar inside Menu Drawer with Prominent Close X Button */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#EADBC4]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold font-serif text-[#3B1F0F]">BA FARES 1957</span>
                    <span className="text-[10px] uppercase font-bold text-[#D8A517] bg-[#FAF0D7] px-2 py-0.5 rounded-full border border-[#D8A517]/20">
                      Menu
                    </span>
                  </div>
                  
                  {/* Close Button X */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-[#3B1F0F] bg-[#FFFDF9] border border-[#EADBC4] hover:bg-[#F2C230] transition-colors focus:outline-none active:scale-95 shadow-xs flex items-center gap-1"
                    aria-label="Fermer le menu"
                  >
                    <X className="w-5 h-5 text-[#3B1F0F]" />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <div className="grid grid-cols-1 gap-1.5">
                  {navLinks.map((link, idx) => {
                    const IconComp = link.icon;
                    const isActive = activeHash === link.href;

                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{
                          duration: 0.25,
                          delay: idx * 0.04,
                          ease: 'easeOut',
                        }}
                        onClick={() => {
                          setActiveHash(link.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`group relative flex items-center justify-between px-4 py-3 rounded-2xl text-base font-extrabold transition-all duration-200 overflow-hidden ${
                          isActive
                            ? 'bg-[#FFFDF9] text-[#3B1F0F] shadow-xs border-l-4 rtl:border-r-4 border-[#F2C230]'
                            : 'text-[#3B1F0F]/90 hover:bg-[#FFFDF9]/80 hover:text-[#3B1F0F]'
                        }`}
                      >
                        {/* Underline draw animation on hover */}
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F2C230] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rtl:origin-right" />

                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-xl transition-all duration-300 ${
                              isActive
                                ? 'bg-[#F2C230] text-[#3B1F0F]'
                                : 'bg-[#F2E9D8] text-[#8C5E3C] group-hover:bg-[#F2C230] group-hover:text-[#3B1F0F]'
                            }`}
                          >
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="font-serif tracking-wide">{link.label}</span>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Language Switcher with Animated Sliding Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ delay: 0.28, duration: 0.22 }}
                  className="pt-3 border-t border-[#EADBC4]"
                >
                  <div className="flex items-center justify-between bg-[#FFFDF9] p-2 rounded-2xl border border-[#EADBC4] shadow-xs">
                    <span className="text-xs font-extrabold text-[#8C5E3C] flex items-center gap-1.5 px-2">
                      <Globe className="w-4 h-4 text-[#D8A517]" />
                      <span>{lang === 'ar' ? 'اللغة' : 'Langue'}</span>
                    </span>

                    <div className="flex bg-[#FAF6EE] p-1 rounded-xl border border-[#EADBC4]/60 relative">
                      {languages.map((l) => {
                        const isSelected = lang === l.code;
                        return (
                          <button
                            key={l.code}
                            onClick={() => setLang(l.code)}
                            className={`relative px-3 py-1.5 rounded-lg text-xs font-extrabold transition-colors z-10 flex items-center gap-1.5 ${
                              isSelected ? 'text-[#3B1F0F]' : 'text-[#8C5E3C] hover:text-[#3B1F0F]'
                            }`}
                          >
                            {isSelected && (
                              <motion.div
                                layoutId="activeLangPillMobile"
                                className="absolute inset-0 bg-[#F2C230] rounded-lg shadow-xs -z-10"
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                              />
                            )}
                            <span>{l.flag}</span>
                            <span>{l.code.toUpperCase()}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Action CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ delay: 0.32, duration: 0.22 }}
                  className="space-y-2.5"
                >
                  {/* WhatsApp CTA Button with Gentle Pulsing Aura */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl text-sm font-extrabold text-[#3B1F0F] bg-[#F2C230] border-2 border-[#3B1F0F] shadow-md hover:shadow-xl transition-all duration-300 transform active:scale-98 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none" />
                    <MessageCircle className="w-5 h-5 fill-[#3B1F0F] text-[#F2C230] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 z-10" />
                    <span className="z-10">{t.nav.whatsappCta}</span>
                  </a>

                  {/* Hotline Phone Button */}
                  <a
                    href="tel:0537660057"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-extrabold text-[#3B1F0F] bg-[#FFFDF9] border border-[#EADBC4] hover:border-[#D8A517] hover:bg-[#FAF0D7]/60 transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4 text-[#D8A517]" />
                    <span>0537 660 057 (Hotline Rabat Diour Jamaa)</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
