import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useTranslation } from '@/hooks/useTranslation';

interface TripTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const TripTypeSelector = ({ value, onChange }: TripTypeSelectorProps) => {
  const { t } = useTranslation();
  
  const tripTypes = [
    { value: 'party', label: `${t('form.party')} 🎉` },
    { value: 'romantic', label: `${t('form.romantic')} 💕` },
    { value: 'business', label: `${t('form.business')} 💼` },
    { value: 'cultural', label: `${t('form.cultural')} 🏛️` },
    { value: 'wellness', label: `${t('form.wellness')} 🧘` },
    { value: 'custom', label: `${t('form.custom')} ✨` }
  ];
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold text-primary">
        {t('form.tripType')} *
      </Label>
      <RadioGroup 
        value={value} 
        onValueChange={onChange}
        className="flex flex-wrap gap-4"
      >
        {tripTypes.map((type) => (
          <div key={type.value} className="flex items-center space-x-2">
            <RadioGroupItem value={type.value} id={type.value} />
            <Label htmlFor={type.value} className="cursor-pointer">
              {type.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};