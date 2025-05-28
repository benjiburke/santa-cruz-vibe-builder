import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface Vibe {
  id: string;
  emoji: string;
  title: string;
  description: string;
  packages: string[];
}

const vibes: Vibe[] = [
  {
    id: 'party',
    emoji: '🎉',
    title: 'Party',
    description: 'Turn up the heat with VIP club access, pool parties, and unforgettable nights.',
    packages: ['Weekend Bender', 'La Vida Loca', 'The Santa Cruz Sampler']
  },
  {
    id: 'relax',
    emoji: '🌴',
    title: 'Relax',
    description: 'Unwind in luxury with spa treatments, private pools, and peaceful vibes.',
    packages: ['Romantic Escape', 'Chill & Grill', 'Influencer Escape']
  },
  {
    id: 'explore',
    emoji: '🌄',
    title: 'Explore',
    description: 'Discover hidden gems, natural wonders, and authentic local experiences.',
    packages: ['Explorer\'s Route', 'The Santa Cruz Sampler', 'Custom VIP']
  },
  {
    id: 'vip',
    emoji: '💎',
    title: 'VIP',
    description: 'The ultimate luxury experience with full concierge and custom everything.',
    packages: ['Custom VIP', 'La Vida Loca', 'Influencer Escape']
  }
];

const VibeSelector = () => {
  const [selectedVibe, setSelectedVibe] = useState<string>('party');

  const activeVibe = vibes.find(vibe => vibe.id === selectedVibe) || vibes[0];

  const getVibeLink = (vibeId: string) => {
    switch (vibeId) {
      case 'party':
        return '/party-vibes';
      case 'relax':
      case 'explore':
        return '/curated-experiences';
      case 'vip':
        return '/intake-form';
      default:
        return '/intake-form';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-jungle-50 to-sunset-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-jungle-800 mb-4">
            Choose Your Vibe
          </h2>
          <p className="text-xl text-jungle-600 max-w-2xl mx-auto">
            Every trip is different. Tell us what you're feeling and we'll curate the perfect experience.
          </p>
        </div>

        {/* Vibe Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {vibes.map((vibe) => (
            <Button
              key={vibe.id}
              variant={selectedVibe === vibe.id ? "default" : "outline"}
              size="lg"
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                selectedVibe === vibe.id
                  ? 'bg-jungle-600 hover:bg-jungle-700 text-white shadow-lg scale-105'
                  : 'border-jungle-300 text-jungle-700 hover:bg-jungle-100'
              }`}
              onClick={() => setSelectedVibe(vibe.id)}
            >
              <span className="text-2xl">{vibe.emoji}</span>
              {vibe.title}
            </Button>
          ))}
        </div>

        {/* Active Vibe Content */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{activeVibe.emoji}</div>
              <h3 className="text-3xl font-bold text-jungle-800 mb-4">
                {activeVibe.title} Vibes
              </h3>
              <p className="text-lg text-jungle-600 max-w-2xl mx-auto mb-6">
                {activeVibe.description}
              </p>
              <Link to={getVibeLink(activeVibe.id)}>
                <Button 
                  size="lg"
                  className="bg-jungle-600 hover:bg-jungle-700 text-white px-8 py-3 rounded-full font-semibold"
                >
                  Explore {activeVibe.title} Packages
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeVibe.packages.map((packageName, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-sunset-100 to-coral-100 p-6 rounded-xl border border-sunset-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h4 className="text-xl font-semibold text-jungle-800 mb-2">
                    {packageName}
                  </h4>
                  <p className="text-jungle-600 text-sm mb-4">
                    Perfect for your {activeVibe.title.toLowerCase()} adventure
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-jungle-300 text-jungle-700 hover:bg-jungle-600 hover:text-white"
                    onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VibeSelector;
