
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-jungle-600 to-sunset-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            About Santa Cruz Travel Experience
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            We're not just tour operators. We're experience curators, memory makers, and your local connection to the real Santa Cruz.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-jungle-800 mb-6">Our Story</h2>
              <p className="text-lg text-jungle-600 mb-6">
                Born from a simple idea: Santa Cruz deserves better than cookie-cutter tours. We started as locals who were tired of seeing visitors get the sanitized, generic experience that missed everything that makes our city special.
              </p>
              <p className="text-lg text-jungle-600 mb-6">
                What began as showing friends around has grown into something bigger - a way to share the real Santa Cruz. The hidden rooftop bars, the best local chefs, the villa parties that locals actually attend, the nature spots that aren't on TripAdvisor.
              </p>
              <p className="text-lg text-jungle-600">
                Every experience we create is personal because Santa Cruz is personal to us. This is our home, and we want you to feel like it's yours too.
              </p>
            </div>
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Santa Cruz landscape"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-jungle-800 mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-jungle-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-jungle-800 mb-4">Local Insiders</h3>
                <p className="text-jungle-600">
                  Born and raised in Santa Cruz. We know the city like the back of our hand.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-jungle-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-jungle-800 mb-4">Personal Touch</h3>
                <p className="text-jungle-600">
                  Every experience is customized. No two trips are exactly the same.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-jungle-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-jungle-800 mb-4">Proven Track Record</h3>
                <p className="text-jungle-600">
                  Hundreds of satisfied guests and countless unforgettable memories created.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-jungle-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-jungle-800 mb-4">Genuine Care</h3>
                <p className="text-jungle-600">
                  Your experience matters to us. We're not happy unless you're thrilled.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-jungle-800 mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-jungle-800 mb-2">Carlos Rodriguez</h3>
                <p className="text-jungle-600 mb-4">Founder & Experience Curator</p>
                <p className="text-sm text-jungle-500">
                  Born in Santa Cruz, Carlos started this company after years of showing visitors the real city. His passion for hospitality and local culture drives every experience we create.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-jungle-800 mb-2">Maria Santos</h3>
                <p className="text-jungle-600 mb-4">Operations Manager</p>
                <p className="text-sm text-jungle-500">
                  Maria ensures every detail is perfect. From villa setups to restaurant reservations, she's the one making sure your experience runs smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src="/api/placeholder/200/200" 
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-jungle-800 mb-2">Diego Morales</h3>
                <p className="text-jungle-600 mb-4">Guest Experience Specialist</p>
                <p className="text-sm text-jungle-500">
                  Diego is your on-ground contact during your stay. Need recommendations? Last-minute changes? He's got you covered 24/7.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-jungle-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Authenticity</h3>
              <p className="text-jungle-200">
                We show you the real Santa Cruz, not a tourist version of it. Local experiences, local connections, local flavor.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-jungle-200">
                Every detail matters. From the initial planning to the final goodbye, we strive for perfection in everything we do.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Respect</h3>
              <p className="text-jungle-200">
                We respect our city, our culture, our environment, and most importantly, our guests and their unique preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sunset-500 to-coral-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience Santa Cruz?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Let us show you why Santa Cruz isn't just a destination—it's an experience that changes you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-sunset-600"
              onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Planning
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/20"
              onClick={() => window.open('https://wa.me/1234567890?text=Hi! I want to learn more about Santa Cruz Travel Experience', '_blank')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
