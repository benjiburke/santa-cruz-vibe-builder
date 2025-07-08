
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const languages = [
    { code: 'EN', label: 'English', flag: '🇺🇸' },
    { code: 'ES', label: 'Español', flag: '🇪🇸' },
    { code: 'ZH', label: '中文', flag: '🇨🇳' },
    { code: 'PT', label: 'Português', flag: '🇧🇷' }
  ];

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/party-vibes', label: t('nav.partyVibes') },
    { to: '/curated-experiences', label: t('nav.curatedExperiences') },
    { to: '/vacation-rentals', label: t('nav.vacationRentals') },
    { to: '/real-estate-services', label: t('nav.realEstateServices') },
    { to: '/vip', label: t('nav.vip') },
    { to: '/why-us', label: t('nav.whyUs') },
    { to: '/about', label: t('nav.about') }
  ];

  // Get current page name for mobile display
  const getCurrentPageName = () => {
    const currentPath = window.location.pathname;
    const currentNavLink = navLinks.find(link => link.to === currentPath);
    return currentNavLink ? currentNavLink.label : 'Home';
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="text-xl font-medium text-gray-900 tracking-tight">
            Santa Cruz Experience
          </Link>

          {/* Current Page Indicator for Mobile */}
          <div className="md:hidden text-sm text-gray-600 font-light">
            {getCurrentPageName()}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-gray-900 transition-colors font-normal text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-8 px-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 bg-white border border-gray-200 shadow-lg">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="cursor-pointer hover:bg-gray-50 px-3 py-2"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span className="text-sm">{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-normal px-4 py-2"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              {t('nav.whatsapp')}
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
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="border-t border-gray-100 pt-3 mt-3">
                <div className="px-2 mb-2">
                  <span className="text-xs text-gray-500 font-medium">Language</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded transition-colors ${
                        language === lang.code 
                          ? 'bg-gray-100 text-gray-900' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white w-fit text-sm font-normal px-4 py-2 mt-2"
                onClick={() => {
                  window.open('https://wa.me/1234567890', '_blank');
                  setIsOpen(false);
                }}
              >
                {t('nav.whatsapp')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
