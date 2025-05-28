import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Star, Users, MapPin, Calendar, Check, X, ArrowLeft } from 'lucide-react';

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
    images: ['/api/placeholder/600/400', '/api/placeholder/600/400', '/api/placeholder/600/400']
  }
};

const PackageDetail = () => {
  const { packageId } = useParams();
  const pkg = packageData[packageId as keyof typeof packageData];

  if (!pkg) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-jungle-800 mb-4">Package Not Found</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={pkg.category === 'party' ? '/party-vibes' : '/curated-experiences'}>
                    {pkg.category === 'party' ? 'Party Vibes' : 'Curated Experiences'}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>{pkg.title}</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Back Button */}
      <div className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link 
            to={pkg.category === 'party' ? '/party-vibes' : '/curated-experiences'}
            className="inline-flex items-center text-jungle-600 hover:text-jungle-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {pkg.category === 'party' ? 'Party Vibes' : 'Curated Experiences'}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative">
              <img
                src={pkg.images[0]}
                alt={pkg.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute top-4 left-4">
                {pkg.popular && (
                  <Badge className="bg-gold-400 text-jungle-800 font-bold">
                    <Star className="inline h-4 w-4 mr-1" />
                    Popular
                  </Badge>
                )}
                {pkg.badge && !pkg.popular && (
                  <Badge className="bg-coral-500 text-white font-bold">
                    {pkg.badge}
                  </Badge>
                )}
              </div>
            </div>
            <CardHeader className="text-center">
              <div className="text-5xl mb-2">{pkg.emoji}</div>
              <h2 className="text-3xl font-bold text-jungle-800 mb-2">
                {pkg.title}
              </h2>
              <p className="text-jungle-600 mb-4">{pkg.description}</p>
              <div className="flex justify-center gap-4 text-sm text-jungle-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {pkg.groupSize}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Santa Cruz, Bolivia
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-jungle-800 mb-4">
              What's Included
            </h3>
            <ul className="space-y-3">
              {pkg.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-jungle-700"
                >
                  <Check className="mr-2 h-5 w-5 text-coral-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary (Placeholder) */}
          <div>
            <h3 className="text-2xl font-bold text-jungle-800 mb-4">
              Itinerary (Example)
            </h3>
            <div className="text-jungle-700">
              <p className="mb-2">
                <strong>Day 1:</strong> Arrival and Welcome Dinner
              </p>
              <p className="mb-2">
                <strong>Day 2:</strong> City Tour and Cultural Experience
              </p>
              <p className="mb-2">
                <strong>Day 3:</strong> Adventure Activity (e.g., hiking,
                biking)
              </p>
              <p className="mb-2">
                <strong>Day 4:</strong> Relaxation and Departure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-jungle-600 to-jungle-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
          <p className="text-lg mb-8 opacity-90">
            Contact us to customize your experience and book your adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-jungle-600"
              >
                Plan My Trip
              </Button>
            </Link>
            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/20"
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
