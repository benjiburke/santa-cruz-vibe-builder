import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useTranslation } from '@/hooks/useTranslation';

interface PackageTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const PackageTypeSelector = ({ value, onChange }: PackageTypeSelectorProps) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold text-primary">
        Preferencia de Tipo de Paquete *
      </Label>
      <RadioGroup 
        value={value} 
        onValueChange={onChange}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="essential" id="essential" />
          <Label htmlFor="essential">Esencial (Económico)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="premium" id="premium" />
          <Label htmlFor="premium">Premium (Mejorado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="luxury" id="luxury" />
          <Label htmlFor="luxury">Lujo (Sofisticado)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vip" id="vip" />
          <Label htmlFor="vip">VIP Exclusivo</Label>
        </div>
      </RadioGroup>
    </div>
  );
};