import { DollarSign, TrendingUp, Wallet, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Earnings = () => {
  const earnings = {
    total: 12450,
    thisMonth: 3200,
    lastMonth: 2800,
    pending: 450,
    nextPayout: '2024-01-25'
  };

  const monthlyData = [
    { month: 'Oct', amount: 2100 },
    { month: 'Nov', amount: 2800 },
    { month: 'Dec', amount: 3200 },
    { month: 'Jan', amount: 4350 }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Earnings Dashboard</h1>
        <p className="text-muted-foreground">Track your cashback and rewards from card sharing</p>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Total Earnings</p>
                <p className="text-3xl font-bold">₹{earnings.total.toLocaleString()}</p>
              </div>
              <DollarSign size={32} className="text-green-200" />
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
            <div className="mt-2">
              <div className="flex items-center text-sm text-green-600">
                <ArrowUpRight size={16} />
                <span>+14% from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Pending</p>
                <p className="text-2xl font-bold text-yellow-500">₹{earnings.pending}</p>
              </div>
              <Wallet size={24} className="text-yellow-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Next payout: {earnings.nextPayout}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-3">
            <Button className="w-full fintech-button-primary" size="lg">
              Withdraw Earnings
            </Button>
            <Button variant="outline" className="w-full" size="sm">
              View Payout History
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Earnings Breakdown</CardTitle>
          <CardDescription>Track your earnings progression over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium">{data.month}</div>
                <div className="flex-1">
                  <Progress 
                    value={(data.amount / Math.max(...monthlyData.map(d => d.amount))) * 100} 
                    className="h-3"
                  />
                </div>
                <div className="w-20 text-right font-semibold">₹{data.amount}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Earnings Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Earnings Breakdown</CardTitle>
            <CardDescription>Sources of your earnings this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Credit Card Cashback</span>
              <span className="font-semibold">₹2,100</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Platform Rewards</span>
              <span className="font-semibold">₹800</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Referral Bonus</span>
              <span className="font-semibold">₹300</span>
            </div>
            <hr />
            <div className="flex justify-between items-center font-bold">
              <span>Total</span>
              <span>₹{earnings.thisMonth.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Categories</CardTitle>
            <CardDescription>Categories generating most earnings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Shopping</p>
                <p className="text-sm text-muted-foreground">45% of earnings</p>
              </div>
              <span className="font-semibold">₹1,440</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Food & Dining</p>
                <p className="text-sm text-muted-foreground">25% of earnings</p>
              </div>
              <span className="font-semibold">₹800</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Entertainment</p>
                <p className="text-sm text-muted-foreground">20% of earnings</p>
              </div>
              <span className="font-semibold">₹640</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Travel</p>
                <p className="text-sm text-muted-foreground">10% of earnings</p>
              </div>
              <span className="font-semibold">₹320</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Earnings;
