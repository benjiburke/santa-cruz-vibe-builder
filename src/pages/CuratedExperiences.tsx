
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Star, Users, MapPin, Calendar, Camera, Leaf, Coffee, Compass, Mountain, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const curatedExperiences = [
  {
    title: 'Coffee Heritage Experience',
    description: 'Immerse yourself in Bolivia\'s rich coffee culture with expert-guided plantation tours and professional tasting sessions.',
    price: 'From $280/person',
    features: [
      'Private plantation tours with local farmers',
      'Professional cupping and tasting sessions',
      'Traditional brewing workshops',
      'Artisan roastery visits',
      'Coffee bean selection and packaging'
    ],
    icon: Coffee,
    buttonText: 'Reserve Experience'
  },
  {
    title: 'Amazon Rainforest Expedition',
    description: 'Venture deep into the pristine Amazon rainforest for an authentic eco-adventure with indigenous communities.',
    price: 'From $750/person',
    features: [
      'Expert naturalist guides',
      'Wildlife photography opportunities',
      'Traditional canoe expeditions',
      'Indigenous community interactions',
      'Sustainable eco-lodge accommodation'
    ],
    icon: TreePine,
    buttonText: 'Book Adventure'
  },
  {
    title: 'Photography Masterclass',
    description: 'Capture Santa Cruz\'s stunning landscapes and vibrant culture with professional photography instruction.',
    price: 'From $420/person',
    features: [
      'Professional photography instruction',
      'Exclusive location access',
      'Post-processing workshops',
      'Equipment rental included',
      'Portfolio development session'
    ],
    icon: Camera,
    buttonText: 'Start Creating'
  },
  {
    title: 'Samaipata Cultural Journey',
    description: 'Explore the mystical pre-Columbian ruins and immerse yourself in local Andean traditions.',
    price: 'From $320/person',
    features: [
      'Archaeological site guided tours',
      'Traditional craft workshops',
      'Local artisan meetings',
      'Authentic cuisine experiences',
      'Mountain hiking expeditions'
    ],
    icon: Mountain,
    buttonText: 'Discover History'
  },
  {
    title: 'Wellness & Spa Retreat',
    description: 'Rejuvenate your body and mind with holistic wellness treatments in serene natural settings.',
    price: 'From $480/person',
    features: [
      'Luxury spa treatments',
      'Meditation and yoga sessions',
      'Natural hot spring access',
      'Nutritional wellness consultations',
      'Mindfulness workshops'
    ],
    icon: Leaf,
    buttonText: 'Book Retreat'
  },
  {
    title: 'Adventure Sports Package',
    description: 'Experience the thrill of Santa Cruz\'s diverse landscapes through exciting adventure activities.',
    price: 'From $380/person',
    features: [
      'Rappelling and rock climbing',
      'White water rafting',
      'Zip-lining adventures',
      'ATV mountain tours',
      'Professional safety instruction'
    ],
    icon: Compass,
    buttonText: 'Get Adventurous'
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
    <div className="min-h-screen bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-gradient-to-br from-onyx-800 via-midnight-700 to-onyx-900 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&h=800&fit=crop')`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-6xl mb-6">✨</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Curated Experiences
              <br />
              <span className="text-gold-400">Unforgettable Adventures</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
              Discover Bolivia's hidden treasures through expertly crafted experiences that showcase the authentic beauty of Santa Cruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gold-500 hover:bg-gold-600 text-onyx-800 px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl font-semibold"
                onClick={scrollToExperiences}
              >
                <Camera className="mr-2 h-5 w-5" />
                Explore Experiences
              </Button>
              
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-onyx-800 px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl font-semibold"
                onClick={handleWhatsAppInquiry}
              >
                <Leaf className="mr-2 h-5 w-5" />
                Plan My Adventure
              </Button>
            </div>

            {/* Experience Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-gold-400/20">
                <Camera className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Expert Guides</h3>
                <p className="text-sm opacity-90">Local specialists with deep cultural knowledge</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-gold-400/20">
                <Coffee className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Authentic Experiences</h3>
                <p className="text-sm opacity-90">Genuine cultural immersion and local traditions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-gold-400/20">
                <MapPin className="h-8 w-8 text-gold-400 mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Exclusive Access</h3>
                <p className="text-sm opacity-90">Private locations and experiences unavailable elsewhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section id="curated-experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Curated <span className="text-gold-400">Experiences</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hand-selected adventures designed to create extraordinary memories in Bolivia's most captivating destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold-600 to-gold-500">
        <div className="max-w-4xl mx-auto text-center text-onyx-800">
          <h3 className="text-3xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Let us curate the perfect experience tailored to your interests and desires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-onyx-800 hover:bg-onyx-900 text-white border-2 border-onyx-800 hover:border-onyx-900 font-semibold"
              >
                Plan My Experience
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-onyx-800 text-onyx-800 hover:bg-onyx-800 hover:text-white font-semibold"
              onClick={handleWhatsAppInquiry}
            >
              WhatsApp Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuratedExperiences;
