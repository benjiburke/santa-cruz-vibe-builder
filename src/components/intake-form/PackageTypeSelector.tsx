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
      <Label className="text-lg font-semibold text-jungle-800">
        {t('form.packageType')} *
      </Label>
      <RadioGroup 
        value={value} 
        onValueChange={onChange}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="essential" id="essential" />
          <Label htmlFor="essential">{t('form.essential')}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="premium" id="premium" />
          <Label htmlFor="premium">{t('form.premium')}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="luxury" id="luxury" />
          <Label htmlFor="luxury">{t('form.luxury')}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vip" id="vip" />
          <Label htmlFor="vip">{t('form.vipExclusive')}</Label>
        </div>
      </RadioGroup>
    </div>
  );
};