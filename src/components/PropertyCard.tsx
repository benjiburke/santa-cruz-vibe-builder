
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Wifi } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  features: string[];
  image: string;
  onInquire?: () => void;
}

const PropertyCard = ({
  title,
  location,
  price,
  type,
  bedrooms,
  bathrooms,
  area,
  features,
  image,
  onInquire
}: PropertyCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border-gold-400/20 backdrop-blur-sm overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-onyx-700 to-midnight-700">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />
        <Badge className="absolute top-4 right-4 bg-gold-600/90 text-white">
          {type}
        </Badge>
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-medium text-white tracking-wide">{title}</CardTitle>
          <Badge className="bg-green-600/20 text-green-400 border-green-400/30">
            {price}
          </Badge>
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {(bedrooms || bathrooms || area) && (
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            {bedrooms && (
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                {bedrooms} bed
              </div>
            )}
            {bathrooms && (
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                {bathrooms} bath
              </div>
            )}
            {area && (
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                {area}
              </div>
            )}
          </div>
        )}
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gold-400 mb-3">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, idx) => (
              <Badge key={idx} variant="outline" className="border-gold-400/30 text-gold-400 text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
        
        <Button 
          className="w-full bg-gold-600 hover:bg-gold-700 text-white rounded-none"
          onClick={onInquire}
        >
          <Wifi className="w-4 h-4 mr-2" />
          Inquire Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
