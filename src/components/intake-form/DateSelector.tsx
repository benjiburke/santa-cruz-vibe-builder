import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

interface DateSelectorProps {
  startDate?: Date;
  endDate?: Date;
  flexibility: boolean;
  onStartDateChange: (date?: Date) => void;
  onEndDateChange: (date?: Date) => void;
  onFlexibilityChange: (checked: boolean) => void;
}

export const DateSelector = ({
  startDate,
  endDate,
  flexibility,
  onStartDateChange,
  onEndDateChange,
  onFlexibilityChange
}: DateSelectorProps) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <Label className="text-lg font-semibold text-primary">
        Fechas de Viaje
      </Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Start Date */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Fecha de Inicio</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : <span>Pick start date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={onStartDateChange}
                disabled={(date) => date < new Date()}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Fecha de Fin</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Pick end date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={onEndDateChange}
                disabled={(date) => 
                  date < new Date() || 
                  (startDate && date < startDate)
                }
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 mt-3">
        <Checkbox 
          id="flexibility"
          checked={flexibility}
          onCheckedChange={onFlexibilityChange}
        />
        <Label htmlFor="flexibility" className="text-sm text-muted-foreground">
          Soy flexible con las fechas
        </Label>
      </div>
    </div>
  );
};