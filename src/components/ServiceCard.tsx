
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  features: string[];
  icon: LucideIcon;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  price, 
  features, 
  icon: Icon, 
  buttonText = "Learn More",
  onButtonClick,
  className = ""
}: ServiceCardProps) => {
  return (
    <Card className={`bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border-gold-400/20 backdrop-blur-sm ${className}`}>
      <CardHeader className="text-center pb-4">
        {price && (
          <Badge className="bg-gold-600/20 text-gold-400 border-gold-400/30 mb-4 w-fit mx-auto">
            {price}
          </Badge>
        )}
        <Icon className="h-10 w-10 text-gold-400 mx-auto mb-4" />
        <CardTitle className="text-lg font-medium text-white tracking-wide leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-300 font-light leading-relaxed mb-6 text-center">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-400 font-light flex items-center">
              <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          className="w-full bg-gold-600 hover:bg-gold-700 text-white rounded-none"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
