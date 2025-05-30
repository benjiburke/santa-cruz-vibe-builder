import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Send, CheckCircle, Calendar as CalendarIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

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

  const tripTypes = [
    { value: 'party', label: 'Party 🎉' },
    { value: 'chill', label: 'Chill 🌴' },
    { value: 'explore', label: 'Explore 🌄' },
    { value: 'vip', label: 'VIP 💎' },
    { value: 'other', label: 'Other' }
  ];

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

  const getContactPlaceholder = () => {
    switch (formData.contactMethod) {
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
    switch (formData.contactMethod) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.tripType || !formData.groupSize || !formData.budget || !formData.contactMethod || !formData.contactInfo) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    
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

              {/* Package Selection */}
              <div className="space-y-3">
                <Label htmlFor="selectedPackage" className="text-lg font-semibold text-jungle-800">
                  Interested in a specific package?
                </Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, selectedPackage: value }))}>
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

              {/* Dates with Calendar */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-jungle-800">
                  Preferred dates
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Start Date */}
                  <div className="space-y-2">
                    <Label className="text-sm text-jungle-600">Start Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick start date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.startDate}
                          onSelect={(date) => setFormData(prev => ({ ...prev, startDate: date }))}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* End Date */}
                  <div className="space-y-2">
                    <Label className="text-sm text-jungle-600">End Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick end date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.endDate}
                          onSelect={(date) => setFormData(prev => ({ ...prev, endDate: date }))}
                          disabled={(date) => 
                            date < new Date() || 
                            (formData.startDate && date < formData.startDate)
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
                  onValueChange={(value) => setFormData(prev => ({ ...prev, contactMethod: value, contactInfo: '' }))}
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
              {formData.contactMethod && (
                <div className="space-y-3">
                  <Label htmlFor="contactInfo" className="text-lg font-semibold text-jungle-800">
                    {getContactLabel()}
                  </Label>
                  <Input
                    id="contactInfo"
                    placeholder={getContactPlaceholder()}
                    value={formData.contactInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactInfo: e.target.value }))}
                    required
                  />
                </div>
              )}

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
