
import Navigation from '@/components/Navigation';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Diamond, Star, Shield, Users, Home, User, Car, Clock } from 'lucide-react';

const VIPExperience = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your VIP Experience package. Can you provide more details?");
    const phoneNumber = "1234567890";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-onyx-800 via-midnight-700 to-onyx-900 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Diamond className="w-16 h-16 text-gold-400 mx-auto mb-8" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
            Bolivia's Ultimate
            <br />
            <span className="text-gold-400">VIP Escape</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Three nights. Eight guests. Endless luxury. Welcome to a curated experience designed for those who expect the best.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Star className="w-8 h-8 text-gold-400 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-light mb-6 text-gold-400">What's Included</h2>
            <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
              Every detail meticulously planned for an unforgettable experience
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: "Luxury Penthouse", desc: "Premium location in Equipetrol" },
              { icon: User, title: "Private Chef", desc: "Full dining service & gourmet meals" },
              { icon: Car, title: "Private Driver", desc: "Airport pickup & city transport" },
              { icon: Star, title: "Spa & Excursions", desc: "Guided tours & wellness treatments" },
              { icon: Star, title: "VIP Nightlife", desc: "Exclusive access & reservations" },
              { icon: User, title: "Personal Concierge", desc: "Dedicated host team" },
              { icon: Shield, title: "Security", desc: "Discreet protection & safety" },
              { icon: Clock, title: "24/7 Support", desc: "WhatsApp assistance anytime" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-gold-400/20 p-6 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
                <item.icon className="w-8 h-8 text-gold-400 mx-auto mb-4" />
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="bg-gradient-to-r from-gold-600 to-gold-700 text-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-light mb-6">Starts at $950 per guest</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Designed for 6–10 guests seeking full-service luxury. Pricing adjusts based on group size and custom requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-4 font-medium rounded-none transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Request VIP Curation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-black/20 text-black hover:bg-black/10 hover:border-black/40 px-10 py-4 text-lg font-medium rounded-none transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              View Details Above
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gold-400/20 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl text-gray-300 font-light italic mb-6 leading-relaxed">
              "An absolutely extraordinary experience. Every detail was perfect, from the penthouse to the personalized service. This is luxury travel at its finest."
            </blockquote>
            <cite className="text-gold-400 font-medium">— Previous VIP Guest</cite>
          </div>
        </div>
      </section>

      <BackToTop />
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-onyx-900/80 backdrop-blur-sm text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gold-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <Diamond className="w-8 h-8 text-gold-400 mx-auto mb-6" />
          <h3 className="text-2xl font-light mb-6 text-gold-400">Diamond Santa Cruz VIP</h3>
          <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            The pinnacle of luxury experiences in Santa Cruz, Bolivia.
          </p>
          <div className="border-t border-gold-400/20 pt-8">
            <p className="text-gray-400 text-sm font-light">
              © 2024 Diamond Santa Cruz. Exceptional VIP experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VIPExperience;
