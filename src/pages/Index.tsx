
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VibeSelector from '@/components/VibeSelector';
import Packages from '@/components/Packages';
import EventsPreview from '@/components/EventsPreview';
import IntakeForm from '@/components/IntakeForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import { Diamond } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900">
      <Navigation />
      <Hero />
      <VibeSelector />
      <Packages />
      <EventsPreview />
      <IntakeForm />
      <WhatsAppButton />
      <BackToTop />
      
      {/* Footer */}
      <footer className="bg-onyx-900/80 backdrop-blur-sm text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gold-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <Diamond className="w-8 h-8 text-gold-400 mx-auto mb-6" />
            <h3 className="text-2xl font-light mb-6 text-gold-400">Diamond Santa Cruz</h3>
            <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Sophisticated Santa Cruz experiences crafted for the discerning traveler. 
              Where luxury meets authentic Bolivian culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-medium rounded-none transition-all duration-300"
              >
                Private Consultation
              </button>
              <button 
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 font-medium rounded-none transition-all duration-300"
              >
                Curate Experience
              </button>
            </div>
          </div>
          
          <div className="border-t border-gold-400/20 pt-12">
            <p className="text-gray-400 text-sm font-light">
              © 2024 Diamond Santa Cruz. Exceptional experiences in Bolivia.
            </p>
            <p className="text-gray-500 text-xs mt-2 font-light">
              Sophisticated. Discrete. Unforgettable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
