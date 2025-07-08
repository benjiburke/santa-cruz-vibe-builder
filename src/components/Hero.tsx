
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, Calendar, Diamond } from 'lucide-react';

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
    window.open('https://wa.me/1234567890?text=Hi! I\'m interested in planning a sophisticated Santa Cruz experience', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-gray-200 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.2)), url(${videos[currentVideo].src})`
          }}
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <Diamond className="w-12 h-12 text-gray-700 mx-auto mb-8" />
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-wide">
            Sophisticated Santa Cruz
            <br />
            <span className="text-gray-700">Experiences</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Curated luxury stays and exclusive experiences in Bolivia's most vibrant city. 
            Crafted for the discerning traveler.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 text-lg font-normal transition-all duration-300 shadow-sm"
              onClick={() => scrollToSection('intake-form')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Plan Your Experience
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-4 text-lg font-normal transition-all duration-300"
              onClick={openWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-10 py-4 text-lg font-normal transition-all duration-300"
              onClick={() => scrollToSection('packages')}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Explore Packages
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
              currentVideo === index ? 'bg-gray-700' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentVideo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
