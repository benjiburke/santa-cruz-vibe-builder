
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Star, Users, MapPin, Calendar, Camera, Leaf, Coffee, Compass, Mountain, TreePine, Diamond } from 'lucide-react';
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
          <div className="animate-fade-in pt-16 md:pt-8">
            <Diamond className="w-8 h-8 text-white mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight">
              Curated Experiences
              <br />
              <span className="font-normal text-primary/80">Unforgettable Adventures</span>
            </h1>
            
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Discover Bolivia's hidden treasures through expertly crafted experiences that showcase the authentic beauty of Santa Cruz.
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
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 text-base font-normal transition-colors duration-200"
                onClick={handleWhatsAppInquiry}
              >
                <Leaf className="mr-2 h-4 w-4" />
                Plan My Adventure
              </Button>
            </div>

            {/* Experience Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-white">
                <Camera className="h-6 w-6 text-primary/80 mb-2 mx-auto" />
                <h3 className="text-base font-medium mb-1">Expert Guides</h3>
                <p className="text-sm opacity-90 font-light">Local specialists with deep cultural knowledge</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-white">
                <Coffee className="h-6 w-6 text-primary/80 mb-2 mx-auto" />
                <h3 className="text-base font-medium mb-1">Authentic Experiences</h3>
                <p className="text-sm opacity-90 font-light">Genuine cultural immersion and local traditions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-white">
                <MapPin className="h-6 w-6 text-primary/80 mb-2 mx-auto" />
                <h3 className="text-base font-medium mb-1">Exclusive Access</h3>
                <p className="text-sm opacity-90 font-light">Private locations and experiences unavailable elsewhere</p>
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

      {/* CTA Section */}
      <section className="py-12 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h3 className="text-2xl font-light mb-3 tracking-tight">
            Ready for Your Next Adventure?
          </h3>
          <p className="text-base mb-6 opacity-90 font-light">
            Let us curate the perfect experience tailored to your interests and desires.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-primary-foreground hover:bg-secondary text-primary border border-primary-foreground font-normal"
              >
                Plan My Experience
              </Button>
            </Link>
            <Button 
              size="lg" 
              className="bg-transparent border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-normal transition-colors duration-200"
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
