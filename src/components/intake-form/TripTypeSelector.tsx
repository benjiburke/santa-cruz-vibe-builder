import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface TripTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const tripTypes = [
  { value: 'party', label: 'Party 🎉' },
  { value: 'chill', label: 'Chill 🌴' },
  { value: 'explore', label: 'Explore 🌄' },
  { value: 'vip', label: 'VIP 💎' },
  { value: 'other', label: 'Other' }
];

export const TripTypeSelector = ({ value, onChange }: TripTypeSelectorProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold text-jungle-800">
        What kind of trip is this? *
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