import { useState } from 'react';
import { Search, Filter, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const transactions = [
    {
      id: '1',
      date: '2024-01-15',
      merchant: 'Amazon India',
      amount: 2499,
      type: 'debit',
      category: 'Shopping',
      user: 'Rahul Kumar',
      status: 'completed'
    },
    {
      id: '2',
      date: '2024-01-15',
      merchant: 'Swiggy',
      amount: 450,
      type: 'debit',
      category: 'Food',
      user: 'Priya Sharma',
      status: 'completed'
    },
    {
      id: '3',
      date: '2024-01-14',
      merchant: 'Uber',
      amount: 185,
      type: 'debit',
      category: 'Transport',
      user: 'Amit Singh',
      status: 'completed'
    },
    {
      id: '4',
      date: '2024-01-14',
      merchant: 'BookMyShow',
      amount: 800,
      type: 'debit',
      category: 'Entertainment',
      user: 'Sarah Wilson',
      status: 'pending'
    }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.user.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || transaction.category.toLowerCase() === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Transaction History</h1>
        <p className="text-muted-foreground">Track all card usage and payments</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search by merchant or user..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <Filter size={16} className="mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} />
              Date Range
            </Button>

            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-fintech-primary">₹3,934</p>
              <p className="text-sm text-muted-foreground">Total Today</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-fintech-primary">₹45,230</p>
              <p className="text-sm text-muted-foreground">This Month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">₹892</p>
              <p className="text-sm text-muted-foreground">Cashback Earned</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-fintech-primary">127</p>
              <p className="text-sm text-muted-foreground">Transactions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Detailed view of all card transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-fintech-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-fintech-primary font-semibold">
                      {transaction.merchant.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{transaction.merchant}</p>
                    <p className="text-sm text-muted-foreground">Used by: {transaction.user}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date} • {transaction.category}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold text-lg">-₹{transaction.amount.toLocaleString()}</p>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTransactions.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No transactions found matching your search criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
