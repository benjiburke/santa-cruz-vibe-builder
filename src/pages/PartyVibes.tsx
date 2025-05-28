
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar, Music, Zap, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';

const partyPackages = [
  {
    id: 'weekend-bender',
    title: 'Weekend Bender',
    emoji: '🥳',
    description: '2 nights in pool villa, DJ, airport pickup',
    features: ['VIP club access', 'Party host', 'Pool villa', 'Airport transfer'],
    price: 'From $450/person',
    duration: '2 nights',
    groupSize: '4-8 people',
    popular: true
  },
  {
    id: 'vida-loca',
    title: 'La Vida Loca',
    emoji: '🎶',
    description: '3-night party takeover + pool rave setup',
    features: ['Pool rave setup', 'Professional photographer', 'Premium bottles', 'Full concierge'],
    price: 'From $650/person',
    duration: '3 nights',
    groupSize: '6-12 people',
    badge: 'Premium'
  },
  {
    id: 'bachelor-bash',
    title: 'Bachelor Bash',
    emoji: '🍾',
    description: 'Epic bachelor/bachelorette party experience',
    features: ['Custom party themes', 'VIP club reservations', 'Professional photographer', 'Party bus transport'],
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-gradient-to-br from-coral-600 via-sunset-500 to-gold-500 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/api/placeholder/1200/800')`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-6xl mb-6">🥳</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Party Vibes
              <br />
              <span className="text-gold-400">Turn Up Mode: ON</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
              Loud, wild, social, and spontaneous. You're here to turn up, not slow down.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-coral-600 hover:bg-coral-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={scrollToPackages}
              >
                <PartyPopper className="mr-2 h-5 w-5" />
                Explore Party Packages
              </Button>
              
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={() => window.open('https://wa.me/1234567890?text=Hi! I want to plan an epic party in Santa Cruz!', '_blank')}
              >
                <Music className="mr-2 h-5 w-5" />
                Let's Party!
              </Button>
            </div>

            {/* Party Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <Zap className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">High Energy</h3>
                <p className="text-sm opacity-90">DJs, pool parties, club access, and non-stop vibes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <Users className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Group Ready</h3>
                <p className="text-sm opacity-90">Perfect for bachelor parties, birthdays, and celebrations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <MapPin className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">VIP Access</h3>
                <p className="text-sm opacity-90">Exclusive venues, premium bottles, and insider connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Packages */}
      <section id="party-packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-coral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-jungle-800 mb-4">
              Party Packages
            </h2>
            <p className="text-xl text-jungle-600 max-w-3xl mx-auto">
              Ready-made experiences designed to maximize the fun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partyPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  pkg.popular ? 'ring-2 ring-gold-400 shadow-lg' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gold-400 text-jungle-800 px-3 py-1 text-sm font-bold">
                    <Star className="inline h-4 w-4 mr-1" />
                    Popular
                  </div>
                )}
                
                {pkg.badge && !pkg.popular && (
                  <div className="absolute top-0 right-0 bg-coral-500 text-white px-3 py-1 text-sm font-bold">
                    {pkg.badge}
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{pkg.emoji}</div>
                  <h3 className="text-xl font-bold text-jungle-800 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-jungle-600 mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex justify-center gap-4 text-xs text-jungle-500">
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
                      <div key={index} className="flex items-center text-sm text-jungle-700">
                        <div className="w-2 h-2 bg-coral-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-lg font-bold text-coral-600 mb-3">
                      {pkg.price}
                    </div>
                    <Link to={`/package/${pkg.id}`}>
                      <Button className="w-full bg-coral-600 hover:bg-coral-700 text-white transition-all duration-300">
                        View Details
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-coral-600 to-sunset-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Turn Up?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Don't see exactly what you're looking for? We'll customize the perfect party experience just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-coral-600"
              >
                Plan My Party
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20"
              onClick={() => window.open('https://wa.me/1234567890?text=I want to plan a custom party experience!', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyVibes;
