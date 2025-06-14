import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Eye, 
  EyeOff,
  AlertTriangle,
  Download,
  Star,
  Users,
  BarChart3,
  Calendar
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Dashboard = () => {
  const [cardAvailable, setCardAvailable] = useState(true);
  const [showCardNumber, setShowCardNumber] = useState(false);

  // Mock data
  const cardDetails = {
    number: '4532 **** **** 1234',
    fullNumber: '4532 1234 5678 1234',
    issuer: 'HDFC Bank',
    status: 'Active',
    dailyLimit: 25000,
    monthlyLimit: 200000,
    usedDaily: 12450,
    usedMonthly: 156780
  };

  const earnings = {
    total: 45230,
    withdrawable: 38450,
    thisMonth: 4520,
    nextPayout: '2024-01-25'
  };

  const monthlyEarnings = [
    { month: 'Oct', amount: 2100 },
    { month: 'Nov', amount: 3200 },
    { month: 'Dec', amount: 4100 },
    { month: 'Jan', amount: 4520 }
  ];

  const recentTransactions = [
    {
      id: '1',
      buyer: 'R***l K.',
      item: 'Electronics Purchase',
      amount: 15999,
      cashback: 320,
      date: '2024-01-15 14:30',
      status: 'completed'
    },
    {
      id: '2',
      buyer: 'P***a S.',
      item: 'Food Delivery',
      amount: 850,
      cashback: 42,
      date: '2024-01-15 12:15',
      status: 'completed'
    },
    {
      id: '3',
      buyer: 'A***t M.',
      item: 'Online Shopping',
      amount: 2999,
      cashback: 150,
      date: '2024-01-14 18:45',
      status: 'completed'
    }
  ];

  const performanceData = [
    { hour: '9AM', usage: 12 },
    { hour: '12PM', usage: 25 },
    { hour: '3PM', usage: 18 },
    { hour: '6PM', usage: 32 },
    { hour: '9PM', usage: 28 }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Cardholder Dashboard</h1>
        <p className="text-muted-foreground">Manage your virtual cards, track earnings, and monitor usage</p>
      </div>

      {/* Card Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-fintech-primary to-fintech-primary/80">
          <CardContent className="p-6">
            <div className="text-white space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white/80 text-sm">Virtual Card</p>
                  <p className="text-xl font-semibold">{cardDetails.issuer}</p>
                </div>
                <Badge variant="secondary" className="bg-green-500 text-white">
                  {cardDetails.status}
                </Badge>
              </div>
              
              <div>
                <p className="text-white/80 text-sm mb-1">Card Number</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-mono">
                    {showCardNumber ? cardDetails.fullNumber : cardDetails.number}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCardNumber(!showCardNumber)}
                    className="text-white hover:bg-white/10"
                  >
                    {showCardNumber ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Available for SaathPay</p>
                  <p className="text-xs text-white/60">Let others use your card</p>
                </div>
                <Switch
                  checked={cardAvailable}
                  onCheckedChange={setCardAvailable}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield size={20} />
              Usage Limits & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Daily Usage</span>
                <span>₹{cardDetails.usedDaily.toLocaleString()} / ₹{cardDetails.dailyLimit.toLocaleString()}</span>
              </div>
              <Progress value={(cardDetails.usedDaily / cardDetails.dailyLimit) * 100} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Monthly Usage</span>
                <span>₹{cardDetails.usedMonthly.toLocaleString()} / ₹{cardDetails.monthlyLimit.toLocaleString()}</span>
              </div>
              <Progress value={(cardDetails.usedMonthly / cardDetails.monthlyLimit) * 100} className="h-2" />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-sm text-muted-foreground">Dynamic CVV</span>
              <Badge variant="outline" className="text-green-600">Enabled</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Earnings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold">₹{earnings.total.toLocaleString()}</p>
              </div>
              <DollarSign size={24} className="text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">This Month</p>
                <p className="text-2xl font-bold text-fintech-primary">₹{earnings.thisMonth.toLocaleString()}</p>
              </div>
              <TrendingUp size={24} className="text-fintech-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Withdrawable</p>
                <p className="text-2xl font-bold text-green-500">₹{earnings.withdrawable.toLocaleString()}</p>
              </div>
              <DollarSign size={24} className="text-green-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Next payout: {earnings.nextPayout}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Button className="w-full fintech-button-primary" size="lg">
              Withdraw Earnings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Performance Analytics & Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Usage Analytics</CardTitle>
            <CardDescription>Peak usage hours today</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="usage" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Earnings Trend</CardTitle>
            <CardDescription>Earnings growth over months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={monthlyEarnings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest card usage through SaathPay</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-fintech-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard size={20} className="text-fintech-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.item}</p>
                    <p className="text-sm text-muted-foreground">Used by: {transaction.buyer}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold">₹{transaction.amount.toLocaleString()}</p>
                  <p className="text-sm text-green-600">+₹{transaction.cashback} cashback</p>
                  <Badge variant="outline" className="text-green-600 mt-1">
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions & Reputation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star size={20} />
              Reputation & Trust Score
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-fintech-primary">4.8</div>
              <div className="flex justify-center mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">Based on 156 transactions</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Trust Score</span>
                <span className="text-sm font-medium">Excellent</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security & Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS Alerts</p>
                <p className="text-sm text-muted-foreground">Get notified on every use</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">2FA Security</p>
                <p className="text-sm text-muted-foreground">Two-factor authentication</p>
              </div>
              <Badge variant="outline" className="text-green-600">Active</Badge>
            </div>

            <Button variant="outline" className="w-full">
              <AlertTriangle size={16} className="mr-2" />
              Report Suspicious Activity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <Download size={20} />
              <span className="text-xs mt-1">Download Statement</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <BarChart3 size={20} />
              <span className="text-xs mt-1">View Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Users size={20} />
              <span className="text-xs mt-1">Invite Friends</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Calendar size={20} />
              <span className="text-xs mt-1">Schedule Payout</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
