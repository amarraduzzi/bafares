import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReputationSection } from './components/ReputationSection';
import { FindUsSection } from './components/FindUsSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { translations } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');

  // Synchronize document direction and lang attribute whenever lang changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  const t = translations[lang];
  const whatsappUrl = `https://wa.me/212537660057?text=${encodeURIComponent(t.whatsappMsg)}`;

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#3B1F0F] font-sans antialiased selection:bg-[#F2C230] selection:text-[#3B1F0F]">
      
      {/* Sticky Header */}
      <Header lang={lang} setLang={setLang} />

      {/* Main Sections */}
      <main>
        <Hero lang={lang} />
        <Story lang={lang} />
        <MenuSection lang={lang} />
        <GallerySection lang={lang} />
        <ReputationSection lang={lang} />
        <FindUsSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Persistent Floating WhatsApp Contact Pill with White/Cream Isolation Halo */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 rtl:left-4 rtl:right-auto rtl:sm:left-6 z-40 p-1 sm:p-1.5 rounded-full bg-[#FFFDF9] border-2 border-[#3B1F0F]/20 shadow-2xl shadow-[#3B1F0F]/30 transition-transform duration-300 hover:scale-105 active:scale-95 group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-white font-extrabold text-xs shadow-md hover:bg-[#20ba5a] transition-colors focus:outline-none"
          aria-label="WhatsApp Contact"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366] shrink-0" />
          <span className="hidden sm:inline font-sans font-bold text-xs tracking-wide">{t.nav.whatsappCta}</span>
        </a>
      </div>

    </div>
  );
}
