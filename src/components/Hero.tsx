
import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { ArrowRight, CreditCard, Users, Receipt, Wallet } from 'lucide-react';
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
          
          {/* Right column - SaathPay Group Expense Management App Card */}
          <div className="relative h-[500px] flex justify-center items-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-radial from-cyan-400/10 to-transparent rounded-full animate-pulse-soft"></div>
            
            {/* SaathPay App Card Effect */}
            <div className="relative z-10 perspective-1000">
              <div className="credit-card w-[320px] h-[450px] bg-gradient-to-br from-saath-600 via-saath-500 to-saath-700 rounded-3xl shadow-xl transform rotate-y-[-15deg] rotate-x-[15deg] transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-black/20"></div>
                </div>
                
                {/* App Header */}
                <div className="absolute top-6 left-0 right-0 flex justify-between items-center px-6">
                  <div className="flex items-center">
                    <Wallet className="w-7 h-7 mr-2 text-white" />
                    <div className="text-white font-bold text-lg">SaathPay</div>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-white text-xs font-medium">
                    MVP
                  </div>
                </div>
                
                {/* Group Expense */}
                <div className="absolute top-[80px] left-0 right-0 px-5">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-white mr-2" />
                        <div className="text-white font-medium text-sm">Trip to Goa</div>
                      </div>
                      <div className="text-white/80 text-xs">4 members</div>
                    </div>
                    
                    <div className="h-px bg-white/20 my-2"></div>
                    
                    <div className="flex justify-between text-white mb-1">
                      <div className="text-sm">Total spent:</div>
                      <div className="font-semibold">₹12,800</div>
                    </div>
                    
                    <div className="flex justify-between text-white mb-2">
                      <div className="text-sm">Your share:</div>
                      <div className="font-semibold">₹3,200</div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-1.5 rounded-lg text-xs font-medium text-gray-800">
                        Settle up
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recent Transactions */}
                <div className="absolute top-[230px] left-0 right-0 px-5">
                  <div className="text-white/90 text-sm font-semibold mb-2 px-1">Recent Expenses</div>
                  
                  {/* Transaction Items */}
                  <div className="space-y-3">
                    {[
                      { name: "Dinner", amount: "₹2,400", icon: <Receipt className="w-4 h-4" /> },
                      { name: "Hotel Stay", amount: "₹6,000", icon: <Receipt className="w-4 h-4" /> },
                      { name: "Beach Activities", amount: "₹1,800", icon: <Receipt className="w-4 h-4" /> }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center mr-2">
                            {item.icon}
                          </div>
                          <div className="text-white text-sm">{item.name}</div>
                        </div>
                        <div className="text-white text-sm font-medium">{item.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom Action Bar */}
                <div className="absolute bottom-5 left-0 right-0 px-5">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full flex justify-around py-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/50 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Receipt className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl opacity-30 mix-blend-overlay"></div>
              </div>
              
              {/* Card reflection */}
              <div className="w-[280px] h-[40px] mt-2 mx-auto bg-gradient-to-b from-cyan-400/20 to-transparent rounded-[50%] blur-md"></div>
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
