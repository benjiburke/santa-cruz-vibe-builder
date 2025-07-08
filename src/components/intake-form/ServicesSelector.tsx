import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface ServicesSelectorProps {
  selectedServices: string[];
  onServiceChange: (service: string, checked: boolean) => void;
}

const services = [
  'DJ', 'Chef', 'Spa', 'Massage', 'Club Night', 
  'Pool Setup', 'Photography', 'Adventure Trips', 
  'Airport Pickup', 'Flight Help', 'Security', 
  'Transportation', 'Tour Guide', 'Equipment Rental'
];

export const ServicesSelector = ({ selectedServices, onServiceChange }: ServicesSelectorProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold text-jungle-800">
        Interested services (select all that apply)
      </Label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {services.map((service) => (
          <div key={service} className="flex items-center space-x-2">
            <Checkbox 
              id={service}
              checked={selectedServices.includes(service)}
              onCheckedChange={(checked) => onServiceChange(service, !!checked)}
            />
            <Label htmlFor={service} className="text-sm cursor-pointer">
              {service}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};