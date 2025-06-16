import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ added
import { 
  SplitSquareVertical, 
  TrendingUp, 
  CreditCard, 
  Percent,
  ArrowRight,
  CreditCard as CreditCardIcon, 
  Users,
  Receipt,
  Wallet,
  Send,
  UserPlus,
  QrCode,
  Plus,
  Phone,
  Split,
  BarChart3
} from 'lucide-react'; // ✅ all icons imported

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const navigate = useNavigate();
  const balance = 12450.75;

  // Dummy user object to prevent crash
  const user = { name: "User" }; // ✅ fix for undefined user

  const paymentActions = [
    {
      title: "Send Money",
      icon: Send,
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      onClick: () => navigate('/dashboard/payment')
    },
    {
      title: "Request Money",
      icon: UserPlus,
      color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
      onClick: () => navigate('/dashboard/payment')
    },
    {
      title: "Scan QR",
      icon: QrCode,
      color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
      onClick: () => navigate('/dashboard/payment')
    },
    {
      title: "Pay Bills",
      icon: Receipt,
      color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
      onClick: () => navigate('/dashboard/payment')
    },
    {
      title: "Add Money",
      icon: Plus,
      color: "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
      onClick: () => navigate('/dashboard/payment')
    },
    {
      title: "Recharge",
      icon: Phone,
      color: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
      onClick: () => navigate('/dashboard/payment')
    }
  ];

  const quickActions = [ // ✅ renamed from quickFeatures
   
    {
      title: "Split Expenses",
      description: "Easily split bills with friends and family",
      icon: Split,
      color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
      href: "/dashboard/split-expenses"
    },
    {
      title: "Expense Tracking",
      description: "Monitor your spending habits and save more",
      icon: BarChart3,
      color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
      href: "/dashboard/expense-tracking"
    },
    {
      title: "Virtual Cards",
      description: "Manage your secure virtual credit cards",
      icon: CreditCard,
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      href: "/dashboard/virtual-cards"
    },
    {
      title: "Offers & Cashback",
      description: "Discover exclusive deals and earn rewards",
      icon: Percent,
      color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",
      href: "/dashboard/offers"
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
            Welcome , {user.name || 'User'}
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
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Payments</h2>
        <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {paymentActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className="flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 group"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${action.color} group-hover:scale-110 transition-transform`}>
                    <action.icon size={24} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
                    {action.title}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
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
     {/* Quick access features */}
<div>
  <h2 className="text-xl font-bold tracking-tight mb-4">Quick Access</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {quickActions.map((feature) => (
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
