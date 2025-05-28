import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar, Camera, Leaf, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const curatedPackages = [
  {
    id: 'coffee-tour',
    title: 'Coffee Immersion',
    emoji: '☕',
    description: 'Explore the best coffee plantations and brewing methods',
    features: ['Guided plantation tour', 'Coffee tasting sessions', 'Brewing workshop', 'Local cafe visits'],
    price: 'From $280/person',
    duration: '1 day',
    groupSize: '2-6 people',
    popular: true
  },
  {
    id: 'amazon-adventure',
    title: 'Amazon Adventure',
    emoji: '🌿',
    description: 'Venture into the Amazon rainforest for an unforgettable experience',
    features: ['Jungle trekking', 'Wildlife spotting', 'Canoe rides', 'Indigenous community visit'],
    price: 'From $750/person',
    duration: '3 days',
    groupSize: '4-8 people',
    badge: 'Eco-Friendly'
  },
  {
    id: 'photography-tour',
    title: 'Photography Expedition',
    emoji: '📸',
    description: 'Capture the beauty of Santa Cruz with professional guidance',
    features: ['Photography workshop', 'Scenic location visits', 'Post-processing session', 'Equipment guidance'],
    price: 'From $420/person',
    duration: '2 days',
    groupSize: '3-5 people'
  }
];

const CuratedExperiences = () => {
  const scrollToPackages = () => {
    const element = document.getElementById('curated-packages');
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
            className="w-full h-full bg-gradient-to-br from-jungle-700 via-jungle-800 to-jungle-900 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/api/placeholder/1200/800')`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-6xl mb-6">✨</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Curated Experiences
              <br />
              <span className="text-gold-400">Unique Adventures Await</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
              Immerse yourself in hand-picked experiences that showcase the best of Santa Cruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gold-500 hover:bg-gold-600 text-jungle-800 px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={scrollToPackages}
              >
                <Camera className="mr-2 h-5 w-5" />
                Explore Experiences
              </Button>
              
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={() => window.open('https://wa.me/1234567890?text=Hi! I want to book a curated experience in Santa Cruz!', '_blank')}
              >
                <Leaf className="mr-2 h-5 w-5" />
                Plan My Adventure
              </Button>
            </div>

            {/* Experience Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <Camera className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Expert Guides</h3>
                <p className="text-sm opacity-90">Local experts to lead you on unforgettable journeys</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <Coffee className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Unique Activities</h3>
                <p className="text-sm opacity-90">From coffee tours to jungle treks, discover hidden gems</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <MapPin className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Authentic Culture</h3>
                <p className="text-sm opacity-90">Immerse yourself in the local culture and traditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Packages */}
      <section id="curated-packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-jungle-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-jungle-800 mb-4">
              Curated Experiences
            </h2>
            <p className="text-xl text-jungle-600 max-w-3xl mx-auto">
              Hand-picked adventures designed to create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curatedPackages.map((pkg) => (
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
                  <div className="absolute top-0 right-0 bg-jungle-500 text-white px-3 py-1 text-sm font-bold">
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
                        <div className="w-2 h-2 bg-gold-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-lg font-bold text-jungle-600 mb-3">
                      {pkg.price}
                    </div>
                    <Link to={`/package/${pkg.id}`}>
                      <Button className="w-full bg-jungle-600 hover:bg-jungle-700 text-white transition-all duration-300">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-jungle-600 to-jungle-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready for a Unique Adventure?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Let us curate the perfect experience for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-jungle-600"
              >
                Plan My Experience
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20"
              onClick={() => window.open('https://wa.me/1234567890?text=I want to plan a custom curated experience!', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuratedExperiences;
