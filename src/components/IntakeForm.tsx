import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// Import form components
import { TripTypeSelector } from './intake-form/TripTypeSelector';
import { PackageSelector } from './intake-form/PackageSelector';
import { GroupSizeBudgetInputs } from './intake-form/GroupSizeBudgetInputs';
import { DateSelector } from './intake-form/DateSelector';
import { PackageTypeSelector } from './intake-form/PackageTypeSelector';
import { ServicesSelector } from './intake-form/ServicesSelector';
import { ContactMethodInput } from './intake-form/ContactMethodInput';
import { AdditionalInfoInput } from './intake-form/AdditionalInfoInput';

// Validation schemas
const contactSchema = z.object({
  whatsapp: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format").max(20),
  email: z.string().email("Invalid email format").max(254),
  instagram: z.string().min(1, "Instagram handle required").max(30).regex(/^@?[a-zA-Z0-9._]+$/, "Invalid Instagram handle"),
});

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>\"'&]/g, (match) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '&': '&amp;'
    };
    return entities[match] || match;
  }).trim();
};

const IntakeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    tripType: '',
    selectedPackage: '',
    groupSize: '',
    budget: '',
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    flexibility: false,
    packageType: '',
    services: [] as string[],
    contactMethod: '',
    contactInfo: '',
    additionalInfo: ''
  });
  const { toast } = useToast();

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, service]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        services: prev.services.filter(s => s !== service)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sanitize inputs
    const sanitizedContactInfo = sanitizeInput(formData.contactInfo);
    const sanitizedAdditionalInfo = sanitizeInput(formData.additionalInfo);
    
    // Basic validation
    if (!formData.tripType || !formData.groupSize || !formData.budget || !formData.contactMethod || !sanitizedContactInfo) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // Validate contact information based on method
    try {
      if (formData.contactMethod && sanitizedContactInfo) {
        const validation = contactSchema.shape[formData.contactMethod as keyof typeof contactSchema.shape];
        validation.parse(sanitizedContactInfo);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid contact information",
          description: error.errors[0].message,
          variant: "destructive"
        });
        return;
      }
    }

    // Create sanitized form data
    const sanitizedFormData = {
      ...formData,
      contactInfo: sanitizedContactInfo,
      additionalInfo: sanitizedAdditionalInfo.slice(0, 2000), // Limit to 2000 chars
      services: formData.services.slice(0, 10) // Limit services to prevent abuse
    };

    console.log('Form submitted:', sanitizedFormData);
    
    toast({
      title: "Trip request submitted! 🔥",
      description: "We're already planning something amazing. Expect a reply within 24 hours.",
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="intake-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-jungle-50 to-sunset-50">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-jungle-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-jungle-800 mb-4">
                We're on it! 🔥
              </h3>
              <p className="text-lg text-jungle-600 mb-6">
                Your trip request has been submitted. Our team is already crafting something incredible for you.
              </p>
              <p className="text-jungle-500 mb-8">
                Expect a personalized response via {formData.contactMethod === 'whatsapp' ? 'WhatsApp' : formData.contactMethod === 'instagram' ? 'Instagram' : 'email'} within 24 hours.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-jungle-300 text-jungle-700 hover:bg-jungle-600 hover:text-white"
              >
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="intake-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-jungle-50 to-sunset-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-jungle-800 mb-4">
            Let's Plan Your Trip
          </h2>
          <p className="text-xl text-jungle-600">
            Tell us your vibe. We'll take it from there.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="text-4xl mb-2">✈️</div>
            <h3 className="text-2xl font-bold text-jungle-800">
              Trip Planning Form
            </h3>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Trip Type */}
              <TripTypeSelector
                value={formData.tripType}
                onChange={(value) => setFormData(prev => ({ ...prev, tripType: value }))}
              />

              {/* Package Selection */}
              <PackageSelector
                value={formData.selectedPackage}
                onChange={(value) => setFormData(prev => ({ ...prev, selectedPackage: value }))}
              />

              {/* Group Size and Budget */}
              <GroupSizeBudgetInputs
                groupSize={formData.groupSize}
                budget={formData.budget}
                onGroupSizeChange={(value) => setFormData(prev => ({ ...prev, groupSize: value }))}
                onBudgetChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
              />

              {/* Dates with Calendar */}
              <DateSelector
                startDate={formData.startDate}
                endDate={formData.endDate}
                flexibility={formData.flexibility}
                onStartDateChange={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
                onEndDateChange={(date) => setFormData(prev => ({ ...prev, endDate: date }))}
                onFlexibilityChange={(checked) => setFormData(prev => ({ ...prev, flexibility: checked }))}
              />

              {/* Package Type */}
              <PackageTypeSelector
                value={formData.packageType}
                onChange={(value) => setFormData(prev => ({ ...prev, packageType: value }))}
              />

              {/* Services */}
              <ServicesSelector
                selectedServices={formData.services}
                onServiceChange={handleServiceChange}
              />

              {/* Contact Method and Info */}
              <ContactMethodInput
                contactMethod={formData.contactMethod}
                contactInfo={formData.contactInfo}
                onContactMethodChange={(value) => setFormData(prev => ({ ...prev, contactMethod: value, contactInfo: '' }))}
                onContactInfoChange={(value) => setFormData(prev => ({ ...prev, contactInfo: value }))}
              />

              {/* Additional Info */}
              <AdditionalInfoInput
                value={formData.additionalInfo}
                onChange={(value) => setFormData(prev => ({ ...prev, additionalInfo: value }))}
              />

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button 
                  type="submit" 
                  size="lg"
                  className="bg-gradient-to-r from-jungle-600 to-sunset-500 hover:from-jungle-700 hover:to-sunset-600 text-white px-12 py-6 text-lg rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Trip Request
                </Button>
                <p className="text-sm text-jungle-500 mt-4">
                  We'll respond within 24 hours with a custom proposal
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntakeForm;
