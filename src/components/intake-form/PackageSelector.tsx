import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '@/hooks/useTranslation';

interface PackageSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const PackageSelector = ({ value, onChange }: PackageSelectorProps) => {
  const { t } = useTranslation();
  
  const availablePackages = [
    { value: 'weekend-bender', label: `${t('pkg.weekendBender')} - ${t('pkg.fromPrice')} $450${t('pkg.person')}` },
    { value: 'santa-cruz-sampler', label: `${t('pkg.santaCruzSampler')} - ${t('pkg.fromPrice')} $380${t('pkg.person')}` },
    { value: 'chill-grill', label: `${t('pkg.chillGrill')} - ${t('pkg.fromPrice')} $520${t('pkg.person')}` },
    { value: 'romantic-escape', label: `${t('pkg.romance')} - ${t('pkg.fromPrice')} $680${t('pkg.couple')}` },
    { value: 'samaipata-sessions', label: `${t('pkg.samaipata')} - ${t('pkg.fromPrice')} $750${t('pkg.person')}` },
    { value: 'influencer-escape', label: `${t('pkg.influencer')} - ${t('pkg.fromPrice')} $890${t('pkg.person')}` },
    { value: 'vida-loca', label: `${t('pkg.vidaLoca')} - ${t('pkg.fromPrice')} $1,250${t('pkg.person')}` },
    { value: 'custom-vip', label: `${t('pkg.customVip')} - ${t('pkg.consultation')}` },
    { value: 'not-sure', label: t('form.noPreference') }
  ];
  return (
    <div className="space-y-3">
      <Label htmlFor="selectedPackage" className="text-lg font-semibold text-jungle-800">
        {t('form.selectPackage')}
      </Label>
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={t('form.noPreference')} />
        </SelectTrigger>
        <SelectContent>
          {availablePackages.map((pkg) => (
            <SelectItem key={pkg.value} value={pkg.value}>
              {pkg.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm text-jungle-500">
        {t('form.noPreference')}
      </p>
    </div>
  );
};