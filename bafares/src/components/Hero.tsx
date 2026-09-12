import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { UtensilsCrossed, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ASSETS } from '../data/menuData';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];

  // Lightweight parallax transform on scroll
  const { scrollY } = useScroll();
  const heroImageParallaxY = useTransform(scrollY, [0, 600], [0, 36]);
  const heroImageRotate = useTransform(scrollY, [0, 600], [0, -1]);

  // Split tagline for sequenced fade-up animation
  const taglineParts = t.hero.tagline.split(',');
  const mainLine = taglineParts[0]?.trim() || t.hero.tagline;
  const subLine = taglineParts[1]?.trim() || '';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.93, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-6 pb-14 md:pt-10 md:pb-20 bg-gradient-to-b from-[#F2C230] via-[#F5C518] to-[#E5B518] text-[#3B1F0F] selection:bg-[#3B1F0F] selection:text-[#F2C230]"
    >
      {/* Background Moroccan Zellige Subtle Texture */}
      <div className="absolute inset-0 bg-zellige-pattern opacity-10 pointer-events-none mix-blend-multiply" />

      {/* Repeating Watermark Marquee Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.14] select-none flex items-center overflow-hidden z-0">
        <div className="animate-marquee whitespace-nowrap text-7xl sm:text-9xl font-black font-serif text-[#3B1F0F] tracking-tight">
          BAFARES 1957 • LE GOÛT DU BLED • RABAT DIOUR JAMAA • BAFARES 1957 • LE GOÛT DU BLED • RABAT DIOUR JAMAA •
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* PROMINENT CHEF MASCOT VISUAL CENTERPIECE (Top on Mobile, Right on Desktop) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="order-first lg:order-last lg:col-span-5 flex flex-col items-center justify-center relative my-2 lg:my-0 w-full"
          >
            {/* Parallax Container */}
            <motion.div
              style={{ y: heroImageParallaxY, rotate: heroImageRotate }}
              className="relative w-full max-w-lg lg:max-w-none flex flex-col items-center justify-center group"
            >
              {/* Outer Golden Aura Glow */}
              <div className="absolute inset-0 rounded-3xl bg-[#FFFDF9]/50 blur-2xl transform scale-105 -z-10 pointer-events-none" />

              {/* Main Hero Mascot Image Card with Respiration Pulse Animation */}
              <div className="animate-logo-breath relative w-full rounded-3xl p-2.5 sm:p-3 bg-[#FFFDF9] border-4 sm:border-6 border-[#3B1F0F] shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                
                {/* Inner Decorative Golden Frame */}
                <div className="rounded-2xl p-1.5 bg-gradient-to-tr from-[#F2C230] via-[#FFE380] to-[#F2C230] border-2 border-[#3B1F0F] overflow-hidden">
                  
                  {/* Image Container with Responsive Mobile vs Desktop Framing */}
                  <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] rounded-xl overflow-hidden bg-[#FAF6EE] border-2 border-[#3B1F0F] shadow-inner">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`${ASSETS.heroWebp} 1672w`}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <img
                        src={ASSETS.heroWebp}
                        alt="Chef mascotte Ba Fares, restaurant traditionnel marocain à Rabat depuis 1957"
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover object-[center_15%] sm:object-[center_20%] lg:object-contain transition-transform duration-700 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </picture>
                  </div>

                </div>

                {/* Bottom Ribbon Seal Overlay */}
                <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-[#3B1F0F] text-[#F2C230] text-xs sm:text-sm font-black uppercase tracking-widest shadow-xl border-2 border-[#F2C230] whitespace-nowrap flex items-center gap-2 z-30">
                  <span className="text-[#F2C230]">★</span>
                  <span>BA FARES • RABAT 1957</span>
                  <span className="text-[#F2C230]">★</span>
                </div>
              </div>

            </motion.div>
          </motion.div>

          {/* MAIN TEXT & CTAs COLUMN (Bottom on Mobile, Left on Desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-last lg:order-first lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start space-y-5 sm:space-y-6"
          >
            {/* Title with Sequenced Fade-Up (Without duplicate pill badge above) */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#3B1F0F] font-serif leading-[1.1] tracking-tight"
            >
              <span className="block drop-shadow-xs">
                {mainLine}
              </span>
              {subLine && (
                <span className="block text-[#2B1408] text-3xl sm:text-5xl lg:text-6xl mt-2 font-serif italic font-medium underline decoration-[#3B1F0F]/30 decoration-wavy underline-offset-8">
                  {subLine}
                </span>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl text-[#3B1F0F]/90 font-medium leading-relaxed max-w-2xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Action CTAs with Scale & Shadow Intensification */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto"
            >
              {/* Menu CTA */}
              <a
                href="#menu"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-[#F2C230] bg-[#3B1F0F] border-2 border-[#3B1F0F] shadow-lg hover:shadow-2xl hover:shadow-[#3B1F0F]/35 hover:scale-105 transition-all duration-300 transform active:scale-95 focus:outline-none"
              >
                <UtensilsCrossed className="w-5 h-5 text-[#F2C230] transition-transform duration-300 group-hover:rotate-12" />
                <span>{t.hero.ctaMenu}</span>
              </a>

              {/* Find Us CTA */}
              <a
                href="#nous-trouver"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-[#3B1F0F] bg-[#FFFDF9] border-2 border-[#3B1F0F] shadow-md hover:shadow-xl hover:bg-[#3B1F0F] hover:text-[#F2C230] hover:scale-105 transition-all duration-300 transform active:scale-95 focus:outline-none"
              >
                <MapPin className="w-5 h-5 text-[#3B1F0F] group-hover:text-[#F2C230] transition-colors duration-300" />
                <span>{t.hero.ctaFindUs}</span>
              </a>
            </motion.div>

            {/* Feature Highlights Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 pt-6 w-full max-w-xl border-t-2 border-[#3B1F0F]/20"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-start p-3 rounded-2xl bg-[#FFFDF9]/80 border-2 border-[#3B1F0F]/15 backdrop-blur-xs shadow-xs">
                <span className="text-xs sm:text-sm font-extrabold text-[#3B1F0F] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#3B1F0F]" />
                  {t.hero.feature1}
                </span>
                <span className="text-[11px] sm:text-xs text-[#5A321B] font-semibold mt-0.5">Recettes fait maison</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-start p-3 rounded-2xl bg-[#FFFDF9]/80 border-2 border-[#3B1F0F]/15 backdrop-blur-xs shadow-xs">
                <span className="text-xs sm:text-sm font-extrabold text-[#3B1F0F] flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#3B1F0F]" />
                  {t.hero.feature2}
                </span>
                <span className="text-[11px] sm:text-xs text-[#5A321B] font-semibold mt-0.5">100% Produits Beldi</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-start p-3 rounded-2xl bg-[#FFFDF9]/80 border-2 border-[#3B1F0F]/15 backdrop-blur-xs shadow-xs">
                <span className="text-xs sm:text-sm font-extrabold text-[#3B1F0F] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#3B1F0F]" />
                  {t.hero.feature3}
                </span>
                <span className="text-[11px] sm:text-xs text-[#5A321B] font-semibold mt-0.5">Savoir-faire 1957</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
