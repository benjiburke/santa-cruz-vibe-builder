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
    { value: 'airportTransfer', label: t('form.airportTransfer') },
    { value: 'carRental', label: t('form.carRental') },
    { value: 'tourGuide', label: t('form.tourGuide') },
    { value: 'photographer', label: t('form.photographer2') },
    { value: 'translator', label: t('form.translator') },
    { value: 'emergencySupport', label: t('form.emergencySupport') }
  ];
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold text-jungle-800">
        {t('form.additionalServices')}
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