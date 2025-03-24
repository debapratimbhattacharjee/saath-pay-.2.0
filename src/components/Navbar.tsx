
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

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
          ? 'py-3 backdrop-blur-md shadow-sm dark:bg-gray-900/80 bg-white/80' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="saath-brand-text">Saath</span>
                <span className="text-foreground">Pay</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/90 hover:text-primary transition-colors">
              Home
            </Link>
            <a href="#features" className="text-foreground/90 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground/90 hover:text-primary transition-colors">
              How It Works
            </a>
            <Link to="/shop" className="text-foreground/90 hover:text-primary transition-colors flex items-center gap-1">
              <ShoppingBag size={18} />
              Shop
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="dark:text-white/90 dark:hover:bg-white/10">
                Login
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                className={theme === 'dark' ? 'bg-cyan-500 hover:bg-cyan-600' : ''}
              >
                Sign Up
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/shop" className="text-foreground/90 hover:text-primary transition-colors">
              <ShoppingBag size={20} />
            </Link>
            <ThemeToggle />
            <button
              className="text-foreground focus:outline-none"
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
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-[57px] z-50 transform transition-transform duration-300 ease-in-out dark:bg-gray-900 bg-white shadow-lg',
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container px-4 py-6 space-y-4">
          <Link
            to="/"
            className="block py-2 text-foreground/90 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#features"
            className="block py-2 text-foreground/90 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="block py-2 text-foreground/90 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <Link
            to="/shop"
            className="block py-2 text-foreground/90 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <div className="pt-4 flex flex-col space-y-3">
            <Button variant="ghost" size="md" className="w-full justify-center dark:text-white dark:hover:bg-white/10">
              Login
            </Button>
            <Button 
              variant="primary" 
              size="md" 
              className={cn(
                "w-full justify-center",
                theme === 'dark' ? 'bg-cyan-500 hover:bg-cyan-600' : ''
              )}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
