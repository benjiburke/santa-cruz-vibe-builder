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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Diamond className="w-8 h-8 text-gray-700 mx-auto mb-6" />
          <Badge className="mb-6 bg-gray-50 text-gray-700 border-gray-200 text-xs font-normal px-4 py-1">
            Diamond Standard
          </Badge>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
            Why Choose
            <br />
            <span className="text-gray-700">Diamond Santa Cruz</span>
          </h1>
          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Sophisticated experiences crafted for those who appreciate exceptional quality and discrete luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/intake-form">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 font-normal text-sm">
                Begin Experience
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-2 font-normal text-sm"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              The Diamond Difference
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto font-light">
              Exceptional service built on expertise, discretion, and unwavering attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-sm transition-all duration-200">
                <CardContent className="p-6 text-center">
                  <div className="text-xl text-gray-700 mb-4">{feature.symbol}</div>
                  <h3 className="text-base font-medium text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-light text-sm">Curated Experiences</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-light text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-light text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 font-light text-sm">Professional Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Client Experiences
            </h2>
            <p className="text-base text-gray-600 font-light">
              Exceptional service recognized by discerning clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-gray-700 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic font-light leading-relaxed text-sm">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-xs">
                    <div className="font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500 font-light">
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
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-light mb-6">
            Experience Diamond Santa Cruz
          </h2>
          <p className="text-base mb-8 text-gray-300 font-light leading-relaxed">
            Sophisticated experiences await. Let us craft something exceptional for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 font-normal text-sm"
              >
                Begin Your Experience
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white px-6 py-2 font-normal text-sm"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default WhyUs;
