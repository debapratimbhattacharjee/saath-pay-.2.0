
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    // Check if user is authenticated
    const checkAuth = () => {
      const userData = localStorage.getItem('saathpay_user');
      if (userData) {
        try {
          const user = JSON.parse(userData);
          setIsAuthenticated(user.isAuthenticated || false);
        } catch (error) {
          setIsAuthenticated(false);
        }
      }
    };

    checkAuth();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('saathpay_user');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
<header
  className={cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
    isScrolled 
      ? 'py-3 backdrop-blur-md shadow-sm dark:bg-gray-900/80 bg-slate-500' 
      : 'py-5 bg-transparent'
  )}
>
  <div className="container-custom">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className={theme === 'dark' ? 'saath-brand-text' : 'text-sky-600'}>Saath</span>
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
              
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard">
                    <Button variant="ghost" size="sm" className="dark:text-white/90 dark:hover:bg-white/10">
                      <User size={16} className="mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleLogout}
                    className="dark:text-white/90 dark:hover:bg-white/10"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" size="sm" className="dark:text-white/90 dark:hover:bg-white/10">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button 
                      variant="primary" 
                      size="sm"
                      className={theme === 'dark' ? 'bg-cyan-500 hover:bg-cyan-600' : ''}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
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
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    variant="ghost" 
                    size="md" 
                    className="w-full justify-center dark:text-white dark:hover:bg-white/10"
                  >
                    <User size={16} className="mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="md" 
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full justify-center dark:text-white dark:hover:bg-white/10"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="md" className="w-full justify-center dark:text-white dark:hover:bg-white/10">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
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
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
