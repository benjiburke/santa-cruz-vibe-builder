import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heart, Users, MapPin, Star, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-jungle-700 to-jungle-900">
        <div className="max-w-6xl mx-auto text-center text-white relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About Us
              <br />
              <span className="text-gold-400">Your Private Bolivia</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light">
              Crafting unforgettable Santa Cruz experiences for the bold, the curious, and the adventurous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gold-500 hover:bg-gold-600 text-jungle-900 px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={() => window.open('https://wa.me/1234567890?text=Hi! Tell me more about Santa Cruz experiences!', '_blank')}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/api/placeholder/1920/800"
            alt="About Us Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-jungle-800 mb-8">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-jungle-700 mb-6">
                It all started with a simple idea: to showcase the real Santa Cruz, beyond the typical tourist traps. We're a team of local enthusiasts passionate about sharing the hidden gems and unique experiences this city has to offer.
              </p>
              <p className="text-lg text-jungle-700">
                From thrilling jungle adventures to immersive cultural experiences, we curate personalized journeys that connect you with the heart and soul of Bolivia.
              </p>
            </div>
            <div>
              <img
                src="/api/placeholder/600/400"
                alt="Our Story"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-jungle-800 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardHeader className="text-center">
                <Heart className="h-10 w-10 text-coral-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-jungle-800">Authenticity</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-jungle-600">We believe in genuine experiences that reflect the true spirit of Santa Cruz.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader className="text-center">
                <Globe className="h-10 w-10 text-sunset-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-jungle-800">Sustainability</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-jungle-600">We're committed to responsible tourism that benefits local communities and protects the environment.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader className="text-center">
                <Award className="h-10 w-10 text-gold-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-jungle-800">Excellence</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-jungle-600">We strive for the highest standards in service, safety, and customer satisfaction.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-jungle-800 mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardHeader className="text-center">
                <img
                  src="/api/placeholder/300/300"
                  alt="Team Member 1"
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-jungle-800">John Doe</h3>
                <p className="text-jungle-500">CEO</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-jungle-600">Passionate about creating unique travel experiences.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader className="text-center">
                <img
                  src="/api/placeholder/300/300"
                  alt="Team Member 2"
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-jungle-800">Jane Smith</h3>
                <p className="text-jungle-500">Experience Curator</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-jungle-600">Dedicated to finding the hidden gems of Santa Cruz.</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardHeader className="text-center">
                <img
                  src="/api/placeholder/300/300"
                  alt="Team Member 3"
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-jungle-800">Mike Johnson</h3>
                <p className="text-jungle-500">Adventure Guide</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-jungle-600">Expert in outdoor activities and local culture.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-jungle-600 to-jungle-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to plan your personalized Santa Cruz experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-jungle-600"
              >
                Plan My Trip
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20"
              onClick={() => window.open('https://wa.me/1234567890?text=I want to plan a Santa Cruz experience!', '_blank')}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
