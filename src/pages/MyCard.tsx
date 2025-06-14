import { useState } from 'react';
import { Eye, EyeOff, Copy, CreditCard, Shield, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const MyCard = () => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [cardAvailable, setCardAvailable] = useState(true);
  const [showCVV, setShowCVV] = useState(false);
  const [spendingLimit, setSpendingLimit] = useState('5000');

  const cardDetails = {
    number: '4532 **** **** 1234',
    fullNumber: '4532 1234 5678 1234',
    expiry: '12/27',
    cvv: '123',
    name: 'JOHN DOE'
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // TODO: Add toast notification
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">My Virtual Card</h1>
        <p className="text-muted-foreground">Manage your virtual credit card settings and limits</p>
      </div>

      {/* Virtual Card Display */}
      <Card className="bg-gradient-to-br from-fintech-primary to-fintech-primary/80">
        <CardContent className="p-8">
          <div className="text-white space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/80 text-sm">Virtual Card</p>
                <p className="text-xl font-semibold">SplitPay Card</p>
              </div>
              <CreditCard size={32} className="text-white/80" />
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-white/80 text-sm mb-1">Card Number</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-mono tracking-wider">
                    {showCardDetails ? cardDetails.fullNumber : cardDetails.number}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCardDetails(!showCardDetails)}
                    className="text-white hover:bg-white/10"
                  >
                    {showCardDetails ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(cardDetails.fullNumber)}
                    className="text-white hover:bg-white/10"
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/80 text-sm mb-1">Expiry Date</p>
                  <p className="text-lg font-mono">{cardDetails.expiry}</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">CVV</p>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-mono">
                      {showCVV ? cardDetails.cvv : '***'}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowCVV(!showCVV)}
                      className="text-white hover:bg-white/10"
                    >
                      {showCVV ? <EyeOff size={14} /> : <Eye size={14} />}
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-white/80 text-sm mb-1">Cardholder Name</p>
                <p className="text-lg font-semibold">{cardDetails.name}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield size={20} />
              Card Availability
            </CardTitle>
            <CardDescription>Control when your card can be used by others</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="card-available">Make Card Available</Label>
                <p className="text-sm text-muted-foreground">Allow others to use your card</p>
              </div>
              <Switch
                id="card-available"
                checked={cardAvailable}
                onCheckedChange={setCardAvailable}
              />
            </div>
            
            <div className={`transition-opacity ${cardAvailable ? 'opacity-100' : 'opacity-50'}`}>
              <Label htmlFor="spending-limit">Daily Spending Limit (₹)</Label>
              <Input
                id="spending-limit"
                type="number"
                value={spendingLimit}
                onChange={(e) => setSpendingLimit(e.target.value)}
                disabled={!cardAvailable}
                className="mt-1"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings size={20} />
              Quick Actions
            </CardTitle>
            <CardDescription>Manage your card settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Set Category Limits
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Usage Frequency Settings
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Generate New CVV
            </Button>
            <Button variant="destructive" className="w-full justify-start">
              Temporarily Block Card
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Usage Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Usage</CardTitle>
          <CardDescription>Overview of your card's recent activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-fintech-primary">₹12,450</p>
              <p className="text-sm text-muted-foreground">Total Spent Today</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-fintech-primary">8</p>
              <p className="text-sm text-muted-foreground">Transactions</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold text-green-500">₹245</p>
              <p className="text-sm text-muted-foreground">Cashback Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyCard;
