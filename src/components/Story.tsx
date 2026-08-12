import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Award, Flame, HeartHandshake, Clock, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ASSETS } from '../data/menuData';

interface StoryProps {
  lang: Language;
}

export const Story: React.FC<StoryProps> = ({ lang }) => {
  const t = translations[lang];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const startYear = 1957;
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear - startYear;

  const [counter, setCounter] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / totalYears));
      const timer = setInterval(() => {
        current += 1;
        setCounter(current);
        if (current >= totalYears) {
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, totalYears]);

  const toggleCard = (index: number) => {
    setExpandedCard(prev => (prev === index ? null : index));
  };

  const pillarsData = [
    {
      id: 0,
      title: t.story.pillar1Title,
      desc: t.story.pillar1Desc,
      detail: t.story.pillar1Detail,
      icon: Flame,
      iconColor: 'text-[#E05315]',
    },
    {
      id: 1,
      title: t.story.pillar2Title,
      desc: t.story.pillar2Desc,
      detail: t.story.pillar2Detail,
      icon: Award,
      iconColor: 'text-[#B8820A]',
    },
    {
      id: 2,
      title: t.story.pillar3Title,
      desc: t.story.pillar3Desc,
      detail: t.story.pillar3Detail,
      icon: HeartHandshake,
      iconColor: 'text-[#B92025]',
    },
  ];

  return (
    <section id="histoire" ref={ref} className="py-16 md:py-20 bg-[#FFFDF9] border-y border-[#EADBC4] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#EADBC4] text-xs font-bold text-[#D8A517]">
            <Clock className="w-3.5 h-3.5" />
            <span>{startYear} — {currentYear}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3B1F0F] font-serif tracking-tight">
            {t.story.title}
          </h2>
          
          <p className="text-base sm:text-lg text-[#8C5E3C] leading-relaxed">
            {t.story.subtitle}
          </p>
        </div>

        {/* Grid Section: Story Narrative + Animated Counter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Animated Counter Hero Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-[#FAF6EE] rounded-3xl p-8 border-2 border-[#EADBC4] shadow-md text-center relative overflow-hidden group">
              
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#FFFDF9] border-2 border-[#F2C230] p-1 shadow-sm">
                <img
                  src={ASSETS.chefMascot}
                  alt="Ba Fares Mascot"
                  className="w-full h-full object-cover object-[center_20%] rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Counter Display */}
              <div className="text-6xl sm:text-7xl font-black text-[#3B1F0F] font-serif tracking-tight my-2 flex items-center justify-center gap-1">
                <span className="text-[#D8A517]">{counter}</span>
                <span className="text-4xl text-[#3B1F0F] font-sans">+</span>
              </div>

              <h3 className="text-lg font-extrabold text-[#3B1F0F] uppercase tracking-wider font-serif">
                {t.story.yearsText}
              </h3>

              <p className="text-xs text-[#8C5E3C] mt-2 font-medium">
                {lang === 'ar'
                  ? 'منذ عام 1957، والمطعم يستقبل زبناءه الأوفياء في حي ديور الجامع بالرباط.'
                  : 'Depuis 1957, Ba Fares accueille les passionnés de vraie cuisine marocaine à Rabat.'}
              </p>

              <div className="mt-6 pt-6 border-t border-[#EADBC4] flex items-center justify-around text-xs font-bold text-[#3B1F0F]">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D8A517]" />
                  <span>{lang === 'ar' ? 'منذ 1957' : 'Depuis 1957'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D8A517]" />
                  <span>{lang === 'ar' ? '100% شغل الدار' : '100% Fait Maison'}</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Narrative Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-start"
          >
            <div className="p-6 rounded-2xl bg-[#FAF6EE]/70 border border-[#EADBC4]">
              <p className="text-base sm:text-lg text-[#3B1F0F] leading-relaxed font-medium">
                "{t.story.p1}"
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#5A321B] leading-relaxed">
              {t.story.p2}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#3B1F0F] bg-[#F2E9D8] border border-[#EADBC4]">
                📍 Avenue Al Ghazali, Diour Jamaa
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#3B1F0F] bg-[#F2E9D8] border border-[#EADBC4]">
                🍞 Rghaif & Harcha Cuits Minute
              </span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#3B1F0F] bg-[#F2E9D8] border border-[#EADBC4]">
                🍯 Miel & Beurre Beldi
              </span>
            </div>
          </motion.div>

        </div>

        {/* 3 Heritage Pillars / Feature Cards */}
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
          {pillarsData.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.12 + index * 0.12,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => toggleCard(index)}
                className={`min-w-[82vw] sm:min-w-[300px] md:min-w-0 flex-1 snap-center p-6 rounded-2xl bg-[#FAF6EE] border-2 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-md ${
                  isExpanded
                    ? 'border-[#D8A517] bg-[#FFFDF9] shadow-sm ring-1 ring-[#D8A517]/30'
                    : 'border-[#EADBC4] hover:border-[#D8A517]/70 hover:bg-[#FFFDF9]'
                }`}
              >
                <div>
                  {/* Artisanal Circular Badge Icon */}
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.35,
                      delay: 0.2 + index * 0.12,
                      ease: 'easeOut',
                    }}
                    className="w-12 h-12 rounded-full bg-[#FAF0D7] border-2 border-[#D8A517]/50 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-[#3B1F0F] group-hover:bg-[#F2C230] group-hover:scale-110 shadow-xs"
                  >
                    <IconComponent className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${pillar.iconColor} group-hover:text-[#3B1F0F]`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#3B1F0F] font-serif mb-2 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#8C5E3C] leading-relaxed font-medium">
                    {pillar.desc}
                  </p>

                  {/* Interactive Expanded Detail (entire card toggles this) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 mt-3 border-t border-[#EADBC4]/70 text-xs sm:text-sm text-[#5A321B] leading-relaxed font-normal">
                          {pillar.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
