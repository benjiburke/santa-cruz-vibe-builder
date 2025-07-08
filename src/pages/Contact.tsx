import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Diamond, MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import IntakeForm from '@/components/IntakeForm';

const Contact = () => {

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

      {/* Trip Planning Form */}
      <IntakeForm />

      {/* Contact Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Contact <span className="text-gray-700">Information</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
              We're here to assist you 24/7. Whether you need immediate support or want to plan 
              your next luxury experience, our concierge team is ready to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
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
          <div className="text-center space-y-4">
            <h3 className="text-xl font-light text-gray-900">Instant Connect</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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