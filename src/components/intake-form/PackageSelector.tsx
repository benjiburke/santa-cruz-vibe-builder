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
    { value: 'weekend-bender', label: 'Weekend Bender - Desde $450/persona' },
    { value: 'santa-cruz-sampler', label: 'Santa Cruz Sampler - Desde $380/persona' },
    { value: 'chill-grill', label: 'Chill & Grill - Desde $520/persona' },
    { value: 'romantic-escape', label: 'Romance & Rosas - Desde $680/pareja' },
    { value: 'samaipata-sessions', label: 'Sesiones Samaipata - Desde $750/persona' },
    { value: 'influencer-escape', label: 'Creador de Contenido - Desde $890/persona' },
    { value: 'vida-loca', label: 'La Vida Loca - Desde $1,250/persona' },
    { value: 'cooking-culture', label: 'Curso de Cocina Cruceña - Desde $340/persona' },
    { value: 'custom-vip', label: 'VIP Personalizado Puro - Por consulta' },
    { value: 'not-sure', label: 'Sin preferencia - sorpréndeme' }
  ];
  return (
    <div className="space-y-3">
      <Label htmlFor="selectedPackage" className="text-lg font-semibold text-primary">
        ¿Te interesa algún paquete específico?
      </Label>
      <Select onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Sin preferencia - sorpréndeme" />
        </SelectTrigger>
        <SelectContent>
          {availablePackages.map((pkg) => (
            <SelectItem key={pkg.value} value={pkg.value}>
              {pkg.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        ¡No te preocupes si no estás seguro, podemos ayudarte a elegir el paquete perfecto!
      </p>
    </div>
  );
};