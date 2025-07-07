
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon, MessageCircle, CheckCircle, Clock, Users } from 'lucide-react';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  price?: string;
  features: string[];
  icon: LucideIcon;
  detailedInfo?: {
    overview: string;
    process: string[];
    timeline: string;
    included: string[];
  };
}

const ServiceDetailModal = ({
  isOpen,
  onClose,
  title,
  description,
  price,
  features,
  icon: Icon,
  detailedInfo
}: ServiceDetailModalProps) => {
  const openWhatsApp = () => {
    const message = `Hi! I'm interested in your ${title} service. I'd like to discuss the details and get started.`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon className="h-8 w-8 text-gold-600" />
            {price && (
              <Badge className="bg-gold-50 text-gold-700 border-gold-200">
                {price}
              </Badge>
            )}
          </div>
          <DialogTitle className="text-2xl font-medium text-gray-900">{title}</DialogTitle>
          <p className="text-gray-600 mt-2">{description}</p>
        </DialogHeader>

        <div className="space-y-6">
          {detailedInfo && (
            <>
              {/* Service Overview */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                  <Users className="h-5 w-5 text-gold-600 mr-2" />
                  Service Overview
                </h3>
                <p className="text-gray-700 leading-relaxed">{detailedInfo.overview}</p>
              </div>

              {/* Process Steps */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-gold-600 mr-2" />
                  Our Process
                </h3>
                <div className="space-y-3">
                  {detailedInfo.process.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="w-6 h-6 bg-gold-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Clock className="h-4 w-4 text-gold-600 mr-2" />
                  Timeline
                </h4>
                <p className="text-gray-700">{detailedInfo.timeline}</p>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {detailedInfo.included.map((item, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Key Features (fallback if no detailed info) */}
          {!detailedInfo && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Key Features</h3>
              <div className="space-y-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
          <Button 
            onClick={openWhatsApp}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Discuss via WhatsApp
          </Button>
          <Button 
            variant="outline" 
            onClick={onClose}
            className="flex-1"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
