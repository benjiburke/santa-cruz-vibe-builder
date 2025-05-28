
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
  Shield
} from 'lucide-react';

const WhyUs = () => {
  const keyFeatures = [
    {
      icon: CheckCircle,
      title: "We Handle the Details",
      description: "Let us deal with the logistics — you just show up. Airport pickups, stocked fridges, DJs, reservations — we plan it like a pro.",
      emoji: "✅"
    },
    {
      icon: MapPin,
      title: "Local Knowledge, Insider Access",
      description: "Our team is based in Santa Cruz. We know the spots you won't find on Google — villas, venues, vendors, and vibes.",
      emoji: "🌴"
    },
    {
      icon: Flame,
      title: "Packages and Custom Trips",
      description: "Choose a pre-built experience or build your own. Whether you're balling on a budget or going VIP, we've got you covered.",
      emoji: "🔥"
    },
    {
      icon: Smartphone,
      title: "One Contact, Total Control",
      description: "No chaos. No miscommunications. You get one point of contact through WhatsApp from booking to after-party cleanup.",
      emoji: "📲"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "We're with you from touchdown to takeoff. You party — we handle the rest.",
      emoji: "💬"
    }
  ];

  const testimonials = [
    {
      quote: "They made our trip effortless. DJ, chef, and party van — all waiting for us when we landed.",
      author: "Juan M.",
      location: "Miami",
      rating: 5
    },
    {
      quote: "Best trip ever! They knew exactly where to take us and handled everything. Pure VIP treatment from start to finish.",
      author: "Sarah K.",
      location: "Los Angeles",
      rating: 5
    },
    {
      quote: "Professional, fun, and stress-free. We just showed up and had the time of our lives. Highly recommend!",
      author: "Mike R.",
      location: "New York",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-jungle-50 to-coral-50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-coral-100 text-coral-800 text-sm font-semibold px-4 py-2">
            Why Choose Us?
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-jungle-800 mb-6 leading-tight">
            Why Travel With Us?<br />
            <span className="text-coral-600">Because We're Not Just a Booking</span><br />
            — We're the Experience.
          </h1>
          <p className="text-xl text-jungle-600 mb-8 max-w-2xl mx-auto">
            From wild nights to curated escapes, we handle it all — so you don't have to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button size="lg" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3">
                Start My Trip
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-jungle-300 text-jungle-700 hover:bg-jungle-50"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              💬 Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-800 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-jungle-600 max-w-2xl mx-auto">
              We're not just another travel company. We're your local connection to the best Santa Cruz has to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-jungle-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.emoji}</div>
                  <h3 className="text-xl font-bold text-jungle-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-jungle-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-jungle-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-coral-400 mb-2">500+</div>
              <div className="text-jungle-200">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coral-400 mb-2">100%</div>
              <div className="text-jungle-200">Stress-Free Trips</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-coral-400 mb-2">24/7</div>
              <div className="text-jungle-200">Local Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sunset-50 to-gold-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-jungle-800 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-jungle-600">
              Real experiences from real people who trusted us with their perfect trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-sunset-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-jungle-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-jungle-800">
                      {testimonial.author}
                    </div>
                    <div className="text-jungle-500">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-coral-500 to-sunset-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Turn Up or Wind Down?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your Santa Cruz adventure is just one click away. Let's make it unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-white text-coral-600 hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                Start My Trip
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 px-8 py-3"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              💬 WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jungle-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready for your private Bolivia?</h3>
            <p className="text-jungle-200 mb-6">
              Santa Cruz experiences crafted for the bold, the curious, and the unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                💬 WhatsApp
              </button>
              <Link to="/intake-form">
                <button className="bg-sunset-500 hover:bg-sunset-600 text-white px-6 py-3 rounded-full font-semibold">
                  📋 Plan My Trip
                </button>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-jungle-700 pt-8">
            <p className="text-jungle-300 text-sm">
              © 2024 Santa Cruz Travel Experience. Creating unforgettable moments in Bolivia.
            </p>
            <p className="text-jungle-400 text-xs mt-2">
              Not just tours. Not just stays. Your private Bolivia.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default WhyUs;
