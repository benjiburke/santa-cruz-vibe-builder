
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar, Music, Zap, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const partyPackages = [
  {
    id: 'weekend-bender',
    title: 'Weekend Collection',
    emoji: '◊',
    description: 'Two nights of curated access and exclusive experiences',
    features: ['Private venue access', 'Dedicated concierge', 'Premium accommodations', 'Seamless transfers'],
    price: 'From $450/person',
    duration: '2 nights',
    groupSize: '4-8 people',
    popular: true
  },
  {
    id: 'vida-loca',
    title: 'Extended Collection',
    emoji: '◆',
    description: 'Three nights of elevated experiences with premium service',
    features: ['Exclusive venue setup', 'Professional documentation', 'Premium service tier', 'Full-service concierge'],
    price: 'From $650/person',
    duration: '3 nights',
    groupSize: '6-12 people',
    badge: 'Signature'
  },
  {
    id: 'bachelor-bash',
    title: 'Celebration Collection',
    emoji: '♦',
    description: 'Bespoke experiences designed for special occasions',
    features: ['Custom experience design', 'Priority reservations', 'Professional documentation', 'Private transportation'],
    price: 'From $580/person',
    duration: '2-3 nights',
    groupSize: '6-15 people'
  }
];

const PartyVibes = () => {
  const scrollToPackages = () => {
    const element = document.getElementById('party-packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('/api/placeholder/1400/900')`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <Diamond className="w-16 h-16 text-gold-400 mx-auto mb-8" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-wide">
              Diamond
              <br />
              <span className="text-gold-400 font-extralight">Santa Cruz</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Exclusive access. Refined experiences. Curated for those who appreciate the finer details.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 text-base font-medium rounded-none transition-all duration-300"
                onClick={scrollToPackages}
              >
                View Collections
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-gold-400/40 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 px-10 py-4 text-base font-medium rounded-none transition-all duration-300"
                onClick={() => window.open('https://wa.me/1234567890?text=Diamond Santa Cruz inquiry', '_blank')}
              >
                Contact
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center text-white">
                <Zap className="h-6 w-6 text-gold-400 mb-4 mx-auto" />
                <h3 className="text-lg font-medium mb-3">Exclusive Access</h3>
                <p className="text-sm text-gray-400 font-light">Private venues and experiences unavailable elsewhere</p>
              </div>
              <div className="text-center text-white">
                <Users className="h-6 w-6 text-gold-400 mb-4 mx-auto" />
                <h3 className="text-lg font-medium mb-3">Curated Service</h3>
                <p className="text-sm text-gray-400 font-light">Personalized attention to every detail of your experience</p>
              </div>
              <div className="text-center text-white">
                <MapPin className="h-6 w-6 text-gold-400 mb-4 mx-auto" />
                <h3 className="text-lg font-medium mb-3">Local Expertise</h3>
                <p className="text-sm text-gray-400 font-light">Insider knowledge and connections throughout Santa Cruz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="party-packages" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-onyx-900 to-midnight-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Experience Collections
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Thoughtfully crafted experiences designed for discerning travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partyPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-onyx-800/90 to-midnight-800/90 border-gold-400/20 backdrop-blur-sm ${
                  pkg.popular ? 'ring-1 ring-gold-400/30' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gold-600 text-white px-4 py-2 text-xs font-medium tracking-wide">
                    FEATURED
                  </div>
                )}
                
                {pkg.badge && !pkg.popular && (
                  <div className="absolute top-0 right-0 bg-onyx-700 text-gold-400 px-4 py-2 text-xs font-medium tracking-wide border-l border-b border-gold-400/30">
                    {pkg.badge}
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="text-3xl mb-4 text-gold-400">{pkg.emoji}</div>
                  <h3 className="text-xl font-medium text-white mb-3 tracking-wide">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  <div className="flex justify-center gap-6 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3" />
                      {pkg.groupSize}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-4 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gold-400/20 pt-6">
                    <div className="text-lg font-medium text-gold-400 mb-4 tracking-wide">
                      {pkg.price}
                    </div>
                    <Link to={`/package/${pkg.id}`}>
                      <Button className="w-full bg-onyx-700 hover:bg-onyx-600 text-white transition-all duration-300 border border-gold-400/30 hover:border-gold-400 rounded-none font-medium">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onyx-800 to-midnight-800 border-t border-gold-400/20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-light mb-6">
            Bespoke Experiences
          </h3>
          <p className="text-lg mb-10 text-gray-300 font-light leading-relaxed">
            Every experience is tailored to your preferences. Let us create something unique for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold-400/50 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 rounded-none font-medium px-8"
              >
                Design Your Experience
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/10 rounded-none font-medium px-8"
              onClick={() => window.open('https://wa.me/1234567890?text=Diamond Santa Cruz bespoke inquiry', '_blank')}
            >
              Speak With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyVibes;
