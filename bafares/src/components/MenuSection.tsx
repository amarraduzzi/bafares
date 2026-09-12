import React, { useState, useMemo } from 'react';
import { Search, Info, Utensils, Star } from 'lucide-react';
import { CategoryId, MenuItem, Language } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { translations } from '../data/translations';
import { DishDetailModal } from './DishDetailModal';

interface MenuSectionProps {
  lang: Language;
}

const CATEGORY_ORDER: CategoryId[] = [
  'breakfast',
  'beldi',
  'harcha_rghifa',
  'crepes',
  'omelettes',
  'sales',
  'laitiers',
  'supplements',
  'juices',
  'drinks',
];

const CATEGORY_ICONS: Record<CategoryId, string> = {
  all: '🍽️',
  breakfast: '🍳',
  beldi: '🍲',
  harcha_rghifa: '🥞',
  crepes: '🧇',
  omelettes: '🍳',
  sales: '🥟',
  laitiers: '🍮',
  supplements: '🧈',
  juices: '🍊',
  drinks: '☕',
};

export const MenuSection: React.FC<MenuSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const t = translations[lang];
  const isAr = lang === 'ar';

  const categories: { id: CategoryId; label: string; icon: string }[] = [
    { id: 'all', label: t.menu.categories.all, icon: CATEGORY_ICONS.all },
    ...CATEGORY_ORDER.map((id) => ({
      id,
      label: t.menu.categories[id as Exclude<CategoryId, 'all'>],
      icon: CATEGORY_ICONS[id],
    })),
  ];

  const query = searchQuery.toLowerCase().trim();

  const matchesSearch = (item: MenuItem) => {
    if (!query) return true;
    return (
      item.nameFr.toLowerCase().includes(query) ||
      item.nameAr.includes(query) ||
      item.nameEn.toLowerCase().includes(query) ||
      item.descFr.toLowerCase().includes(query) ||
      item.descAr.includes(query)
    );
  };

  const groups = useMemo(() => {
    return CATEGORY_ORDER
      .filter((catId) => activeCategory === 'all' || activeCategory === catId)
      .map((catId) => ({
        catId,
        label: t.menu.categories[catId as Exclude<CategoryId, 'all'>],
        icon: CATEGORY_ICONS[catId],
        items: MENU_ITEMS.filter((item) => item.category === catId && matchesSearch(item)),
      }))
      .filter((g) => g.items.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, searchQuery, lang]);

  const totalResults = groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <section id="menu" className="py-20 bg-[#FAF6EE] relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F2E9D8] border border-[#EADBC4] text-xs font-medium text-[#3B1F0F]">
            <Info className="w-4 h-4 text-[#D8A517] shrink-0" />
            <span>{t.menu.notice}</span>
          </div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-6 mb-10">

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
          </div>

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

        {/* Menu List — printed-card style, no images */}
        {totalResults === 0 ? (
          <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-[#EADBC4] p-8 max-w-md mx-auto">
            <p className="text-base font-bold text-[#3B1F0F]">
              {isAr ? 'لم يتم العثور على أطباق مطابقة للبحث' : 'Aucun plat ne correspond à votre recherche'}
            </p>
            <p className="text-xs text-[#8C5E3C] mt-2">
              {isAr ? 'يرجى تغيير كلمة البحث أو اختيار تصنيف آخر.' : 'Essayez un autre mot-clé ou sélectionnez une autre catégorie.'}
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
          <div className="bg-[#FFFDF9] rounded-3xl border-2 border-[#EADBC4] shadow-sm p-6 sm:p-10">
            {groups.map((group, gIndex) => (
              <div key={group.catId} className={gIndex > 0 ? 'mt-10' : ''}>
                {/* Category Heading */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl leading-none">{group.icon}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#3B1F0F] font-serif tracking-tight">
                    {group.label}
                  </h3>
                  <div className="flex-1 h-px bg-[#EADBC4]" />
                </div>

                {/* Item List — two print columns on larger screens */}
                <div className="sm:columns-2 gap-x-10">
                  {group.items.map((item) => {
                    const name = isAr ? item.nameAr : lang === 'en' ? item.nameEn : item.nameFr;
                    const tag = isAr ? item.tagAr : lang === 'en' ? item.tagEn : item.tagFr;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedDish(item)}
                        className="w-full flex items-baseline gap-1.5 py-2.5 text-start break-inside-avoid focus:outline-none group"
                      >
                        <span className="shrink-0 flex items-center gap-1.5 max-w-[62%] sm:max-w-[65%]">
                          <span className="text-[15px] sm:text-base font-semibold text-[#3B1F0F] group-hover:text-[#D8A517] transition-colors font-serif truncate">
                            {name}
                          </span>
                          {item.popular && (
                            <Star className="w-3.5 h-3.5 fill-[#F2C230] text-[#F2C230] shrink-0" />
                          )}
                          {tag && (
                            <span className="hidden sm:inline text-[10px] font-bold text-[#D8A517] uppercase tracking-wide shrink-0">
                              {tag}
                            </span>
                          )}
                        </span>
                        <span className="flex-1 border-b border-dotted border-[#C9B48A] translate-y-[-3px]" />
                        <span className="shrink-0 text-[15px] sm:text-base font-bold text-[#3B1F0F] font-serif">
                          {item.price} {t.menu.dh}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
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
