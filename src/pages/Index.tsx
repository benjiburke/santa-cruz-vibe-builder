
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <VibeSelector />
      <Packages />
      <EventsPreview />
      <IntakeForm />
      <WhatsAppButton />
      <BackToTop />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <Diamond className="w-8 h-8 text-gray-700 mx-auto mb-6" />
            <h3 className="text-2xl font-light mb-6 text-white">Diamond Santa Cruz</h3>
            <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Your gateway to Bolivia's most exclusive experiences. From luxury accommodations 
              and wellness retreats to investment opportunities and permanent relocation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 font-normal transition-all duration-300 text-sm"
              >
                Private Consultation
              </button>
              <button 
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-3 font-normal transition-all duration-300 text-sm"
              >
                Curate Experience
              </button>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-12">
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
