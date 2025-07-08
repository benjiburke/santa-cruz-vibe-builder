
import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';
import SantaCruzMap from '@/components/SantaCruzMap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Diamond, Shield, Users, Globe, Award, ArrowRight, MapPin, Palmtree, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Diamond className="w-8 h-8 text-gray-700 mx-auto mb-6" />
          <Badge className="mb-6 bg-gray-50 text-gray-700 border-gray-200 text-xs font-normal px-4 py-1">
            Established Excellence
          </Badge>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
            About
            <br />
            <span className="text-gray-700">Diamond Santa Cruz</span>
          </h1>
          <p className="text-base text-gray-600 mb-4 max-w-xl mx-auto font-light leading-relaxed">
            Sophisticated experiences in the heart of Bolivia's most dynamic city.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
            <MapPin className="w-4 h-4" />
            <span>Santa Cruz de la Sierra, Bolivia</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 font-normal text-sm"
              onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-2 font-normal text-sm"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Why Santa Cruz */}
      <section id="our-story" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Why Santa Cruz, Bolivia
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-light leading-relaxed mb-4">
              The world's 14th fastest-growing city. Bolivia's economic powerhouse where authentic culture meets modern luxury - without the crowds.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge className="bg-gray-100 text-gray-700 border-gray-200">No Altitude Sickness</Badge>
              <Badge className="bg-gray-100 text-gray-700 border-gray-200">Undiscovered by Mass Tourism</Badge>
              <Badge className="bg-gray-100 text-gray-700 border-gray-200">Economic Capital</Badge>
            </div>
          </div>
          
          <div className="mb-12">
            <SantaCruzMap />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border border-gray-200">
              <CardHeader className="text-center pb-3">
                <Palmtree className="h-6 w-6 text-gray-700 mx-auto mb-3" />
                <h3 className="text-base font-medium text-gray-900">Raw & Authentic</h3>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  A working city untouched by mass tourism. Experience real Bolivia where locals live, work, and play - no tourist traps.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200">
              <CardHeader className="text-center pb-3">
                <Globe className="h-6 w-6 text-gray-700 mx-auto mb-3" />
                <h3 className="text-base font-medium text-gray-900">Economic Powerhouse</h3>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Bolivia's largest city and financial capital. Where the country's wealthy gather - modern skylines meet tropical vibes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200">
              <CardHeader className="text-center pb-3">
                <Mountain className="h-6 w-6 text-gray-700 mx-auto mb-3" />
                <h3 className="text-base font-medium text-gray-900">World-Class Value</h3>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Luxury experiences at a fraction of global costs. Year-round tropical climate without altitude sickness.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-base text-gray-700 mb-4 font-light leading-relaxed max-w-2xl mx-auto">
              While everyone flocks to Peru or Brazil, Santa Cruz remains South America's best-kept secret. This rapidly growing metropolis pulses with authentic energy - vibrant nightlife, incredible food, warm people, and a culture that hasn't been packaged for tourists.
            </p>
            <p className="text-base text-gray-700 font-light leading-relaxed max-w-2xl mx-auto">
              As the world's 14th fastest-growing city, Santa Cruz offers luxury at local prices with none of the altitude issues of La Paz. It's where Bolivia's elite live and where international business gets done - all while maintaining that raw, authentic charm you can't find anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Our Standards
            </h2>
            <p className="text-base text-gray-600 font-light">
              Principles that guide every experience we craft.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gray-200">
              <CardHeader className="text-center pb-3">
                <Shield className="h-6 w-6 text-gray-700 mx-auto mb-3" />
                <h3 className="text-base font-medium text-gray-900">Discretion</h3>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 font-light leading-relaxed text-sm">Professional service that respects your privacy and maintains the highest levels of confidentiality.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardHeader className="text-center pb-3">
                <Globe className="h-6 w-6 text-gray-700 mx-auto mb-3" />
                <h3 className="text-base font-medium text-gray-900">Sophistication</h3>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 font-light leading-relaxed text-sm">Experiences designed for those who appreciate refined quality and understated elegance.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardHeader className="text-center pb-3">
                <Award className="h-6 w-6 text-gray-700 mx-auto mb-3" />
                <h3 className="text-base font-medium text-gray-900">Excellence</h3>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600 font-light leading-relaxed text-sm">Unwavering commitment to exceptional service and flawless execution in every detail.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Our Approach
          </h2>
          <p className="text-base text-gray-700 mb-8 font-light leading-relaxed">
            We believe in quality over quantity. Each experience is personally curated, ensuring that every moment reflects our commitment to excellence. Our team combines local knowledge with international standards, creating experiences that exceed expectations while maintaining the discretion and professionalism our clients expect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-light text-sm">Curated Experiences</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 font-light text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 font-light text-sm">Professional Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-light mb-6">
            Experience Diamond Standards
          </h2>
          <p className="text-base mb-8 text-gray-300 font-light leading-relaxed">
            Discover what sophisticated Santa Cruz experiences can offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 font-normal text-sm"
              >
                Begin Experience
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white px-6 py-2 font-normal text-sm"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <BackToTop />
    </div>
  );
};

export default About;
