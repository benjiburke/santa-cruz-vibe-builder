
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Users, MapPin, Calendar, Check, X, ArrowLeft, DollarSign } from 'lucide-react';

const packageData = {
  'weekend-bender': {
    id: 'weekend-bender',
    title: 'Weekend Bender',
    emoji: '🥳',
    description: '2 nights in pool villa, DJ, airport pickup',
    features: ['VIP club access', 'Party host', 'Pool villa', 'Airport transfer', 'Welcome drinks'],
    price: 'From $450/person',
    duration: '2 nights',
    groupSize: '4-8 people',
    category: 'party',
    popular: true,
    badge: undefined,
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400']
  },
  'vida-loca': {
    id: 'vida-loca',
    title: 'La Vida Loca',
    emoji: '🎶',
    description: '3-night party takeover + pool rave setup',
    features: ['Pool rave setup', 'Professional photographer', 'Premium bottles', 'Full concierge', 'Private chef'],
    price: 'From $650/person',
    duration: '3 nights',
    groupSize: '6-12 people',
    category: 'party',
    badge: 'Premium',
    popular: undefined,
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400']
  },
  'bachelor-bash': {
    id: 'bachelor-bash',
    title: 'Bachelor Bash',
    emoji: '🍾',
    description: 'Epic bachelor/bachelorette party experience',
    features: ['Custom party themes', 'VIP club reservations', 'Professional photographer', 'Party bus transport', 'Stripper'],
    price: 'From $580/person',
    duration: '2-3 nights',
    groupSize: '6-15 people',
    category: 'party',
    popular: undefined,
    badge: undefined,
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400']
  },
  'andes-adventure': {
    id: 'andes-adventure',
    title: 'Andes Adventure',
    emoji: '⛰️',
    description: 'Explore the Andes mountains with a guided tour',
    features: ['Guided hiking', 'Mountain biking', 'Horseback riding', 'Camping', 'Local cuisine'],
    price: 'From $350/person',
    duration: '3 days',
    groupSize: '2-6 people',
    category: 'curated',
    popular: undefined,
    badge: undefined,
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400']
  },
  'amazon-expedition': {
    id: 'amazon-expedition',
    title: 'Amazon Expedition',
    emoji: '🌿',
    description: 'Discover the Amazon rainforest with a local guide',
    features: ['Jungle trekking', 'Canoe rides', 'Wildlife spotting', 'Indigenous culture', 'Eco-lodge stay'],
    price: 'From $400/person',
    duration: '4 days',
    groupSize: '2-8 people',
    category: 'curated',
    badge: 'Eco-Friendly',
    popular: undefined,
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400']
  },
  'city-explorer': {
    id: 'city-explorer',
    title: 'City Explorer',
    emoji: '🌆',
    description: 'Explore the city with a local guide',
    features: ['Historical sites', 'Museums', 'Local markets', 'Food tasting', 'Nightlife'],
    price: 'From $250/person',
    duration: '2 days',
    groupSize: '2-4 people',
    category: 'curated',
    popular: undefined,
    badge: undefined,
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400']
  }
};

const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 150,
  CNY: 7.2
};

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CNY: '¥'
};

const currencyNames = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  CNY: 'Chinese Yuan'
};

const PackageDetail = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY'>('USD');
  const pkg = packageData[packageId as keyof typeof packageData];

  const convertPrice = (priceString: string) => {
    const numericPrice = parseInt(priceString.replace(/[^\d]/g, ''));
    const convertedPrice = Math.round(numericPrice * exchangeRates[currency]);
    return `From ${currencySymbols[currency]}${convertedPrice}/person`;
  };

  const handleGoBack = () => {
    console.log('Back button clicked');
    // Try to go back in history, but if there's no history, go to home
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-xl font-light text-gray-900 mb-4">Package Not Found</h1>
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-normal"
              onClick={handleGoBack}
            >
              <ArrowLeft className="mr-2 h-3 w-3" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Floating Back Button */}
      <Button 
        className="fixed top-20 left-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-white hover:text-gray-900 shadow-lg"
        size="sm"
        onClick={handleGoBack}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>

      {/* Floating Currency Selector */}
      <div className="fixed top-20 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-2">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-gray-600" />
          <Select value={currency} onValueChange={(value: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY') => setCurrency(value)}>
            <SelectTrigger className="w-32 h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(currencyNames).map(([code, name]) => (
                <SelectItem key={code} value={code} className="text-xs">
                  {code} - {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="py-3 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-gray-600 text-sm">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={pkg.category === 'party' ? '/party-vibes' : '/curated-experiences'} className="text-gray-600 text-sm">
                    {pkg.category === 'party' ? 'Party Vibes' : 'Curated Experiences'}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage className="text-gray-900 text-sm">{pkg.title}</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border border-gray-200">
            <div className="relative">
              <img
                src={pkg.images[0]}
                alt={pkg.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute top-3 left-3">
                {pkg.popular && (
                  <Badge className="bg-gray-900 text-white font-normal text-xs">
                    <Star className="inline h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                )}
                {pkg.badge && !pkg.popular && (
                  <Badge className="bg-gray-100 text-gray-800 font-normal text-xs">
                    {pkg.badge}
                  </Badge>
                )}
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-lg font-semibold text-gray-900">
                  {convertPrice(pkg.price)}
                </span>
              </div>
            </div>
            <CardHeader className="text-center">
              <div className="text-3xl mb-2">{pkg.emoji}</div>
              <h2 className="text-2xl font-light text-gray-900 mb-2">
                {pkg.title}
              </h2>
              <p className="text-gray-600 mb-3 text-sm font-light">{pkg.description}</p>
              <div className="flex justify-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {pkg.groupSize}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Santa Cruz, Bolivia
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features */}
          <div>
            <h3 className="text-xl font-light text-gray-900 mb-4">
              What's Included
            </h3>
            <ul className="space-y-2">
              {pkg.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-sm"
                >
                  <Check className="mr-2 h-4 w-4 text-gray-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div>
            <h3 className="text-xl font-light text-gray-900 mb-4">
              Itinerary (Example)
            </h3>
            <div className="text-gray-700 text-sm font-light space-y-2">
              <p>
                <strong className="font-medium">Day 1:</strong> Arrival and Welcome Dinner
              </p>
              <p>
                <strong className="font-medium">Day 2:</strong> City Tour and Cultural Experience
              </p>
              <p>
                <strong className="font-medium">Day 3:</strong> Adventure Activity (e.g., hiking, biking)
              </p>
              <p>
                <strong className="font-medium">Day 4:</strong> Relaxation and Departure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h3 className="text-2xl font-light mb-4">Ready to Book?</h3>
          <p className="text-sm mb-6 opacity-90 font-light">
            Contact us to customize your experience and book your adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/intake-form">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 border border-white text-sm font-normal"
              >
                Plan My Trip
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 text-sm font-normal"
              onClick={() =>
                window.open(
                  'https://wa.me/1234567890?text=I want to book the Santa Cruz Experience!',
                  '_blank'
                )
              }
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetail;
