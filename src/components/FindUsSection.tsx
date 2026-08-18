import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FindUsSectionProps {
  lang: Language;
}

export const FindUsSection: React.FC<FindUsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check live open/closed status for Rabat hours (07:00 - 23:00)
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Get current hour in local/Rabat time (0-23)
      const currentHour = now.getHours();
      // Open between 07:00 and 22:59 (closes at 23:00)
      if (currentHour >= 7 && currentHour < 23) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const address = 'Avenue Al Ghazali, Imm. Frej N2, Diour Jamaa, Rabat, Maroc';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Ba Fares Avenue Al Ghazali Imm Frej Diour Jamaa Rabat')}`;

  return (
    <section id="nous-trouver" className="py-20 bg-[#FFFDF9] border-t border-[#EADBC4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6EE] border border-[#EADBC4] text-xs font-bold text-[#D8A517]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Rabat • Diour Jamaa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3B1F0F] font-serif tracking-tight">
            {t.findUs.title}
          </h2>

          <p className="text-base sm:text-lg text-[#8C5E3C]">
            {t.findUs.subtitle}
          </p>
        </div>

        {/* Content Layout: Info Cards + Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information & Action Box */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#FAF6EE] p-6 sm:p-8 rounded-3xl border-2 border-[#EADBC4] text-start">
            
            {/* Live Open/Closed Indicator */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FFFDF9] border border-[#EADBC4]">
              <div className="flex items-center gap-3">
                <span className={`w-3.5 h-3.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-ping' : 'bg-red-500'}`} />
                <div>
                  <span className={`text-xs font-black uppercase tracking-wider block ${isOpenNow ? 'text-emerald-700' : 'text-red-700'}`}>
                    {isOpenNow ? t.findUs.openNow : t.findUs.closedNow}
                  </span>
                  <span className="text-[11px] text-[#8C5E3C] font-medium">
                    {isOpenNow
                      ? (lang === 'ar' ? 'يغلق الساعة 23:00 ليلاً' : lang === 'en' ? 'Closes at 11:00 PM' : 'Ferme à 23h00')
                      : (lang === 'ar' ? 'يفتح الساعة 07:00 صباحاً' : lang === 'en' ? 'Opens at 07:00 AM' : 'Ouvre à 07h00')}
                  </span>
                </div>
              </div>

              <Clock className="w-5 h-5 text-[#D8A517]" />
            </div>

            {/* Address Info Card */}
            <div className="space-y-2">
              <h3 className="text-xs font-extrabold text-[#8C5E3C] uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D8A517]" />
                <span>{t.findUs.addressTitle}</span>
              </h3>
              <p className="text-base font-bold text-[#3B1F0F] font-serif leading-snug">
                {address}
              </p>
              <p className="text-xs text-[#8C5E3C]">
                {lang === 'ar' ? 'حي ديور الجامع التاريخي - بالقرب من الأنشطة التجارية' : 'Quartier historique Diour Jamaa, proche des transports et commerces.'}
              </p>
            </div>

            {/* Opening Hours Info */}
            <div className="space-y-2 pt-2 border-t border-[#EADBC4]">
              <h3 className="text-xs font-extrabold text-[#8C5E3C] uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D8A517]" />
                <span>{t.findUs.hoursTitle}</span>
              </h3>
              <p className="text-sm font-bold text-[#3B1F0F]">
                {t.findUs.hoursValue}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#EADBC4]">
              
              <a
                href="tel:0537660057"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-[#3B1F0F] bg-[#F2C230] hover:bg-[#D8A517] shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>{t.findUs.callNow}</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-[#8C5E3C] hover:text-[#3B1F0F] transition-colors"
              >
                <span>{t.findUs.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-[#EADBC4] shadow-md min-h-[380px] bg-[#FAF6EE] relative group">
            <iframe
              title="Google Map Ba Fares Rabat"
              src="https://www.google.com/maps?q=Avenue+Al+Ghazali+Imm+Frej+N2+Diour+Jamaa+Rabat+Maroc&output=embed"
              className="w-full h-full min-h-[380px] border-0 filter contrast-[1.02] grayscale-[10%]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Pill */}
            <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto bg-[#FFFDF9]/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#EADBC4] shadow-md pointer-events-none flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F2C230]" />
              <span className="text-xs font-extrabold text-[#3B1F0F]">
                Ba Fares • Rabat Diour Jamaa
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
