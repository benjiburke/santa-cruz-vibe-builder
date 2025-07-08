import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { MapPin, ZoomIn } from 'lucide-react';

const SantaCruzMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

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

    // Add a marker for Santa Cruz
    new mapboxgl.Marker({
      color: '#374151'
    })
    .setLngLat([-63.1812, -17.7863])
    .setPopup(new mapboxgl.Popup().setHTML('<div class="text-center p-2"><strong>Santa Cruz de la Sierra</strong><br/>Economic Capital of Bolivia</div>'))
    .addTo(map.current);

    // Add a marker for La Paz (capital) for context
    new mapboxgl.Marker({
      color: '#9CA3AF'
    })
    .setLngLat([-68.1193, -16.5000])
    .setPopup(new mapboxgl.Popup().setHTML('<div class="text-center p-2"><strong>La Paz</strong><br/>Administrative Capital</div>'))
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

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
      
      {/* Zoom Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
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
      
      {/* Location Info */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-gray-200 shadow-sm">
        <div className="text-xs font-medium text-gray-900">
          {isZoomedIn ? 'Santa Cruz de la Sierra' : 'Bolivia, South America'}
        </div>
        <div className="text-xs text-gray-600">
          {isZoomedIn ? 'Our Location' : 'Heart of the Continent'}
        </div>
      </div>
    </div>
  );
};

export default SantaCruzMap;