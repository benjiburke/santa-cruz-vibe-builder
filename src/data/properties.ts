
export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  features: string[];
  image: string;
  description: string;
}

export const featuredProperties: Property[] = [
  {
    id: "luxury-penthouse",
    title: "Executive Penthouse",
    location: "Equipetrol, Santa Cruz",
    price: "$280K",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    area: "200m²",
    features: ["Pool", "Gym", "Concierge", "City Views", "Parking"],
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
    description: "Luxury penthouse in Santa Cruz's premier business district"
  },
  {
    id: "airbnb-investment",
    title: "Digital Nomad Villa",
    location: "Las Palmas, Santa Cruz",
    price: "$150K",
    type: "Investment",
    bedrooms: 2,
    bathrooms: 2,
    area: "120m²",
    features: ["Furnished", "High-Speed WiFi", "Pool", "Garden", "Airbnb Ready"],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
    description: "Turnkey investment property perfect for short-term rentals"
  },
  {
    id: "rural-retreat",
    title: "Eco-Tourism Ranch",
    location: "Samaipata Valley",
    price: "$320K",
    type: "Land + House",
    area: "5 hectares",
    features: ["Mountain Views", "Organic Farm", "Guest Cabins", "Natural Springs"],
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=300&fit=crop",
    description: "Stunning rural property perfect for eco-tourism or retreat center"
  },
  {
    id: "city-apartment",
    title: "Modern City Apartment",
    location: "Centro, Santa Cruz",
    price: "$95K",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    area: "85m²",
    features: ["Renovated", "AC", "Balcony", "Near Shopping", "Public Transport"],
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop",
    description: "Move-in ready apartment in the heart of Santa Cruz"
  }
];

export const investmentOpportunities = [
  {
    id: "commercial-plaza",
    title: "Commercial Plaza Development",
    location: "Norte, Santa Cruz",
    price: "$1.2M",
    type: "Commercial",
    area: "2,500m²",
    features: ["High Traffic", "Multiple Units", "Parking", "Growth Area"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    description: "Prime commercial development opportunity in expanding area"
  }
];
