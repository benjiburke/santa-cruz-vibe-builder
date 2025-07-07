
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Diamond, Shield, Users, Globe, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Diamond className="w-12 h-12 text-gold-400 mx-auto mb-8" />
          <Badge className="mb-8 bg-gold-400/10 text-gold-400 border-gold-400/20 text-sm font-light px-6 py-2">
            Established Excellence
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight tracking-wide">
            About
            <br />
            <span className="text-gold-400">Diamond Santa Cruz</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Sophisticated experiences crafted for those who appreciate exceptional quality and discrete luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400/40 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Excellence is not a destination but a standard we maintain in every interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">
                Diamond Santa Cruz emerged from a simple recognition: exceptional experiences require exceptional attention to detail. We don't follow trends—we set standards.
              </p>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Our approach combines local expertise with international sophistication, creating experiences that resonate long after your visit concludes.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 p-8 border border-gold-400/20 backdrop-blur-sm">
                <img
                  src="/api/placeholder/600/400"
                  alt="Diamond Standard"
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onyx-800/40 to-midnight-800/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Our Standards
            </h2>
            <p className="text-lg text-gray-400 font-light">
              Principles that guide every experience we craft.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border-gold-400/20 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Shield className="h-8 w-8 text-gold-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white tracking-wide">Discretion</h3>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-300 font-light leading-relaxed">Professional service that respects your privacy and maintains the highest levels of confidentiality.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border-gold-400/20 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Globe className="h-8 w-8 text-gold-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white tracking-wide">Sophistication</h3>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-300 font-light leading-relaxed">Experiences designed for those who appreciate refined quality and understated elegance.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border-gold-400/20 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <Award className="h-8 w-8 text-gold-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white tracking-wide">Excellence</h3>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-300 font-light leading-relaxed">Unwavering commitment to exceptional service and flawless execution in every detail.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
            Our Approach
          </h2>
          <p className="text-lg text-gray-300 mb-12 font-light leading-relaxed">
            We believe in quality over quantity. Each experience is personally curated, ensuring that every moment reflects our commitment to excellence. Our team combines local knowledge with international standards, creating experiences that exceed expectations while maintaining the discretion and professionalism our clients expect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-gold-400 mb-3">500+</div>
              <div className="text-gray-300 font-light tracking-wide">Curated Experiences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gold-400 mb-3">100%</div>
              <div className="text-gray-300 font-light tracking-wide">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gold-400 mb-3">24/7</div>
              <div className="text-gray-300 font-light tracking-wide">Professional Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold-600/20 to-gold-400/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Experience Diamond Standards
          </h2>
          <p className="text-xl mb-10 text-gray-300 font-light leading-relaxed">
            Discover what sophisticated Santa Cruz experiences can offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 font-medium rounded-none transition-all duration-300"
              >
                Begin Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400/50 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-onyx-900/80 backdrop-blur-sm text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gold-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <Diamond className="w-8 h-8 text-gold-400 mx-auto mb-6" />
            <h3 className="text-2xl font-light mb-6">Diamond Santa Cruz</h3>
            <p className="text-gray-400 mb-8 font-light leading-relaxed">
              Sophisticated Santa Cruz experiences crafted for the discerning traveler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-medium rounded-none transition-all duration-300"
              >
                WhatsApp
              </button>
              <Link to="/intake-form">
                <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 font-medium rounded-none transition-all duration-300">
                  Plan Experience
                </button>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gold-400/20 pt-12">
            <p className="text-gray-400 text-sm font-light">
              © 2024 Diamond Santa Cruz. Exceptional experiences in Bolivia.
            </p>
            <p className="text-gray-500 text-xs mt-2 font-light">
              Sophisticated. Discrete. Unforgettable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
