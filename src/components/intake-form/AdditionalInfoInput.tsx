import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from '@/hooks/useTranslation';

interface AdditionalInfoInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const AdditionalInfoInput = ({ value, onChange }: AdditionalInfoInputProps) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <Label htmlFor="additionalInfo" className="text-lg font-semibold text-jungle-800">
        {t('form.additionalInfo')}
      </Label>
      <Textarea
        id="additionalInfo"
        placeholder={t('form.additionalInfoPlaceholder')}
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