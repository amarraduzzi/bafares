import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Info, Sparkles, Utensils, Star } from 'lucide-react';
import { CategoryId, MenuItem, Language } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { translations } from '../data/translations';
import { DishDetailModal } from './DishDetailModal';

interface MenuSectionProps {
  lang: Language;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const t = translations[lang];

  const categories: { id: CategoryId; label: string; icon: string }[] = [
    { id: 'all', label: t.menu.categories.all, icon: '🍽️' },
    { id: 'breakfast', label: t.menu.categories.breakfast, icon: '🥞' },
    { id: 'mains', label: t.menu.categories.mains, icon: '🍲' },
    { id: 'dairy_drinks', label: t.menu.categories.dairy_drinks, icon: '🥛' },
    { id: 'fresh_juices', label: t.menu.categories.fresh_juices, icon: '🍊' },
    { id: 'pastries', label: t.menu.categories.pastries, icon: '🥐' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.nameFr.toLowerCase().includes(query) ||
        item.nameAr.includes(query) ||
        item.nameEn.toLowerCase().includes(query) ||
        item.descFr.toLowerCase().includes(query) ||
        item.descAr.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#FAF6EE] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFDF9] border border-[#EADBC4] text-xs font-bold text-[#D8A517] shadow-2xs">
            <Utensils className="w-3.5 h-3.5" />
            <span>Savoir-faire 1957</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3B1F0F] font-serif tracking-tight">
            {t.menu.title}
          </h2>

          <p className="text-base sm:text-lg text-[#8C5E3C]">
            {t.menu.subtitle}
          </p>

          {/* Informational Banner (Strictly NO Cart) */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F2E9D8] border border-[#EADBC4] text-xs font-medium text-[#3B1F0F]">
            <Info className="w-4 h-4 text-[#D8A517] shrink-0" />
            <span>{t.menu.notice}</span>
          </div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 rtl:right-0 rtl:left-auto pl-3.5 rtl:pr-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-[#8C5E3C]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-10 rtl:pr-10 rtl:pl-3.5 pr-4 py-3 bg-[#FFFDF9] border border-[#EADBC4] focus:border-[#F2C230] focus:ring-2 focus:ring-[#F2C230]/30 rounded-2xl text-sm text-[#3B1F0F] placeholder-[#8C5E3C]/60 shadow-xs outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 rtl:left-0 rtl:right-auto pr-3 rtl:pl-3 flex items-center text-xs text-[#8C5E3C] hover:text-[#3B1F0F]"
              >
                Effacer
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 focus:outline-none shrink-0 ${
                    isActive
                      ? 'bg-[#F2C230] text-[#3B1F0F] shadow-md transform -translate-y-0.5'
                      : 'bg-[#FFFDF9] text-[#3B1F0F]/80 border border-[#EADBC4] hover:bg-[#F2E9D8] hover:border-[#F2C230]/50'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-[#EADBC4] p-8 max-w-md mx-auto">
            <p className="text-base font-bold text-[#3B1F0F]">
              {lang === 'ar' ? 'لم يتم العثور على أطباق مطابقة للبحث' : 'Aucun plat ne correspond à votre recherche'}
            </p>
            <p className="text-xs text-[#8C5E3C] mt-2">
              {lang === 'ar' ? 'يرجى تغيير كلمة البحث أو اختيار تصنيف آخر.' : 'Essayez un autre mot-clé ou sélectionnez une autre catégorie.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-[#F2C230] text-[#3B1F0F]"
            >
              Réinitialiser
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => {
              const name = lang === 'ar' ? item.nameAr : lang === 'en' ? item.nameEn : item.nameFr;
              const desc = lang === 'ar' ? item.descAr : lang === 'en' ? item.descEn : item.descFr;
              const tag = lang === 'ar' ? item.tagAr : lang === 'en' ? item.tagEn : item.tagFr;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedDish(item)}
                  className="bg-[#FFFDF9] rounded-3xl border-2 border-[#EADBC4] hover:border-[#F2C230] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group transform hover:-translate-y-1"
                >
                  {/* Card Thumbnail Frame */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#FAF6EE]">
                    <img
                      src={item.image}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F0F]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Tag Badge */}
                    {tag && (
                      <div className="absolute top-3 left-3 rtl:right-3 rtl:left-auto bg-[#FAF6EE]/90 backdrop-blur-xs text-[#3B1F0F] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#EADBC4] shadow-2xs">
                        {tag}
                      </div>
                    )}

                    {/* Popular Badge */}
                    {item.popular && (
                      <div className="absolute top-3 right-3 rtl:left-3 rtl:right-auto bg-[#F2C230] text-[#3B1F0F] text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs uppercase tracking-wider">
                        <Star className="w-3 h-3 fill-[#3B1F0F]" />
                        <span>Populaire</span>
                      </div>
                    )}

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 left-3 rtl:right-3 rtl:left-auto bg-[#F2C230] text-[#3B1F0F] font-black text-sm px-3 py-1 rounded-full shadow-md font-serif">
                      {item.price} {t.menu.dh}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3 text-start">
                    <div>
                      <h3 className="text-lg font-bold text-[#3B1F0F] font-serif group-hover:text-[#D8A517] transition-colors leading-snug">
                        {name}
                      </h3>
                      {lang !== 'ar' && (
                        <p className="text-xs font-semibold text-[#8C5E3C] font-serif mt-0.5" dir="rtl">
                          {item.nameAr}
                        </p>
                      )}
                      <p className="text-xs text-[#5A321B] mt-2 line-clamp-2 leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#EADBC4]/60 flex items-center justify-between text-xs font-bold text-[#D8A517] group-hover:text-[#3B1F0F] transition-colors">
                      <span>{t.menu.viewDetails}</span>
                      <span className="text-base transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* Dish Detail Modal Popup */}
      <DishDetailModal
        item={selectedDish}
        lang={lang}
        onClose={() => setSelectedDish(null)}
      />

    </section>
  );
};
