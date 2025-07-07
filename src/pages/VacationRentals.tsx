
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Diamond, Car, Plane, MapPin, Calendar, Users, Wifi, Coffee, Shield, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VacationRentals = () => {
  const rentalProperties = [
    {
      id: 1,
      name: "Diamond Villa Santa Cruz",
      type: "Luxury Villa",
      guests: 8,
      bedrooms: 4,
      price: "$450",
      image: "/api/placeholder/600/400",
      features: ["Private Pool", "Garden View", "WiFi", "Kitchen"],
      location: "Las Palmas District"
    },
    {
      id: 2,
      name: "Executive Penthouse",
      type: "City Penthouse",
      guests: 6,
      bedrooms: 3,
      price: "$320",
      image: "/api/placeholder/600/400",
      features: ["City View", "Balcony", "WiFi", "Concierge"],
      location: "Centro District"
    },
    {
      id: 3,
      name: "Diamond Residence",
      type: "Modern House",
      guests: 10,
      bedrooms: 5,
      price: "$580",
      image: "/api/placeholder/600/400",
      features: ["Private Garden", "BBQ Area", "WiFi", "Parking"],
      location: "Equipetrol District"
    }
  ];

  const transportationOptions = [
    {
      type: "Airport Transfer",
      description: "Private luxury vehicles for seamless airport connections",
      icon: Plane,
      features: ["Professional drivers", "Meet & greet service", "Luggage assistance"]
    },
    {
      type: "City Transportation",
      description: "Discrete urban mobility with premium vehicles",
      icon: Car,
      features: ["On-demand availability", "Local expertise", "Comfortable rides"]
    },
    {
      type: "Intercity Travel",
      description: "Sophisticated travel between cities and destinations",
      icon: MapPin,
      features: ["Long-distance comfort", "Route planning", "Flexible scheduling"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Diamond className="w-12 h-12 text-gold-400 mx-auto mb-8" />
          <Badge className="mb-8 bg-gold-400/10 text-gold-400 border-gold-400/20 text-sm font-light px-6 py-2">
            Premium Accommodations
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight tracking-wide">
            Vacation Rentals
            <br />
            <span className="text-gold-400">& Transportation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Sophisticated accommodations paired with seamless transportation solutions for the discerning traveler.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Properties
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400/40 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onyx-800/40 to-midnight-800/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Premium Transportation
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Seamless mobility solutions that complement your accommodation experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportationOptions.map((option, index) => (
              <Card key={index} className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border-gold-400/20 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <option.icon className="h-8 w-8 text-gold-400 mx-auto mb-4" />
                  <CardTitle className="text-xl font-medium text-white tracking-wide">{option.type}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-300 font-light leading-relaxed mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 font-light">{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Carefully selected accommodations that meet our standards of excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties.map((property) => (
              <Card key={property.id} className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border-gold-400/20 backdrop-blur-sm overflow-hidden group">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold-600/90 text-white border-none">
                    {property.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-2 tracking-wide">{property.name}</h3>
                  <p className="text-gold-400 text-sm mb-4 font-light">{property.location}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {property.guests} guests
                    </span>
                    <span>{property.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-gold-400/30 text-gold-400">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-white">
                      {property.price}
                      <span className="text-sm text-gray-400 font-light">/night</span>
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-gold-600 hover:bg-gold-700 text-white rounded-none"
                      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                    >
                      Inquire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onyx-800/40 to-midnight-800/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
            Comprehensive Services
          </h2>
          <p className="text-lg text-gray-300 mb-12 font-light leading-relaxed">
            Every detail managed with precision, from arrival to departure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="text-white font-medium mb-2">Flexible Booking</h3>
              <p className="text-gray-400 text-sm font-light">Accommodating your schedule</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="text-white font-medium mb-2">Secure & Private</h3>
              <p className="text-gray-400 text-sm font-light">Discretion guaranteed</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="text-white font-medium mb-2">Premium Quality</h3>
              <p className="text-gray-400 text-sm font-light">Exceptional standards</p>
            </div>
            <div className="text-center">
              <Coffee className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="text-white font-medium mb-2">Concierge Service</h3>
              <p className="text-gray-400 text-sm font-light">24/7 assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold-600/20 to-gold-400/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Experience Diamond Hospitality
          </h2>
          <p className="text-xl mb-10 text-gray-300 font-light leading-relaxed">
            Reserve your sophisticated Santa Cruz accommodation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 font-medium rounded-none transition-all duration-300"
              >
                Book Now
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
            <h3 className="text-2xl font-light mb-6 text-gold-400">Diamond Santa Cruz</h3>
            <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Sophisticated Santa Cruz accommodations and transportation for the discerning traveler.
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
    </div>
  );
};

export default VacationRentals;
