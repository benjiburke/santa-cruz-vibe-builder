
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar, Music, Zap, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const partyPackages = [
  {
    id: 'weekend-bender',
    title: 'Weekend Sessions',
    emoji: '🥃',
    description: '2 nights in pool villa with curated nightlife access',
    features: ['VIP club access', 'Party concierge', 'Pool villa', 'Airport transfer'],
    price: 'From $450/person',
    duration: '2 nights',
    groupSize: '4-8 people',
    popular: true
  },
  {
    id: 'vida-loca',
    title: 'Extended Sessions',
    emoji: '🎯',
    description: '3-night takeover with exclusive pool setup',
    features: ['Private pool setup', 'Professional documentation', 'Premium service', 'Full concierge'],
    price: 'From $650/person',
    duration: '3 nights',
    groupSize: '6-12 people',
    badge: 'Premium'
  },
  {
    id: 'bachelor-bash',
    title: 'Group Celebrations',
    emoji: '🖤',
    description: 'Curated celebration experience for special occasions',
    features: ['Custom themes', 'VIP reservations', 'Professional documentation', 'Private transport'],
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
            className="w-full h-full bg-gradient-to-br from-onyx-800 via-midnight-700 to-onyx-900 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('/api/placeholder/1200/800')`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-6xl mb-6">🌙</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              After Dark
              <br />
              <span className="text-gold-400">Santa Cruz Sessions</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
              Where the night takes you. Curated experiences for those who know.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-onyx-700 hover:bg-onyx-600 text-white px-8 py-6 text-lg rounded-sm transition-all duration-300 border border-gold-400/30 hover:border-gold-400"
                onClick={scrollToPackages}
              >
                <Music className="mr-2 h-5 w-5" />
                View Sessions
              </Button>
              
              <Button 
                size="lg" 
                className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-sm transition-all duration-300"
                onClick={() => window.open('https://wa.me/1234567890?text=Interested in Santa Cruz sessions', '_blank')}
              >
                Connect
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/20 backdrop-blur-sm rounded-sm p-6 text-white border border-gold-400/20">
                <Zap className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-medium mb-2">Elevated Experiences</h3>
                <p className="text-sm opacity-80">Curated access to exclusive venues and experiences</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-sm p-6 text-white border border-gold-400/20">
                <Users className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-medium mb-2">Group Focused</h3>
                <p className="text-sm opacity-80">Designed for celebrations and memorable occasions</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-sm p-6 text-white border border-gold-400/20">
                <MapPin className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-medium mb-2">Insider Access</h3>
                <p className="text-sm opacity-80">Connections and access others don't have</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="party-packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-onyx-900 to-midnight-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Session Packages
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Crafted experiences for different occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partyPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-onyx-800 to-midnight-800 border-gold-400/20 ${
                  pkg.popular ? 'ring-1 ring-gold-400/50 shadow-lg' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gold-400 text-onyx-900 px-3 py-1 text-sm font-medium">
                    <Star className="inline h-4 w-4 mr-1" />
                    Popular
                  </div>
                )}
                
                {pkg.badge && !pkg.popular && (
                  <div className="absolute top-0 right-0 bg-onyx-600 text-gold-400 px-3 py-1 text-sm font-medium border-l border-b border-gold-400/30">
                    {pkg.badge}
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{pkg.emoji}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
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
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-gold-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gold-400/20 pt-4">
                    <div className="text-lg font-semibold text-gold-400 mb-3">
                      {pkg.price}
                    </div>
                    <Link to={`/package/${pkg.id}`}>
                      <Button className="w-full bg-onyx-700 hover:bg-onyx-600 text-white transition-all duration-300 border border-gold-400/30 hover:border-gold-400 rounded-sm">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onyx-800 to-midnight-800 border-t border-gold-400/20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-semibold mb-4">
            Something Specific in Mind?
          </h3>
          <p className="text-lg mb-8 text-gray-300">
            We create custom experiences tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold-400/50 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 rounded-sm"
              >
                Plan Custom Session
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/10 rounded-sm"
              onClick={() => window.open('https://wa.me/1234567890?text=Custom experience inquiry', '_blank')}
            >
              Connect Directly
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyVibes;
