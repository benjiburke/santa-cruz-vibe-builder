
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VibeSelector from '@/components/VibeSelector';
import Packages from '@/components/Packages';
import IntakeForm from '@/components/IntakeForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-luxury">
      <Navigation />
      <Hero />
      <VibeSelector />
      <Packages />
      <IntakeForm />
      <WhatsAppButton />
      <BackToTop />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-onyx-900 via-midnight-800 to-onyx-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gold-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gold-400">Ready for your private Bolivia?</h3>
            <p className="text-gray-300 mb-6">
              Santa Cruz experiences crafted for the bold, the curious, and the unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg"
              >
                💬 WhatsApp
              </button>
              <button 
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gold-500 hover:bg-gold-600 text-onyx-900 px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg"
              >
                🚀 Plan My Trip
              </button>
            </div>
          </div>
          
          <div className="border-t border-gold-400/30 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Santa Cruz Travel Experience. Creating unforgettable moments in Bolivia.
            </p>
            <p className="text-gold-400 text-xs mt-2 font-semibold">
              Not just tours. Not just stays. Your private Bolivia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
