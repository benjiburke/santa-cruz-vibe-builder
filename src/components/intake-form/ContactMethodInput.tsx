import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface ContactMethodInputProps {
  contactMethod: string;
  contactInfo: string;
  onContactMethodChange: (value: string) => void;
  onContactInfoChange: (value: string) => void;
}

export const ContactMethodInput = ({ 
  contactMethod, 
  contactInfo, 
  onContactMethodChange, 
  onContactInfoChange 
}: ContactMethodInputProps) => {
  const getContactPlaceholder = () => {
    switch (contactMethod) {
      case 'whatsapp':
        return '+1 555 123 4567';
      case 'email':
        return 'your.email@example.com';
      case 'instagram':
        return '@yourusername';
      default:
        return 'Your contact information';
    }
  };

  const getContactLabel = () => {
    switch (contactMethod) {
      case 'whatsapp':
        return 'WhatsApp Number *';
      case 'email':
        return 'Email Address *';
      case 'instagram':
        return 'Instagram Handle *';
      default:
        return 'Contact Information *';
    }
  };

  return (
    <>
      {/* Contact Method */}
      <div className="space-y-3">
        <Label htmlFor="contact" className="text-lg font-semibold text-jungle-800">
          Preferred contact method *
        </Label>
        <RadioGroup 
          value={contactMethod} 
          onValueChange={(value) => {
            onContactMethodChange(value);
            onContactInfoChange(''); // Reset contact info when method changes
          }}
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="whatsapp" id="whatsapp" />
            <Label htmlFor="whatsapp">WhatsApp</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="instagram" id="instagram" />
            <Label htmlFor="instagram">Instagram</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Contact Information Input */}
      {contactMethod && (
        <div className="space-y-3">
          <Label htmlFor="contactInfo" className="text-lg font-semibold text-jungle-800">
            {getContactLabel()}
          </Label>
          <Input
            id="contactInfo"
            placeholder={getContactPlaceholder()}
            value={contactInfo}
            onChange={(e) => onContactInfoChange(e.target.value)}
            maxLength={contactMethod === 'email' ? 254 : contactMethod === 'instagram' ? 30 : 20}
            pattern={
              contactMethod === 'whatsapp' ? '^\\+?[1-9]\\d{1,14}$' :
              contactMethod === 'email' ? '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' :
              contactMethod === 'instagram' ? '^@?[a-zA-Z0-9._]+$' : undefined
            }
            title={
              contactMethod === 'whatsapp' ? 'Please enter a valid phone number (e.g., +1234567890)' :
              contactMethod === 'email' ? 'Please enter a valid email address' :
              contactMethod === 'instagram' ? 'Please enter a valid Instagram handle' : undefined
            }
            required
          />
        </div>
      )}
    </>
  );
};