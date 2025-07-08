import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Diamond, Sparkles, Users, Clock, Star, Calendar } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const DiamondSpa = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: 'Signature Diamond Facial',
      duration: '90 minutes',
      description: 'Exclusive diamond-infused treatment combining European techniques with Bolivian botanical extracts',
      price: 'From $280'
    },
    {
      title: 'Andean Stone Therapy',
      duration: '120 minutes', 
      description: 'Traditional hot stone massage using authentic stones from the Bolivian highlands',
      price: 'From $320'
    },
    {
      title: 'Couple\'s Sanctuary',
      duration: '180 minutes',
      description: 'Private suite experience with champagne service and personalized treatments',
      price: 'From $650'
    },
    {
      title: 'Executive Wellness',
      duration: '240 minutes',
      description: 'Complete wellness journey including massage, facial, and private dining',
      price: 'From $850'
    }
  ];

  const amenities = [
    'Private treatment suites',
    'Himalayan salt relaxation room',
    'Temperature-controlled infinity pool',
    'Steam therapy with eucalyptus',
    'Meditation garden terrace',
    'Premium wellness products'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.3)), url(https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&h=800&fit=crop)`
          }}
        />
        <div className="absolute inset-0 bg-white/40" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Diamond className="w-12 h-12 text-gray-700 mx-auto mb-8" />
          <h1 className="text-5xl sm:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Diamond <span className="text-gray-700">Spa</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Where world-class wellness meets authentic Bolivian traditions. 
            A sanctuary of tranquility in the heart of Santa Cruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 text-lg font-normal"
              onClick={() => window.open('https://wa.me/1234567890?text=I\'d like to book a Diamond Spa appointment', '_blank')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Reserve Your Experience
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 text-lg font-normal"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Treatments
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
              Signature <span className="text-gray-700">Treatments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Each treatment is meticulously crafted to provide the ultimate in relaxation and rejuvenation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-light text-gray-900">{service.title}</h3>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-light">{service.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-light text-gray-900">{service.price}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 font-normal"
                      onClick={() => window.open('https://wa.me/1234567890?text=I\'d like to book: ' + service.title, '_blank')}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-8">
                Luxury <span className="text-gray-700">Amenities</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                Our spa features world-class facilities designed to enhance your wellness journey. 
                Every detail has been carefully curated to create an atmosphere of pure tranquility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-gray-700 flex-shrink-0" />
                    <span className="text-gray-700 font-light">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="h-96 bg-gray-200 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop)`
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <Diamond className="w-8 h-8 text-gray-700 mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            Experience Authentic Wellness
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Book your Diamond Spa experience and discover the perfect harmony between 
            luxury and traditional Bolivian wellness practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 text-lg font-normal"
              onClick={() => window.open('https://wa.me/1234567890?text=I\'d like to learn more about Diamond Spa', '_blank')}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-normal"
              onClick={() => window.open('https://diamondscz.com', '_blank')}
            >
              Visit Our Wellness Center
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default DiamondSpa;