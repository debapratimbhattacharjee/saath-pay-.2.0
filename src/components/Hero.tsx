
import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { ArrowRight, CreditCard, BadgeIndianRupee } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Manage Your Expenses",
      subtitle: "with SaathPay",
      description: "Split bills easily, track group expenses, and settle payments effortlessly."
    },
    {
      title: "Virtual Credit Cards",
      subtitle: "with SaathPay",
      description: "Access exclusive credit card discounts without owning a credit card."
    },
    {
      title: "Improve Credit Score",
      subtitle: "with SaathPay",
      description: "Help credit card owners improve their scores while earning incentives."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      className={cn(
        "relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden",
        theme === 'dark' ? 'dark-gradient-bg' : 'bg-white'
      )}
    >
      {/* Background elements for dark mode */}
      {theme === 'dark' && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-950/30 to-transparent" />
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full bg-blue-700/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[60%] rounded-full bg-cyan-500/5 blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
      )}
      
      {/* Background elements for light mode */}
      {theme === 'light' && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-saath-50/80 to-transparent" />
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full bg-saath-100/50 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[60%] rounded-full bg-saath-100/40 blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="max-w-lg">
            <div className="animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {slides[activeSlide].title} <br />
                <span className={theme === 'dark' ? 'saath-brand-text' : 'text-saath-600'}>
                  {slides[activeSlide].subtitle}
                </span>
              </h1>
              
              <p className="text-lg text-foreground/80 mb-8">
                {slides[activeSlide].description}
              </p>
            </div>
            
            <div className="flex space-x-2 mb-8">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`dot-indicator ${index === activeSlide ? 'active' : 'inactive'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saath-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white phone-input"
                />
              </div>
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowRight />}
                rightIcon={true}
                className={theme === 'dark' ? 'bg-cyan-500 hover:bg-cyan-600' : ''}
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Right column - Credit Card 3D visual */}
          <div className="relative h-[500px] flex justify-center items-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-radial from-cyan-400/10 to-transparent rounded-full animate-pulse-soft"></div>
            
            {/* 3D Credit Card Effect */}
            <div className="relative z-10 perspective-1000">
              <div className="credit-card w-[320px] h-[200px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-xl shadow-xl transform rotate-y-[-15deg] rotate-x-[15deg] transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0">
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-black/20"></div>
                </div>
                
                {/* Card Chip */}
                <div className="absolute top-8 left-6">
                  <div className="w-12 h-10 bg-yellow-300/90 rounded-md flex items-center justify-center overflow-hidden">
                    <div className="w-full h-[1px] bg-yellow-700/30"></div>
                    <div className="w-full h-[1px] bg-yellow-700/30 mt-2"></div>
                    <div className="w-full h-[1px] bg-yellow-700/30 mt-2"></div>
                    <div className="absolute w-full h-full grid grid-cols-3 gap-[1px]">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-yellow-700/20"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Card Number */}
                <div className="absolute top-[85px] left-6 right-6">
                  <div className="flex justify-between">
                    <div className="flex space-x-4">
                      <div className="text-white text-xl font-mono">XXXX</div>
                      <div className="text-white text-xl font-mono">XXXX</div>
                      <div className="text-white text-xl font-mono">XXXX</div>
                      <div className="text-white text-xl font-mono">XXXX</div>
                    </div>
                  </div>
                </div>
                
                {/* Card Holder */}
                <div className="absolute bottom-6 left-6">
                  <div className="text-white/80 text-xs mb-1">CARD HOLDER</div>
                  <div className="text-white text-sm font-medium">SAATH PAY</div>
                </div>
                
                {/* Card Logo */}
                <div className="absolute bottom-6 right-6">
                  <div className="flex items-center">
                    <CreditCard className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl opacity-30 mix-blend-overlay"></div>
              </div>
              
              {/* Card reflection */}
              <div className="w-[320px] h-[40px] mt-2 mx-auto bg-gradient-to-b from-cyan-400/30 to-transparent rounded-[50%] blur-md"></div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-[20%] right-[10%] w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 blur-xl opacity-40"></div>
            <div className="absolute bottom-[30%] left-[15%] w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 blur-xl opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export default Hero;
