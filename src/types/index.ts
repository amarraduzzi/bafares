export type Language = 'fr' | 'ar' | 'en';

export type CategoryId = 'all' | 'breakfast' | 'mains' | 'dairy_drinks' | 'fresh_juices' | 'pastries';

export interface MenuItem {
  id: string;
  nameFr: string;
  nameAr: string;
  nameEn: string;
  descFr: string;
  descAr: string;
  descEn: string;
  category: CategoryId;
  price: number; // In Moroccan Dirhams (DH)
  image: string;
  tagFr?: string;
  tagAr?: string;
  tagEn?: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  commentFr: string;
  commentAr: string;
  commentEn: string;
  rating: number;
  date: string;
}

export interface GalleryItem {
  id: string;
  titleFr: string;
  titleAr: string;
  titleEn: string;
  categoryFr: string;
  categoryAr: string;
  categoryEn: string;
  image: string;
}
