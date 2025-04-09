
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  SplitSquareVertical, 
  TrendingUp, 
  CreditCard, 
  Percent,
  ArrowRight,
  CreditCard as CreditCardIcon, 
  Users,
  Receipt,
  Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';

const Dashboard = () => {
  const { theme } = useTheme();
  const user = JSON.parse(localStorage.getItem('saathpay_user') || '{}');
  
  // Quick access features
  const quickFeatures = [
    {
      title: "Split Expenses",
      description: "Easily split bills with friends and family",
      icon: SplitSquareVertical,
      href: "/dashboard/split-expenses",
      color: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20"
    },
    {
      title: "Expense Tracking",
      description: "Monitor your spending habits and save more",
      icon: TrendingUp,
      href: "/dashboard/expense-tracking",
      color: "bg-green-500/10 text-green-500 dark:bg-green-500/20"
    },
    {
      title: "Virtual Cards",
      description: "Manage your secure virtual credit cards",
      icon: CreditCard,
      href: "/dashboard/virtual-cards",
      color: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20"
    },
    {
      title: "Offers & Cashback",
      description: "Discover exclusive deals and earn rewards",
      icon: Percent,
      href: "/dashboard/offers",
      color: "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20"
    }
  ];
  
  // Personalized recommendations
  const recommendations = [
    {
      title: "Premium Wireless Headphones",
      description: "30% off with SaathPay",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Smart Watch Series 5",
      description: "15% cashback offer",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Premium Running Shoes",
      description: "Buy 1 Get 1 Free",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Welcome section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user.name || 'User'}
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your account today.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
            Add Money
          </Button>
        </div>
      </div>
      
      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Available Balance
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,450</div>
            <p className="text-xs text-muted-foreground">
              +₹1,250 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Expenses
            </CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹4,920</div>
            <p className="text-xs text-muted-foreground">
              -₹340 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active Cards
            </CardTitle>
            <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              1 pending approval
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Group Expenses
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              1 needs your attention
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick access features */}
      <div>
        <h2 className="text-xl font-bold tracking-tight mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickFeatures.map((feature) => (
            <Link to={feature.href} key={feature.title}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-2">
                  <div className={`p-2 rounded-full w-fit mb-2 ${feature.color}`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4 flex justify-between items-end">
                  <CardDescription>{feature.description}</CardDescription>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Personalized recommendations */}
      <div>
        <h2 className="text-xl font-bold tracking-tight mb-4">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-500" 
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <Button variant="outline" size="sm" className="w-full justify-between">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
