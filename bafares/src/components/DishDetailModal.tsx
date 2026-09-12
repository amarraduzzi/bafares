import React from 'react';
import { X, Sparkles, Phone, Tag, Info } from 'lucide-react';
import { MenuItem, Language } from '../types';
import { translations } from '../data/translations';

interface DishDetailModalProps {
  item: MenuItem | null;
  lang: Language;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ item, lang, onClose }) => {
  if (!item) return null;

  const t = translations[lang];

  const name = lang === 'ar' ? item.nameAr : lang === 'en' ? item.nameEn : item.nameFr;
  const desc = lang === 'ar' ? item.descAr : lang === 'en' ? item.descEn : item.descFr;
  const tag = lang === 'ar' ? item.tagAr : lang === 'en' ? item.tagEn : item.tagFr;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B1F0F]/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl border-2 border-[#EADBC4] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Top Image Frame */}
        <div className="relative h-64 w-full shrink-0">
          <img
            src={item.image}
            alt={name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F0F]/80 via-transparent to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rtl:left-4 rtl:right-auto p-2 rounded-full bg-[#FFFDF9]/90 text-[#3B1F0F] hover:bg-[#F2C230] transition-colors focus:outline-none shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Price Tag Badge */}
          <div className="absolute bottom-4 left-4 rtl:right-4 rtl:left-auto bg-[#F2C230] text-[#3B1F0F] font-black text-lg px-4 py-1.5 rounded-full shadow-md font-serif">
            {item.price} {t.menu.dh}
          </div>

          {/* Tag Badge */}
          {tag && (
            <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto bg-[#FAF6EE]/90 text-[#3B1F0F] text-xs font-bold px-3 py-1 rounded-full border border-[#EADBC4] shadow-xs">
              {tag}
            </div>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-start">
          
          <div>
            <h3 className="text-2xl font-black text-[#3B1F0F] font-serif leading-tight">
              {name}
            </h3>
            {lang !== 'ar' && (
              <p className="text-sm font-semibold text-[#D8A517] font-serif mt-0.5" dir="rtl">
                {item.nameAr}
              </p>
            )}
          </div>

          <p className="text-sm sm:text-base text-[#5A321B] leading-relaxed">
            {desc}
          </p>

          <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#EADBC4] space-y-2">
            <h4 className="text-xs font-extrabold text-[#3B1F0F] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D8A517]" />
              <span>{t.menu.ingredientsTitle}</span>
            </h4>
            <p className="text-xs text-[#8C5E3C] leading-normal">
              {lang === 'ar'
                ? 'يحضر طازجاً يومياً في مطعم با فارس بالرباط باستخدام مكونات زراعية وطبيعية بلدية 100%.'
                : 'Préparé chaque jour dans la tradition Ba Fares à Rabat avec des ingrédients naturels et du terroir marocain.'}
            </p>
          </div>

          {/* Informational Notice */}
          <div className="flex items-center gap-2 text-[11px] text-[#8C5E3C] bg-[#F2E9D8]/50 p-2.5 rounded-lg border border-[#EADBC4]/60">
            <Info className="w-4 h-4 text-[#D8A517] shrink-0" />
            <span>{t.menu.notice}</span>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-[#FAF6EE] border-t border-[#EADBC4] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#3B1F0F] bg-[#FFFDF9] border border-[#EADBC4] hover:bg-[#F2E9D8] transition-colors"
          >
            {t.menu.closeModal}
          </button>

          <a
            href="tel:0537660057"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#3B1F0F] bg-[#F2C230] hover:bg-[#D8A517] transition-all shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#3B1F0F]" />
            <span>{t.findUs.callNow}</span>
          </a>
        </div>

      </div>

    </div>
  );
};
