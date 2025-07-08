
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VibeSelector from '@/components/VibeSelector';
import Packages from '@/components/Packages';
import EventsPreview from '@/components/EventsPreview';
import IntakeForm from '@/components/IntakeForm';
import FloatingSectionNav from '@/components/FloatingSectionNav';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import { Diamond } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* What Sets Us Apart Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              {t('why.title')} <span className="text-gray-700">{t('why.titleSpan')}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              {t('why.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">✈️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t('why.flightTitle')}</h3>
              <p className="text-sm text-gray-600 font-light">
                {t('why.flightDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-4">🏡</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t('why.packageTitle')}</h3>
              <p className="text-sm text-gray-600 font-light">
                {t('why.packageDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t('why.insiderTitle')}</h3>
              <p className="text-sm text-gray-600 font-light">
                {t('why.insiderDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t('why.discreteTitle')}</h3>
              <p className="text-sm text-gray-600 font-light">
                {t('why.discreteDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vibes">
        <VibeSelector />
      </section>
      <section id="packages">
        <Packages />
      </section>
      <section id="events">
        <EventsPreview />
      </section>
      <section id="book">
        <IntakeForm />
      </section>
      <FloatingSectionNav />
      <WhatsAppButton />
      <BackToTop />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <Diamond className="w-8 h-8 text-gray-700 mx-auto mb-6" />
            <h3 className="text-2xl font-light mb-6 text-white">{t('footer.title')}</h3>
            <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              {t('footer.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 font-normal transition-all duration-300 text-sm"
              >
                {t('footer.consultation')}
              </button>
              <button 
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-3 font-normal transition-all duration-300 text-sm"
              >
                {t('footer.curate')}
              </button>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-12">
            <p className="text-gray-400 text-sm font-light">
              {t('footer.copyright')}
            </p>
            <p className="text-gray-500 text-xs mt-2 font-light">
              {t('footer.tagline')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
