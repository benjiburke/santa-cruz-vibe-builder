
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, Calendar, PartyPopper, Trees, Sparkles } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation();

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
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Party Vibe - Left Side */}
      <div className="flex-1 relative bg-gradient-to-br from-orange-500 via-purple-600 to-blue-500 animate-gradient-x">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/80 via-purple-500/80 to-blue-500/80 animate-pulse" />
        
        {/* Video placeholder - will be replaced with actual video */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 to-purple-600/40">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8 text-white">
          <div className="animate-fade-in">
            <PartyPopper className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.partyTitle')}
              <br />
              <span className="text-yellow-300 animate-pulse">{t('hero.partySubtitle')}</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 max-w-md mx-auto opacity-90 font-light">
              {t('hero.partyDescription')}
            </p>

            <div className="flex flex-col gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => scrollToSection('vibes')}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {t('hero.partyButton')}
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400/30 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-blue-400/30 rounded-full animate-ping" />
      </div>

      {/* Nature Vibe - Right Side */}
      <div className="flex-1 relative bg-gradient-to-br from-green-800 via-green-600 to-amber-200">
        {/* Nature background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-700/60 to-amber-300/60" />
        
        {/* Image placeholder - will be replaced with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/40 to-amber-600/40">
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8 text-white">
          <div className="animate-fade-in">
            <Trees className="w-16 h-16 mx-auto mb-6 text-green-200" />
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              {t('hero.natureTitle')}
              <br />
              <span className="text-amber-200">{t('hero.natureSubtitle')}</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 max-w-md mx-auto opacity-90 font-light">
              {t('hero.natureDescription')}
            </p>

            <div className="flex flex-col gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection('packages')}
              >
                <Trees className="mr-2 h-5 w-5" />
                {t('hero.natureButton')}
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-16 right-16 w-24 h-24 bg-green-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-12 w-18 h-18 bg-amber-400/20 rounded-full" />
        <div className="absolute top-1/2 left-16 w-14 h-14 bg-green-300/20 rounded-full animate-pulse" />
      </div>

      {/* Central Navigation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('hero.centralTitle')}</h2>
              <p className="text-sm text-gray-600 mb-4">{t('hero.centralSubtitle')}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm transition-all duration-300"
                onClick={() => scrollToSection('book')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {t('hero.planExperience')}
              </Button>
              
              <Button 
                size="sm"
                variant="outline"
                className="border-border text-foreground hover:bg-accent px-6 py-2 text-sm transition-all duration-300"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t('hero.consultation')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Nav at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <div className="flex gap-4">
            <button 
              onClick={() => scrollToSection('vibes')}
              className="px-3 py-1 text-xs text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('hero.vibes')}
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="px-3 py-1 text-xs text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('hero.packages')}
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="px-3 py-1 text-xs text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('hero.events')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
