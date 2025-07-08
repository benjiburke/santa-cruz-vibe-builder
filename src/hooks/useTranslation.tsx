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
    'vibe.viewDetails': 'View Details',
    
    // Why Diamond Santa Cruz section
    'why.title': 'Why Diamond',
    'why.titleSpan': 'Santa Cruz',
    'why.subtitle': 'We don\'t just book trips — we curate complete experiences',
    'why.flightTitle': 'Global Flight Assistance',
    'why.flightDesc': 'From NYC to Dubai to São Paulo — we handle your airfare coordination seamlessly',
    'why.packageTitle': 'Full-Service Packages',
    'why.packageDesc': 'Accommodation, activities, and coordination — everything handled before you arrive',
    'why.insiderTitle': 'Local Insider Access',
    'why.insiderDesc': 'Exclusive venues, VIP reservations, and experiences tourists never see',
    'why.discreteTitle': 'Discreet & Personalized',
    'why.discreteDesc': 'White-glove service tailored to your preferences — no crowds, no compromises',
    
    // Packages section
    'packages.title': 'Experience',
    'packages.titleSpan': 'Packages',
    'packages.subtitle': 'Full-service packages include accommodation, activities, and coordination. These are complete trips, not just activities.',
    'packages.lookingFor': 'Looking for individual activities only? Check out our',
    'packages.curatedLink': 'Curated Day Experiences',
    
    // Events section
    'events.title': 'Exclusive Events & Recurring Experiences',
    'events.subtitle': 'From monthly tech nights to secret raves - join Santa Cruz\'s most exclusive community events.',
    'events.joinWaitlist': 'Join Waitlist',
    'events.viewAll': 'View All Events',
    
    // Intake Form
    'form.title': 'Let\'s Plan Your Trip',
    'form.subtitle': 'Tell us your vibe. We\'ll take it from there.',
    'form.formTitle': 'Trip Planning Form',
    'form.submit': 'Submit Trip Request',
    'form.response': 'We\'ll respond within 24 hours with a custom proposal',
    
    // Footer
    'footer.title': 'Diamond Santa Cruz',
    'footer.description': 'Your gateway to Bolivia\'s most exclusive experiences. From luxury accommodations and wellness retreats to investment opportunities and permanent relocation support.',
    'footer.consultation': 'Private Consultation',
    'footer.curate': 'Curate Experience',
    'footer.copyright': '© 2024 Diamond Santa Cruz. Exceptional experiences in Bolivia.',
    'footer.tagline': 'Sophisticated. Discrete. Unforgettable.',
    
    // Package cards
    'pkg.weekendBender': 'Weekend Bender',
    'pkg.weekendBenderDesc': 'Pool villa madness with DJ, VIP access, and non-stop vibes',
    'pkg.santaCruzSampler': 'Santa Cruz Sampler',
    'pkg.santaCruzSamplerDesc': 'Taste the city — food, culture, and nightlife in one epic trip',
    'pkg.chillGrill': 'Chill & Grill',
    'pkg.chillGrillDesc': 'Laid-back luxury with private chef, massages, and good vibes',
    'pkg.romance': 'Romance & Roses',
    'pkg.romanceDesc': 'Couple\'s paradise with candlelit dinners and spa luxury',
    'pkg.samaipata': 'Samaipata Sessions',
    'pkg.samaipataDesc': 'Nature meets luxury — guided adventures with 5-star comfort',
    'pkg.influencer': 'Content Creator',
    'pkg.influencerDesc': 'Instagram-perfect setups with professional content creation',
    'pkg.vidaLoca': 'La Vida Loca',
    'pkg.vidaLocaDesc': 'Maximum chaos — pool raves, VIP everything, zero limits',
    'pkg.customVip': 'Pure Custom VIP',
    'pkg.customVipDesc': 'Sky\'s the limit — your wildest dreams, our execution',
    'pkg.fromPrice': 'From',
    'pkg.person': '/person',
    'pkg.couple': '/couple',
    'pkg.consultation': 'By consultation',
    'pkg.yourCall': 'Your call',
    'pkg.anySize': 'Any size',
    'pkg.nights': 'nights',
    'pkg.people': 'people',
    'pkg.popular': 'Popular',
    'pkg.legendary': 'LEGENDARY',
    'pkg.bespoke': 'BESPOKE',
    
    // Package tiers
    'tier.essential': 'Essential',
    'tier.essentialDesc': 'Quality experiences, smart value',
    'tier.premium': 'Premium',
    'tier.premiumDesc': 'Enhanced amenities & service',
    'tier.luxury': 'Luxury',
    'tier.luxuryDesc': 'Sophisticated experiences',
    'tier.vip': 'VIP Exclusive',
    'tier.vipDesc': 'Exclusive venues, personal concierge, white-glove service',
    
    // Package actions
    'pkg.planCustom': 'Plan Custom Experience',
    'pkg.reserve': 'Reserve This Experience',
    'pkg.bookPopular': 'Book Popular Choice',
    'pkg.customize': 'Customize Package',
    'pkg.showAll': 'Show All Packages',
    'pkg.showing': 'Showing',
    'pkg.package': 'package',
    'pkg.packages': 'packages',
    
    // Testimonials
    'testimonial.andrew': 'We did La Vida Loca and it was 🔥🔥🔥! DJ was fire, house was perfect, and Benny\'s team had everything stocked before we arrived.',
    'testimonial.andrewAuthor': 'Andrew, NYC',
    'testimonial.maria': 'Romance & Roses package exceeded all expectations. The penthouse was stunning and our private chef was incredible!',
    'testimonial.mariaAuthor': 'Maria & Carlos, Miami',
    'testimonial.jake': 'Santa Cruz Sampler was the perfect intro to the city. Hit all the best spots without any planning stress.',
    'testimonial.jakeAuthor': 'Jake, LA',
    'testimonials.title': 'Client',
    'testimonials.titleSpan': 'Testimonials',
    
    // Events
    'event.tropicalTech': 'Tropical Tech Nights',
    'event.tropicalTechDesc': 'Monthly rooftop parties with international DJs',
    'event.secretRave': 'Secret Rave Series',
    'event.secretRaveDesc': 'Exclusive raves in hidden locations - RSVP only',
    'event.girlboss': 'Girlboss Retreats',
    'event.girlbossDesc': 'Exclusive weekends for female creators',
    'event.every3rd': 'Every 3rd Saturday',
    'event.newLocation': 'New location monthly',
    'event.monthly': 'Monthly',
    'event.badgeMonthly': 'Monthly',
    'event.badgeSecret': 'Secret',
    'event.badgeExclusive': 'Exclusive',
    
    // Flight assistance
    'flight.title': 'Global Flight Assistance',
    'flight.optional': '(Optional Perk)',
    'flight.subtitle': 'Flying in from New York? Dubai? São Paulo? We\'ve got you.',
    'flight.desc1': 'We provide discreet, personalized help finding and booking the best airfare to Santa Cruz — no matter where you\'re coming from. Whether you\'re traveling from the U.S., Europe, Asia, or the Middle East, we\'ll guide you to the ideal routes, best airlines, and smoothest connections.',
    'flight.desc2': 'You can book it yourself, or let us handle it completely — just say the word. We don\'t mark up flights — we simply make sure you land here relaxed and ready.',
    'flight.perk': 'This perk is included with all full-experience bookings. Because luxury doesn\'t start when you arrive — it starts when you board.',
    
    // Custom VIP banner
    'custom.title': 'Need Something Completely Custom?',
    'custom.subtitle': 'Beyond our packages? We create bespoke experiences for groups with specific visions.',
    'custom.consultation': 'Free Consultation'
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
    'vibe.viewDetails': 'Ver Detalles',
    
    // Why Diamond Santa Cruz section
    'why.title': 'Por Qué Diamond',
    'why.titleSpan': 'Santa Cruz',
    'why.subtitle': 'No solo reservamos viajes — creamos experiencias completas',
    'why.flightTitle': 'Asistencia Global de Vuelos',
    'why.flightDesc': 'Desde NYC hasta Dubái y São Paulo — manejamos tu coordinación de vuelos sin problemas',
    'why.packageTitle': 'Paquetes de Servicio Completo',
    'why.packageDesc': 'Alojamiento, actividades y coordinación — todo manejado antes de que llegues',
    'why.insiderTitle': 'Acceso Exclusivo Local',
    'why.insiderDesc': 'Lugares exclusivos, reservas VIP y experiencias que los turistas nunca ven',
    'why.discreteTitle': 'Discreto y Personalizado',
    'why.discreteDesc': 'Servicio de guante blanco adaptado a tus preferencias — sin multitudes, sin compromisos',
    
    // Packages section
    'packages.title': 'Paquetes de',
    'packages.titleSpan': 'Experiencia',
    'packages.subtitle': 'Los paquetes de servicio completo incluyen alojamiento, actividades y coordinación. Estos son viajes completos, no solo actividades.',
    'packages.lookingFor': '¿Buscas solo actividades individuales? Revisa nuestras',
    'packages.curatedLink': 'Experiencias Curadas del Día',
    
    // Events section
    'events.title': 'Eventos Exclusivos y Experiencias Recurrentes',
    'events.subtitle': 'Desde noches tecnológicas mensuales hasta raves secretos - únete a los eventos comunitarios más exclusivos de Santa Cruz.',
    'events.joinWaitlist': 'Unirse a Lista de Espera',
    'events.viewAll': 'Ver Todos los Eventos',
    
    // Intake Form
    'form.title': 'Planifiquemos Tu Viaje',
    'form.subtitle': 'Cuéntanos tu ambiente. Nosotros nos encargamos del resto.',
    'form.formTitle': 'Formulario de Planificación de Viaje',
    'form.submit': 'Enviar Solicitud de Viaje',
    'form.response': 'Responderemos en 24 horas con una propuesta personalizada',
    
    // Footer
    'footer.title': 'Diamond Santa Cruz',
    'footer.description': 'Tu puerta de entrada a las experiencias más exclusivas de Bolivia. Desde alojamientos de lujo y retiros de bienestar hasta oportunidades de inversión y apoyo para reubicación permanente.',
    'footer.consultation': 'Consulta Privada',
    'footer.curate': 'Crear Experiencia',
    'footer.copyright': '© 2024 Diamond Santa Cruz. Experiencias excepcionales en Bolivia.',
    'footer.tagline': 'Sofisticado. Discreto. Inolvidable.'
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
    'vibe.viewDetails': '查看详情',
    
    // Why Diamond Santa Cruz section
    'why.title': '为什么选择Diamond',
    'why.titleSpan': 'Santa Cruz',
    'why.subtitle': '我们不只是预订旅行——我们策划完整体验',
    'why.flightTitle': '全球航班协助',
    'why.flightDesc': '从纽约到迪拜到圣保罗——我们无缝处理您的机票协调',
    'why.packageTitle': '全套服务包',
    'why.packageDesc': '住宿、活动和协调——在您到达之前一切都已安排妥当',
    'why.insiderTitle': '本地内幕访问',
    'why.insiderDesc': '独家场所、VIP预订和游客从未见过的体验',
    'why.discreteTitle': '谨慎且个性化',
    'why.discreteDesc': '根据您的喜好量身定制的白手套服务——没有人群，没有妥协',
    
    // Packages section
    'packages.title': '体验',
    'packages.titleSpan': '套餐',
    'packages.subtitle': '全套服务包包括住宿、活动和协调。这些是完整的旅行，不仅仅是活动。',
    'packages.lookingFor': '只寻找个人活动？查看我们的',
    'packages.curatedLink': '精选日间体验',
    
    // Events section
    'events.title': '独家活动和定期体验',
    'events.subtitle': '从每月科技之夜到秘密狂欢——加入圣克鲁斯最独家的社区活动。',
    'events.joinWaitlist': '加入等候名单',
    'events.viewAll': '查看所有活动',
    
    // Intake Form
    'form.title': '让我们规划您的旅行',
    'form.subtitle': '告诉我们您的氛围。我们来处理其余的。',
    'form.formTitle': '旅行规划表单',
    'form.submit': '提交旅行请求',
    'form.response': '我们将在24小时内回复定制提案',
    
    // Footer
    'footer.title': 'Diamond Santa Cruz',
    'footer.description': '您通往玻利维亚最独家体验的门户。从豪华住宿和健康度假到投资机会和永久搬迁支持。',
    'footer.consultation': '私人咨询',
    'footer.curate': '策划体验',
    'footer.copyright': '© 2024 Diamond Santa Cruz. 玻利维亚的卓越体验。',
    'footer.tagline': '精致。谨慎。难忘。'
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
    'vibe.viewDetails': 'Ver Detalhes',
    
    // Why Diamond Santa Cruz section
    'why.title': 'Por Que Diamond',
    'why.titleSpan': 'Santa Cruz',
    'why.subtitle': 'Não apenas reservamos viagens — criamos experiências completas',
    'why.flightTitle': 'Assistência Global de Voos',
    'why.flightDesc': 'De NYC a Dubai a São Paulo — cuidamos da coordenação de suas passagens aéreas perfeitamente',
    'why.packageTitle': 'Pacotes de Serviço Completo',
    'why.packageDesc': 'Acomodação, atividades e coordenação — tudo cuidado antes de você chegar',
    'why.insiderTitle': 'Acesso Interno Local',
    'why.insiderDesc': 'Locais exclusivos, reservas VIP e experiências que turistas nunca veem',
    'why.discreteTitle': 'Discreto e Personalizado',
    'why.discreteDesc': 'Serviço de luva branca adaptado às suas preferências — sem multidões, sem compromissos',
    
    // Packages section
    'packages.title': 'Pacotes de',
    'packages.titleSpan': 'Experiência',
    'packages.subtitle': 'Pacotes de serviço completo incluem acomodação, atividades e coordenação. Estas são viagens completas, não apenas atividades.',
    'packages.lookingFor': 'Procurando apenas atividades individuais? Confira nossas',
    'packages.curatedLink': 'Experiências Diárias Selecionadas',
    
    // Events section
    'events.title': 'Eventos Exclusivos e Experiências Recorrentes',
    'events.subtitle': 'De noites de tecnologia mensais a raves secretas - junte-se aos eventos comunitários mais exclusivos de Santa Cruz.',
    'events.joinWaitlist': 'Entrar na Lista de Espera',
    'events.viewAll': 'Ver Todos os Eventos',
    
    // Intake Form
    'form.title': 'Vamos Planejar Sua Viagem',
    'form.subtitle': 'Nos conte seu estilo. Nós cuidamos do resto.',
    'form.formTitle': 'Formulário de Planejamento de Viagem',
    'form.submit': 'Enviar Solicitação de Viagem',
    'form.response': 'Responderemos em 24 horas com uma proposta personalizada',
    
    // Footer
    'footer.title': 'Diamond Santa Cruz',
    'footer.description': 'Seu portal para as experiências mais exclusivas da Bolívia. De acomodações de luxo e retiros de bem-estar a oportunidades de investimento e apoio à realocação permanente.',
    'footer.consultation': 'Consulta Privada',
    'footer.curate': 'Criar Experiência',
    'footer.copyright': '© 2024 Diamond Santa Cruz. Experiências excepcionais na Bolívia.',
    'footer.tagline': 'Sofisticado. Discreto. Inesquecível.'
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