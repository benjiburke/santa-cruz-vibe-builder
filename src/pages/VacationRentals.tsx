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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Diamond className="w-8 h-8 text-gray-700 mx-auto mb-6" />
          <Badge className="mb-6 bg-gray-50 text-gray-700 border-gray-200 text-xs font-normal px-4 py-1">
            Premium Accommodations
          </Badge>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
            Vacation Rentals
            <br />
            <span className="text-gray-700">& Transportation</span>
          </h1>
          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Sophisticated accommodations paired with seamless transportation solutions for the discerning traveler.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 font-normal text-sm"
              onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Properties
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-2 font-normal text-sm"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Premium Transportation
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
              Seamless mobility solutions that complement your accommodation experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportationOptions.map((option, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardHeader className="text-center pb-3">
                  <option.icon className="h-6 w-6 text-gray-700 mx-auto mb-3" />
                  <CardTitle className="text-base font-medium text-gray-900">{option.type}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 font-light leading-relaxed mb-3 text-sm">{option.description}</p>
                  <ul className="space-y-1">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-500 font-light">{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-base text-gray-600 font-light leading-relaxed">
              Carefully selected accommodations that meet our standards of excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalProperties.map((property) => (
              <Card key={property.id} className="bg-white border border-gray-200 overflow-hidden group">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 border-none text-xs font-normal">
                    {property.type}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-base font-medium text-gray-900 mb-1">{property.name}</h3>
                  <p className="text-gray-600 text-xs mb-3 font-light">{property.location}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {property.guests} guests
                    </span>
                    <span>{property.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {property.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-gray-200 text-gray-600 font-normal">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-light text-gray-900">
                      {property.price}
                      <span className="text-xs text-gray-500 font-light">/night</span>
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-normal"
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Comprehensive Services
          </h2>
          <p className="text-base text-gray-700 mb-8 font-light leading-relaxed">
            Every detail managed with precision, from arrival to departure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Calendar className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <h3 className="text-gray-900 font-medium mb-1 text-sm">Flexible Booking</h3>
              <p className="text-gray-600 text-xs font-light">Accommodating your schedule</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <h3 className="text-gray-900 font-medium mb-1 text-sm">Secure & Private</h3>
              <p className="text-gray-600 text-xs font-light">Discretion guaranteed</p>
            </div>
            <div className="text-center">
              <Star className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <h3 className="text-gray-900 font-medium mb-1 text-sm">Premium Quality</h3>
              <p className="text-gray-600 text-xs font-light">Exceptional standards</p>
            </div>
            <div className="text-center">
              <Coffee className="w-6 h-6 text-gray-700 mx-auto mb-3" />
              <h3 className="text-gray-900 font-medium mb-1 text-sm">Concierge Service</h3>
              <p className="text-gray-600 text-xs font-light">24/7 assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-light mb-6">
            Experience Diamond Hospitality
          </h2>
          <p className="text-base mb-8 text-gray-300 font-light leading-relaxed">
            Reserve your sophisticated Santa Cruz accommodation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 font-normal text-sm"
              >
                Book Now
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
    </div>
  );
};

export default VacationRentals;
