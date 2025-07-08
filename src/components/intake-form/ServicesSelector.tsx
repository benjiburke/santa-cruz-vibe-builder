import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslation } from '@/hooks/useTranslation';

interface ServicesSelectorProps {
  selectedServices: string[];
  onServiceChange: (service: string, checked: boolean) => void;
}

export const ServicesSelector = ({ selectedServices, onServiceChange }: ServicesSelectorProps) => {
  const { t } = useTranslation();
  
  const services = [
    { value: 'airportTransfer', label: 'Traslado al aeropuerto' },
    { value: 'carRental', label: 'Alquiler de auto' },
    { value: 'tourGuide', label: 'Guía turístico personal' },
    { value: 'photographer', label: 'Fotógrafo profesional' },
    { value: 'translator', label: 'Traductor' },
    { value: 'emergencySupport', label: 'Soporte de emergencia 24/7' }
  ];
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold text-primary">
        Servicios Adicionales (Opcional)
      </Label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {services.map((service) => (
          <div key={service.value} className="flex items-center space-x-2">
            <Checkbox 
              id={service.value}
              checked={selectedServices.includes(service.value)}
              onCheckedChange={(checked) => onServiceChange(service.value, !!checked)}
            />
            <Label htmlFor={service.value} className="text-sm cursor-pointer">
              {service.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};