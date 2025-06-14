import { useState } from 'react';
import { Gift, Star, Clock, TrendingUp, Target, Zap, ShoppingBag, Coffee, Plane, Gamepad2, Heart, Sparkles, CreditCard, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OffersAndCashback = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Available virtual cards from lenders with their specific offers
  const virtualCards = [
    {
      id: 1,
      cardName: 'Premium Travel Card',
      lenderName: 'Rahul Sharma',
      lenderAvatar: '👨‍💼',
      lenderRating: 4.9,
      availableLimit: 25000,
      cardType: 'Premium',
      color: 'from-blue-500 via-purple-500 to-pink-500',
      specialties: ['Travel', 'Hotels', 'Transport']
    },
    {
      id: 2,
      cardName: 'Shopping Rewards Card',
      lenderName: 'Priya Patel',
      lenderAvatar: '👩‍🎨',
      lenderRating: 4.8,
      availableLimit: 15000,
      cardType: 'Rewards',
      color: 'from-emerald-400 via-teal-500 to-cyan-500',
      specialties: ['Shopping', 'Electronics', 'Fashion']
    },
    {
      id: 3,
      cardName: 'Dining & Entertainment',
      lenderName: 'Arjun Singh',
      lenderAvatar: '👨‍🍳',
      lenderRating: 4.7,
      availableLimit: 8000,
      cardType: 'Lifestyle',
      color: 'from-orange-400 via-red-500 to-pink-500',
      specialties: ['Food', 'Entertainment', 'Movies']
    }
  ];

  const featuredOffers = [
    {
      id: 1,
      merchant: 'Flipkart',
      title: 'Big Billion Days Sale',
      description: 'Extra 15% cashback on electronics',
      cashback: '15%',
      maxCashback: 2000,
      validTill: '31 Dec 2024',
      category: 'shopping',
      image: '🛒',
      gradient: 'from-blue-500 to-purple-600',
      featured: true,
      bestCard: virtualCards[1], // Shopping Rewards Card
      lenderBenefit: '5% extra for lender'
    },
    {
      id: 2,
      merchant: 'Swiggy',
      title: 'Food Fest Weekend',
      description: 'Get 25% off + Free delivery',
      cashback: '25%',
      maxCashback: 500,
      validTill: '15 Jan 2025',
      category: 'food',
      image: '🍕',
      gradient: 'from-orange-500 to-red-600',
      featured: true,
      bestCard: virtualCards[2], // Dining & Entertainment
      lenderBenefit: '3% extra for lender'
    },
    {
      id: 3,
      merchant: 'MakeMyTrip',
      title: 'Travel More, Save More',
      description: '10x points on all bookings',
      cashback: '10x',
      maxCashback: 5000,
      validTill: '28 Feb 2025',
      category: 'travel',
      image: '✈️',
      gradient: 'from-green-500 to-teal-600',
      featured: true,
      bestCard: virtualCards[0], // Premium Travel Card
      lenderBenefit: '2x points for lender'
    }
  ];

  const allOffers = [
    ...featuredOffers,
    {
      id: 4,
      merchant: 'Amazon',
      title: 'Prime Day Special',
      description: '5% instant discount',
      cashback: '5%',
      maxCashback: 1000,
      validTill: '20 Jan 2025',
      category: 'shopping',
      image: '📦',
      gradient: 'from-yellow-500 to-orange-600',
      featured: false,
      bestCard: virtualCards[1],
      lenderBenefit: '2% extra for lender'
    },
    {
      id: 5,
      merchant: 'BookMyShow',
      title: 'Movie Mania',
      description: 'Buy 1 Get 1 Free on weekends',
      cashback: 'BOGO',
      maxCashback: 800,
      validTill: '25 Dec 2024',
      category: 'entertainment',
      image: '🎬',
      gradient: 'from-purple-500 to-pink-600',
      featured: false,
      bestCard: virtualCards[2],
      lenderBenefit: '1 free ticket for lender'
    },
    {
      id: 6,
      merchant: 'Myntra',
      title: 'Fashion Sale',
      description: '20% cashback on fashion',
      cashback: '20%',
      maxCashback: 1500,
      validTill: '10 Feb 2025',
      category: 'shopping',
      image: '👗',
      gradient: 'from-pink-500 to-purple-600',
      featured: false,
      bestCard: virtualCards[1],
      lenderBenefit: '4% extra for lender'
    },
    {
      id: 7,
      merchant: 'Uber',
      title: 'Ride & Save',
      description: '15% off on rides',
      cashback: '15%',
      maxCashback: 300,
      validTill: '30 Jan 2025',
      category: 'transport',
      image: '🚗',
      gradient: 'from-gray-600 to-gray-800',
      featured: false,
      bestCard: virtualCards[0],
      lenderBenefit: '5% extra for lender'
    },
    {
      id: 8,
      merchant: 'Zomato',
      title: 'Food Delivery Bonanza',
      description: 'Free delivery + 10% off',
      cashback: '10%',
      maxCashback: 400,
      validTill: '05 Feb 2025',
      category: 'food',
      image: '🍔',
      gradient: 'from-red-500 to-pink-600',
      featured: false,
      bestCard: virtualCards[2],
      lenderBenefit: '2% extra for lender'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Offers', icon: Sparkles, count: allOffers.length },
    { id: 'shopping', name: 'Shopping', icon: ShoppingBag, count: allOffers.filter(o => o.category === 'shopping').length },
    { id: 'food', name: 'Food & Dining', icon: Coffee, count: allOffers.filter(o => o.category === 'food').length },
    { id: 'travel', name: 'Travel', icon: Plane, count: allOffers.filter(o => o.category === 'travel').length },
    { id: 'entertainment', name: 'Entertainment', icon: Gamepad2, count: allOffers.filter(o => o.category === 'entertainment').length },
    { id: 'transport', name: 'Transport', icon: TrendingUp, count: allOffers.filter(o => o.category === 'transport').length }
  ];

  const cashbackStats = [
    {
      title: 'Total Earned',
      value: '₹12,450',
      change: '+23%',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'This Month',
      value: '₹2,340',
      change: '+15%',
      icon: Star,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Active Cards',
      value: virtualCards.length,
      change: '+2',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Best Cashback',
      value: '25%',
      change: 'Swiggy',
      icon: Zap,
      color: 'from-orange-500 to-yellow-600'
    }
  ];

  const filteredOffers = activeTab === 'all' 
    ? allOffers 
    : allOffers.filter(offer => offer.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'shopping': return '🛍️';
      case 'food': return '🍽️';
      case 'travel': return '🌍';
      case 'entertainment': return '🎭';
      case 'transport': return '🚗';
      default: return '🎯';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent">
            Offers & Cashback
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">Earn cashback using virtual cards shared by verified lenders</p>
        </div>
        <div className="flex items-center space-x-2">
          <Heart className="text-red-500" size={24} />
          <span className="text-sm text-muted-foreground">Best deals for you</span>
        </div>
      </div>

      {/* Cashback Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cashbackStats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-green-600 dark:text-green-400">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Available Virtual Cards for Offers */}
      

      {/* Featured Offers */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="text-yellow-500" size={24} />
          <h2 className="text-2xl font-bold">Featured Offers</h2>
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white">Hot</Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredOffers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className={`h-32 bg-gradient-to-br ${offer.gradient} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 left-4">
                  <div className="text-4xl">{offer.image}</div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">Featured</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{offer.merchant}</h3>
                  <p className="text-sm opacity-90">{offer.bestCard.cardName}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2">{offer.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{offer.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-600">{offer.cashback}</span>
                    <span className="text-sm text-muted-foreground ml-1">cashback</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Max ₹{offer.maxCashback}</p>
                    <p className="text-xs text-muted-foreground">Valid till {offer.validTill}</p>
                  </div>
                </div>

                {/* Best Card for this offer */}
                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm">
                        {offer.bestCard.lenderAvatar}
                      </div>
                      <div>
                        <p className="text-xs font-medium">{offer.bestCard.cardName}</p>
                        <p className="text-xs text-muted-foreground">by {offer.bestCard.lenderName}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">Best Card</Badge>
                  </div>
                  <p className="text-xs text-green-600 mt-2">+ {offer.lenderBenefit}</p>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                  Use This Card
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Category Tabs & All Offers */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Offers by Category</h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              <category.icon size={16} />
              <span>{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOffers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{offer.image}</div>
                    <div>
                      <h3 className="font-semibold">{offer.merchant}</h3>
                      <p className="text-xs text-muted-foreground">{getCategoryIcon(offer.category)} {offer.category}</p>
                    </div>
                  </div>
                  {offer.featured && (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs">
                      Hot
                    </Badge>
                  )}
                </div>
                
                <h4 className="font-medium mb-2">{offer.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{offer.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-lg font-bold text-green-600">{offer.cashback}</span>
                    <span className="text-xs text-muted-foreground">cashback</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Max ₹{offer.maxCashback}</p>
                  </div>
                </div>

                {/* Recommended Card */}
                <div className="bg-muted/30 rounded-md p-2 mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs">
                      {offer.bestCard.lenderAvatar}
                    </div>
                    <div>
                      <p className="text-xs font-medium">{offer.bestCard.cardName}</p>
                      <p className="text-xs text-green-600">+ {offer.lenderBenefit}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{offer.validTill}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {offer.bestCard.cardType}
                  </Badge>
                </div>
                
                <Button size="sm" className="w-full">
                  Use Card
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
            <Gift size={24} />
            <span>How Virtual Card Offers Work</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2">Choose Best Card</h3>
              <p className="text-sm text-muted-foreground">Select the virtual card that gives maximum cashback for each merchant</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">Shop & Earn</h3>
              <p className="text-sm text-muted-foreground">Use the recommended card to shop and earn maximum cashback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">Lender Benefits</h3>
              <p className="text-sm text-muted-foreground">Card lenders also earn extra cashback when you use their cards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                4
              </div>
              <h3 className="font-semibold mb-2">Everyone Wins</h3>
              <p className="text-sm text-muted-foreground">Both borrower and lender benefit from the shared card system</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OffersAndCashback;
