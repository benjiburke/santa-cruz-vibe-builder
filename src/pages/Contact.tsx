import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Diamond, MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `New inquiry from ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Interested in: ${formData.service}%0A` +
      `Message: ${formData.message}`;
    
    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Message Sent",
      description: "We'll respond to your inquiry within 2 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Santa Cruz de la Sierra', 'Bolivia, South America']
    },
    {
      icon: Phone,
      title: 'Contact',
      details: ['+591 123 456 789', 'Available 24/7']
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: ['Within 2 hours', 'Immediate via WhatsApp']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['concierge@diamondscz.com', 'experiences@diamondscz.com']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.4)), url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&h=800&fit=crop)`
          }}
        />
        <div className="absolute inset-0 bg-white/40" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Diamond className="w-12 h-12 text-gray-700 mx-auto mb-8" />
          <h1 className="text-5xl sm:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Get In <span className="text-gray-700">Touch</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Your extraordinary Santa Cruz experience begins with a conversation. 
            Let us craft something exceptional for you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-light text-gray-900 mb-8">
                  Start Your <span className="text-gray-700">Journey</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-light">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="mt-1 border-gray-300 focus:border-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-light">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="mt-1 border-gray-300 focus:border-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-light">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-1 border-gray-300 focus:border-gray-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-gray-700 font-light">Service Interest</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    >
                      <option value="">Select a service</option>
                      <option value="VIP Experience">VIP Experience</option>
                      <option value="Diamond Spa">Diamond Spa</option>
                      <option value="Vacation Rentals">Vacation Rentals</option>
                      <option value="Party Planning">Party Planning</option>
                      <option value="Real Estate">Real Estate Services</option>
                      <option value="Custom Experience">Custom Experience</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-light">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="mt-1 border-gray-300 focus:border-gray-500 min-h-[120px]"
                      placeholder="Tell us about your ideal experience..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg font-normal"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-8">
                  Contact <span className="text-gray-700">Information</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  We're here to assist you 24/7. Whether you need immediate support or want to plan 
                  your next luxury experience, our concierge team is ready to help.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <info.icon className="w-6 h-6 text-gray-700 mb-3" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 font-light text-sm">{detail}</p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-900">Instant Connect</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-normal"
                    onClick={() => window.open('https://wa.me/1234567890?text=Hi! I\'d like to inquire about Diamond Santa Cruz services', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Now
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 font-normal"
                    onClick={() => window.location.href = 'tel:+5911234567890'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Direct
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <Diamond className="w-8 h-8 text-gray-700 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Ready to Experience Santa Cruz?
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light">
            Join our exclusive clientele and discover Bolivia's most sophisticated experiences.
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 text-lg font-normal"
            onClick={() => document.getElementById('/')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Services
          </Button>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Contact;