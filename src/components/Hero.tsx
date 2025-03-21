
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight, CreditCard, Lock, PieChart } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
    <div ref={heroRef} className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-saath-50/80 to-transparent" />
        <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full bg-saath-100/50 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] rounded-full bg-saath-100/40 blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="max-w-lg">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-saath-100 text-saath-700 text-sm font-medium animate-on-scroll">
              <span className="mr-2">Exclusive Credit Card Benefits</span>
              <span className="flex h-2 w-2 rounded-full bg-saath-500"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              Bridge The Credit <span className="text-saath-600">Card Gap</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              Access exclusive credit card discounts without owning one. SaathPay provides virtual cards, helping you save while credit card owners improve their scores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowRight />}
                rightIcon={true}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">97%</p>
                <p className="text-sm text-gray-600">Cashback Match</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">100+</p>
                <p className="text-sm text-gray-600">Partners</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">0₹</p>
                <p className="text-sm text-gray-600">Joining Fee</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Credit card visual */}
          <div className="relative h-[500px] flex justify-center items-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-radial from-saath-100/50 to-transparent rounded-full animate-pulse-soft"></div>
            
            {/* Main card */}
            <div className="relative w-80 h-48 rounded-2xl bg-gradient-to-r from-saath-700 to-saath-900 text-white p-6 shadow-xl rotate-6 z-20 animate-float">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-saath-100">Virtual Card</p>
                  <p className="text-lg font-bold mt-1">SaathPay</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-saath-500/20 backdrop-blur-sm flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="mt-10">
                <p className="text-sm text-saath-100">Card Number</p>
                <p className="font-mono">•••• •••• •••• 4291</p>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <div className="w-10 h-10 rounded-full bg-saath-400/30 backdrop-blur-sm flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            {/* Background card 1 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 rounded-2xl bg-gradient-to-r from-saath-500 to-saath-700 text-white p-6 shadow-lg rotate-12 z-10 opacity-70"></div>
            
            {/* Background card 2 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 rounded-2xl bg-gradient-to-r from-saath-300 to-saath-500 text-white p-6 shadow-md rotate-[18deg] z-0 opacity-40"></div>
            
            {/* Floating elements */}
            <div className="absolute top-[30%] right-[5%] w-14 h-14 rounded-lg glass flex items-center justify-center shadow-lg z-30 animate-on-scroll animate-float" style={{ animationDelay: "0.8s" }}>
              <PieChart className="w-7 h-7 text-saath-600" />
            </div>
            
            <div className="absolute bottom-[20%] left-[10%] w-14 h-14 rounded-lg glass flex items-center justify-center shadow-lg z-30 animate-on-scroll animate-float" style={{ animationDelay: "1.2s", animationDuration: "5s" }}>
              <Lock className="w-7 h-7 text-saath-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
