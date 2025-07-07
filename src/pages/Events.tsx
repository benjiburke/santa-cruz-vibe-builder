
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Music, Crown, Sparkles, Camera, Mountain } from 'lucide-react';

const eventsData = [
  {
    id: 'tropical-tech-nights',
    title: 'Tropical Tech Nights',
    emoji: '🎧',
    description: 'Monthly rooftop parties with DJs from Brazil & Argentina',
    date: 'Every 3rd Saturday',
    location: 'Premium Rooftops & Airbnbs',
    price: 'From $80/person',
    attendees: '50-120 people',
    features: ['International DJs', 'Open bar', 'Rooftop venues', 'VIP areas'],
    badge: 'Monthly',
    category: 'recurring'
  },
  {
    id: 'villa-weekends',
    title: 'Villa Weekends',
    emoji: '🏖️',
    description: 'All-inclusive luxury stays with party, massage, chef & day trips',
    date: 'Weekend packages',
    location: 'Private Villas',
    price: 'From $450/person',
    attendees: '6-12 people',
    features: ['Private chef', 'Spa services', 'Day trips to Amboró/Samaipata', 'Pool parties'],
    badge: 'Luxury',
    category: 'weekend'
  },
  {
    id: 'girlboss-retreats',
    title: 'Girlboss Retreats',
    emoji: '👑',
    description: 'Exclusive weekends for female creators with security & videographer',
    date: 'Monthly',
    location: 'Private Estates',
    price: 'From $650/person',
    attendees: '4-8 creators',
    features: ['Professional videographer', '24/7 security', 'Content creation spaces', 'Networking events'],
    badge: 'Exclusive',
    category: 'creator'
  },
  {
    id: 'uyuni-afterparty',
    title: 'Uyuni Afterparty',
    emoji: '🌟',
    description: 'Perfect finale for your Bolivia trip - celebrate before flying home',
    date: 'Custom scheduling',
    location: 'Santa Cruz hotspots',
    price: 'From $200/person',
    attendees: '2-15 people',
    features: ['Airport coordination', 'City celebration', 'Luggage storage', 'Flight prep service'],
    badge: 'Finale',
    category: 'travel'
  },
  {
    id: 'secret-rave-series',
    title: 'Secret Rave Series',
    emoji: '🎭',
    description: 'Monthly exclusive raves in hidden locations - RSVP only',
    date: 'New location monthly',
    location: 'Secret venues',
    price: 'From $120/person',
    attendees: '30-80 people',
    features: ['Secret locations', 'RSVP only', 'Jungle/rooftop venues', 'Surprise elements'],
    badge: 'Secret',
    category: 'exclusive'
  }
];

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-6" />
          <h1 className="text-4xl font-light mb-6">Exclusive Events & Experiences</h1>
          <p className="text-xl font-light opacity-90 mb-8 max-w-2xl mx-auto">
            From monthly tech nights to secret raves - discover Santa Cruz's most exclusive events and recurring experiences.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event) => (
              <Card key={event.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-6xl">{event.emoji}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gray-900 text-white font-normal text-xs">
                      {event.badge}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-light text-gray-900 mb-2">
                    {event.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm font-light mb-4">{event.description}</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3" />
                      {event.attendees}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg font-semibold text-gray-900 mb-4">
                    {event.price}
                  </div>
                  <ul className="space-y-1 mb-6">
                    {event.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Link to="/intake-form" className="flex-1">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-normal">
                        Join Waitlist
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Crown className="w-10 h-10 text-gold-400 mx-auto mb-6" />
          <h3 className="text-2xl font-light mb-4">Ready to Join the Elite?</h3>
          <p className="text-sm mb-8 opacity-90 font-light">
            These exclusive events fill up fast. Get on our VIP list for priority access and special pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-white text-sm font-normal">
                Join VIP List
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 text-sm font-normal"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Private Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
