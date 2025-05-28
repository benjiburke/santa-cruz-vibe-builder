
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar } from 'lucide-react';

interface Package {
  id: string;
  title: string;
  emoji: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  groupSize: string;
  badge?: string;
  popular?: boolean;
}

const packages: Package[] = [
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
    id: 'romantic-escape',
    title: 'Romantic Escape',
    emoji: '💘',
    description: 'Couple\'s suite, candlelit dinner, massage, spa day',
    features: ['Luxury suite', 'Private dinner', 'Couples massage', 'Spa access'],
    price: 'From $420/couple',
    duration: '3 nights',
    groupSize: '2 people'
  },
  {
    id: 'chill-grill',
    title: 'Chill & Grill',
    emoji: '🍃',
    description: 'Chill house, BBQ chef, massage, board games',
    features: ['Private house', 'BBQ chef', 'Massage therapy', 'Game night setup'],
    price: 'From $380/person',
    duration: '2 nights',
    groupSize: '4-6 people'
  },
  {
    id: 'explorers-route',
    title: 'Explorer\'s Route',
    emoji: '🧭',
    description: 'Nature stay + guided day trip to Samaipata',
    features: ['Nature lodge', 'Guided tours', 'Samaipata trip', 'Local guide'],
    price: 'From $500/person',
    duration: '3 nights',
    groupSize: '2-6 people'
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
    id: 'influencer-escape',
    title: 'Influencer Escape',
    emoji: '📸',
    description: 'Scenic house, content shoot, drone videos',
    features: ['Content creation', 'Drone videography', 'IG-worthy setups', 'Professional editing'],
    price: 'From $600/person',
    duration: '2 nights',
    groupSize: '2-4 people'
  },
  {
    id: 'santa-cruz-sampler',
    title: 'The Santa Cruz Sampler',
    emoji: '🌆',
    description: '2 nights in town, food tour, nightlife crawl',
    features: ['City accommodation', 'Food tour', 'Nightlife guide', 'Local experiences'],
    price: 'From $400/person',
    duration: '2 nights',
    groupSize: '2-8 people'
  },
  {
    id: 'custom-vip',
    title: 'Custom VIP',
    emoji: '💎',
    description: 'Full trip planning based on your vibe and vision',
    features: ['Custom itinerary', 'Flight assistance', 'Unlimited customization', 'Personal concierge'],
    price: 'By consultation',
    duration: 'Flexible',
    groupSize: 'Any size',
    badge: 'Exclusive'
  }
];

const Packages = () => {
  const scrollToForm = () => {
    const element = document.getElementById('intake-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-jungle-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-jungle-800 mb-4">
            Curated Packages — Just Show Up
          </h2>
          <p className="text-xl text-jungle-600 max-w-3xl mx-auto">
            We handle the wild. You handle the group chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg) => (
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
                      <div className="w-2 h-2 bg-jungle-400 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="text-lg font-bold text-sunset-600 mb-3">
                    {pkg.price}
                  </div>
                  <Button 
                    className="w-full bg-jungle-600 hover:bg-jungle-700 text-white transition-all duration-300"
                    onClick={scrollToForm}
                  >
                    {pkg.id === 'custom-vip' ? 'Get Consultation' : 'Book Now'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* VIP Experience Banner */}
        <div className="mt-16 bg-gradient-to-r from-jungle-600 to-sunset-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Want something fully custom?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let's design a weekend just for you — villas, DJs, chefs, transport, whatever you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-jungle-800"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I want to plan a custom VIP experience in Santa Cruz', '_blank')}
            >
              📲 WhatsApp us now
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20"
              onClick={scrollToForm}
            >
              Fill VIP Intake Form
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
