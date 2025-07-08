
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const EventsPreview = () => {
  const { t } = useTranslation();

  const featuredEvents = [
    {
      id: 'tropical-tech-nights',
      title: t('event.tropicalTech'),
      emoji: '🎧',
      description: t('event.tropicalTechDesc'),
      date: t('event.every3rd'),
      price: `${t('event.from')} $80${t('event.person')}`,
      badge: t('event.badgeMonthly')
    },
    {
      id: 'secret-rave-series',
      title: t('event.secretRave'),
      emoji: '🎭',
      description: t('event.secretRaveDesc'),
      date: t('event.newLocation'),
      price: `${t('event.from')} $120${t('event.person')}`,
      badge: t('event.badgeSecret')
    },
    {
      id: 'girlboss-retreats',
      title: t('event.girlboss'),
      emoji: '👑',
      description: t('event.girlbossDesc'),
      date: t('event.monthly'),
      price: `${t('event.from')} $650${t('event.person')}`,
      badge: t('event.badgeExclusive')
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            {t('events.title')}
          </h2>
          <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-4xl">{event.emoji}</span>
                </div>
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gray-900 text-white font-normal text-xs">
                    {event.badge}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-light text-gray-900 mb-2">
                  {event.title}
                </CardTitle>
                <p className="text-gray-600 text-sm font-light">{event.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <Calendar className="h-3 w-3" />
                  {event.date}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-4">
                  {event.price}
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white text-xs font-normal"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  {t('events.joinWaitlist')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/events">
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-white font-normal group"
            >
              {t('events.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
