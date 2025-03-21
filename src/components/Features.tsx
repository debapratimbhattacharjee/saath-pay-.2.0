
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CreditCard, Banknote, ShieldCheck, PieChart, LineChart, Percent } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  accentColor?: string;
}

const FeatureCard = ({ icon, title, description, delay, accentColor = "bg-saath-500" }: FeatureCardProps) => (
  <div
    className="glass-card p-6 animate-on-scroll"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", accentColor)}>
      <div className="text-white">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
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
    <section id="features" className="section-padding bg-gradient-to-b from-white to-saath-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-saath-100 text-saath-700 text-sm font-medium">
            <span>Core Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Democratizing Credit Card <span className="text-saath-600">Benefits</span>
          </h2>
          <p className="text-lg text-gray-600">
            SaathPay bridges the gap between credit card holders and non-holders, providing innovative financial tools for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CreditCard className="w-6 h-6" />}
            title="Virtual Credit Cards"
            description="Access exclusive credit card offers without actually owning a credit card through our secure virtual cards."
            delay={100}
            accentColor="bg-saath-600"
          />
          
          <FeatureCard
            icon={<Percent className="w-6 h-6" />}
            title="Discount Matching"
            description="Our intelligent system identifies the best credit card discount for your purchase across platforms."
            delay={200}
            accentColor="bg-saath-700"
          />
          
          <FeatureCard
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Secure Transactions"
            description="End-to-end encryption, 2FA authentication, and AI-powered fraud detection to keep your money safe."
            delay={300}
            accentColor="bg-saath-800"
          />
          
          <FeatureCard
            icon={<LineChart className="w-6 h-6" />}
            title="Credit Score Booster"
            description="Help credit card owners improve their scores while earning incentives through secure participation."
            delay={400}
            accentColor="bg-saath-600"
          />
          
          <FeatureCard
            icon={<PieChart className="w-6 h-6" />}
            title="Expense Management"
            description="Track spending, split bills, and manage your budget with our intuitive financial tools."
            delay={500}
            accentColor="bg-saath-700"
          />
          
          <FeatureCard
            icon={<Banknote className="w-6 h-6" />}
            title="Cashback System"
            description="Receive cashback equivalent to credit card discounts after your purchases, all handled seamlessly."
            delay={600}
            accentColor="bg-saath-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
