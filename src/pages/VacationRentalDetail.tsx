import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Star, Users, MapPin, Calendar, Check, X, ArrowLeft, DollarSign, Wifi, Coffee, Shield, Car, Plane, Diamond } from 'lucide-react';

// Import generated images
import privateGarden1 from '@/assets/private-garden-1.jpg';
import privateGarden2 from '@/assets/private-garden-2.jpg';
import bbqArea1 from '@/assets/bbq-area-1.jpg';
import bbqArea2 from '@/assets/bbq-area-2.jpg';
import parking1 from '@/assets/parking-1.jpg';
import gameRoom1 from '@/assets/game-room-1.jpg';
import gameRoom2 from '@/assets/game-room-2.jpg';
import officeSpace1 from '@/assets/office-space-1.jpg';
import privatePool1 from '@/assets/private-pool-1.jpg';
import privatePool2 from '@/assets/private-pool-2.jpg';

const rentalData = {
  '1': {
    id: '1',
    name: "Diamond Villa Santa Cruz",
    type: "Luxury Villa", 
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: 450,
    image: "/api/placeholder/600/400",
    features: ["Private Pool", "Garden View", "WiFi", "Kitchen", "Air Conditioning", "Security", "Parking", "Housekeeping"],
    location: "Las Palmas District",
    description: "Experience luxury living in this stunning villa featuring a private pool, lush garden views, and premium amenities. Perfect for families or groups seeking comfort and elegance.",
    amenities: [
      { name: "Private Pool", icon: "🏊‍♂️", available: true, images: [privatePool1, privatePool2] },
      { name: "WiFi", icon: "📶", available: true, images: [] },
      { name: "Kitchen", icon: "🍳", available: true, images: ["/api/placeholder/400/300", "/api/placeholder/400/300"] },
      { name: "Air Conditioning", icon: "❄️", available: true, images: [] },
      { name: "Security", icon: "🔒", available: true, images: [] },
      { name: "Parking", icon: "🚗", available: true, images: [parking1] },
      { name: "Housekeeping", icon: "🧹", available: true, images: [] },
      { name: "Garden View", icon: "🌳", available: true, images: [privateGarden1, privateGarden2] }
    ],
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
  },
  '2': {
    id: '2',
    name: "Executive Penthouse",
    type: "City Penthouse",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 320,
    image: "/api/placeholder/600/400",
    features: ["City View", "Balcony", "WiFi", "Concierge", "Gym Access", "Rooftop Terrace"],
    location: "Centro District",
    description: "Sophisticated penthouse in the heart of Santa Cruz with stunning city views and premium concierge services. Ideal for business travelers and urban explorers.",
    amenities: [
      { name: "City View", icon: "🏙️", available: true, images: ["/api/placeholder/400/300", "/api/placeholder/400/300"] },
      { name: "Balcony", icon: "🏠", available: true, images: ["/api/placeholder/400/300"] },
      { name: "WiFi", icon: "📶", available: true, images: ["/api/placeholder/400/300"] },
      { name: "Concierge", icon: "🛎️", available: true, images: ["/api/placeholder/400/300"] },
      { name: "Gym Access", icon: "💪", available: true, images: ["/api/placeholder/400/300", "/api/placeholder/400/300"] },
      { name: "Rooftop Terrace", icon: "🏢", available: true, images: ["/api/placeholder/400/300", "/api/placeholder/400/300"] }
    ],
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
  },
  '3': {
    id: '3',
    name: "Diamond Residence",
    type: "Modern House",
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    price: 580,
    image: "/api/placeholder/600/400",
    features: ["Private Garden", "BBQ Area", "WiFi", "Parking", "Game Room", "Office Space"],
    location: "Equipetrol District",
    description: "Spacious modern residence perfect for large groups with extensive outdoor areas and entertainment facilities. Premium location in exclusive neighborhood.",
    amenities: [
      { name: "Private Garden", icon: "🌳", available: true, images: [privateGarden1, privateGarden2] },
      { name: "BBQ Area", icon: "🔥", available: true, images: [bbqArea1, bbqArea2] },
      { name: "WiFi", icon: "📶", available: true, images: [] },
      { name: "Parking", icon: "🚗", available: true, images: [parking1] },
      { name: "Game Room", icon: "🎮", available: true, images: [gameRoom1, gameRoom2] },
      { name: "Office Space", icon: "💼", available: true, images: [officeSpace1] }
    ],
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"]
  }
};

const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110,
  CNY: 6.45
};

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CNY: '¥'
};

const currencyNames = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  CNY: 'Chinese Yuan'
};

const VacationRentalDetail = () => {
  const { rentalId } = useParams();
  const navigate = useNavigate();
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY'>('USD');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const rental = rentalData[rentalId as keyof typeof rentalData];

  const convertPrice = (price: number) => {
    const convertedPrice = Math.round(price * exchangeRates[currency]);
    return `${currencySymbols[currency]}${convertedPrice}`;
  };

  const handleGoBack = () => {
    navigate('/vacation-rentals');
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${rental?.name}. Can you provide more details about availability and booking?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  if (!rental) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-xl font-light text-gray-900 mb-4">Property Not Found</h1>
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-normal"
              onClick={handleGoBack}
            >
              <ArrowLeft className="mr-2 h-3 w-3" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header with Back Button and Currency Selector */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <Button 
              className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 hover:text-gray-900 shadow-sm"
              size="sm"
              onClick={handleGoBack}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-gray-600" />
                <Select value={currency} onValueChange={(value: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY') => setCurrency(value)}>
                  <SelectTrigger className="w-32 h-8 text-xs border-0 shadow-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(currencyNames).map(([code, name]) => (
                      <SelectItem key={code} value={code} className="text-xs">
                        {code} - {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-gray-600 text-sm">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/vacation-rentals" className="text-gray-600 text-sm">Vacation Rentals</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage className="text-gray-900 text-sm">{rental.name}</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border border-gray-200">
            <div className="relative">
              <img
                src={rental.images[currentImageIndex]}
                alt={rental.name}
                className="w-full h-96 object-cover"
              />
              
              {rental.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-2">
                    {rental.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 text-sm font-normal">
                {rental.type}
              </Badge>
            </div>

            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-light text-gray-900 mb-1">{rental.name}</h1>
                  <p className="text-gray-600 text-sm mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {rental.location}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {rental.guests} guests
                    </span>
                    <span>{rental.bedrooms} bedrooms</span>
                    <span>{rental.bathrooms} bathrooms</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-light text-gray-900">
                    {convertPrice(rental.price)}
                    <span className="text-sm text-gray-500">/night</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{rental.description}</p>

              {/* Visual Amenities with Photo Galleries */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Spaces & Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {rental.amenities
                    .filter(amenity => !['WiFi', 'Air Conditioning', 'Security', 'Housekeeping'].includes(amenity.name) && amenity.images.length > 0)
                    .map((amenity, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200">
                          <span className="text-xl">{amenity.icon}</span>
                          <div>
                            <span className="text-sm font-medium text-gray-900">{amenity.name}</span>
                            <p className="text-xs text-gray-500">View photos</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2 text-lg">
                            <span className="text-xl">{amenity.icon}</span>
                            {amenity.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {amenity.images?.map((image, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={image}
                              alt={`${amenity.name} ${imgIndex + 1}`}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>

              {/* Basic Services */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Included Services</h3>
                <div className="flex flex-wrap gap-2">
                  {rental.amenities
                    .filter(amenity => ['WiFi', 'Air Conditioning', 'Security', 'Housekeeping'].includes(amenity.name) || amenity.images.length === 0)
                    .map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 px-3 py-1">
                      <span className="mr-1">{amenity.icon}</span>
                      {amenity.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                  onClick={handleWhatsAppInquiry}
                >
                  Book Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={handleWhatsAppInquiry}
                >
                  Ask Questions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-light text-gray-900 mb-4">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <Car className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <h4 className="text-sm font-medium text-gray-900 mb-1">Airport Transfer</h4>
              <p className="text-xs text-gray-600">Private transportation included</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <Coffee className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <h4 className="text-sm font-medium text-gray-900 mb-1">Concierge Service</h4>
              <p className="text-xs text-gray-600">24/7 assistance available</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <Shield className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <h4 className="text-sm font-medium text-gray-900 mb-1">Travel Insurance</h4>
              <p className="text-xs text-gray-600">Comprehensive coverage options</p>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default VacationRentalDetail;