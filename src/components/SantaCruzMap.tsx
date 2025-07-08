import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const SantaCruzMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-63.1812, -17.7863], // Santa Cruz, Bolivia coordinates
      zoom: 10,
      pitch: 45,
    });

    // Add a marker for Santa Cruz
    new mapboxgl.Marker({
      color: '#374151'
    })
    .setLngLat([-63.1812, -17.7863])
    .setPopup(new mapboxgl.Popup().setHTML('<div class="text-center p-2"><strong>Santa Cruz de la Sierra</strong><br/>Bolivia</div>'))
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Smooth zoom on load
    map.current.on('load', () => {
      map.current?.flyTo({
        center: [-63.1812, -17.7863],
        zoom: 12,
        duration: 3000
      });
    });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-96 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
      {showTokenInput && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <MapPin className="w-8 h-8 text-gray-700 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">View Santa Cruz Location</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter your Mapbox public token to view our location in Santa Cruz, Bolivia.
              Get your token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">mapbox.com</a>
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="pk.eyJ1..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleTokenSubmit} size="sm">
                Show Map
              </Button>
            </div>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default SantaCruzMap;