
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [
    { src: '/api/placeholder/1200/800', alt: 'Santa Cruz nightlife drone view' },
    { src: '/api/placeholder/1200/800', alt: 'Pool party rooftop scene' },
    { src: '/api/placeholder/1200/800', alt: 'Luxury villa exterior' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi! I\'m interested in planning a trip to Santa Cruz', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-gradient-to-br from-jungle-800 via-sunset-600 to-coral-700 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${videos[currentVideo].src})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            This isn't a tour.
            <br />
            <span className="text-gold-400">This is your private Bolivia.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
            Luxury stays. Curated experiences. Santa Cruz like you've never seen it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-jungle-600 hover:bg-jungle-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={() => scrollToSection('intake-form')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Start My Trip
            </Button>
            
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={openWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
              onClick={() => scrollToSection('packages')}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Browse Packages
            </Button>
          </div>
        </div>
      </div>

      {/* Video indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentVideo === index ? 'bg-gold-400' : 'bg-white/50'
            }`}
            onClick={() => setCurrentVideo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
