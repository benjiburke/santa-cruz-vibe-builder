
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Star, Users, MapPin, Calendar, Camera, Leaf, Coffee, Compass, Mountain, TreePine, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';

const curatedExperiences = [
  {
    title: 'Sandboarding at Lomas de Arena',
    description: 'Glide down massive golden dunes just 45 minutes from the city with private 4x4 transport, boards, and sunset champagne.',
    price: 'From $180/person',
    features: [
      'Private 4x4 desert transport',
      'Professional sandboarding equipment',
      'Sunset champagne service',
      'Professional photography session',
      'Gourmet snacks and refreshments'
    ],
    icon: Mountain,
    buttonText: 'Book Desert Adventure'
  },
  {
    title: 'Private Jungle & Waterfall Retreat',
    description: 'Guided expedition to hidden waterfalls with hiking, swimming, and private picnic in pristine jungle paradise.',
    price: 'From $320/person',
    features: [
      'Expert jungle guide and naturalist',
      'Hidden waterfall access',
      'Private jungle picnic setup',
      'Swimming in natural pools',
      'Wildlife spotting opportunities'
    ],
    icon: TreePine,
    buttonText: 'Explore Paradise'
  },
  {
    title: 'Samaipata Wine + Culture Day',
    description: 'Sophisticated wine tastings at boutique vineyards plus pre-Columbian rock carvings and natural pools.',
    price: 'From $420/person',
    features: [
      'Boutique winery tours and tastings',
      'Pre-Columbian archaeological sites',
      'Las Cuevas natural pools',
      'Gourmet lunch with wine pairings',
      'Cultural heritage guide'
    ],
    icon: Coffee,
    buttonText: 'Taste Culture'
  },
  {
    title: 'Amboró Wilderness Adventure',
    description: 'Exclusive guided nature trek into pristine wilderness - rivers, birds, wildlife with luxury eco-lodge comfort.',
    price: 'From $680/person',
    features: [
      'Private nature guide specialist',
      'Luxury eco-lodge accommodation',
      'Bird watching and wildlife photography',
      'River expeditions and hiking',
      'Gourmet meals in nature'
    ],
    icon: Compass,
    buttonText: 'Wild Luxury'
  },
  {
    title: 'Villa Party + Nightlife Package',
    description: 'Private villa with pool, chef, open bar, and VIP access to Santa Cruz\'s hottest lounges and nightlife.',
    price: 'From $850/group',
    features: [
      'Private luxury villa with pool',
      'Personal chef and open bar',
      'Professional DJ and sound system',
      'VIP nightclub access and transport',
      'Hostess team and concierge service'
    ],
    icon: Users,
    buttonText: 'Party Like VIP'
  },
  {
    title: 'Spa Detox Recovery Day',
    description: 'Ultimate recovery experience with massage, body treatments, IV hydration, and wellness consultation.',
    price: 'From $380/person',
    features: [
      'Full body massage and treatments',
      'IV hydration therapy',
      'Luxury facial and body scrub',
      'Wellness and nutrition consultation',
      'Meditation and relaxation sessions'
    ],
    icon: Leaf,
    buttonText: 'Restore & Recover'
  }
];

const CuratedExperiences = () => {
  const scrollToExperiences = () => {
    const element = document.getElementById('curated-experiences');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppInquiry = () => {
    window.open('https://wa.me/1234567890?text=Hi! I want to book a curated experience in Santa Cruz!', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&h=800&fit=crop')`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in pt-20 md:pt-8">
            <Diamond className="w-8 h-8 text-white mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight">
              Diamond Santa Cruz
              <br />
              <span className="font-normal text-blue-200">Vibe Builder</span>
            </h1>
            
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Luxury escapes in Santa Cruz, Bolivia — tailored for private groups. From curated nightlife to wild nature, we handle the details. You just show up.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-base font-normal transition-colors duration-200"
                onClick={scrollToExperiences}
              >
                <Camera className="mr-2 h-4 w-4" />
                Explore Experiences
              </Button>
              
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-blue-200 text-blue-200 hover:bg-blue-200 hover:text-gray-900 px-6 py-3 text-base font-normal transition-colors duration-200"
                onClick={handleWhatsAppInquiry}
              >
                <Leaf className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>

            {/* Experience Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-white">
                <Users className="h-6 w-6 text-primary/80 mb-2 mx-auto" />
                <h3 className="text-base font-medium mb-1">Full-Service Stays</h3>
                <p className="text-sm opacity-90 font-light">High-end accommodations, airport pickup, local support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-white">
                <Coffee className="h-6 w-6 text-primary/80 mb-2 mx-auto" />
                <h3 className="text-base font-medium mb-1">Nightlife Access</h3>
                <p className="text-sm opacity-90 font-light">Private tables, top venues, local know-how</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-white">
                <MapPin className="h-6 w-6 text-primary/80 mb-2 mx-auto" />
                <h3 className="text-base font-medium mb-1">Private + Personalized</h3>
                <p className="text-sm opacity-90 font-light">Local team focused on experience quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section id="curated-experiences" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-3 tracking-tight">
              Curated <span className="text-primary">Experiences</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Hand-selected adventures designed to create extraordinary memories in Bolivia's most captivating destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curatedExperiences.map((experience, index) => (
              <ServiceCard
                key={index}
                title={experience.title}
                description={experience.description}
                price={experience.price}
                features={experience.features}
                icon={experience.icon}
                buttonText={experience.buttonText}
                onButtonClick={handleWhatsAppInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">
            Every Experience is <span className="text-primary">Fully Customizable</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Mix and match experiences, add luxury upgrades, or create entirely bespoke adventures. 
            From intimate couples' retreats to epic group celebrations - we tailor everything to your vision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 border border-gray-200 bg-gray-50">
              <Users className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-base font-medium text-gray-900 mb-2">Group Size Flexibility</h3>
              <p className="text-sm text-gray-600 font-light">From solo adventures to groups of 20+</p>
            </div>
            <div className="p-4 border border-gray-200 bg-gray-50">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-base font-medium text-gray-900 mb-2">Duration Options</h3>
              <p className="text-sm text-gray-600 font-light">Half-day escapes to week-long journeys</p>
            </div>
            <div className="p-4 border border-gray-200 bg-gray-50">
              <Star className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-base font-medium text-gray-900 mb-2">Luxury Upgrades</h3>
              <p className="text-sm text-gray-600 font-light">Private chefs, premium transport, VIP access</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h4 className="text-lg font-medium text-gray-900 mb-3">Popular Combinations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="text-left">
                <strong className="text-gray-900">Weekend VIP Package:</strong> Villa Party + Sandboarding + Spa Recovery
              </div>
              <div className="text-left">
                <strong className="text-gray-900">Culture & Adventure:</strong> Samaipata Wine + Jungle Waterfall + Amboró Trek
              </div>
              <div className="text-left">
                <strong className="text-gray-900">Bachelor/Bachelorette:</strong> Villa Party + Nightlife + Private Chef + Spa Day
              </div>
              <div className="text-left">
                <strong className="text-gray-900">Romantic Escape:</strong> Wine Culture + Waterfall Retreat + Couples Spa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h3 className="text-2xl font-light mb-3 tracking-tight">
            Ready for Your Next Adventure?
          </h3>
          <p className="text-base mb-6 opacity-90 font-light">
            Let us curate the perfect experience tailored to your interests and desires.
          </p>
          <div className="flex justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-primary border border-white font-normal px-8 py-3"
              >
                Design Your Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <BackToTop />
    </div>
  );
};

export default CuratedExperiences;
