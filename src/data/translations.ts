import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    story: string;
    menu: string;
    gallery: string;
    reputation: string;
    findUs: string;
    contact: string;
    whatsappCta: string;
  };
  hero: {
    badge: string;
    tagline: string;
    subtitle: string;
    ctaMenu: string;
    ctaFindUs: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  story: {
    title: string;
    subtitle: string;
    yearsText: string;
    p1: string;
    p2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar1Detail: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar2Detail: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar3Detail: string;
  };
  menu: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    notice: string;
    categories: {
      all: string;
      breakfast: string;
      mains: string;
      dairy_drinks: string;
      fresh_juices: string;
      pastries: string;
    };
    dh: string;
    viewDetails: string;
    closeModal: string;
    ingredientsTitle: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    zoomHint: string;
  };
  reputation: {
    title: string;
    subtitle: string;
    instaFollowers: string;
    instaHandle: string;
    visitInsta: string;
    reviewsTitle: string;
  };
  findUs: {
    title: string;
    subtitle: string;
    addressTitle: string;
    addressValue: string;
    hoursTitle: string;
    hoursValue: string;
    openNow: string;
    closedNow: string;
    phoneTitle: string;
    whatsappTitle: string;
    getDirections: string;
    callNow: string;
  };
  footer: {
    tagline: string;
    rights: string;
    legalNotice: string;
    backToTop: string;
    quickLinks: string;
  };
  legalModal: {
    title: string;
    company: string;
    address: string;
    phone: string;
    hours: string;
    description: string;
    close: string;
  };
  whatsappMsg: string;
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      story: 'Notre histoire',
      menu: 'Notre menu',
      gallery: 'Galerie',
      reputation: 'Avis',
      findUs: 'Nous trouver',
      contact: 'Contact',
      whatsappCta: 'Contact WhatsApp',
    },
    hero: {
      badge: 'Depuis 1957 à Rabat Diour Jamaa',
      tagline: 'Le goût du bled, depuis 1957',
      subtitle: 'Recettes traditionnelles faites maison, préparées chaque jour avec des ingrédients beldi naturels et un savoir-faire artisanal préservé depuis 1957.',
      ctaMenu: 'Consulter le menu',
      ctaFindUs: 'Nous trouver à Rabat',
      feature1: '100% Fait Maison',
      feature2: 'Ingrédients Beldi',
      feature3: 'Recettes de 1957',
    },
    story: {
      title: 'Notre Histoire',
      subtitle: 'Une tradition culinaire marocaine implantée au cœur de Rabat depuis 1957.',
      yearsText: 'ans de savoir-faire à Diour Jamaa',
      p1: 'Fondé en 1957 dans le quartier de Diour Jamaa à Rabat, Ba Fares est une adresse emblématique de la cuisine marocaine traditionnelle. L’établissement perpétue l’art du petit-déjeuner beldi généreux, du couscous traditionnel et de la harira réconfortante.',
      p2: 'Dans notre établissement, chaque plat est préparé selon les recettes traditionnelles. Nous privilégions les ingrédients beldi locaux et la cuisson artisanale pour vous offrir le goût authentique du terroir.',
      pillar1Title: 'Savoir-Faire Artisanal',
      pillar1Desc: 'Rghaif, harcha et msemen pétris et cuits sur plaque chaque jour.',
      pillar1Detail: 'Pétrissage manuel selon les méthodes traditionnelles et cuisson sur plaque chauffante pour obtenir un feuilletage doré, léger et croustillant.',
      pillar2Title: 'Qualité Beldi',
      pillar2Desc: 'Ingrédients locaux sélectionnés pour préserver les saveurs traditionnelles.',
      pillar2Detail: 'Sélection rigoureuse d’huile d’olive vierge, de miel pur du terroir et de beurre beldi frais sans additifs.',
      pillar3Title: 'Hospitalité de Rabat',
      pillar3Desc: 'Un accueil chaleureux au cœur du quartier Diour Jamaa depuis 1957.',
      pillar3Detail: 'Une atmosphère conviviale où chaque visiteur est accueilli avec générosité pour partager un moment authentique.',
    },
    menu: {
      title: 'Notre Menu Artisanal',
      subtitle: 'Découvrez nos spécialités traditionnelles préparées quotidiennement.',
      searchPlaceholder: 'Rechercher un plat, un ingrédient (ex: Rghaif, Couscous, Harira)...',
      notice: 'Menu informatif — Les prix sont donnés à titre indicatif et applicables sur place.',
      categories: {
        all: 'Tous les plats',
        breakfast: 'Petit-Déjeuner Beldi',
        mains: 'Plats Traditionnels',
        dairy_drinks: 'Laitiers & Thé',
        fresh_juices: 'Jus Frais',
        pastries: 'Salés & Pâtisseries',
      },
      dh: 'DH',
      viewDetails: 'Savoir plus',
      closeModal: 'Fermer',
      ingredientsTitle: 'Composition & Savoir-faire',
    },
    gallery: {
      title: 'Notre Galerie Gourmande',
      subtitle: 'Un aperçu visuel de nos petits-déjeuners royaux et plats traditionnels.',
      zoomHint: 'Cliquez sur une image pour l’agrandir',
    },
    reputation: {
      title: 'Avis & Communauté',
      subtitle: 'La satisfaction de nos clients est notre plus belle fierté.',
      instaFollowers: 'plus de 2 300 abonnés passionnés',
      instaHandle: '@bafares.1957',
      visitInsta: 'Rejoignez-nous sur Instagram',
      reviewsTitle: 'Ce que disent nos clients réguliers',
    },
    findUs: {
      title: 'Nous Trouver',
      subtitle: 'Venez vivre l’expérience Ba Fares au cœur du quartier historique Diour Jamaa.',
      addressTitle: 'Adresse du Restaurant',
      addressValue: 'Avenue Al Ghazali, Imm. Frej N2, Diour Jamaa, Rabat, Maroc',
      hoursTitle: 'Horaires d’Ouverture',
      hoursValue: 'Tous les jours : 07h00 – 00h00 (Service continu)',
      openNow: 'OUVERT ACTUELLEMENT',
      closedNow: 'FERMÉ ACTUELLEMENT',
      phoneTitle: 'Téléphone & Hotline',
      whatsappTitle: 'Contact direct WhatsApp',
      getDirections: 'Ouvrir sur Google Maps',
      callNow: 'Appeler le 0537 660 057',
    },
    footer: {
      tagline: 'Restaurant traditionnel marocain à Rabat depuis 1957. Le goût authentique du bled.',
      rights: 'Tous droits réservés.',
      legalNotice: 'Mentions Légales',
      backToTop: 'Haut de page',
      quickLinks: 'Navigation Rapide',
    },
    legalModal: {
      title: 'Mentions Légales & Informations',
      company: 'Ba Fares 1957 — Restaurant Traditionnel',
      address: 'Avenue Al Ghazali, Imm. Frej N2, Diour Jamaa, Rabat, Maroc',
      phone: '0537 660 057',
      hours: 'Lundi au Dimanche de 07h00 à 00h00',
      description: 'Ba Fares est un établissement traditionnel spécialisé dans le petit-déjeuner marocain, les plats cuisinés et les pâtisseries artisanales à Rabat depuis 1957. Ce site est un site vitrine informatif.',
      close: 'Fermer',
    },
    whatsappMsg: 'Bonjour, je souhaite avoir des informations sur le restaurant Ba Fares (menus, horaires, réservation de table)...',
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      story: 'قصتنا',
      menu: 'قائمة الطعام',
      gallery: 'معرض الصور',
      reputation: 'آراء الزبناء',
      findUs: 'موقعنا',
      contact: 'اتصل بنا',
      whatsappCta: 'واتساب مباشر',
    },
    hero: {
      badge: 'منذ عام 1957 في الرباط - ديور الجامع',
      tagline: 'طعم بلادنا، منذ 1957',
      subtitle: 'وصفات تقليدية أصيلة تُحضر يومياً بأجود المكونات البلدية الطبيعية وخبرة عريقة متوارثة منذ عام 1957.',
      ctaMenu: 'استكشف قائمة الطعام',
      ctaFindUs: 'موقعنا في الرباط',
      feature1: '100% شغل الدار',
      feature2: 'مكونات بلدية أصيلة',
      feature3: 'وصفات عريقة من 1957',
    },
    story: {
      title: 'قصتنا العريقة',
      subtitle: 'تقاليد المطبخ المغربي الأصيل بقلب الرباط منذ عام 1957.',
      yearsText: 'عاماً من الأصالة في ديور الجامع',
      p1: 'تأسس مطعم با فارس عام 1957 في حي ديور الجامع بالرباط، ويعد عنواناً بارزاً للمطبخ المغربي التقليدي. يواصل المطعم تقديم الفطور البلدي الأصيل، الكسكس التقليدي، والحريرة المغربية.',
      p2: 'نحرص في مطعمنا على إعداد الأطباق حسب الوصفات التقليدية وبالمكونات البلدية المحلية لنضمن لكم الطعم الأصيل الأصلي.',
      pillar1Title: 'صنعة تقليدية',
      pillar1Desc: 'رغايف وحرشة ومسمن يجهز ويخبز طازجاً يومياً.',
      pillar1Detail: 'عجن يدوي طازج وطهي على الصاج الساخن للحصول على تورق هش ومذاق بلدي فريد.',
      pillar2Title: 'جودة بلدية',
      pillar2Desc: 'مكونات محلية مختارة للحفاظ على المذاق الأصيل.',
      pillar2Detail: 'اختيار دقيق لزيت الزيتون الصافي والعسل الحر والزبدة البلدية دون أي إضافات اصطناعية.',
      pillar3Title: 'ضيافة الرباط',
      pillar3Desc: 'استقبال حار بقلب حي ديور الجامع منذ عام 1957.',
      pillar3Detail: 'أجواء عائلية دافئة ونرحب بكل زائر بكل حفاوة في قلب الرباط.',
    },
    menu: {
      title: 'قائمة الطعام التقليدية',
      subtitle: 'اكتشف أطباقنا المجهزة يومياً بكل عناية وإتقان.',
      searchPlaceholder: 'ابحث عن طبق أو مكون (مثال: رغايف، كسكس، حريرة)...',
      notice: 'قائمة إعلامية — الأسعار استرشادية ومطبقة داخل المطعم.',
      categories: {
        all: 'جميع الأطباق',
        breakfast: 'فطور بلدي مغربي',
        mains: 'أطباق تقليدية',
        dairy_drinks: 'ألبان وشاي',
        fresh_juices: 'عصائر طازجة',
        pastries: 'مملحات وحلويات',
      },
      dh: 'درهم',
      viewDetails: 'تفاصيل الطبق',
      closeModal: 'إغلاق',
      ingredientsTitle: 'المكونات وطريقة التحضير',
    },
    gallery: {
      title: 'معرض الصور الشهي',
      subtitle: 'نظرة على أطباق الفطور الملكي والأكلات المغربية العريقة.',
      zoomHint: 'انقر على الصورة لتكبيرها',
    },
    reputation: {
      title: 'آراء وثقة زبنائنا',
      subtitle: 'رضا زبنائنا هو وسام فخرنا وسر استمرارنا.',
      instaFollowers: 'أكثر من 2300 متابع محب لأطباقنا',
      instaHandle: '@bafares.1957',
      visitInsta: 'تابعونا على إنستغرام',
      reviewsTitle: 'ما يقوله زبناؤنا الأوفياء',
    },
    findUs: {
      title: 'كيف تصل إلينا',
      subtitle: 'تفضلوا بزيارتنا لتذوق أصالة با فارس في حي ديور الجامع التاريخي بالرباط.',
      addressTitle: 'عنوان المطعم',
      addressValue: 'شارع الغزالي، عمارة فريج رقم 2، ديور الجامع، الرباط، المغرب',
      hoursTitle: 'أوقات العمل',
      hoursValue: 'يومياً : من 07:00 صباحاً حتى 00:00 ليلاً (خدمة مستمرة)',
      openNow: 'مفتوح الآن',
      closedNow: 'مغلق حالياً',
      phoneTitle: 'الهاتف المباشر',
      whatsappTitle: 'تواصل مباشر عبر الواتساب',
      getDirections: 'فتح في خرائط جوجل',
      callNow: 'الاتصال بـ 0537660057',
    },
    footer: {
      tagline: 'مطعم مغربي تقليدي بالرباط منذ 1957. المذاق الأصيل لبلادنا.',
      rights: 'جميع الحقوق محفوظة.',
      legalNotice: 'الشروط والمعلومات القانونية',
      backToTop: 'إلى الأعلى',
      quickLinks: 'روابط سريعة',
    },
    legalModal: {
      title: 'المعلومات القانونية والتوضيحات',
      company: 'با فارس 1957 — مطعم تقليدي',
      address: 'شارع الغزالي، عمارة فريج رقم 2، ديور الجامع، الرباط، المغرب',
      phone: '0537 660 057',
      hours: 'من الاثنين إلى الأحد من 07:00 إلى 00:00',
      description: 'با فارس مؤسسة تقليدية متخصصة في الفطور المغربي والأطباق التقليدية والحلويات العريقة بالرباط منذ 1957. هذا الموقع إعلامي فقط.',
      close: 'إغلاق',
    },
    whatsappMsg: 'السلام عليكم، أرغب في الاستفسار عن مطعم با فارس (قائمة الطعام، أوقات العمل)...',
  },
  en: {
    nav: {
      home: 'Home',
      story: 'Our Story',
      menu: 'Our Menu',
      gallery: 'Gallery',
      reputation: 'Reviews',
      findUs: 'Find Us',
      contact: 'Contact',
      whatsappCta: 'WhatsApp Direct',
    },
    hero: {
      badge: 'Since 1957 in Rabat Diour Jamaa',
      tagline: 'The taste of home, since 1957',
      subtitle: 'Homemade traditional Moroccan recipes, prepared daily with natural local ingredients and artisanal craftsmanship preserved since 1957.',
      ctaMenu: 'Explore the Menu',
      ctaFindUs: 'Find Us in Rabat',
      feature1: '100% Homemade',
      feature2: 'Authentic Beldi Ingredients',
      feature3: 'Recipes Since 1957',
    },
    story: {
      title: 'Our Heritage Story',
      subtitle: 'A Moroccan culinary tradition established in Rabat since 1957.',
      yearsText: 'years of craftsmanship in Diour Jamaa',
      p1: 'Founded in 1957 in the Diour Jamaa district of Rabat, Ba Fares is an emblematic address for traditional Moroccan cuisine. The restaurant continues the art of generous beldi breakfasts, classic Friday couscous, and comforting harira.',
      p2: 'In our establishment, every dish is prepared according to traditional recipes. We prioritize local beldi ingredients and artisanal preparation to bring you the authentic taste of Moroccan heritage.',
      pillar1Title: 'Artisanal Craftsmanship',
      pillar1Desc: 'Rghaif, harcha, and msemen kneaded and cooked fresh every day.',
      pillar1Detail: 'Hand-kneaded using traditional methods and griddle-cooked to achieve golden, flaky, and tender layers.',
      pillar2Title: 'Beldi Quality',
      pillar2Desc: 'Selected local ingredients to preserve traditional flavors.',
      pillar2Detail: 'Strict selection of pure cold-pressed olive oil, natural local honey, and fresh beldi butter with zero additives.',
      pillar3Title: 'Rabat Hospitality',
      pillar3Desc: 'A warm welcome in the heart of Diour Jamaa since 1957.',
      pillar3Detail: 'A welcoming, authentic atmosphere where every visitor is treated like family in the heart of Rabat.',
    },
    menu: {
      title: 'Our Artisanal Menu',
      subtitle: 'Discover our traditional specialties prepared fresh every day.',
      searchPlaceholder: 'Search for a dish or ingredient (e.g. Rghaif, Couscous, Harira)...',
      notice: 'Informational menu — Prices are indicative and applicable in-house.',
      categories: {
        all: 'All Dishes',
        breakfast: 'Moroccan Breakfast',
        mains: 'Traditional Meals',
        dairy_drinks: 'Dairy & Tea',
        fresh_juices: 'Fresh Juices',
        pastries: 'Pastries & Savories',
      },
      dh: 'MAD',
      viewDetails: 'Learn More',
      closeModal: 'Close',
      ingredientsTitle: 'Ingredients & Preparation',
    },
    gallery: {
      title: 'Our Food Gallery',
      subtitle: 'A visual taste of our royal Moroccan breakfasts and traditional meals.',
      zoomHint: 'Click any image to view in full resolution',
    },
    reputation: {
      title: 'Reviews & Community',
      subtitle: 'Our guests’ joy is our greatest reward and pride.',
      instaFollowers: 'over 2,300 passionate Instagram followers',
      instaHandle: '@bafares.1957',
      visitInsta: 'Join us on Instagram',
      reviewsTitle: 'What our regular guests say',
    },
    findUs: {
      title: 'Find Us',
      subtitle: 'Visit us for an authentic Ba Fares experience in historic Diour Jamaa, Rabat.',
      addressTitle: 'Restaurant Address',
      addressValue: 'Avenue Al Ghazali, Imm. Frej N2, Diour Jamaa, Rabat, Morocco',
      hoursTitle: 'Opening Hours',
      hoursValue: 'Every day: 07:00 AM – 12:00 AM Midnight (Non-stop service)',
      openNow: 'OPEN NOW',
      closedNow: 'CLOSED NOW',
      phoneTitle: 'Direct Hotline',
      whatsappTitle: 'Direct WhatsApp Contact',
      getDirections: 'Open in Google Maps',
      callNow: 'Call 0537 660 057',
    },
    footer: {
      tagline: 'Traditional Moroccan restaurant in Rabat since 1957. The authentic taste of home.',
      rights: 'All rights reserved.',
      legalNotice: 'Legal Notice',
      backToTop: 'Back to top',
      quickLinks: 'Quick Links',
    },
    legalModal: {
      title: 'Legal Notice & Information',
      company: 'Ba Fares 1957 — Traditional Restaurant',
      address: 'Avenue Al Ghazali, Imm. Frej N2, Diour Jamaa, Rabat, Morocco',
      phone: '0537 660 057',
      hours: 'Monday to Sunday from 07:00 AM to 12:00 AM',
      description: 'Ba Fares is a traditional establishment specializing in Moroccan breakfast, home-style meals, and artisanal pastries in Rabat since 1957. This website is purely informational.',
      close: 'Close',
    },
    whatsappMsg: 'Hello, I would like to get information about Ba Fares restaurant (menus, opening hours)...',
  },
};
