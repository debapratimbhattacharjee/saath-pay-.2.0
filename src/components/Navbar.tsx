
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-saath-900">
                <span className="text-saath-600">Saath</span>Pay
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-saath-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-saath-600 transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-saath-600 transition-colors">
              Benefits
            </a>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-[57px] z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container px-4 py-6 space-y-4">
          <a
            href="#features"
            className="block py-2 text-gray-700 hover:text-saath-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="block py-2 text-gray-700 hover:text-saath-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#benefits"
            className="block py-2 text-gray-700 hover:text-saath-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <div className="pt-4 flex flex-col space-y-3">
            <Button variant="ghost" size="md" className="w-full justify-center">
              Log In
            </Button>
            <Button variant="primary" size="md" className="w-full justify-center">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
