import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const SantaCruzMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with the provided token
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuYnVya2U5MyIsImEiOiJjbWN1NmY2dTAwZGcyMmtvaXg1NXphOTNtIn0.nsV1Rp_mlZShFkI9QpOv1A';
    
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

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-96 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default SantaCruzMap;