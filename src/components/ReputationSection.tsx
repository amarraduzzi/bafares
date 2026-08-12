import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Star, Quote, Award, Heart } from 'lucide-react';
import { Language } from '../types';
import { TESTIMONIALS } from '../data/menuData';
import { translations } from '../data/translations';

interface ReputationSectionProps {
  lang: Language;
}

export const ReputationSection: React.FC<ReputationSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="avis" className="py-20 bg-[#FAF6EE] relative overflow-hidden border-t border-[#EADBC4]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Highlight Badge Banner */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] to-[#F2E9D8] border-2 border-[#F2C230] shadow-lg text-center relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4 text-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0 shadow-md">
                <Instagram className="w-8 h-8" />
              </div>

              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F2C230] text-[#3B1F0F] text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  Instagram Officiel
                </span>
                <h3 className="text-2xl font-black text-[#3B1F0F] font-serif">
                  {t.reputation.instaHandle}
                </h3>
                <p className="text-sm font-semibold text-[#8C5E3C]">
                  {t.reputation.instaFollowers}
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/bafares.1957"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#FFFDF9] bg-[#3B1F0F] hover:bg-[#D8A517] hover:text-[#3B1F0F] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.reputation.visitInsta}</span>
            </a>

          </div>

        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBC4] text-xs font-bold text-[#D8A517]">
            <Heart className="w-3.5 h-3.5 fill-[#D8A517]" />
            <span>Fidélité & Tradition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3B1F0F] font-serif tracking-tight">
            {t.reputation.reviewsTitle}
          </h2>
          <p className="text-base text-[#8C5E3C]">
            {t.reputation.subtitle}
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, index) => {
            const comment = lang === 'ar' ? review.commentAr : lang === 'en' ? review.commentEn : review.commentFr;

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#FFFDF9] p-6 rounded-3xl border-2 border-[#EADBC4] hover:border-[#F2C230] shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-start relative"
              >
                <Quote className="w-8 h-8 text-[#F2C230]/40 absolute top-4 right-4 rtl:left-4 rtl:right-auto pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-1 text-[#D8A517]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D8A517]" />
                    ))}
                  </div>

                  <p className="text-sm text-[#3B1F0F] italic leading-relaxed font-medium">
                    "{comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EADBC4] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#3B1F0F] block">
                      {review.name}
                    </span>
                    <span className="text-[#8C5E3C]">
                      {review.location}
                    </span>
                  </div>

                  <span className="text-[11px] text-[#8C5E3C]/80 font-medium">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
