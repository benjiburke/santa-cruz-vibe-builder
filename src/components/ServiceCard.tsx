
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { LucideIcon, Info, MessageCircle, ChevronRight } from 'lucide-react';
import ServiceDetailModal from './ServiceDetailModal';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  features: string[];
  icon: LucideIcon;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  detailedInfo?: {
    overview: string;
    process: string[];
    timeline: string;
    included: string[];
  };
}

const ServiceCard = ({ 
  title, 
  description, 
  price, 
  features, 
  icon: Icon, 
  buttonText = "Learn More",
  onButtonClick,
  className = "",
  detailedInfo
}: ServiceCardProps) => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const openWhatsApp = () => {
    const message = `Hi! I'm interested in learning more about your ${title} service. Can you provide more details?`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleMainButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      setShowDetailModal(true);
    }
  };

  return (
    <>
      <Card className={`bg-white/95 backdrop-blur-sm border border-gray-200/60 hover:shadow-lg transition-all duration-300 ${className}`}>
        <CardHeader className="text-center pb-3">
          {price && (
            <Badge className="bg-gray-50 text-gray-700 border-gray-200 mb-3 w-fit mx-auto text-xs font-normal">
              {price}
            </Badge>
          )}
          <div className="flex items-center justify-center gap-2 mb-3">
            <Icon className="h-6 w-6 text-gray-700" />
            {detailedInfo && (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <Info className="h-4 w-4" />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4 bg-white border border-gray-200 shadow-lg">
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Quick Overview</h4>
                    <p className="text-sm text-gray-600">{detailedInfo.overview}</p>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">Timeline: {detailedInfo.timeline}</span>
                      <button 
                        onClick={() => setShowDetailModal(true)}
                        className="text-xs text-gold-600 hover:text-gold-700 font-medium"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )}
          </div>
          <CardTitle className="text-base font-medium text-gray-900 leading-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-600 text-sm font-light leading-relaxed mb-4 text-center">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-700 mb-2">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="text-xs text-gray-500 font-light flex items-center">
                  <ChevronRight className="w-3 h-3 text-gray-400 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-2">
            <Button 
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-sm font-normal border-0"
              onClick={handleMainButtonClick}
            >
              {buttonText}
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-green-500 text-green-600 hover:bg-green-50 p-2"
              onClick={openWhatsApp}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <ServiceDetailModal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title={title}
        description={description}
        price={price}
        features={features}
        icon={Icon}
        detailedInfo={detailedInfo}
      />
    </>
  );
};

export default ServiceCard;
