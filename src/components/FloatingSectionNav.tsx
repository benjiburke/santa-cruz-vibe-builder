import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown, Sparkles, Package, Calendar, MessageSquare } from 'lucide-react';

const FloatingSectionNav = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'vibes', label: 'Vibes', icon: Sparkles },
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'book', label: 'Book Trip', icon: MessageSquare }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show navigation after scrolling past hero section
      setIsVisible(scrollY > 400);

      // Determine active section
      const sectionOffsets = sections.map(section => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          offsetTop: element ? element.offsetTop - 100 : 0
        };
      });

      const currentSection = sectionOffsets
        .reverse()
        .find(section => scrollY >= section.offsetTop);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-40 animate-fade-in">
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-3 md:p-2">
        <div className="flex flex-col space-y-2 md:space-y-1">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Button
                key={section.id}
                size="sm"
                variant={activeSection === section.id ? "default" : "ghost"}
                className={`w-14 h-14 md:w-12 md:h-12 rounded-xl md:rounded-full text-xs font-light transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => scrollToSection(section.id)}
                title={section.label}
              >
                <IconComponent className="h-5 w-5 md:h-4 md:w-4" />
              </Button>
            );
          })}
        </div>
        
        {/* Quick scroll to top/bottom */}
        <div className="border-t border-gray-200 mt-3 md:mt-2 pt-3 md:pt-2 flex flex-col space-y-2 md:space-y-1">
          <Button
            size="sm"
            variant="ghost"
            className="w-14 h-10 md:w-12 md:h-8 rounded-xl md:rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to top"
          >
            <ChevronUp className="h-5 w-5 md:h-4 md:w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="w-14 h-10 md:w-12 md:h-8 rounded-xl md:rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            title="Go to bottom"
          >
            <ChevronDown className="h-5 w-5 md:h-4 md:w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingSectionNav;