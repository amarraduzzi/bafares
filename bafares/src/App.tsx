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

export default function App() {
  const [lang, setLang] = useState<Language>('fr');

  // Synchronize document direction and lang attribute whenever lang changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

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

    </div>
  );
}
