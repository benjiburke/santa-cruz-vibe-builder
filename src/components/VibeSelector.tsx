
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

interface Vibe {
  id: string;
  emoji: string;
  title: string;
  description: string;
  packages: string[];
  intensity: string;
}

const getVibes = (t: (key: string) => string): Vibe[] => [
  {
    id: 'party',
    emoji: '',
    title: t('vibe.vibrant'),
    description: t('vibe.vibrantDesc'),
    packages: ['Weekend Bender', 'La Vida Loca', 'Santa Cruz Sampler'],
    intensity: t('vibe.highEnergy')
  },
  {
    id: 'relax',
    emoji: '',
    title: t('vibe.tranquil'),
    description: t('vibe.tranquilDesc'),
    packages: ['Romance & Roses', 'Chill & Grill', 'Content Creator'],
    intensity: t('vibe.peaceful')
  },
  {
    id: 'explore',
    emoji: '',
    title: t('vibe.discovery'),
    description: t('vibe.discoveryDesc'),
    packages: ['Samaipata Sessions', 'Santa Cruz Sampler', 'Pure Custom VIP'],
    intensity: t('vibe.adventure')
  },
  {
    id: 'vip',
    emoji: '',
    title: t('vibe.exclusive'),
    description: t('vibe.exclusiveDesc'),
    packages: ['Pure Custom VIP', 'La Vida Loca', 'Content Creator'],
    intensity: t('vibe.premium')
  }
];

const VibeSelector = () => {
  const [selectedVibe, setSelectedVibe] = useState<string>('party');
  const { t } = useTranslation();
  const vibes = getVibes(t);

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            {t('vibe.title')} <span className="text-gray-700">{t('vibe.titleSpan')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            {t('vibe.subtitle')}
          </p>
        </div>

        {/* Vibe Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {vibes.map((vibe) => (
            <Button
              key={vibe.id}
              variant={selectedVibe === vibe.id ? "default" : "outline"}
              size="lg"
              className={`flex items-center gap-2 px-6 py-3 text-lg font-normal transition-all duration-300 ${
                selectedVibe === vibe.id
                  ? 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
              }`}
              onClick={() => setSelectedVibe(vibe.id)}
            >
              {vibe.title}
            </Button>
          ))}
        </div>

        {/* Active Vibe Content */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                {activeVibe.title} {t('vibe.titleSpan')}
              </h3>
              <div className="text-sm mb-4 text-gray-600 bg-gray-50 inline-block px-3 py-1 border border-gray-200">
                {activeVibe.intensity}
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 font-light leading-relaxed">
                {activeVibe.description}
              </p>
              <Link to={getVibeLink(activeVibe.id)}>
                <Button 
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 font-normal text-sm"
                >
                  {t('vibe.explore')} {activeVibe.title} {t('vibe.options')}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeVibe.packages.map((packageName, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 border border-gray-200 hover:shadow-sm transition-all duration-300 hover:border-gray-300"
                >
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    {packageName}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 font-light">
                    {t('vibe.perfectFor')} {activeVibe.title.toLowerCase()} {t('vibe.experience')}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-normal text-xs"
                    onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('vibe.viewDetails')}
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
