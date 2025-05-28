
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
    { to: '/why-us', label: 'Why Us' },
    { to: '/about', label: 'About' }
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-jungle-800">
            Santa Cruz Experience
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-jungle-700 hover:text-jungle-900 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-jungle-700 hover:text-jungle-900 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white w-fit"
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
