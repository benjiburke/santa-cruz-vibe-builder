
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-4xl font-bold text-jungle-800 mb-4">404</h1>
          <p className="text-xl text-jungle-600 mb-6">Oops! Page not found</p>
          <p className="text-jungle-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-jungle-600 hover:bg-jungle-700">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-jungle-600 text-jungle-600 hover:bg-jungle-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
