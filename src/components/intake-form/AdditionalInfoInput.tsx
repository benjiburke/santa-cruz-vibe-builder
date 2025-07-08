import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface AdditionalInfoInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const AdditionalInfoInput = ({ value, onChange }: AdditionalInfoInputProps) => {
  return (
    <div className="space-y-3">
      <Label htmlFor="additionalInfo" className="text-lg font-semibold text-jungle-800">
        Tell us more about your vision
      </Label>
      <Textarea
        id="additionalInfo"
        placeholder="Any special requests, themes, or ideas you have in mind? The more details, the better we can customize your experience!"
        rows={4}
        maxLength={2000}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <p className="text-xs text-gray-500 mt-1">
        {value.length}/2000 characters
      </p>
    </div>
  );
};