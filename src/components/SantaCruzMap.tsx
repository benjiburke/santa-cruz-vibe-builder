import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { MapPin, ZoomIn, PartyPopper, Trees, Hotel, Camera } from 'lucide-react';

const SantaCruzMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'party' | 'nature' | 'luxury' | 'tours'>('all');

  // Define luxury venues and attractions in Santa Cruz
  const venues = [
    {
      id: 'santa-cruz-center',
      name: 'Santa Cruz de la Sierra',
      type: 'city',
      coordinates: [-63.1812, -17.7863],
      description: 'Economic Capital of Bolivia',
      category: 'luxury'
    },
    {
      id: 'la-paz',
      name: 'La Paz',
      type: 'city', 
      coordinates: [-68.1193, -16.5000],
      description: 'Administrative Capital',
      category: 'tours'
    },
    {
      id: 'equipetrol',
      name: 'Equipetrol District',
      type: 'luxury',
      coordinates: [-63.1650, -17.7650],
      description: 'Premium shopping and dining district',
      category: 'luxury'
    },
    {
      id: 'amboro-park',
      name: 'Amboró National Park',
      type: 'nature',
      coordinates: [-63.7000, -17.8500],
      description: 'Pristine rainforest and wildlife sanctuary',
      category: 'nature'
    },
    {
      id: 'samaipata',
      name: 'Samaipata',
      type: 'nature',
      coordinates: [-63.8667, -18.1833],
      description: 'Mountain retreat with ancient ruins',
      category: 'nature'
    },
    {
      id: 'las-gamas',
      name: 'Las Gamas Nightlife',
      type: 'party',
      coordinates: [-63.1700, -17.7700],
      description: 'Exclusive nightlife and entertainment',
      category: 'party'
    }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with the provided token
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuYnVya2U5MyIsImEiOiJjbWN1NmY2dTAwZGcyMmtvaXg1NXphOTNtIn0.nsV1Rp_mlZShFkI9QpOv1A';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-60.0, -15.0], // South America center to show Bolivia in context
      zoom: 3.5, // Show more of South America continent
      pitch: 0,
    });

    // Add interactive markers for each venue
    venues.forEach(venue => {
      // Color based on category
      const getMarkerColor = (category: string) => {
        switch (category) {
          case 'party': return '#D4AF37'; // Gold
          case 'nature': return '#1C2521'; // Emerald Green  
          case 'luxury': return '#1A2A44'; // Midnight Navy
          case 'tours': return '#333333'; // Deep Charcoal
          default: return '#9CA3AF';
        }
      };

      const marker = new mapboxgl.Marker({
        color: getMarkerColor(venue.category)
      })
      .setLngLat(venue.coordinates as [number, number]);

      // Create interactive popup
      const popup = new mapboxgl.Popup({ 
        closeButton: true,
        closeOnClick: false,
        className: 'custom-popup'
      }).setHTML(`
        <div class="p-3 min-w-48">
          <h3 class="font-semibold text-gray-900 mb-2">${venue.name}</h3>
          <p class="text-sm text-gray-600 mb-2">${venue.description}</p>
          <span class="inline-block px-2 py-1 text-xs rounded-full" 
                style="background-color: ${getMarkerColor(venue.category)}20; color: ${getMarkerColor(venue.category)}">
            ${venue.category.charAt(0).toUpperCase() + venue.category.slice(1)}
          </span>
        </div>
      `);

      marker.setPopup(popup);
      
      // Show/hide markers based on selected category
      if (selectedCategory === 'all' || selectedCategory === venue.category) {
        marker.addTo(map.current!);
      }
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add hover effect for interactivity
    map.current.on('mouseenter', () => {
      map.current!.getCanvas().style.cursor = 'grab';
    });

    map.current.on('mousedown', () => {
      map.current!.getCanvas().style.cursor = 'grabbing';
    });

    map.current.on('mouseup', () => {
      map.current!.getCanvas().style.cursor = 'grab';
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [selectedCategory]);

  const zoomToSantaCruz = () => {
    if (!map.current) return;
    
    map.current.flyTo({
      center: [-63.1812, -17.7863],
      zoom: 12,
      pitch: 45,
      duration: 2000,
      essential: true
    });
    setIsZoomedIn(true);
  };

  const zoomToVenue = (coordinates: [number, number], name: string) => {
    if (!map.current) return;
    
    map.current.flyTo({
      center: coordinates,
      zoom: 14,
      pitch: 60,
      duration: 1500,
      essential: true
    });
    setIsZoomedIn(true);
  };

  const zoomToBolivia = () => {
    if (!map.current) return;
    
    map.current.flyTo({
      center: [-60.0, -15.0],
      zoom: 3.5,
      pitch: 0,
      duration: 2000,
      essential: true
    });
    setIsZoomedIn(false);
  };

  return (
    <div className="relative w-full h-96 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Category Filter */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <div className="flex gap-1 p-1 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
          <Button
            onClick={() => setSelectedCategory('all')}
            size="sm"
            variant={selectedCategory === 'all' ? 'default' : 'ghost'}
            className="h-8 px-2 text-xs"
          >
            All
          </Button>
          <Button
            onClick={() => setSelectedCategory('party')}
            size="sm"
            variant={selectedCategory === 'party' ? 'default' : 'ghost'}
            className="h-8 px-2 text-xs"
          >
            <PartyPopper className="w-3 h-3 mr-1" />
            Party
          </Button>
          <Button
            onClick={() => setSelectedCategory('nature')}
            size="sm"
            variant={selectedCategory === 'nature' ? 'default' : 'ghost'}
            className="h-8 px-2 text-xs"
          >
            <Trees className="w-3 h-3 mr-1" />
            Nature
          </Button>
          <Button
            onClick={() => setSelectedCategory('luxury')}
            size="sm"
            variant={selectedCategory === 'luxury' ? 'default' : 'ghost'}
            className="h-8 px-2 text-xs"
          >
            <Hotel className="w-3 h-3 mr-1" />
            Luxury
          </Button>
        </div>
        
        {/* Zoom Controls */}
        {!isZoomedIn ? (
          <Button
            onClick={zoomToSantaCruz}
            size="sm"
            className="bg-white/90 hover:bg-white text-gray-900 border border-gray-200 shadow-sm"
          >
            <MapPin className="w-3 h-3 mr-2" />
            Focus Santa Cruz
          </Button>
        ) : (
          <Button
            onClick={zoomToBolivia}
            size="sm"
            className="bg-white/90 hover:bg-white text-gray-900 border border-gray-200 shadow-sm"
          >
            <ZoomIn className="w-3 h-3 mr-2" />
            Show South America
          </Button>
        )}
      </div>
      
      {/* Quick Access Venues */}
      {isZoomedIn && (
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-1 max-w-48">
          {venues.filter(v => selectedCategory === 'all' || selectedCategory === v.category).slice(0, 3).map(venue => (
            <Button
              key={venue.id}
              onClick={() => zoomToVenue(venue.coordinates as [number, number], venue.name)}
              size="sm"
              variant="outline"
              className="bg-white/90 hover:bg-white text-gray-900 border border-gray-200 shadow-sm text-xs justify-start"
            >
              <Camera className="w-3 h-3 mr-2" />
              {venue.name}
            </Button>
          ))}
        </div>
      )}
      
      {/* Location Info */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-gray-200 shadow-sm">
        <div className="text-xs font-medium text-gray-900">
          {isZoomedIn ? 'Santa Cruz de la Sierra' : 'Bolivia, South America'}
        </div>
        <div className="text-xs text-gray-600">
          {isZoomedIn ? `Showing ${selectedCategory === 'all' ? 'All' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Venues` : 'Heart of the Continent'}
        </div>
      </div>
    </div>
  );
};

export default SantaCruzMap;