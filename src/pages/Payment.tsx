import { useState } from 'react';
import { 
  Wallet, 
  Scan, 
  Phone, 
  Building2, 
  CreditCard, 
  QrCode,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Eye,
  EyeOff,
  History,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Payment = () => {
  const [showBalance, setShowBalance] = useState(true);
  const balance = 12450.75;

  const quickActions = [
    {
      title: "Scan & Pay",
      icon: Scan,
      color: "from-blue-500 to-cyan-500",
      description: "Scan QR code to pay"
    },
    {
      title: "To Mobile",
      icon: Phone,
      color: "from-green-500 to-emerald-500",
      description: "Send to phone number"
    },
    {
      title: "To Bank A/c",
      icon: Building2,
      color: "from-purple-500 to-pink-500",
      description: "Bank account transfer"
    },
    {
      title: "UPI ID",
      icon: Send,
      color: "from-orange-500 to-red-500",
      description: "Send to UPI ID"
    },
    {
      title: "My QR Code",
      icon: QrCode,
      color: "from-indigo-500 to-blue-500",
      description: "Show your QR"
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'sent',
      name: 'Rahul Kumar',
      method: 'UPI',
      amount: 500,
      date: '2 min ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'received',
      name: 'Priya Sharma',
      method: 'Phone Pay',
      amount: 1200,
      date: '1 hour ago',
      status: 'success'
    },
    {
      id: 3,
      type: 'sent',
      name: 'Amazon',
      method: 'Scan & Pay',
      amount: 899,
      date: 'Yesterday',
      status: 'success'
    },
    {
      id: 4,
      type: 'sent',
      name: 'Electricity Bill',
      method: 'Bank Transfer',
      amount: 2340,
      date: '2 days ago',
      status: 'success'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Wallet Balance Card */}
      <Card className="fintech-card bg-gradient-to-br  text-black dark:from-fintech-primary dark:to-blue-600 dark:text-white">
  <CardContent className="p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <Wallet size={24} />
        <span className="text-lg font-semibold">Wallet Balance</span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowBalance(!showBalance)}
        className="text-black hover:bg-black/10 dark:text-white dark:hover:bg-white/20"
      >
        {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
      </Button>
    </div>

    <div className="text-3xl font-bold mb-2">
      {showBalance ? `₹${balance.toLocaleString()}` : '₹****'}
    </div>

    <div className="flex space-x-3">
      {/* ✅ Add Money button — unified white style for all themes */}
      <Button
        className="flex-1 
           text-fintech-primary hover:bg-gray-100 
          dark:bg-transparent dark:border dark:border-white dark:text-white 
          dark:hover:bg-white dark:hover:text-fintech-primary
        "
      >
        <Plus size={16} className="mr-2" />
        Add Money
      </Button>

      {/* ✅ History button — styled differently for dark mode only */}
      <Button
        className="
          flex-1 
           text-fintech-primary hover:bg-gray-100 
          dark:bg-transparent dark:border dark:border-white dark:text-white 
          dark:hover:bg-white dark:hover:text-fintech-primary
        "
      >
        <History size={16} className="mr-2" />
        History
      </Button>
    </div>
  </CardContent>
</Card>


      {/* Quick Actions */}
      <Card className="fintech-card">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Money Transfer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl cursor-pointer hover:scale-105 transition-all duration-200 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow`}>
                  <action.icon size={24} className="text-white" />
                </div>
                <span className="font-medium text-center text-sm">{action.title}</span>
                <span className="text-xs text-muted-foreground text-center mt-1">{action.description}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transaction Tabs */}
      <Card className="fintech-card">
        <CardContent className="p-0">
          <Tabs defaultValue="recent" className="w-full">
            <div className="px-6 pt-6 pb-0">
              <CardTitle className="text-xl font-bold mb-4">Balance & History</CardTitle>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="sent">Sent</TabsTrigger>
                <TabsTrigger value="received">Received</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="recent" className="px-6 pb-6 mt-4">
              <div className="space-y-3">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-fintech-dark-card rounded-lg hover:bg-fintech-dark-lighter transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'received' ? 'bg-fintech-success' : 'bg-fintech-primary'
                      }`}>
                        {transaction.type === 'received' ? 
                          <ArrowDownLeft size={20} className="text-white" /> : 
                          <ArrowUpRight size={20} className="text-white" />
                        }
                      </div>
                      <div>
                        <div className="font-medium">{transaction.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.method} • {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.type === 'received' ? 'text-fintech-success' : 'text-foreground'
                    }`}>
                      {transaction.type === 'received' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sent" className="px-6 pb-6 mt-4">
              <div className="space-y-3">
                {recentTransactions.filter(t => t.type === 'sent').map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-fintech-dark-card rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-fintech-primary">
                       <ArrowUpRight size={20} className="text-black dark:text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{transaction.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.method} • {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold text-foreground">
                      -₹{transaction.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="received" className="px-6 pb-6 mt-4">
              <div className="space-y-3">
                {recentTransactions.filter(t => t.type === 'received').map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-fintech-dark-card rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-fintech-success">
                       <ArrowDownLeft size={20} className="text-black dark:text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{transaction.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.method} • {transaction.date}
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold text-fintech-success">
                      +₹{transaction.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
