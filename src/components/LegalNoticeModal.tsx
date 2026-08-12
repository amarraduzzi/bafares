import React from 'react';
import { X, ShieldCheck, MapPin, Phone, Clock, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LegalNoticeModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, lang, onClose }) => {
  if (!isOpen) return null;

  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B1F0F]/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl border-2 border-[#EADBC4] shadow-2xl p-6 sm:p-8 space-y-6 text-start">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EADBC4] pb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#D8A517]" />
            <h3 className="text-xl font-bold text-[#3B1F0F] font-serif">
              {t.legalModal.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#FAF6EE] text-[#3B1F0F] hover:bg-[#F2C230] transition-colors focus:outline-none"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-[#5A321B] leading-relaxed">
          <p className="font-semibold text-[#3B1F0F]">
            {t.legalModal.company}
          </p>

          <p>{t.legalModal.description}</p>

          <div className="space-y-2 p-4 bg-[#FAF6EE] rounded-2xl border border-[#EADBC4]">
            <p className="flex items-center gap-2 font-medium text-[#3B1F0F]">
              <MapPin className="w-4 h-4 text-[#D8A517]" />
              <span>{t.legalModal.address}</span>
            </p>
            <p className="flex items-center gap-2 font-medium text-[#3B1F0F]">
              <Phone className="w-4 h-4 text-[#D8A517]" />
              <span>{t.legalModal.phone}</span>
            </p>
            <p className="flex items-center gap-2 font-medium text-[#3B1F0F]">
              <Clock className="w-4 h-4 text-[#D8A517]" />
              <span>{t.legalModal.hours}</span>
            </p>
          </div>

          <p className="text-[11px] text-[#8C5E3C]">
            {lang === 'ar'
              ? 'هذا الموقع الإلكتروني مصمم لأغراض إعلامية وتعرفية فقط با فارس بالرباط. جميع الحقوق محفوظة.'
              : 'Ce site internet est un site vitrine d’information officielle pour l’établissement Ba Fares à Rabat.'}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#3B1F0F] bg-[#F2C230] hover:bg-[#D8A517] transition-colors"
          >
            {t.legalModal.close}
          </button>
        </div>

      </div>

    </div>
  );
};
