
import Navigation from '@/components/Navigation';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  MapPin, 
  Flame, 
  Smartphone, 
  MessageCircle,
  Star,
  ArrowRight,
  Users,
  Calendar,
  Shield,
  Diamond
} from 'lucide-react';

const WhyUs = () => {
  const keyFeatures = [
    {
      icon: CheckCircle,
      title: "Curated Excellence",
      description: "Every detail meticulously planned and executed. From private transfers to exclusive reservations, we handle the sophistication so you can focus on the experience.",
      symbol: "◊"
    },
    {
      icon: MapPin,
      title: "Local Mastery",
      description: "Deep Santa Cruz connections and insider access to venues, experiences, and opportunities that remain invisible to conventional tourism.",
      symbol: "◆"
    },
    {
      icon: Shield,
      title: "Bespoke Service",
      description: "Tailored experiences designed around your preferences. Whether intimate gatherings or exclusive events, each moment is crafted specifically for you.",
      symbol: "♦"
    },
    {
      icon: Smartphone,
      title: "Seamless Coordination",
      description: "Direct access through a single point of contact. Professional communication, discrete service, and immediate response when you need us.",
      symbol: "◇"
    },
    {
      icon: MessageCircle,
      title: "Continuous Support",
      description: "From arrival to departure, our team ensures every aspect of your experience exceeds expectations with professional, attentive service.",
      symbol: "⬧"
    }
  ];

  const testimonials = [
    {
      quote: "Exceptional service from start to finish. Everything was arranged perfectly, allowing us to simply enjoy an extraordinary experience.",
      author: "M. Rodriguez",
      location: "Miami",
      rating: 5
    },
    {
      quote: "The level of sophistication and attention to detail was remarkable. They understood exactly what we were looking for.",
      author: "K. Thompson",
      location: "Los Angeles", 
      rating: 5
    },
    {
      quote: "Professional, discrete, and impeccable execution. This is how luxury travel should be handled.",
      author: "R. Chen",
      location: "New York",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Diamond className="w-12 h-12 text-gold-400 mx-auto mb-8" />
          <Badge className="mb-8 bg-gold-400/10 text-gold-400 border-gold-400/20 text-sm font-light px-6 py-2">
            Diamond Standard
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight tracking-wide">
            Why Choose
            <br />
            <span className="text-gold-400">Diamond Santa Cruz</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Sophisticated experiences crafted for those who appreciate exceptional quality and discrete luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/intake-form">
              <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 font-medium rounded-none transition-all duration-300">
                Begin Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400/40 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              The Diamond Difference
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Exceptional service built on expertise, discretion, and unwavering attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border-gold-400/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl text-gold-400 mb-6">{feature.symbol}</div>
                  <h3 className="text-xl font-medium text-white mb-4 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onyx-800/80 to-midnight-800/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-light text-gold-400 mb-3">500+</div>
              <div className="text-gray-300 font-light tracking-wide">Curated Experiences</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gold-400 mb-3">100%</div>
              <div className="text-gray-300 font-light tracking-wide">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-light text-gold-400 mb-3">24/7</div>
              <div className="text-gray-300 font-light tracking-wide">Professional Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Client Experiences
            </h2>
            <p className="text-lg text-gray-400 font-light">
              Exceptional service recognized by discerning clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-onyx-800/40 to-midnight-800/40 border-gold-400/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic font-light leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-medium text-white tracking-wide">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400 font-light">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold-600/20 to-gold-400/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Experience Diamond Santa Cruz
          </h2>
          <p className="text-xl mb-10 text-gray-300 font-light leading-relaxed">
            Sophisticated experiences await. Let us craft something exceptional for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 font-medium rounded-none transition-all duration-300"
              >
                Begin Your Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400/50 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-onyx-900/80 backdrop-blur-sm text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gold-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <Diamond className="w-8 h-8 text-gold-400 mx-auto mb-6" />
            <h3 className="text-2xl font-light mb-6">Diamond Santa Cruz</h3>
            <p className="text-gray-400 mb-8 font-light leading-relaxed">
              Sophisticated Santa Cruz experiences crafted for the discerning traveler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-medium rounded-none transition-all duration-300"
              >
                WhatsApp
              </button>
              <Link to="/intake-form">
                <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 font-medium rounded-none transition-all duration-300">
                  Plan Experience
                </button>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gold-400/20 pt-12">
            <p className="text-gray-400 text-sm font-light">
              © 2024 Diamond Santa Cruz. Exceptional experiences in Bolivia.
            </p>
            <p className="text-gray-500 text-xs mt-2 font-light">
              Sophisticated. Discrete. Unforgettable.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default WhyUs;
