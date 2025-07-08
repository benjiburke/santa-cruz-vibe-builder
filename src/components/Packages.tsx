import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar, Crown, Sparkles, Flame, Zap } from 'lucide-react';
import { useState } from 'react';

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
  image?: string;
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
    tier: 'budget',
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
    price: 'From $520/person',
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
    price: 'From $680/couple',
    duration: '3 nights',
    groupSize: '2 people',
    tier: 'premium',
    vibeRating: '🔥🔥'
  },
  {
    id: 'samaipata-sessions',
    title: 'Samaipata Sessions',
    emoji: '🧭',
    description: 'Nature meets luxury — guided adventures with 5-star comfort',
    features: ['Eco-luxury lodge', 'Private nature guides', 'Samaipata ruins tour', 'Adventure activities', 'Gourmet trail meals'],
    price: 'From $750/person',
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
    price: 'From $890/person',
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
    price: 'From $1,250/person',
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

const testimonials = [
  {
    text: "We did La Vida Loca and it was 🔥🔥🔥! DJ was fire, house was perfect, and Benny's team had everything stocked before we arrived.",
    author: "Andrew, NYC",
    package: "La Vida Loca"
  },
  {
    text: "Romance & Roses package exceeded all expectations. The penthouse was stunning and our private chef was incredible!",
    author: "Maria & Carlos, Miami",
    package: "Romance & Roses"
  },
  {
    text: "Santa Cruz Sampler was the perfect intro to the city. Hit all the best spots without any planning stress.",
    author: "Jake, LA",
    package: "Santa Cruz Sampler"
  }
];

const getTierInfo = (tier: string) => {
  switch (tier) {
    case 'budget':
      return {
        icon: '',
        label: 'Essential',
        description: 'Quality experiences, smart value',
        color: 'gray',
        cardClass: 'border-gray-200 bg-white hover:shadow-sm',
        badgeClass: 'bg-gray-100 text-gray-700 border border-gray-200',
        priceClass: 'text-gray-900',
        buttonClass: 'bg-gray-900 hover:bg-gray-800 text-white'
      };
    case 'premium':
      return {
        icon: '',
        label: 'Premium',
        description: 'Enhanced amenities & service',
        color: 'gray',
        cardClass: 'border-gray-200 bg-white hover:shadow-sm',
        badgeClass: 'bg-gray-100 text-gray-700 border border-gray-200',
        priceClass: 'text-gray-900',
        buttonClass: 'bg-gray-900 hover:bg-gray-800 text-white'
      };
    case 'luxury':
      return {
        icon: '',
        label: 'Luxury',
        description: 'Sophisticated experiences',
        color: 'gray',
        cardClass: 'border-gray-200 bg-white hover:shadow-sm',
        badgeClass: 'bg-gray-100 text-gray-700 border border-gray-200',
        priceClass: 'text-gray-900',
        buttonClass: 'bg-gray-900 hover:bg-gray-800 text-white'
      };
    case 'vip':
      return {
        icon: '',
        label: 'VIP Exclusive',
        description: 'Ultimate luxury service',
        color: 'gray',
        cardClass: 'border-gray-300 bg-gray-50 hover:shadow-sm',
        badgeClass: 'bg-gray-800 text-white border border-gray-800',
        priceClass: 'text-gray-900',
        buttonClass: 'bg-gray-900 hover:bg-gray-800 text-white'
      };
    default:
      return {
        icon: '',
        label: 'Experience',
        description: 'Curated adventure',
        color: 'gray',
        cardClass: 'border-gray-200 bg-white hover:shadow-sm',
        badgeClass: 'bg-gray-100 text-gray-700 border border-gray-200',
        priceClass: 'text-gray-900',
        buttonClass: 'bg-gray-900 hover:bg-gray-800 text-white'
      };
  }
};

const Packages = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

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

  const filteredPackages = selectedTier 
    ? sortedPackages.filter(pkg => pkg.tier === selectedTier)
    : sortedPackages;

  const handleTierClick = (tier: string) => {
    setSelectedTier(selectedTier === tier ? null : tier);
  };

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Experience <span className="text-gray-700">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            Carefully curated experiences designed to exceed expectations. Choose your preferred level of service.
          </p>
          
          {/* Enhanced Tier Legend with Filtering */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['budget', 'premium', 'luxury', 'vip'].map((tier) => {
              const tierInfo = getTierInfo(tier);
              const isSelected = selectedTier === tier;
              return (
                <div key={tier} className="text-center">
                  <Badge 
                    className={`bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2 text-sm font-normal mb-2 flex items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-gray-200 ${
                      isSelected ? 'bg-gray-900 text-white border-gray-900' : ''
                    }`}
                    onClick={() => handleTierClick(tier)}
                  >
                    {tierInfo.label}
                  </Badge>
                  <p className="text-xs text-gray-500">{tierInfo.description}</p>
                </div>
              );
            })}
          </div>

          {/* Clear Filter Button */}
          {selectedTier && (
            <div className="mb-8">
              <Button
                variant="outline"
                onClick={() => setSelectedTier(null)}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
              >
                Show All Packages
              </Button>
            </div>
          )}

          {/* Filter Status */}
          {selectedTier && (
            <p className="text-gray-600 mb-8">
              Showing {filteredPackages.length} {getTierInfo(selectedTier).label} package{filteredPackages.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Enhanced Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredPackages.map((pkg) => {
            const tierInfo = getTierInfo(pkg.tier || 'budget');
            const isVip = pkg.tier === 'vip';
            
            return (
              <Card 
                key={pkg.id} 
                className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border border-gray-200 ${
                  pkg.popular ? 'ring-1 ring-gray-300 shadow-md' : ''
                }`}
              >
                {/* Package Image Placeholder */}
                <div className="h-40 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-2xl text-gray-400">{pkg.title}</div>
                  {pkg.popular && (
                    <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 text-xs font-normal">
                      <Star className="inline h-3 w-3 mr-1" />
                      Popular
                    </div>
                  )}
                  {pkg.badge && !pkg.popular && (
                    <div className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs font-normal">
                      {pkg.badge}
                    </div>
                  )}
                </div>

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-2">
                    <Badge className={`${tierInfo.badgeClass} text-xs px-2 py-1 font-normal`}>
                      {tierInfo.label}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900">
                    {pkg.title}
                  </h3>
                  <p className="text-sm mb-4 text-gray-600 font-light">
                    {pkg.description}
                  </p>
                  
                  {/* Vibe Rating */}
                  <div className="text-sm mb-3 text-gray-500">
                    {pkg.vibeRating}
                  </div>
                  
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
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 border-gray-200">
                    <div className="text-lg font-medium mb-3 text-gray-900">
                      {pkg.price}
                    </div>
                    <Button 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 font-normal text-sm"
                      onClick={scrollToForm}
                    >
                      {pkg.id === 'custom-vip' ? 'Plan Custom Experience' : 
                       pkg.tier === 'vip' ? 'Reserve This Experience' : 
                       pkg.popular ? 'Book Popular Choice' :
                       'Customize Package'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results Message */}
        {selectedTier && filteredPackages.length === 0 && (
          <div className="text-center mb-16">
            <p className="text-gray-500 text-lg">
              No packages found for {getTierInfo(selectedTier).label} tier.
            </p>
          </div>
        )}

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-light text-center text-gray-900 mb-8">
            Client <span className="text-gray-700">Testimonials</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic font-light">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-600">— {testimonial.author}</p>
                    <Badge className="bg-gray-100 text-gray-700 border border-gray-200 text-xs font-normal">{testimonial.package}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Custom VIP Banner */}
        <div className="bg-gray-900 p-8 text-center text-white shadow-sm">
          <h3 className="text-3xl font-light mb-4 text-white">
            Need Something Completely Custom?
          </h3>
          <p className="text-lg mb-6 text-gray-300 font-light">
            From intimate getaways to elaborate celebrations — we design experiences at every level. Your vision, our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-gray-900 font-normal px-8 py-3"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I want to plan something completely custom in Santa Cruz', '_blank')}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-3 font-normal"
              onClick={scrollToForm}
            >
              Start Planning
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
