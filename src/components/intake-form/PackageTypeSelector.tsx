import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface PackageTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const PackageTypeSelector = ({ value, onChange }: PackageTypeSelectorProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold text-jungle-800">
        Package preference *
      </Label>
      <RadioGroup 
        value={value} 
        onValueChange={onChange}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pre-built" id="pre-built" />
          <Label htmlFor="pre-built">Choose from pre-built packages</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="custom" id="custom" />
          <Label htmlFor="custom">Fully custom experience</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="hybrid" id="hybrid" />
          <Label htmlFor="hybrid">Mix of both</Label>
        </div>
      </RadioGroup>
    </div>
  );
};