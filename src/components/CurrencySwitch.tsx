import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CurrencySwitchProps {
  currency: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY';
  onCurrencyChange: (value: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY') => void;
}

const currencyNames = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  CNY: 'Chinese Yuan'
};

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CNY: '¥'
};

const CurrencySwitch: React.FC<CurrencySwitchProps> = ({ currency, onCurrencyChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-24 left-8 z-50 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      {!isExpanded ? (
        <Button
          variant="ghost"
          size="sm"
          className="p-3 h-auto font-medium text-base"
          onClick={() => setIsExpanded(true)}
        >
          {currencySymbols[currency]}
        </Button>
      ) : (
        <div className="p-2">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-600" />
            <Select 
              value={currency} 
              onValueChange={(value: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CNY') => {
                onCurrencyChange(value);
                setIsExpanded(false);
              }}
              onOpenChange={(open) => {
                if (!open) {
                  setIsExpanded(false);
                }
              }}
            >
              <SelectTrigger className="w-32 h-8 text-xs border-0 shadow-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(currencyNames).map(([code, name]) => (
                  <SelectItem key={code} value={code} className="text-xs">
                    {code} - {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySwitch;