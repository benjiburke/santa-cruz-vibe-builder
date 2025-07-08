import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PackageSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const availablePackages = [
  { value: 'weekend-bender', label: 'Weekend Bender - $450/person', category: 'Party' },
  { value: 'la-vida-loca', label: 'La Vida Loca - $650/person', category: 'Party' },
  { value: 'santa-cruz-sampler', label: 'The Santa Cruz Sampler - $380/person', category: 'Explorer' },
  { value: 'romantic-escape', label: 'Romantic Escape - $420/couple', category: 'Curated' },
  { value: 'chill-grill', label: 'Chill & Grill - $350/person', category: 'Curated' },
  { value: 'influencer-escape', label: 'Influencer Escape - $580/person', category: 'Curated' },
  { value: 'explorers-route', label: 'Explorer\'s Route - $480/person', category: 'Explorer' },
  { value: 'custom-vip', label: 'Custom VIP Experience - Contact for pricing', category: 'VIP' },
  { value: 'not-sure', label: 'Not sure yet - help me choose!', category: 'Other' }
];

export const PackageSelector = ({ value, onChange }: PackageSelectorProps) => {
  return (
    <div className="space-y-3">
      <Label htmlFor="selectedPackage" className="text-lg font-semibold text-jungle-800">
        Interested in a specific package?
      </Label>
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a package or skip if not sure" />
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
        Don't worry if you're not sure - we can help you choose the perfect package!
      </p>
    </div>
  );
};