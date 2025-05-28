
import Hero from '@/components/Hero';
import VibeSelector from '@/components/VibeSelector';
import Packages from '@/components/Packages';
import IntakeForm from '@/components/IntakeForm';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VibeSelector />
      <Packages />
      <IntakeForm />
      <WhatsAppButton />
      
      {/* Footer */}
      <footer className="bg-jungle-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready for your private Bolivia?</h3>
            <p className="text-jungle-200 mb-6">
              Santa Cruz experiences crafted for the bold, the curious, and the unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                💬 WhatsApp
              </button>
              <button 
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-sunset-500 hover:bg-sunset-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                📋 Plan My Trip
              </button>
            </div>
          </div>
          
          <div className="border-t border-jungle-700 pt-8">
            <p className="text-jungle-300 text-sm">
              © 2024 Santa Cruz Travel Experience. Creating unforgettable moments in Bolivia.
            </p>
            <p className="text-jungle-400 text-xs mt-2">
              Not just tours. Not just stays. Your private Bolivia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
