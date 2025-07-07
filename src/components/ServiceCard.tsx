
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
    <Card className={`bg-white/95 backdrop-blur-sm border border-gray-200/60 hover:shadow-sm transition-all duration-200 ${className}`}>
      <CardHeader className="text-center pb-3">
        {price && (
          <Badge className="bg-gray-50 text-gray-700 border-gray-200 mb-3 w-fit mx-auto text-xs font-normal">
            {price}
          </Badge>
        )}
        <Icon className="h-6 w-6 text-gray-700 mx-auto mb-3" />
        <CardTitle className="text-base font-medium text-gray-900 leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm font-light leading-relaxed mb-4 text-center">{description}</p>
        <ul className="space-y-2 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="text-xs text-gray-500 font-light flex items-center">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-normal border-0"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
