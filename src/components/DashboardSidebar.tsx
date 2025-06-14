import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  SplitSquareVertical, 
  TrendingUp, 
  CreditCard, 
  Percent, 
  Home, 
  Store, 
  User, 
  Settings,
  HelpCircle,
  X,
  Wallet // 💳 Import Wallet icon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface DashboardSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DashboardSidebar = ({ isOpen, setIsOpen }: DashboardSidebarProps) => {
  const location = useLocation();

  const mainNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home
    },
   {
  title: "Payment",
  href: "/dashboard/payment",
  icon: Wallet
}
,
    {
      title: "Split Expenses",
      href: "/dashboard/split-expenses",
      icon: SplitSquareVertical
    },
    {
      title: "Expense Tracking",
      href: "/dashboard/expense-tracking",
      icon: TrendingUp
    },
    {
      title: "Virtual Cards",
      href: "/dashboard/virtual-cards",
      icon: CreditCard
    },
    {
      title: "Offers & Cashback",
      href: "/dashboard/offers",
      icon: Percent
    },
    {
      title: "Shop",
      href: "/shop",
      icon: Store
    }
  ];

  const accountNavItems = [
    {
      title: "Profile",
      href: "/profile",
      icon: User
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings
    },
    {
      title: "Help & Support",
      href: "/support",
      icon: HelpCircle
    }
  ];

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-20 flex flex-col bg-card shadow-lg border-r w-64 transition-transform duration-300 lg:translate-x-0 lg:relative lg:z-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex h-16 items-center justify-between px-4 border-b lg:hidden">
        <div className="font-bold text-xl">
          <span className="text-cyan-600">Saath</span>
          <span>Pay</span>
        </div>
        <Button variant="ghost" size="icon" onClick={closeSidebar}>
          <X size={18} />
        </Button>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-6 px-2">
          <div className="space-y-1">
            <h3 className="px-4 text-xs font-semibold text-muted-foreground tracking-wide uppercase">
              Main
            </h3>
            {mainNavItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                onClick={() => window.innerWidth < 1024 && closeSidebar()}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                  location.pathname === item.href && "bg-accent text-accent-foreground"
                )}
              >
                <item.icon size={18} />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          <div className="space-y-1">
            <h3 className="px-4 text-xs font-semibold text-muted-foreground tracking-wide uppercase">
              Account
            </h3>
            {accountNavItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                onClick={() => window.innerWidth < 1024 && closeSidebar()}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                  location.pathname === item.href && "bg-accent text-accent-foreground"
                )}
              >
                <item.icon size={18} />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </nav>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="text-xs text-muted-foreground">
          <p>© 2023 SaathPay</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
