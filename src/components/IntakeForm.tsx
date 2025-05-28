
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const IntakeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    tripType: '',
    groupSize: '',
    budget: '',
    dates: '',
    flexibility: false,
    packageType: '',
    services: [] as string[],
    contactMethod: '',
    additionalInfo: ''
  });
  const { toast } = useToast();

  const tripTypes = [
    { value: 'party', label: 'Party 🎉' },
    { value: 'chill', label: 'Chill 🌴' },
    { value: 'explore', label: 'Explore 🌄' },
    { value: 'vip', label: 'VIP 💎' },
    { value: 'other', label: 'Other' }
  ];

  const services = [
    'DJ', 'Chef', 'Spa', 'Massage', 'Club Night', 
    'Pool Setup', 'Photography', 'Adventure Trips', 
    'Airport Pickup', 'Flight Help', 'Security', 
    'Transportation', 'Tour Guide', 'Equipment Rental'
  ];

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
    console.log('Form submitted:', formData);
    
    toast({
      title: "Trip request submitted! 🔥",
      description: "We're already planning something amazing. Expect a reply within 24 hours.",
    });
    
    setIsSubmitted(true);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show the success state
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
                Expect a personalized response via WhatsApp or email within 24 hours.
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
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-jungle-800">
                  What kind of trip is this? *
                </Label>
                <RadioGroup 
                  value={formData.tripType} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, tripType: value }))}
                  className="flex flex-wrap gap-4"
                >
                  {tripTypes.map((type) => (
                    <div key={type.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={type.value} id={type.value} />
                      <Label htmlFor={type.value} className="cursor-pointer">
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Group Size and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="groupSize" className="text-lg font-semibold text-jungle-800">
                    How many people? *
                  </Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, groupSize: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select group size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 people</SelectItem>
                      <SelectItem value="3-4">3-4 people</SelectItem>
                      <SelectItem value="5-8">5-8 people</SelectItem>
                      <SelectItem value="9-12">9-12 people</SelectItem>
                      <SelectItem value="12+">12+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="budget" className="text-lg font-semibold text-jungle-800">
                    Budget per person (USD) *
                  </Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
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

              {/* Dates */}
              <div className="space-y-3">
                <Label htmlFor="dates" className="text-lg font-semibold text-jungle-800">
                  Preferred dates
                </Label>
                <Input
                  id="dates"
                  placeholder="e.g., March 15-18, 2024 or Weekend in April"
                  value={formData.dates}
                  onChange={(e) => setFormData(prev => ({ ...prev, dates: e.target.value }))}
                />
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="flexibility"
                    checked={formData.flexibility}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, flexibility: !!checked }))}
                  />
                  <Label htmlFor="flexibility" className="text-sm text-jungle-600">
                    I'm flexible with dates
                  </Label>
                </div>
              </div>

              {/* Package Type */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-jungle-800">
                  Package preference *
                </Label>
                <RadioGroup 
                  value={formData.packageType} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, packageType: value }))}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pre-built" id="pre-built" />
                    <Label htmlFor="pre-built">Choose from pre-built packages</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label htmlFor="custom">Fully custom experience</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid">Mix of both</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Services */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-jungle-800">
                  Interested services (select all that apply)
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox 
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={(checked) => handleServiceChange(service, !!checked)}
                      />
                      <Label htmlFor={service} className="text-sm cursor-pointer">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Method */}
              <div className="space-y-3">
                <Label htmlFor="contact" className="text-lg font-semibold text-jungle-800">
                  Preferred contact method *
                </Label>
                <RadioGroup 
                  value={formData.contactMethod} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, contactMethod: value }))}
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

              {/* Additional Info */}
              <div className="space-y-3">
                <Label htmlFor="additionalInfo" className="text-lg font-semibold text-jungle-800">
                  Tell us more about your vision
                </Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any special requests, themes, or ideas you have in mind? The more details, the better we can customize your experience!"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                />
              </div>

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
