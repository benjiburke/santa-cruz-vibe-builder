
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, MapPin, Diamond, ChevronDown } from 'lucide-react';

const Hero = () => {
  // Fallback translations for professional content
  const t = (key: string) => {
    const translations: Record<string, string> = {
      'hero.title': 'Santa Cruz Concierge Excellence',
      'hero.subtitle': 'Curated Experiences from Mansion Retreats to Redwood Escapes',
      'hero.description': 'Where international luxury meets authentic Santa Cruz culture. Complete concierge services for the sophisticated traveler seeking extraordinary experiences.',
      'hero.exploreParty': 'Explore Party Luxuries',
      'hero.discoverNature': 'Discover Nature Getaways',
      'hero.consultation': 'Private Consultation',
      'hero.planExperience': 'Plan Your Experience',
      'hero.scrollDiscover': 'Scroll to Discover More'
    };
    return translations[key] || key;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi! I\'m interested in planning a sophisticated Santa Cruz experience', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-black/30" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
        <div className="animate-fade-in">
          {/* Logo/Icon */}
          <div className="mb-8">
            <Diamond className="w-16 h-16 mx-auto text-amber-200 opacity-90" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-wide">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl mb-4 font-light text-amber-100 opacity-90">
            {t('hero.subtitle')}
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-80">
            {t('hero.description')}
          </p>

          {/* Dual Experience Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Party Luxuries Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Diamond className="w-6 h-6 text-amber-300" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-amber-200">Party Luxuries</h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                VIP nightlife, luxury venues, mansion rentals, and exclusive bottle service experiences
              </p>
              <Button
                onClick={() => scrollToSection('vibes')}
                className="w-full bg-amber-600 hover:bg-amber-500 text-white border-0 transition-all duration-300 group-hover:scale-105"
              >
                {t('hero.exploreParty')}
              </Button>
            </div>

            {/* Nature Escapes Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-300" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-emerald-200">Nature Escapes</h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Redwood retreats, coastal hideaways, private hiking experiences, and luxury eco-lodges
              </p>
              <Button
                onClick={() => scrollToSection('packages')}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white border-0 transition-all duration-300 group-hover:scale-105"
              >
                {t('hero.discoverNature')}
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-8 py-3 text-lg font-medium transition-all duration-300 backdrop-blur-sm"
              onClick={() => scrollToSection('book')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              {t('hero.planExperience')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/40 text-white hover:bg-white/20 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 backdrop-blur-sm"
              onClick={openWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('hero.consultation')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm font-light mb-2">{t('hero.scrollDiscover')}</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Floating Elements for Subtle Luxury */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-amber-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/3 right-32 w-16 h-16 bg-emerald-500/10 rounded-full blur-lg animate-pulse" />
    </section>
  );
};

export default Hero;
