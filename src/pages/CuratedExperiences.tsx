
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, MapPin, Calendar, Heart, Sparkles, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const curatedPackages = [
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
    id: 'influencer-escape',
    title: 'Influencer Escape',
    emoji: '📸',
    description: 'Scenic house, content shoot, drone videos',
    features: ['Content creation', 'Drone videography', 'IG-worthy setups', 'Professional editing'],
    price: 'From $600/person',
    duration: '2 nights',
    groupSize: '2-4 people'
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-gradient-to-br from-jungle-600 via-jungle-500 to-sunset-400 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/api/placeholder/1200/800')`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-6xl mb-6">🎨</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Curated Experiences
              <br />
              <span className="text-gold-400">Thoughtfully Crafted</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
              Personalized, elevated, and thoughtful. Experiences crafted for comfort, style, and emotional impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-jungle-600 hover:bg-jungle-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={scrollToPackages}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Curated Packages
              </Button>
              
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={() => window.open('https://wa.me/1234567890?text=Hi! I\'m interested in a curated experience in Santa Cruz', '_blank')}
              >
                <Heart className="mr-2 h-5 w-5" />
                Let's Create Magic
              </Button>
            </div>

            {/* Experience Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <Heart className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Personal Touch</h3>
                <p className="text-sm opacity-90">Every detail tailored to your preferences and desires</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <Leaf className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Mindful Luxury</h3>
                <p className="text-sm opacity-90">Spa treatments, wellness, and peaceful environments</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <Sparkles className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Cultural Immersion</h3>
                <p className="text-sm opacity-90">Authentic local experiences mixed with modern luxury</p>
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
              Curated Packages
            </h2>
            <p className="text-xl text-jungle-600 max-w-3xl mx-auto">
              Thoughtfully designed experiences that create lasting memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curatedPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-jungle-600 to-sunset-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready for Something Special?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Let us craft a unique experience that perfectly matches your vision and style.
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
              onClick={() => window.open('https://wa.me/1234567890?text=I want to plan a curated experience in Santa Cruz!', '_blank')}
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
