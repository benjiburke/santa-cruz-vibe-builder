
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
  intensity: string;
}

const vibes: Vibe[] = [
  {
    id: 'party',
    emoji: '🎉',
    title: 'Party',
    description: 'Turn up the heat with VIP club access, pool parties, and legendary nights that never end.',
    packages: ['Weekend Bender', 'La Vida Loca', 'Santa Cruz Sampler'],
    intensity: '🔥🔥🔥🔥'
  },
  {
    id: 'relax',
    emoji: '🌴',
    title: 'Relax',
    description: 'Unwind in luxury with spa treatments, private pools, and peaceful vibes that heal your soul.',
    packages: ['Romance & Roses', 'Chill & Grill', 'Content Creator'],
    intensity: '🔥🔥'
  },
  {
    id: 'explore',
    emoji: '🌄',
    title: 'Explore',
    description: 'Discover hidden gems, natural wonders, and authentic local experiences with luxury comfort.',
    packages: ['Samaipata Sessions', 'Santa Cruz Sampler', 'Pure Custom VIP'],
    intensity: '🔥🔥🔥'
  },
  {
    id: 'vip',
    emoji: '💎',
    title: 'VIP',
    description: 'The ultimate luxury experience with full concierge, unlimited customization, and zero limits.',
    packages: ['Pure Custom VIP', 'La Vida Loca', 'Content Creator'],
    intensity: '🔥🔥🔥🔥🔥'
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-gold-400">Vibe</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every trip is different. Tell us what you're feeling and we'll craft the perfect chaos.
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
                  ? 'bg-gold-500 hover:bg-gold-600 text-onyx-900 shadow-lg scale-105 border-gold-400'
                  : 'border-gold-400/50 text-gold-400 hover:bg-gold-400/20 hover:border-gold-400'
              }`}
              onClick={() => setSelectedVibe(vibe.id)}
            >
              <span className="text-2xl">{vibe.emoji}</span>
              {vibe.title}
            </Button>
          ))}
        </div>

        {/* Active Vibe Content */}
        <Card className="bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur-sm border-gold-300 shadow-2xl animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{activeVibe.emoji}</div>
              <h3 className="text-3xl font-bold text-onyx-800 mb-4">
                {activeVibe.title} Vibes
              </h3>
              <div className="text-2xl mb-4 text-gold-600">
                {activeVibe.intensity}
              </div>
              <p className="text-lg text-onyx-600 max-w-2xl mx-auto mb-6">
                {activeVibe.description}
              </p>
              <Link to={getVibeLink(activeVibe.id)}>
                <Button 
                  size="lg"
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                >
                  🚀 Lock In {activeVibe.title} Mode
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeVibe.packages.map((packageName, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gold-100 via-sunset-100 to-coral-100 p-6 rounded-xl border border-gold-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:border-gold-400"
                >
                  <h4 className="text-xl font-semibold text-onyx-800 mb-2">
                    {packageName}
                  </h4>
                  <p className="text-onyx-600 text-sm mb-4">
                    Perfect for your {activeVibe.title.toLowerCase()} adventure
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-gold-400 text-gold-700 hover:bg-gold-600 hover:text-white font-medium"
                    onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See Package Details
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
