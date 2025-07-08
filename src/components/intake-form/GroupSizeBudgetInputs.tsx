import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '@/hooks/useTranslation';

interface GroupSizeBudgetInputsProps {
  groupSize: string;
  budget: string;
  onGroupSizeChange: (value: string) => void;
  onBudgetChange: (value: string) => void;
}

export const GroupSizeBudgetInputs = ({ 
  groupSize, 
  budget, 
  onGroupSizeChange, 
  onBudgetChange 
}: GroupSizeBudgetInputsProps) => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <Label htmlFor="groupSize" className="text-lg font-semibold text-primary">
          {t('form.groupSize')} *
        </Label>
        <Select onValueChange={onGroupSizeChange}>
          <SelectTrigger>
            <SelectValue placeholder="ej., 4 personas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-2">1-2 personas</SelectItem>
            <SelectItem value="3-4">3-4 personas</SelectItem>
            <SelectItem value="5-8">5-8 personas</SelectItem>
            <SelectItem value="9-12">9-12 personas</SelectItem>
            <SelectItem value="12+">12+ personas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label htmlFor="budget" className="text-lg font-semibold text-primary">
          {t('form.budget')} *
        </Label>
        <Select onValueChange={onBudgetChange}>
          <SelectTrigger>
            <SelectValue placeholder="ej., $800" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="300-500">$300-500</SelectItem>
            <SelectItem value="500-750">$500-750</SelectItem>
            <SelectItem value="750-1000">$750-1000</SelectItem>
            <SelectItem value="1000+">$1000+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};