
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Users, MapPin, Check, Star, MessageCircle } from 'lucide-react';

// All packages data
const allPackages = {
  'weekend-bender': {
    title: 'Weekend Bender',
    emoji: '🥳',
    category: 'Party Vibes',
    description: 'The ultimate 2-night party experience in Santa Cruz',
    longDescription: 'Get ready for an unforgettable weekend that combines luxury accommodation with non-stop party vibes. Perfect for groups looking to celebrate and make memories that will last a lifetime.',
    price: 'From $450/person',
    duration: '2 nights',
    groupSize: '4-8 people',
    popular: true,
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    features: [
      'VIP club access to Santa Cruz\'s hottest venues',
      'Dedicated party host for the entire stay',
      'Luxury pool villa with party amenities',
      'Airport pickup and drop-off service',
      'Professional photographer for 2 hours',
      'Welcome drinks and party starter kit',
      'Access to pool floaties and party games',
      '24/7 concierge support'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & Pool Party',
        activities: ['Airport pickup', 'Villa check-in & welcome drinks', 'Pool party setup', 'Evening club access']
      },
      {
        day: 'Day 2',
        title: 'Full Party Mode',
        activities: ['Late brunch at villa', 'Pool party continuation', 'Pre-party photoshoot', 'VIP nightclub experience']
      },
      {
        day: 'Day 3',
        title: 'Recovery & Departure',
        activities: ['Recovery breakfast', 'Villa checkout', 'Airport transfer']
      }
    ],
    included: ['Accommodation', 'Transportation', 'Party host', 'Club access', 'Photography'],
    notIncluded: ['Flights', 'Meals (except welcome drinks)', 'Alcohol', 'Personal expenses'],
    testimonial: {
      text: "Best weekend of our lives! The villa was incredible and our party host made sure we had access to everything. 10/10 would do again!",
      author: "Jake M.",
      location: "Miami, FL"
    }
  },
  'romantic-escape': {
    title: 'Romantic Escape',
    emoji: '💘',
    category: 'Curated Experiences',
    description: 'An intimate 3-night experience designed for couples',
    longDescription: 'Escape to paradise with your loved one. This carefully curated experience combines luxury accommodation, romantic dining, and intimate spa treatments for the perfect couples getaway.',
    price: 'From $420/couple',
    duration: '3 nights',
    groupSize: '2 people',
    popular: false,
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    features: [
      'Luxury couple\'s suite with romantic setup',
      'Private candlelit dinner experience',
      'Couples massage therapy session',
      'Full spa day access',
      'Breakfast in bed service',
      'Sunset viewing experience',
      'Professional couple\'s photoshoot',
      'Welcome champagne and chocolates'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Romantic Arrival',
        activities: ['Suite check-in with champagne', 'Welcome spa treatment', 'Private dinner setup', 'Sunset viewing']
      },
      {
        day: 'Day 2',
        title: 'Full Spa Day',
        activities: ['Breakfast in bed', 'Couples massage therapy', 'Spa facilities access', 'Romantic evening walk']
      },
      {
        day: 'Day 3',
        title: 'Final Moments',
        activities: ['Professional photoshoot', 'Farewell brunch', 'Memory book creation', 'Departure']
      }
    ],
    included: ['Luxury accommodation', 'All meals', 'Spa treatments', 'Photography', 'Transportation'],
    notIncluded: ['Flights', 'Alcohol upgrades', 'Additional spa services', 'Personal shopping'],
    testimonial: {
      text: "The most romantic trip we've ever taken. Every detail was perfect and the staff went above and beyond to make it special.",
      author: "Sarah & Mike",
      location: "Denver, CO"
    }
  }
  // Add more packages as needed
};

const PackageDetail = () => {
  const { packageId } = useParams();
  const packageData = packageId ? allPackages[packageId as keyof typeof allPackages] : null;

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Package not found</h1>
          <Link to="/">
            <Button>Go back home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const scrollToBooking = () => {
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center text-jungle-600 hover:text-jungle-800 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to packages
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-jungle-50 to-sunset-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-jungle-100 text-jungle-800">{packageData.category}</Badge>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{packageData.emoji}</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-jungle-800">
                  {packageData.title}
                </h1>
                {packageData.popular && (
                  <Badge className="bg-gold-400 text-jungle-800">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>
              
              <p className="text-xl text-jungle-600 mb-6">
                {packageData.longDescription}
              </p>

              <div className="flex flex-wrap gap-6 mb-8 text-jungle-700">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{packageData.groupSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Santa Cruz, Bolivia</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-jungle-600 hover:bg-jungle-700 text-white px-8 py-6 text-lg"
                  onClick={scrollToBooking}
                >
                  Book Now - {packageData.price}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-jungle-600 text-jungle-600 hover:bg-jungle-600 hover:text-white px-8 py-6 text-lg"
                  onClick={() => window.open(`https://wa.me/1234567890?text=Hi! I'm interested in the ${packageData.title} package`, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ask Questions
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={packageData.images[0]} 
                alt={packageData.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-jungle-800 mb-8 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packageData.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-jungle-600 mt-1 flex-shrink-0" />
                <span className="text-jungle-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-jungle-800 mb-8 text-center">Itinerary</h2>
          <div className="space-y-6">
            {packageData.itinerary.map((day, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-jungle-600 text-white">
                  <h3 className="text-xl font-bold">{day.day}: {day.title}</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-jungle-400 rounded-full"></div>
                        <span className="text-jungle-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-jungle-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Guests Say</h2>
          <blockquote className="text-xl italic mb-6">
            "{packageData.testimonial.text}"
          </blockquote>
          <cite className="text-jungle-200">
            — {packageData.testimonial.author}, {packageData.testimonial.location}
          </cite>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sunset-500 to-coral-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-xl mb-8 opacity-90">
            Secure your spot for this amazing experience. Only a few dates left!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-sunset-600 px-8 py-6 text-lg"
              >
                Fill Booking Form
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20 px-8 py-6 text-lg"
              onClick={() => window.open(`https://wa.me/1234567890?text=I want to book the ${packageData.title} package!`, '_blank')}
            >
              Book via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetail;
