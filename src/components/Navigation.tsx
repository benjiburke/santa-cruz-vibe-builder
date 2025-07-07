
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/party-vibes', label: 'Party Vibes' },
    { to: '/curated-experiences', label: 'Curated Experiences' },
    { to: '/vacation-rentals', label: 'Vacation Rentals' },
    { to: '/real-estate-services', label: 'Real Estate Services' },
    { to: '/why-us', label: 'Why Us' },
    { to: '/about', label: 'About' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="text-xl font-medium text-gray-900 tracking-tight">
            Santa Cruz Experience
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-gray-900 transition-colors font-normal text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-normal px-4 py-2"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-3">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-gray-900 transition-colors font-normal text-sm px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white w-fit text-sm font-normal px-4 py-2 mt-2"
                onClick={() => {
                  window.open('https://wa.me/1234567890', '_blank');
                  setIsOpen(false);
                }}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
