
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar, Crown, Sparkles } from 'lucide-react';

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
  tier?: 'budget' | 'premium' | 'luxury' | 'vip';
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
    popular: true,
    tier: 'premium'
  },
  {
    id: 'santa-cruz-sampler',
    title: 'The Santa Cruz Sampler',
    emoji: '🌆',
    description: '2 nights in town, food tour, nightlife crawl',
    features: ['City accommodation', 'Food tour', 'Nightlife guide', 'Local experiences'],
    price: 'From $380/person',
    duration: '2 nights',
    groupSize: '2-8 people',
    tier: 'budget'
  },
  {
    id: 'chill-grill',
    title: 'Chill & Grill',
    emoji: '🍃',
    description: 'Chill house, BBQ chef, massage, board games',
    features: ['Private house', 'BBQ chef', 'Massage therapy', 'Game night setup'],
    price: 'From $420/person',
    duration: '2 nights',
    groupSize: '4-6 people',
    tier: 'premium'
  },
  {
    id: 'romantic-escape',
    title: 'Romantic Escape',
    emoji: '💘',
    description: 'Couple\'s suite, candlelit dinner, massage, spa day',
    features: ['Luxury suite', 'Private dinner', 'Couples massage', 'Spa access'],
    price: 'From $520/couple',
    duration: '3 nights',
    groupSize: '2 people',
    tier: 'luxury'
  },
  {
    id: 'explorers-route',
    title: 'Explorer\'s Route',
    emoji: '🧭',
    description: 'Nature stay + guided day trip to Samaipata',
    features: ['Nature lodge', 'Guided tours', 'Samaipata trip', 'Local guide'],
    price: 'From $580/person',
    duration: '3 nights',
    groupSize: '2-6 people',
    tier: 'luxury'
  },
  {
    id: 'influencer-escape',
    title: 'Influencer Escape',
    emoji: '📸',
    description: 'Scenic house, content shoot, drone videos',
    features: ['Content creation', 'Drone videography', 'IG-worthy setups', 'Professional editing'],
    price: 'From $680/person',
    duration: '2 nights',
    groupSize: '2-4 people',
    tier: 'luxury'
  },
  {
    id: 'vida-loca',
    title: 'La Vida Loca',
    emoji: '🎶',
    description: '3-night party takeover + pool rave setup',
    features: ['Pool rave setup', 'Professional photographer', 'Premium bottles', 'Full concierge'],
    price: 'From $750/person',
    duration: '3 nights',
    groupSize: '6-12 people',
    badge: 'VIP',
    tier: 'vip'
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
    badge: 'Exclusive',
    tier: 'vip'
  }
];

const getTierStyling = (tier: string) => {
  switch (tier) {
    case 'budget':
      return {
        cardClass: 'border-emerald-200 bg-gradient-to-br from-white to-emerald-50 hover:shadow-emerald-200/50',
        priceClass: 'text-emerald-600',
        buttonClass: 'bg-emerald-600 hover:bg-emerald-700'
      };
    case 'premium':
      return {
        cardClass: 'border-sunset-200 bg-gradient-to-br from-white to-sunset-50 hover:shadow-sunset-200/50',
        priceClass: 'text-sunset-600',
        buttonClass: 'bg-sunset-600 hover:bg-sunset-700'
      };
    case 'luxury':
      return {
        cardClass: 'border-gold-300 bg-gradient-to-br from-white to-gold-50 hover:shadow-gold-300/50',
        priceClass: 'text-gold-600',
        buttonClass: 'bg-gold-600 hover:bg-gold-700'
      };
    case 'vip':
      return {
        cardClass: 'border-midnight-600 bg-gradient-to-br from-midnight-900 to-midnight-800 text-white hover:shadow-gold-400/50 animate-luxury-glow',
        priceClass: 'text-gold-400',
        buttonClass: 'bg-gold-500 hover:bg-gold-600 text-midnight-900'
      };
    default:
      return {
        cardClass: 'border-jungle-200 bg-gradient-to-br from-white to-jungle-50',
        priceClass: 'text-jungle-600',
        buttonClass: 'bg-jungle-600 hover:bg-jungle-700'
      };
  }
};

const Packages = () => {
  const scrollToForm = () => {
    const element = document.getElementById('intake-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sortedPackages = [...packages].sort((a, b) => {
    const tierOrder = { 'budget': 1, 'premium': 2, 'luxury': 3, 'vip': 4 };
    return (tierOrder[a.tier || 'budget'] || 1) - (tierOrder[b.tier || 'budget'] || 1);
  });

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-luxury-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Curated Packages — From Budget to Billionaire
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We handle the wild. You choose your level. From backpacker vibes to VIP treatment.
          </p>
          
          {/* Tier Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-emerald-600 text-white px-4 py-2">💰 Budget Friendly</Badge>
            <Badge className="bg-sunset-600 text-white px-4 py-2">🔥 Premium</Badge>
            <Badge className="bg-gold-600 text-white px-4 py-2">✨ Luxury</Badge>
            <Badge className="bg-midnight-800 text-gold-400 border-gold-400 px-4 py-2">
              <Crown className="h-4 w-4 mr-1" />
              VIP Exclusive
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedPackages.map((pkg) => {
            const styling = getTierStyling(pkg.tier || 'budget');
            const isVip = pkg.tier === 'vip';
            
            return (
              <Card 
                key={pkg.id} 
                className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 ${styling.cardClass} ${
                  pkg.popular ? 'ring-2 ring-gold-400 shadow-lg scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gold-400 text-midnight-800 px-3 py-1 text-sm font-bold z-10">
                    <Star className="inline h-4 w-4 mr-1" />
                    Popular
                  </div>
                )}
                
                {pkg.badge && !pkg.popular && (
                  <div className={`absolute top-0 right-0 px-3 py-1 text-sm font-bold z-10 ${
                    isVip ? 'bg-gold-500 text-midnight-900' : 'bg-coral-500 text-white'
                  }`}>
                    {isVip && <Sparkles className="inline h-3 w-3 mr-1" />}
                    {pkg.badge}
                  </div>
                )}

                <CardHeader className={`text-center pb-4 ${isVip ? 'text-white' : ''}`}>
                  <div className="text-4xl mb-2">{pkg.emoji}</div>
                  <h3 className={`text-xl font-bold mb-2 ${isVip ? 'text-gold-400' : 'text-jungle-800'}`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isVip ? 'text-gray-300' : 'text-jungle-600'}`}>
                    {pkg.description}
                  </p>
                  <div className={`flex justify-center gap-4 text-xs ${isVip ? 'text-gray-400' : 'text-jungle-500'}`}>
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
                      <div key={index} className={`flex items-center text-sm ${isVip ? 'text-gray-300' : 'text-jungle-700'}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 flex-shrink-0 ${
                          isVip ? 'bg-gold-400' : 'bg-jungle-400'
                        }`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 border-opacity-20">
                    <div className={`text-lg font-bold mb-3 ${styling.priceClass}`}>
                      {pkg.price}
                    </div>
                    <Button 
                      className={`w-full transition-all duration-300 font-semibold ${styling.buttonClass}`}
                      onClick={scrollToForm}
                    >
                      {pkg.id === 'custom-vip' ? 'Get Consultation' : 'Book Now'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced VIP Experience Banner */}
        <div className="mt-16 bg-gradient-to-r from-midnight-900 via-midnight-800 to-midnight-900 rounded-2xl p-8 text-center text-white border border-gold-400/30 shadow-2xl">
          <div className="flex justify-center mb-4">
            <Crown className="h-12 w-12 text-gold-400" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gold-400">
            Want Something Completely Custom?
          </h3>
          <p className="text-lg mb-6 text-gray-300">
            From budget backpacker vibes to private jet luxury — we design experiences at every price point. Your vision, our execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-midnight-900 font-semibold border-2 border-gold-400"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I want to plan a custom experience in Santa Cruz', '_blank')}
            >
              💬 WhatsApp us now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-midnight-900"
              onClick={scrollToForm}
            >
              Fill Custom Request Form
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
