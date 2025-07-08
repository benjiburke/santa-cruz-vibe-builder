
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { PartyPopper, Users } from 'lucide-react';
import { z } from 'zod';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: string;
    title: string;
    emoji: string;
    date: string;
    location: string;
    price: string;
  };
}

// Validation schema
const rsvpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long").trim(),
  email: z.string().email("Invalid email format").max(254, "Email too long"),
  whatsapp: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format").max(20, "Phone number too long"),
});

interface RSVPData {
  name: string;
  email: string;
  whatsapp: string;
  eventId: string;
  eventTitle: string;
  timestamp: string;
}

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

const RSVPModal = ({ isOpen, onClose, event }: RSVPModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      whatsapp: sanitizeInput(formData.whatsapp)
    };

    // Validate with Zod schema
    try {
      rsvpSchema.parse(sanitizedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Information",
          description: error.errors[0].message,
          variant: "destructive"
        });
        return;
      }
    }

    // Additional validation
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.whatsapp) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to secure your spot!",
        variant: "destructive"
      });
      return;
    }

    // Create RSVP data with sanitized inputs
    const rsvpData: RSVPData = {
      ...sanitizedData,
      eventId: event.id,
      eventTitle: sanitizeInput(event.title),
      timestamp: new Date().toISOString()
    };

    try {
      // Get existing RSVPs from localStorage with validation
      const existingRSVPs = localStorage.getItem(`rsvp_${event.id}`);
      let rsvpList: RSVPData[] = [];
      
      if (existingRSVPs) {
        try {
          rsvpList = JSON.parse(existingRSVPs);
          // Validate it's an array
          if (!Array.isArray(rsvpList)) {
            rsvpList = [];
          }
        } catch {
          rsvpList = [];
        }
      }
      
      // Limit to prevent storage overflow (max 100 RSVPs per event)
      if (rsvpList.length >= 100) {
        rsvpList = rsvpList.slice(-99);
      }
      
      // Add new RSVP
      rsvpList.push(rsvpData);
      
      // Save back to localStorage
      localStorage.setItem(`rsvp_${event.id}`, JSON.stringify(rsvpList));

      // Show success message
      toast({
        title: "🎉 You're On The List!",
        description: `RSVP confirmed for ${sanitizeInput(event.title)}. We'll contact you on WhatsApp soon!`,
      });

      // Reset form and close modal
      setFormData({ name: '', email: '', whatsapp: '' });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save RSVP. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{event.emoji}</span>
            <div>
              <DialogTitle className="text-xl font-light">Join the Party</DialogTitle>
              <DialogDescription className="text-sm text-gray-600">
                {event.title} • {event.date}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              maxLength={100}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              maxLength={254}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp Number</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              maxLength={20}
              pattern="^\+?[1-9]\d{1,14}$"
              title="Please enter a valid phone number (e.g., +1234567890)"
              required
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Event Details</span>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Price:</strong> {event.price}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-gold-600 hover:bg-gold-700">
              <PartyPopper className="h-4 w-4 mr-2" />
              Secure My Spot
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPModal;
