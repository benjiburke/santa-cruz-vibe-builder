import { createContext, useContext, useState, ReactNode } from 'react';

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.partyVibes': 'Party Vibes',
    'nav.curatedExperiences': 'Curated Experiences',
    'nav.vacationRentals': 'Vacation Rentals',
    'nav.realEstateServices': 'Real Estate Services',
    'nav.vip': 'VIP Experience',
    'nav.whyUs': 'Why Us',
    'nav.about': 'About',
    'nav.whatsapp': 'WhatsApp',
    
    // Hero
    'hero.title1': 'Sophisticated Santa Cruz',
    'hero.title2': 'Experiences',
    'hero.subtitle': 'Curated luxury stays and exclusive experiences in Bolivia\'s most vibrant city. Crafted for the discerning traveler.',
    'hero.planExperience': 'Plan Your Experience',
    'hero.consultation': 'Consultation',
    'hero.explorePackages': 'Explore Packages',
    
    // Vibe Selector
    'vibe.title': 'Choose Your',
    'vibe.titleSpan': 'Experience',
    'vibe.subtitle': 'Every journey is unique. Tell us your preference and we\'ll craft the perfect experience.',
    'vibe.vibrant': 'Vibrant',
    'vibe.tranquil': 'Tranquil',
    'vibe.discovery': 'Discovery',
    'vibe.exclusive': 'Exclusive',
    'vibe.vibrantDesc': 'Sophisticated nightlife experiences with VIP access and curated social events.',
    'vibe.tranquilDesc': 'Peaceful luxury experiences with spa treatments and private relaxation.',
    'vibe.discoveryDesc': 'Cultural immersion and authentic local experiences with luxury comfort.',
    'vibe.exclusiveDesc': 'Ultimate luxury with full concierge service and unlimited customization.',
    'vibe.highEnergy': 'High Energy',
    'vibe.peaceful': 'Peaceful',
    'vibe.adventure': 'Adventure',
    'vibe.premium': 'Premium',
    'vibe.explore': 'Explore',
    'vibe.options': 'Options',
    'vibe.perfectFor': 'Perfect for your',
    'vibe.experience': 'experience',
    'vibe.viewDetails': 'View Details'
  },
  ES: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.partyVibes': 'Ambiente de Fiesta',
    'nav.curatedExperiences': 'Experiencias Curadas',
    'nav.vacationRentals': 'Alquileres Vacacionales',
    'nav.realEstateServices': 'Servicios Inmobiliarios',
    'nav.vip': 'Experiencia VIP',
    'nav.whyUs': 'Por Qué Nosotros',
    'nav.about': 'Acerca de',
    'nav.whatsapp': 'WhatsApp',
    
    // Hero
    'hero.title1': 'Experiencias Sofisticadas',
    'hero.title2': 'en Santa Cruz',
    'hero.subtitle': 'Estadías de lujo curadas y experiencias exclusivas en la ciudad más vibrante de Bolivia. Diseñado para el viajero exigente.',
    'hero.planExperience': 'Planifica Tu Experiencia',
    'hero.consultation': 'Consulta',
    'hero.explorePackages': 'Explorar Paquetes',
    
    // Vibe Selector
    'vibe.title': 'Elige Tu',
    'vibe.titleSpan': 'Experiencia',
    'vibe.subtitle': 'Cada viaje es único. Cuéntanos tu preferencia y crearemos la experiencia perfecta.',
    'vibe.vibrant': 'Vibrante',
    'vibe.tranquil': 'Tranquilo',
    'vibe.discovery': 'Descubrimiento',
    'vibe.exclusive': 'Exclusivo',
    'vibe.vibrantDesc': 'Experiencias nocturnas sofisticadas con acceso VIP y eventos sociales curados.',
    'vibe.tranquilDesc': 'Experiencias de lujo pacíficas con tratamientos de spa y relajación privada.',
    'vibe.discoveryDesc': 'Inmersión cultural y experiencias locales auténticas con comodidad de lujo.',
    'vibe.exclusiveDesc': 'Lujo definitivo con servicio completo de conserjería y personalización ilimitada.',
    'vibe.highEnergy': 'Alta Energía',
    'vibe.peaceful': 'Pacífico',
    'vibe.adventure': 'Aventura',
    'vibe.premium': 'Premium',
    'vibe.explore': 'Explorar',
    'vibe.options': 'Opciones',
    'vibe.perfectFor': 'Perfecto para tu experiencia',
    'vibe.experience': '',
    'vibe.viewDetails': 'Ver Detalles'
  },
  ZH: {
    // Navigation
    'nav.home': '首页',
    'nav.partyVibes': '派对氛围',
    'nav.curatedExperiences': '精选体验',
    'nav.vacationRentals': '度假租赁',
    'nav.realEstateServices': '房地产服务',
    'nav.vip': 'VIP体验',
    'nav.whyUs': '为什么选择我们',
    'nav.about': '关于我们',
    'nav.whatsapp': 'WhatsApp',
    
    // Hero
    'hero.title1': '精致圣克鲁斯',
    'hero.title2': '体验',
    'hero.subtitle': '在玻利维亚最具活力的城市享受精心策划的奢华住宿和专属体验。为挑剔的旅行者量身定制。',
    'hero.planExperience': '规划您的体验',
    'hero.consultation': '咨询',
    'hero.explorePackages': '探索套餐',
    
    // Vibe Selector
    'vibe.title': '选择您的',
    'vibe.titleSpan': '体验',
    'vibe.subtitle': '每次旅程都是独特的。告诉我们您的喜好，我们将为您打造完美体验。',
    'vibe.vibrant': '活力',
    'vibe.tranquil': '宁静',
    'vibe.discovery': '探索',
    'vibe.exclusive': '专属',
    'vibe.vibrantDesc': '精致的夜生活体验，VIP准入和精心策划的社交活动。',
    'vibe.tranquilDesc': '宁静的奢华体验，水疗护理和私人放松。',
    'vibe.discoveryDesc': '文化沉浸和正宗的本地体验，配以奢华舒适。',
    'vibe.exclusiveDesc': '终极奢华，提供全方位礼宾服务和无限定制。',
    'vibe.highEnergy': '高能量',
    'vibe.peaceful': '平静',
    'vibe.adventure': '冒险',
    'vibe.premium': '高端',
    'vibe.explore': '探索',
    'vibe.options': '选项',
    'vibe.perfectFor': '完美适合您的',
    'vibe.experience': '体验',
    'vibe.viewDetails': '查看详情'
  },
  PT: {
    // Navigation
    'nav.home': 'Início',
    'nav.partyVibes': 'Ambiente de Festa',
    'nav.curatedExperiences': 'Experiências Selecionadas',
    'nav.vacationRentals': 'Aluguéis de Temporada',
    'nav.realEstateServices': 'Serviços Imobiliários',
    'nav.vip': 'Experiência VIP',
    'nav.whyUs': 'Por Que Nós',
    'nav.about': 'Sobre',
    'nav.whatsapp': 'WhatsApp',
    
    // Hero
    'hero.title1': 'Experiências Sofisticadas',
    'hero.title2': 'em Santa Cruz',
    'hero.subtitle': 'Estadias de luxo curadas e experiências exclusivas na cidade mais vibrante da Bolívia. Criado para o viajante exigente.',
    'hero.planExperience': 'Planeje Sua Experiência',
    'hero.consultation': 'Consulta',
    'hero.explorePackages': 'Explorar Pacotes',
    
    // Vibe Selector
    'vibe.title': 'Escolha Sua',
    'vibe.titleSpan': 'Experiência',
    'vibe.subtitle': 'Cada jornada é única. Nos conte sua preferência e criaremos a experiência perfeita.',
    'vibe.vibrant': 'Vibrante',
    'vibe.tranquil': 'Tranquilo',
    'vibe.discovery': 'Descoberta',
    'vibe.exclusive': 'Exclusivo',
    'vibe.vibrantDesc': 'Experiências noturnas sofisticadas com acesso VIP e eventos sociais selecionados.',
    'vibe.tranquilDesc': 'Experiências de luxo pacíficas com tratamentos de spa e relaxamento privado.',
    'vibe.discoveryDesc': 'Imersão cultural e experiências locais autênticas com conforto de luxo.',
    'vibe.exclusiveDesc': 'Luxo definitivo com serviço completo de concierge e personalização ilimitada.',
    'vibe.highEnergy': 'Alta Energia',
    'vibe.peaceful': 'Pacífico',
    'vibe.adventure': 'Aventura',
    'vibe.premium': 'Premium',
    'vibe.explore': 'Explorar',
    'vibe.options': 'Opções',
    'vibe.perfectFor': 'Perfeito para sua experiência',
    'vibe.experience': '',
    'vibe.viewDetails': 'Ver Detalhes'
  }
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('EN');

  const t = (key: string): string => {
    const translation = translations[language as keyof typeof translations];
    return translation?.[key as keyof typeof translation] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};