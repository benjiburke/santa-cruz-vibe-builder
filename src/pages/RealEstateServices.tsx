import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Diamond, Building, Shield, FileText, MapPin, Users, Globe, TrendingUp, ArrowRight, Key, Home, Plane, CreditCard, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProperties, investmentOpportunities } from '@/data/properties';

const RealEstateServices = () => {
  const buyerServices = [
    {
      title: "Title Verification & Legal Due Diligence",
      description: "Comprehensive property title research and legal verification to ensure secure transactions",
      icon: Shield,
      features: ["Property history analysis", "Legal compliance verification", "Risk assessment reports"]
    },
    {
      title: "NIT Setup & Tax Guidance",
      description: "Complete assistance with tax identification setup and ongoing tax compliance for foreign buyers",
      icon: FileText,
      features: ["NIT registration process", "Tax obligation guidance", "Ongoing compliance support"]
    },
    {
      title: "Property Tours & Market Analysis",
      description: "Curated property viewings with detailed market insights and investment potential analysis",
      icon: Building,
      features: ["Exclusive property access", "Market trend analysis", "Investment ROI projections"]
    }
  ];

  const rentalServices = [
    {
      title: "Property Management Services",
      description: "Full-service property management for landlords and investors seeking hands-off rental income",
      icon: Home,
      features: ["Tenant screening & placement", "Monthly rent collection", "Property maintenance coordination", "Financial reporting"]
    },
    {
      title: "Tenant Placement & Screening",
      description: "Professional tenant screening and placement services to ensure reliable, long-term renters",
      icon: Users,
      features: ["Background & credit checks", "Income verification", "Reference validation", "Legal compliance"]
    },
    {
      title: "Rental Market Analysis",
      description: "Data-driven rental pricing and market analysis to maximize your property's rental potential",
      icon: TrendingUp,
      features: ["Competitive market analysis", "Rental rate optimization", "Occupancy forecasting", "Investment performance tracking"]
    }
  ];

  const investmentPackages = [
    {
      name: "Digital Nomad Portfolio",
      description: "Turnkey Airbnb properties in prime Santa Cruz locations",
      price: "From $150K",
      features: ["Fully furnished properties", "Airbnb management setup", "Guest experience optimization", "Local co-host partnerships"],
      ideal: "Remote workers & location-independent professionals"
    },
    {
      name: "Strategic Investment Properties",
      description: "High-yield rental properties with professional management",
      price: "From $80K",
      features: ["Rental market analysis", "Tenant screening services", "Property management setup", "Legal structure optimization"],
      ideal: "Serious real estate investors"
    },
    {
      name: "Rural & Development Land",
      description: "Prime land opportunities for retreats, farming, or eco-projects",
      price: "Custom Pricing",
      features: ["Land suitability analysis", "Development permit guidance", "Environmental assessments", "Infrastructure planning"],
      ideal: "Entrepreneurs & lifestyle investors"
    }
  ];

  const targetClients = [
    {
      group: "Bolivians Abroad",
      description: "Citizens in Spain, USA, or elsewhere seeking home country investments",
      icon: Globe
    },
    {
      group: "Latin American Investors",
      description: "Argentines, Brazilians seeking stable real estate opportunities",
      icon: TrendingUp
    },
    {
      group: "Digital Nomads & Retirees",
      description: "Location-independent professionals establishing roots in Santa Cruz",
      icon: Users
    }
  ];

  const relocationServices = [
    {
      title: "Residency & Investment Visa Guidance",
      description: "Complete support for foreigners seeking Bolivian residency through property investment",
      icon: FileText,
      features: ["Investment visa pathways", "Legal partner referrals", "NIT & municipal registration", "Ongoing compliance support"]
    },
    {
      title: "Banking & Financial Setup",
      description: "Navigate Bolivia's banking system with local expertise and trusted partner introductions",
      icon: CreditCard,
      features: ["Bank account opening assistance", "Credit establishment guidance", "Financial service introductions", "Currency exchange guidance"]
    },
    {
      title: "Relocation Concierge Services",
      description: "Complete onboarding support for new residents settling into Bolivian life",
      icon: Heart,
      features: ["SIM card & connectivity setup", "Health insurance coordination", "Local service introductions", "Cultural orientation support"]
    }
  ];

  const handlePropertyInquiry = (propertyTitle: string) => {
    const message = `Hi! I'm interested in learning more about the ${propertyTitle} property. Can you provide more details?`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-onyx-900 via-midnight-800 to-onyx-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Diamond className="w-12 h-12 text-gold-400 mx-auto mb-8" />
          <Badge className="mb-8 bg-gold-400/10 text-gold-400 border-gold-400/20 text-sm font-light px-6 py-2">
            Sales • Investments • Rentals • Relocation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight tracking-wide">
            Real Estate Services
            <br />
            <span className="text-gold-400">& Relocation Support</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            From property acquisition to seamless relocation. Navigate Bolivia's real estate market and immigration 
            process with comprehensive legal guidance, local expertise, and trusted partner networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400/40 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Curated selection of premium properties available for purchase or rent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.slice(0, 3).map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                type={property.type}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                features={property.features}
                image={property.image}
                onInquire={() => handlePropertyInquiry(property.title)}
              />
            ))}
          </div>
          
          {/* Investment Opportunities */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Investment Opportunities
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentOpportunities.map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                type={property.type}
                area={property.area}
                features={property.features}
                image={property.image}
                onInquire={() => handlePropertyInquiry(property.title)}
              />
            ))}
            {featuredProperties.slice(3).map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                type={property.type}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                features={property.features}
                image={property.image}
                onInquire={() => handlePropertyInquiry(property.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onyx-800/40 to-midnight-800/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Comprehensive Buyer Protection
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Safe, legal, and profitable property acquisition with full transparency and local expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyerServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                onButtonClick={() => window.open('https://wa.me/1234567890', '_blank')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rental Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Key className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Professional Rental Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Complete property management and rental services for landlords and property investors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rentalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                buttonText="Get Started"
                onButtonClick={() => window.open('https://wa.me/1234567890', '_blank')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Relocation & Immigration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Plane className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Relocation & Immigration Support
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Seamless transition from property purchase to permanent relocation with trusted legal partnerships and local expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {relocationServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                buttonText="Get Support"
                onButtonClick={() => window.open('https://wa.me/1234567890', '_blank')}
              />
            ))}
          </div>
          
          {/* Integration Notice */}
          <div className="bg-gradient-to-br from-gold-600/10 to-gold-400/10 border border-gold-400/20 p-8 text-center backdrop-blur-sm">
            <Globe className="w-8 h-8 text-gold-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-4">Integrated Investment Pathway</h3>
            <p className="text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Our real estate investments can qualify for Bolivia's investment visa programs. We coordinate with trusted 
              immigration lawyers to create a seamless path from property purchase to permanent residency.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onyx-800/40 to-midnight-800/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Investment Packages
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Structured investment opportunities designed for sophisticated international investors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentPackages.map((pkg, index) => (
              <ServiceCard
                key={index}
                title={pkg.name}
                description={pkg.description}
                price={pkg.price}
                features={pkg.features}
                icon={Building}
                buttonText="Learn More"
                onButtonClick={() => window.open('https://wa.me/1234567890', '_blank')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-onyx-800/40 to-midnight-800/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Specialized expertise for international investors seeking Bolivian real estate opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetClients.map((client, index) => (
              <div key={index} className="text-center">
                <client.icon className="w-12 h-12 text-gold-400 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-white mb-4 tracking-wide">{client.group}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-gold-400 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
            Legal Compliance Guaranteed
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
            Navigate Bolivia's property laws with confidence. We ensure all transactions comply with local regulations, 
            including restrictions on border zone properties and foreign ownership requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border border-gold-400/20 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">✓ Permitted Areas</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Urban properties in Santa Cruz, commercial real estate, and rural land outside designated border zones.
              </p>
            </div>
            <div className="bg-gradient-to-br from-onyx-800/50 to-midnight-800/50 border border-gold-400/20 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">✓ Full Documentation</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Complete legal documentation, title verification, and ongoing compliance monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold-600/20 to-gold-400/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            From Investment to Relocation
          </h2>
          <p className="text-xl mb-10 text-gray-300 font-light leading-relaxed">
            Complete support for international clients seeking both property investment and permanent relocation to Bolivia.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/intake-form">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-10 py-4 font-medium rounded-none transition-all duration-300"
              >
                Start Your Investment Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-400/50 text-gold-400 hover:bg-gold-400/10 hover:border-gold-400 px-10 py-4 font-medium rounded-none transition-all duration-300"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-onyx-900/80 backdrop-blur-sm text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gold-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <Diamond className="w-8 h-8 text-gold-400 mx-auto mb-6" />
            <h3 className="text-2xl font-light mb-6 text-gold-400">Diamond Santa Cruz Real Estate</h3>
            <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Your trusted partner for sophisticated real estate investments in Bolivia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-medium rounded-none transition-all duration-300"
              >
                WhatsApp Consultation
              </button>
              <Link to="/intake-form">
                <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 font-medium rounded-none transition-all duration-300">
                  Investment Inquiry
                </button>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gold-400/20 pt-12">
            <p className="text-gray-400 text-sm font-light">
              © 2024 Diamond Santa Cruz Real Estate. Legal property investments in Bolivia.
            </p>
            <p className="text-gray-500 text-xs mt-2 font-light">
              Professional. Compliant. Profitable.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateServices;
