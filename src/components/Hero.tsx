
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
      {/* Sophisticated Background with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 via-slate-900 to-gray-900">
          {/* Luxury overlay with charcoal tones */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-800/60 to-slate-800/80" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm16 0c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
        <div className="animate-fade-in">
          {/* Luxury Logo/Icon */}
          <div className="mb-8">
            <Diamond className="w-20 h-20 mx-auto text-yellow-600 opacity-90" style={{ color: '#D4AF37' }} />
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light mb-6 leading-tight tracking-wide">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl mb-4 font-light opacity-90" style={{ color: '#F8F1E9' }}>
            Bespoke Experiences from Estate Retreats to Natural Havens
          </p>
          
          {/* Description */}
          <p className="text-lg mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-80" style={{ color: '#F8F1E9' }}>
            {t('hero.description')}
          </p>

          {/* Luxury Experience Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Party Luxuries Card */}
            <div className="backdrop-blur-sm border rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group" 
                 style={{ backgroundColor: 'rgba(248, 241, 233, 0.08)', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
                  <Diamond className="w-6 h-6" style={{ color: '#D4AF37' }} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: '#D4AF37' }}>Luxury Experiences</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#F8F1E9' }}>
                VIP nightlife, exclusive venues, mansion rentals, and premium bottle service experiences
              </p>
              <Button
                onClick={() => scrollToSection('vibes')}
                className="w-full text-white border-0 transition-all duration-300 group-hover:scale-105"
                style={{ backgroundColor: '#D4AF37', color: '#1A2A44' }}
              >
                Explore Luxuries
              </Button>
            </div>

            {/* Nature Escapes Card */}
            <div className="backdrop-blur-sm border rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group" 
                 style={{ backgroundColor: 'rgba(248, 241, 233, 0.08)', borderColor: 'rgba(28, 37, 33, 0.4)' }}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: 'rgba(28, 37, 33, 0.3)' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#1C2521' }} />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3" style={{ color: '#1C2521' }}>Natural Havens</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#F8F1E9' }}>
                Redwood retreats, coastal hideaways, private hiking experiences, and luxury eco-lodges
              </p>
              <Button
                onClick={() => scrollToSection('packages')}
                className="w-full text-white border-0 transition-all duration-300 group-hover:scale-105"
                style={{ backgroundColor: '#1C2521', color: '#F8F1E9' }}
              >
                Discover Escapes
              </Button>
            </div>
          </div>

          {/* Sophisticated Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="text-white border border-opacity-50 px-8 py-3 text-lg font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
              style={{ backgroundColor: 'rgba(212, 175, 55, 0.9)', borderColor: '#D4AF37', color: '#1A2A44' }}
              onClick={() => scrollToSection('book')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              {t('hero.planExperience')}
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-3 text-lg font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
              style={{ borderColor: '#F8F1E9', color: '#F8F1E9', backgroundColor: 'rgba(26, 42, 68, 0.3)' }}
              onClick={openWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('hero.consultation')}
            </Button>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ color: '#F8F1E9' }}>
        <div className="flex flex-col items-center opacity-70">
          <span className="text-sm font-light mb-2">{t('hero.scrollDiscover')}</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Subtle Luxury Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full blur-2xl animate-pulse" 
           style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }} />
      <div className="absolute bottom-32 right-20 w-24 h-24 rounded-full blur-xl animate-pulse" 
           style={{ backgroundColor: 'rgba(248, 241, 233, 0.05)' }} />
      <div className="absolute top-1/3 right-32 w-16 h-16 rounded-full blur-lg animate-pulse" 
           style={{ backgroundColor: 'rgba(28, 37, 33, 0.08)' }} />
    </section>
  );
};

export default Hero;
