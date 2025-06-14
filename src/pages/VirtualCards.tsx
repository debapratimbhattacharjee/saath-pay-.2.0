import { useState } from 'react';
import { CreditCard, Plus, Eye, EyeOff, Settings, History, Gift, Shield, Wallet, TrendingUp, Clock, Star, CheckCircle, AlertCircle, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const VirtualCards = () => {
  const [showCardNumbers, setShowCardNumbers] = useState({});

  // Cards borrowed from verified credit card holders
  const borrowedCards = [
    {
      id: 1,
      cardName: 'Premium Travel Card',
      lenderName: 'Rahul Sharma',
      lenderAvatar: '👨‍💼',
      lenderRating: 4.9,
      number: '**** **** **** 1234',
      availableLimit: 25000,
      usedAmount: 8500,
      totalLimit: 50000,
      expiryDate: '12/25',
      isActive: true,
      lastUsed: '2 hours ago',
      merchant: 'MakeMyTrip',
      category: 'Travel',
      cardType: 'Premium',
      color: 'from-blue-500 via-purple-500 to-pink-500',
      benefits: ['5x Travel Points', '2% Cashback', 'Lounge Access'],
      trustScore: 98
    },
    {
      id: 2,
      cardName: 'Shopping Rewards Card',
      lenderName: 'Priya Patel',
      lenderAvatar: '👩‍🎨',
      lenderRating: 4.8,
      number: '**** **** **** 5678',
      availableLimit: 15000,
      usedAmount: 3200,
      totalLimit: 20000,
      expiryDate: '08/26',
      isActive: true,
      lastUsed: '1 day ago',
      merchant: 'Amazon',
      category: 'Shopping',
      cardType: 'Rewards',
      color: 'from-emerald-400 via-teal-500 to-cyan-500',
      benefits: ['3x Reward Points', '1% Cashback', 'Free Delivery'],
      trustScore: 95
    },
    {
      id: 3,
      cardName: 'Dining & Entertainment',
      lenderName: 'Arjun Singh',
      lenderAvatar: '👨‍🍳',
      lenderRating: 4.7,
      number: '**** **** **** 9012',
      availableLimit: 8000,
      usedAmount: 2100,
      totalLimit: 12000,
      expiryDate: '03/27',
      isActive: false,
      lastUsed: '3 days ago',
      merchant: 'Zomato',
      category: 'Food',
      cardType: 'Lifestyle',
      color: 'from-orange-400 via-red-500 to-pink-500',
      benefits: ['4x Dining Points', '15% Restaurant Discount'],
      trustScore: 92
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      cardName: 'Premium Travel Card',
      lenderName: 'Rahul Sharma',
      merchant: 'MakeMyTrip',
      amount: 12500,
      time: '2 hours ago',
      status: 'completed',
      category: 'Travel',
      icon: '✈️'
    },
    {
      id: 2,
      cardName: 'Shopping Rewards Card',
      lenderName: 'Priya Patel',
      merchant: 'Amazon',
      amount: 2350,
      time: '1 day ago',
      status: 'completed',
      category: 'Shopping',
      icon: '🛍️'
    },
    {
      id: 3,
      cardName: 'Dining & Entertainment',
      lenderName: 'Arjun Singh',
      merchant: 'BookMyShow',
      amount: 850,
      time: '2 days ago',
      status: 'pending',
      category: 'Entertainment',
      icon: '🎬'
    },
    {
      id: 4,
      cardName: 'Premium Travel Card',
      lenderName: 'Rahul Sharma',
      merchant: 'Uber',
      amount: 420,
      time: '3 days ago',
      status: 'completed',
      category: 'Transport',
      icon: '🚗'
    }
  ];

  const specialOffers = [
    {
      id: 1,
      merchant: 'Flipkart',
      offer: '10% Extra Cashback',
      validTill: '30 Dec 2024',
      icon: '🛒',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      merchant: 'Swiggy',
      offer: '25% Off + Free Delivery',
      validTill: '15 Jan 2025',
      icon: '🍕',
      color: 'bg-orange-500'
    },
    {
      id: 3,
      merchant: 'BookMyShow',
      offer: 'Buy 1 Get 1 Free',
      validTill: '25 Dec 2024',
      icon: '🎭',
      color: 'bg-purple-500'
    }
  ];

  const toggleCardNumber = (cardId) => {
    setShowCardNumbers(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const getTrustBadge = (score) => {
    if (score >= 95) return { text: 'Highly Trusted', color: 'bg-green-500', icon: '🏆' };
    if (score >= 90) return { text: 'Trusted', color: 'bg-blue-500', icon: '✅' };
    return { text: 'Verified', color: 'bg-yellow-500', icon: '⭐' };
  };

  const totalAvailableCredit = borrowedCards.reduce((sum, card) => sum + card.availableLimit, 0);
  const totalUsedAmount = borrowedCards.reduce((sum, card) => sum + card.usedAmount, 0);
  const activeCards = borrowedCards.filter(card => card.isActive).length;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Virtual Cards
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">Borrowed cards from verified credit card holders</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          <Plus size={20} className="mr-2" />
          Request New Card
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-500 rounded-xl">
                <CreditCard className="text-white" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{activeCards}</p>
                <p className="text-sm text-muted-foreground">Active Cards</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-500 rounded-xl">
                <Wallet className="text-white" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">₹{totalAvailableCredit.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Available Credit</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-500 rounded-xl">
                <TrendingUp className="text-white" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">₹{totalUsedAmount.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Spent</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-orange-200 dark:border-orange-800">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-500 rounded-xl">
                <Gift className="text-white" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{specialOffers.length}</p>
                <p className="text-sm text-muted-foreground">Active Offers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* My Borrowed Cards */}
      <div>
        <h2 className="text-2xl font-bold mb-6">My Borrowed Cards</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {borrowedCards.map((card) => {
            const trustBadge = getTrustBadge(card.trustScore);
            return (
              <div key={card.id} className="group">
                {/* Virtual Card */}
                <div className={`bg-gradient-to-br ${card.color} rounded-3xl p-8 text-white relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl`}>
                  {/* Card Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-6 right-6 w-40 h-40 rounded-full border-2 border-white"></div>
                    <div className="absolute bottom-6 left-6 w-28 h-28 rounded-full border border-white"></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold">{card.cardName}</h3>
                        <p className="text-sm opacity-80">{card.cardType}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch checked={card.isActive} className="scale-75" />
                        <span className="text-xs opacity-80">{card.isActive ? 'Active' : 'Inactive'}</span>
                      </div>
                    </div>

                    {/* Card Number */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl font-mono tracking-wider">
                          {showCardNumbers[card.id] ? '1234 5678 9012 3456' : card.number}
                        </span>
                        <button
                          onClick={() => toggleCardNumber(card.id)}
                          className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                          {showCardNumbers[card.id] ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      <p className="text-sm opacity-80 mt-2">Expires: {card.expiryDate}</p>
                    </div>

                    {/* Credit Info */}
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <div className="text-sm opacity-80 mb-1">Available Credit</div>
                        <div className="text-2xl font-bold">₹{card.availableLimit.toLocaleString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-80 mb-1">Used</div>
                        <div className="text-lg">₹{card.usedAmount.toLocaleString()}</div>
                      </div>
                    </div>

                    {/* Usage Progress */}
                    <div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className="h-3 bg-white rounded-full transition-all duration-500 shadow-sm"
                          style={{ width: `${(card.usedAmount / card.totalLimit) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs mt-2 opacity-80">
                        {Math.round((card.usedAmount / card.totalLimit) * 100)}% of total limit used
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <Card className="mt-4">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Lender Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl">
                            {card.lenderAvatar}
                          </div>
                          <div>
                            <p className="font-medium">{card.lenderName}</p>
                            <div className="flex items-center space-x-1">
                              <Star size={16} className="text-yellow-500 fill-current" />
                              <span className="text-sm text-muted-foreground">{card.lenderRating}</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={`${trustBadge.color} text-white`}>
                          {trustBadge.icon} {trustBadge.text}
                        </Badge>
                      </div>

                      {/* Last Transaction */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Last used</span>
                        <span className="text-sm font-medium">{card.lastUsed} • {card.merchant}</span>
                      </div>

                      {/* Benefits */}
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Benefits</p>
                        <div className="flex flex-wrap gap-1">
                          {card.benefits.map((benefit, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <History size={16} className="mr-2" />
                          View History
                        </Button>
                        <Button size="sm" variant="outline">
                          <Copy size={16} />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}

          {/* Request New Card */}
          <Card className="border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer group">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Plus size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Request New Card</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Browse and request access to credit cards from verified lenders
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Transactions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <History size={24} />
                  <span>Recent Transactions</span>
                </CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted/80 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg">
                        {transaction.icon}
                      </div>
                      <div>
                        <div className="font-medium">{transaction.merchant}</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.cardName} • Lent by {transaction.lenderName}
                        </div>
                        <div className="text-xs text-muted-foreground">{transaction.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">₹{transaction.amount.toLocaleString()}</div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                      }`}>
                        {transaction.status === 'completed' ? <CheckCircle size={12} className="inline mr-1" /> : <Clock size={12} className="inline mr-1" />}
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Offers & Trust Info */}
        <div className="space-y-6">
          {/* Special Offers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gift size={24} />
                <span>Special Offers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specialOffers.map((offer) => (
                  <div key={offer.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-xl">
                    <div className={`w-10 h-10 ${offer.color} rounded-full flex items-center justify-center text-white text-lg`}>
                      {offer.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{offer.merchant}</div>
                      <div className="text-xs text-muted-foreground">{offer.offer}</div>
                      <div className="text-xs text-muted-foreground">Valid till {offer.validTill}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trust & Security */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <Shield size={24} />
                <span>Trust & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5" />
                  <span>All lenders are verified with government ID</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5" />
                  <span>Spending limits protect both parties</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5" />
                  <span>Real-time transaction monitoring</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5" />
                  <span>24/7 fraud protection & support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VirtualCards;
