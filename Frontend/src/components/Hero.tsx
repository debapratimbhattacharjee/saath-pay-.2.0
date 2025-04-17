import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { ArrowRight, CreditCard, Lock, PieChart } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const [arrowPosition, setArrowPosition] = useState(-100);

  const slides = [
    {
      title: "Virtual Credit Cards",
      subtitle: "with SaathPay",
      description: "Access exclusive credit card discounts without owning one."
    },
    {
      title: "Expense Management",
      subtitle: "with SaathPay",
      description: "Split bills easily and track group expenses effortlessly."
    },
    {
      title: "Credit Score Boost",
      subtitle: "with SaathPay",
      description: "Help card owners improve their scores while you save."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const animateArrow = () => {
      setArrowPosition(prev => {
        if (prev > 400) return -100;
        return prev + 2;
      });
    };

    const arrowInterval = setInterval(animateArrow, 20);
    return () => clearInterval(arrowInterval);
  }, []);

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
        theme === 'dark' ? 'bg-background' : 'bg-white'
      )}
    >
      {/* Background elements */}
      {theme === 'dark' ? (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-950/30 to-transparent" />
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full bg-blue-700/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[60%] rounded-full bg-cyan-500/5 blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
      ) : (
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
            
            <div className="flex flex-col sm:flex-row  animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
               
              </div>
               <Link to="/signup">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowRight />}
                rightIcon={true}
                className={theme === 'dark' ? 'bg-cyan-500 hover:bg-cyan-600' : ''}
              >
                Get Started
              </Button>
              </Link>
            </div>
          </div>
          
          {/* Right column - Card with consistent styling */}
          <div className="relative h-[500px] flex justify-center items-center">
            <div className="relative w-full h-full perspective-1000">
              {/* Main card with consistent styling */}
              <div 
                className="absolute w-80 h-48 rounded-2xl p-6 z-20 bg-gradient-to-br from-saath-600 via-saath-500 to-saath-700 shadow-xl"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(3deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {/* Card content */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-black/20"></div>
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-saath-100">Virtual Card</p>
                      <p className="text-lg font-bold">SaathPay</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-saath-500/20 backdrop-blur-sm flex items-center justify-center">
                      <CreditCard className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-xs text-saath-100">Card Number</p>
                    <p className="font-mono text-sm">•••• •••• •••• 4291</p>
                  </div>
                  
                  <div className="absolute bottom-5 right-5">
                    <div className="w-10 h-10 rounded-full bg-saath-400/30 backdrop-blur-sm flex items-center justify-center">
                      <Lock className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                {/* Animated arrow effect */}
                <div 
                  className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl"
                  style={{ pointerEvents: 'none' }}
                >
                  <div 
                    className="absolute h-0.5 bg-gradient-to-r from-transparent to-cyan-300 rounded-full"
                    style={{
                      width: '60px',
                      left: `${arrowPosition}px`,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      opacity: arrowPosition > -20 && arrowPosition < 300 ? 0.8 : 0,
                      transition: 'opacity 0.3s',
                      filter: 'drop-shadow(0 0 4px rgba(34, 211, 238, 0.7))'
                    }}
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div 
                className="absolute top-[30%] right-[5%] w-14 h-14 rounded-lg glass flex items-center justify-center shadow-lg z-30 animate-float"
                style={{ animationDelay: "0.8s" }}
              >
                <PieChart className="w-6 h-6 text-saath-600" />
              </div>
              
              <div 
                className="absolute bottom-[20%] left-[10%] w-14 h-14 rounded-lg glass flex items-center justify-center shadow-lg z-30 animate-float"
                style={{ 
                  animationDelay: "1.2s",
                  animationDuration: "5s"
                }}
              >
                <Lock className="w-6 h-6 text-saath-600" />
              </div>
            </div>
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