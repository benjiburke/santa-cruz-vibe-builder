
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar, Crown, Sparkles, Flame, Zap } from 'lucide-react';

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
  vibeRating?: string;
}

const packages: Package[] = [
  {
    id: 'weekend-bender',
    title: 'Weekend Bender',
    emoji: '🥳',
    description: 'Pool villa madness with DJ, VIP access, and non-stop vibes',
    features: ['VIP club access', 'Live DJ set', 'Pool villa with bar', 'Airport VIP pickup', 'Welcome bottle service'],
    price: 'From $450/person',
    duration: '2 nights',
    groupSize: '4-8 people',
    popular: true,
    tier: 'premium',
    vibeRating: '🔥🔥🔥'
  },
  {
    id: 'santa-cruz-sampler',
    title: 'Santa Cruz Sampler',
    emoji: '🌆',
    description: 'Taste the city — food, culture, and nightlife in one epic trip',
    features: ['City boutique hotel', 'Guided food tour', 'Nightlife VIP access', 'Cultural experiences', 'Local insider guide'],
    price: 'From $380/person',
    duration: '2 nights',
    groupSize: '2-8 people',
    tier: 'budget',
    vibeRating: '🔥🔥'
  },
  {
    id: 'chill-grill',
    title: 'Chill & Grill',
    emoji: '🍃',
    description: 'Laid-back luxury with private chef, massages, and good vibes',
    features: ['Private luxury house', 'Personal BBQ chef', 'In-house massage therapy', 'Premium game setup', 'Sunset cocktail service'],
    price: 'From $420/person',
    duration: '2 nights',
    groupSize: '4-6 people',
    tier: 'premium',
    vibeRating: '🔥🔥'
  },
  {
    id: 'romantic-escape',
    title: 'Romance & Roses',
    emoji: '💘',
    description: 'Couple\'s paradise with candlelit dinners and spa luxury',
    features: ['Luxury penthouse suite', 'Private chef dinner', 'Couples spa package', 'Romantic city tour', 'Champagne & roses'],
    price: 'From $520/couple',
    duration: '3 nights',
    groupSize: '2 people',
    tier: 'luxury',
    vibeRating: '🔥🔥'
  },
  {
    id: 'samaipata-sessions',
    title: 'Samaipata Sessions',
    emoji: '🧭',
    description: 'Nature meets luxury — guided adventures with 5-star comfort',
    features: ['Eco-luxury lodge', 'Private nature guides', 'Samaipata ruins tour', 'Adventure activities', 'Gourmet trail meals'],
    price: 'From $580/person',
    duration: '3 nights',
    groupSize: '2-6 people',
    tier: 'luxury',
    vibeRating: '🔥🔥🔥'
  },
  {
    id: 'influencer-escape',
    title: 'Content Creator',
    emoji: '📸',
    description: 'Instagram-perfect setups with professional content creation',
    features: ['Aesthetic luxury villa', 'Professional photographer', 'Drone videography', 'Content styling', 'Social media package'],
    price: 'From $680/person',
    duration: '2 nights',
    groupSize: '2-4 people',
    tier: 'luxury',
    vibeRating: '🔥🔥🔥'
  },
  {
    id: 'vida-loca',
    title: 'La Vida Loca',
    emoji: '🎶',
    description: 'Maximum chaos — pool raves, VIP everything, zero limits',
    features: ['Private mansion takeover', 'Pool rave production', 'Celebrity photographer', 'Premium bottle service', 'Personal concierge team'],
    price: 'From $750/person',
    duration: '3 nights',
    groupSize: '6-12 people',
    badge: 'LEGENDARY',
    tier: 'vip',
    vibeRating: '🔥🔥🔥🔥'
  },
  {
    id: 'custom-vip',
    title: 'Pure Custom VIP',
    emoji: '💎',
    description: 'Sky\'s the limit — your wildest dreams, our execution',
    features: ['Unlimited customization', 'Private jet coordination', 'Celebrity connections', '24/7 concierge army', 'Impossible made possible'],
    price: 'By consultation',
    duration: 'Your call',
    groupSize: 'Any size',
    badge: 'BESPOKE',
    tier: 'vip',
    vibeRating: '🔥🔥🔥🔥🔥'
  }
];

const getTierStyling = (tier: string) => {
  switch (tier) {
    case 'budget':
      return {
        cardClass: 'border-emerald-300 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 hover:shadow-emerald-400/50 hover:border-emerald-400',
        priceClass: 'text-emerald-700',
        buttonClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        vibeClass: 'text-emerald-600'
      };
    case 'premium':
      return {
        cardClass: 'border-sunset-300 bg-gradient-to-br from-white via-sunset-50 to-sunset-100 hover:shadow-sunset-400/50 hover:border-sunset-400',
        priceClass: 'text-sunset-700',
        buttonClass: 'bg-sunset-600 hover:bg-sunset-700 text-white',
        vibeClass: 'text-sunset-600'
      };
    case 'luxury':
      return {
        cardClass: 'border-gold-400 bg-gradient-to-br from-white via-gold-50 to-gold-100 hover:shadow-gold-400/60 hover:border-gold-500',
        priceClass: 'text-gold-700',
        buttonClass: 'bg-gold-600 hover:bg-gold-700 text-white',
        vibeClass: 'text-gold-600'
      };
    case 'vip':
      return {
        cardClass: 'border-gold-500 bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900 text-white hover:shadow-gold-400/70 animate-luxury-glow',
        priceClass: 'text-gold-400',
        buttonClass: 'bg-gold-500 hover:bg-gold-600 text-onyx-900 font-bold',
        vibeClass: 'text-gold-400'
      };
    default:
      return {
        cardClass: 'border-jungle-200 bg-gradient-to-br from-white to-jungle-50',
        priceClass: 'text-jungle-600',
        buttonClass: 'bg-jungle-600 hover:bg-jungle-700 text-white',
        vibeClass: 'text-jungle-600'
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
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-luxury">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Choose Your Level of <span className="text-gold-400">Chaos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From budget backpacker vibes to billionaire-level madness. We handle the wild — you choose your level.
          </p>
          
          {/* Tier Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-emerald-600 text-white px-4 py-2 text-sm font-semibold">💰 Budget Friendly</Badge>
            <Badge className="bg-sunset-600 text-white px-4 py-2 text-sm font-semibold">🔥 Premium</Badge>
            <Badge className="bg-gold-600 text-white px-4 py-2 text-sm font-semibold">✨ Luxury</Badge>
            <Badge className="bg-onyx-800 text-gold-400 border-gold-400 px-4 py-2 text-sm font-semibold animate-pulse-gold">
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
                  <div className="absolute top-0 right-0 bg-gold-400 text-onyx-800 px-3 py-1 text-sm font-bold z-10 flex items-center">
                    <Star className="inline h-4 w-4 mr-1" />
                    Popular
                  </div>
                )}
                
                {pkg.badge && !pkg.popular && (
                  <div className={`absolute top-0 right-0 px-3 py-1 text-sm font-bold z-10 flex items-center ${
                    isVip ? 'bg-gold-500 text-onyx-900' : 'bg-coral-500 text-white'
                  }`}>
                    {isVip && <Sparkles className="inline h-3 w-3 mr-1" />}
                    {pkg.badge}
                  </div>
                )}

                <CardHeader className={`text-center pb-4 ${isVip ? 'text-white' : ''}`}>
                  <div className="text-4xl mb-2">{pkg.emoji}</div>
                  <h3 className={`text-xl font-bold mb-2 ${isVip ? 'text-gold-400' : 'text-onyx-800'}`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isVip ? 'text-gray-300' : 'text-onyx-600'}`}>
                    {pkg.description}
                  </p>
                  
                  {/* Vibe Rating */}
                  <div className={`text-lg mb-3 ${styling.vibeClass}`}>
                    {pkg.vibeRating}
                  </div>
                  
                  <div className={`flex justify-center gap-4 text-xs ${isVip ? 'text-gray-400' : 'text-onyx-500'}`}>
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
                      <div key={index} className={`flex items-center text-sm ${isVip ? 'text-gray-300' : 'text-onyx-700'}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 flex-shrink-0 ${
                          isVip ? 'bg-gold-400' : 'bg-coral-400'
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
                      {pkg.id === 'custom-vip' ? '🚀 Let\'s Go Crazy' : 
                       pkg.tier === 'vip' ? '⚡ Lock In This Vibe' : 
                       '🔥 Book This Experience'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced VIP Experience Banner */}
        <div className="mt-16 bg-gradient-to-r from-onyx-900 via-midnight-800 to-onyx-900 rounded-2xl p-8 text-center text-white border border-gold-400/30 shadow-2xl">
          <div className="flex justify-center mb-4">
            <Crown className="h-12 w-12 text-gold-400 animate-pulse-gold" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gold-400">
            Need Something Completely Custom?
          </h3>
          <p className="text-lg mb-6 text-gray-300">
            From budget backpacker madness to private jet luxury — we design experiences at every price point. Your wildest vision, our flawless execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-onyx-900 font-bold border-2 border-gold-400 px-8 py-3"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I want to plan something completely custom and wild in Santa Cruz', '_blank')}
            >
              💬 WhatsApp Us Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-onyx-900 px-8 py-3"
              onClick={scrollToForm}
            >
              🎯 Start Custom Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
