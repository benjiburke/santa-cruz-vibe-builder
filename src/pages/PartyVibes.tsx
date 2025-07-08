
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar, Music, Zap, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';

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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/api/placeholder/1400/900')`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="animate-fade-in">
            <Diamond className="w-8 h-8 text-white mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-4 leading-tight tracking-tight">
              Diamond
              <br />
              <span className="text-gray-200 font-normal">Santa Cruz</span>
            </h1>
            
            <p className="text-base text-gray-300 mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Exclusive access. Refined experiences. Curated for those who appreciate the finer details.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 text-sm font-normal"
                onClick={scrollToPackages}
              >
                View Collections
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white px-6 py-2 text-sm font-normal"
                onClick={() => window.open('https://wa.me/1234567890?text=Diamond Santa Cruz inquiry', '_blank')}
              >
                Contact
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 text-white">
                <Zap className="h-4 w-4 text-gray-300 mb-2 mx-auto" />
                <h3 className="text-sm font-medium mb-1">Exclusive Access</h3>
                <p className="text-xs opacity-80 font-light">Private venues and experiences unavailable elsewhere</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 text-white">
                <Users className="h-4 w-4 text-gray-300 mb-2 mx-auto" />
                <h3 className="text-sm font-medium mb-1">Curated Service</h3>
                <p className="text-xs opacity-80 font-light">Personalized attention to every detail of your experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 text-white">
                <MapPin className="h-4 w-4 text-gray-300 mb-2 mx-auto" />
                <h3 className="text-sm font-medium mb-1">Local Expertise</h3>
                <p className="text-xs opacity-80 font-light">Insider knowledge and connections throughout Santa Cruz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="party-packages" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-3 tracking-tight">
              Experience Collections
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
              Thoughtfully crafted experiences designed for discerning travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partyPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`group relative transition-all duration-200 hover:shadow-sm bg-white border border-gray-200/60 ${
                  pkg.popular ? 'ring-1 ring-gray-300/50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gray-900 text-white px-3 py-1 text-xs font-normal">
                    FEATURED
                  </div>
                )}
                
                {pkg.badge && !pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gray-100 text-gray-700 px-3 py-1 text-xs font-normal border-l border-b border-gray-200">
                    {pkg.badge}
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="text-2xl mb-3 text-gray-700">{pkg.emoji}</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed font-light">
                    {pkg.description}
                  </p>
                  <div className="flex justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {pkg.groupSize}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600 font-light">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="text-base font-medium text-gray-900 mb-3">
                      {pkg.price}
                    </div>
                    <Link to={`/package/${pkg.id}`}>
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-normal">
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
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h3 className="text-2xl font-light mb-3">
            Bespoke Experiences
          </h3>
          <p className="text-sm mb-6 text-gray-300 font-light leading-relaxed">
            Every experience is tailored to your preferences. Let us create something unique for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 hover:border-white text-sm font-normal"
              >
                Design Your Experience
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/10 text-sm font-normal"
              onClick={() => window.open('https://wa.me/1234567890?text=Diamond Santa Cruz bespoke inquiry', '_blank')}
            >
              Speak With Us
            </Button>
          </div>
        </div>
      </section>
      
      <BackToTop />
    </div>
  );
};

export default PartyVibes;
