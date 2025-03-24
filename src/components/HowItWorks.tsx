import React, { useEffect } from 'react';
import { Check, CreditCard, ShoppingBag, ArrowRight, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';

const steps = [
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Select Your Purchase",
    description: "Find the product you want to buy across any e-commerce platform and check for available credit card discounts.",
    delay: 100,
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Get a Virtual Card",
    description: "SaathPay provides a virtual credit card with the best available discount for your specific purchase.",
    delay: 200,
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: "Make Your Payment",
    description: "Pay the full amount upfront through SaathPay and complete your purchase using the virtual card.",
    delay: 300,
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Receive Cashback",
    description: "The cashback equivalent to the credit card discount is credited to your SaathPay wallet within 24-48 hours.",
    delay: 400,
  },
];

const HowItWorks = () => {
  const { theme } = useTheme();

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
    <section 
      id="how-it-works" 
      className={cn(
        "section-padding",
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-950 to-gray-900' 
          : 'bg-white'
      )}
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className={cn(
            "inline-flex items-center px-3 py-1 mb-4 rounded-full text-sm font-medium",
            theme === 'dark' 
              ? 'bg-gray-800 text-cyan-400' 
              : 'bg-saath-100 text-saath-700'
          )}>
            <span>Simple Process</span>
          </div>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            How <span className={theme === 'dark' ? 'text-cyan-400' : 'text-saath-600'}>SaathPay</span> Works
          </h2>
          <p className={cn(
            "text-lg",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            Our straightforward process helps you access credit card benefits without the hassle of owning one.
          </p>
        </div>

        <div className="relative">
          {/* Process steps */}
          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center animate-on-scroll"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-4 relative",
                  theme === 'dark' ? 'bg-gray-800' : 'bg-saath-100'
                )}>
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    theme === 'dark' 
                      ? 'bg-cyan-600 text-white' 
                      : 'bg-saath-600 text-white'
                  )}>
                    {step.icon}
                  </div>
                  <div className={cn(
                    "absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold",
                    theme === 'dark' 
                      ? 'bg-cyan-800 text-white' 
                      : 'bg-saath-800 text-white'
                  )}>
                    {index + 1}
                  </div>
                </div>
                <h3 className={cn(
                  "text-xl font-semibold mb-2",
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  {step.title}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 z-0">
            <div className={cn(
              "absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2",
              theme === 'dark' ? 'bg-gray-700' : 'bg-saath-200'
            )}>
              <ArrowRight className={cn(
                "w-5 h-5",
                theme === 'dark' ? 'text-cyan-500' : 'text-saath-400'
              )} />
            </div>
            <div className={cn(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
              theme === 'dark' ? 'bg-gray-700' : 'bg-saath-200'
            )}>
              <ArrowRight className={cn(
                "w-5 h-5",
                theme === 'dark' ? 'text-cyan-500' : 'text-saath-400'
              )} />
            </div>
            <div className={cn(
              "absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2",
              theme === 'dark' ? 'bg-gray-700' : 'bg-saath-200'
            )}>
              <ArrowRight className={cn(
                "w-5 h-5",
                theme === 'dark' ? 'text-cyan-500' : 'text-saath-400'
              )} />
            </div>
          </div>
        </div>

        {/* User benefits */}
        <div id="benefits" className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className={cn(
              "inline-flex items-center px-3 py-1 mb-4 rounded-full text-sm font-medium",
              theme === 'dark' 
                ? 'bg-gray-800 text-cyan-400' 
                : 'bg-saath-100 text-saath-700'
            )}>
              <span>Benefits</span>
            </div>
            <h2 className={cn(
              "text-3xl font-bold mb-6",
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}>
              Win-Win For <span className={theme === 'dark' ? 'text-cyan-400' : 'text-saath-600'}>Everyone</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className={cn(
                  "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5",
                  theme === 'dark' ? 'bg-gray-800' : 'bg-saath-100'
                )}>
                  <Check className={cn(
                    "w-4 h-4",
                    theme === 'dark' ? 'text-cyan-400' : 'text-saath-600'
                  )} />
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  <span className={theme === 'dark' ? 'text-white' : 'font-semibold'}>Non-credit card holders</span> gain access to exclusive discounts without the hassle of credit card applications.
                </p>
              </div>
              <div className="flex items-start">
                <div className={cn(
                  "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5",
                  theme === 'dark' ? 'bg-gray-800' : 'bg-saath-100'
                )}>
                  <Check className={cn(
                    "w-4 h-4",
                    theme === 'dark' ? 'text-cyan-400' : 'text-saath-600'
                  )} />
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  <span className={theme === 'dark' ? 'text-white' : 'font-semibold'}>Credit card owners</span> improve their credit score while earning incentives through secure card-sharing.
                </p>
              </div>
              <div className="flex items-start">
                <div className={cn(
                  "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5",
                  theme === 'dark' ? 'bg-gray-800' : 'bg-saath-100'
                )}>
                  <Check className={cn(
                    "w-4 h-4",
                    theme === 'dark' ? 'text-cyan-400' : 'text-saath-600'
                  )} />
                </div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  <span className={theme === 'dark' ? 'text-white' : 'font-semibold'}>Everyone benefits</span> from our expense management tools, helping you track spending and split bills effortlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 animate-on-scroll" style={{ animationDelay: "200ms" }}>
            <div className={cn(
              "absolute inset-0 rounded-full",
              theme === 'dark' ? 'bg-gradient-radial from-gray-800/50 to-transparent' : 'bg-gradient-radial from-saath-50 to-transparent'
            )}></div>
            
            {/* Main card */}
            <div className={cn(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-3xl shadow-xl overflow-hidden animate-float",
              theme === 'dark' ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'glass-card'
            )}>
              <div className={cn(
                "absolute inset-0 backdrop-blur-sm",
                theme === 'dark' ? 'bg-gray-800/30' : 'bg-gradient-to-br from-white/50 to-white/10'
              )}></div>
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                    theme === 'dark' ? 'bg-gray-700' : 'bg-saath-100'
                  )}>
                    <CreditCard className={cn(
                      "w-6 h-6",
                      theme === 'dark' ? 'text-cyan-400' : 'text-saath-600'
                    )} />
                  </div>
                  <h3 className={cn(
                    "text-xl font-semibold mb-2",
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    Cashback Analytics
                  </h3>
                  <p className={cn(
                    "text-sm",
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  )}>
                    Track your savings and see how much you've earned through SaathPay.
                  </p>
                </div>
                
                <div className="mt-6">
                  <div className={cn(
                    "w-full h-20 rounded-lg p-3",
                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-saath-50'
                  )}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={cn(
                        "text-xs",
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        Total Saved
                      </span>
                      <span className={cn(
                        "text-xs font-medium",
                        theme === 'dark' ? 'text-cyan-400' : 'text-saath-600'
                      )}>
                        +12.5%
                      </span>
                    </div>
                    <div className="flex items-baseline space-x-1">
                      <span className={cn(
                        "text-2xl font-bold",
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      )}>
                        ₹12,458
                      </span>
                      <span className={cn(
                        "text-sm",
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        this year
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className={cn(
              "absolute top-[20%] right-[15%] w-16 h-16 rounded-lg flex items-center justify-center animate-float",
              theme === 'dark' ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'glass-card'
            )} style={{ animationDuration: "7s" }}>
              <Wallet className={cn(
                "w-8 h-8",
                theme === 'dark' ? 'text-cyan-400' : 'text-saath-600'
              )} />
            </div>
            
            <div className={cn(
              "absolute bottom-[25%] left-[10%] w-16 h-16 rounded-lg flex items-center justify-center animate-float",
              theme === 'dark' ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' : 'glass-card'
            )} style={{ animationDuration: "6s", animationDelay: "1s" }}>
              <ShoppingBag className={cn(
                "w-8 h-8",
                theme === 'dark' ? 'text-cyan-400' : 'text-saath-600'
              )} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;