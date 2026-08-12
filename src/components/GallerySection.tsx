import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';
import { GalleryItem, Language } from '../types';
import { GALLERY_ITEMS } from '../data/menuData';
import { translations } from '../data/translations';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const t = translations[lang];

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : (prev as number) + 1));
  };

  const currentItem = activeImageIndex !== null ? GALLERY_ITEMS[activeImageIndex] : null;

  return (
    <section id="galerie" className="py-20 bg-[#FFFDF9] border-t border-[#EADBC4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#EADBC4] text-xs font-bold text-[#D8A517]">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{t.gallery.title}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3B1F0F] font-serif tracking-tight">
            {t.gallery.title}
          </h2>

          <p className="text-base sm:text-lg text-[#8C5E3C]">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            const title = lang === 'ar' ? item.titleAr : lang === 'en' ? item.titleEn : item.titleFr;
            const category = lang === 'ar' ? item.categoryAr : lang === 'en' ? item.categoryEn : item.categoryFr;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setActiveImageIndex(index)}
                className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border-2 border-[#EADBC4] hover:border-[#F2C230] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F0F]/80 via-[#3B1F0F]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-start z-10">
                  <div className="self-end bg-[#FAF6EE]/90 backdrop-blur-xs text-[#3B1F0F] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#EADBC4]">
                    {category}
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-[#FFFDF9] font-serif leading-tight">
                      {title}
                    </h3>
                    <p className="text-xs text-[#F2C230] font-medium mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-3 h-3" />
                      <span>{t.gallery.zoomHint}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B1F0F]/90 backdrop-blur-md animate-in fade-in duration-200">
          
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#FFFDF9]/20 text-[#FFFDF9] hover:bg-[#F2C230] hover:text-[#3B1F0F] transition-colors focus:outline-none z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#FFFDF9]/20 text-[#FFFDF9] hover:bg-[#F2C230] hover:text-[#3B1F0F] transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#FFFDF9]/20 text-[#FFFDF9] hover:bg-[#F2C230] hover:text-[#3B1F0F] transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-4xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border border-[#EADBC4] flex flex-col max-h-[85vh]">
            <div className="relative overflow-hidden flex-1 bg-[#2C160B] flex items-center justify-center min-h-[300px]">
              <img
                src={currentItem.image}
                alt={lang === 'ar' ? currentItem.titleAr : currentItem.titleFr}
                className="max-h-[65vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#FAF6EE] flex items-center justify-between border-t border-[#EADBC4]">
              <div>
                <h3 className="text-xl font-bold text-[#3B1F0F] font-serif">
                  {lang === 'ar' ? currentItem.titleAr : lang === 'en' ? currentItem.titleEn : currentItem.titleFr}
                </h3>
                <p className="text-xs text-[#8C5E3C] mt-0.5">
                  Ba Fares 1957 — Rabat Diour Jamaa
                </p>
              </div>

              <span className="text-xs font-extrabold text-[#3B1F0F] bg-[#F2C230] px-3 py-1 rounded-full">
                {(activeImageIndex ?? 0) + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
