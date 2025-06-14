import { useState } from 'react';
import { TrendingUp, Calendar, Filter, Download, PieChart, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ExpenseTracking = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [category, setCategory] = useState('all');

  const categoryData = [
    { name: 'Food & Dining', amount: 12450, percentage: 35, color: 'from-orange-500 to-red-500' },
    { name: 'Travel', amount: 8900, percentage: 25, color: 'from-blue-500 to-purple-500' },
    { name: 'Entertainment', amount: 6700, percentage: 19, color: 'from-pink-500 to-rose-500' },
    { name: 'Shopping', amount: 5200, percentage: 15, color: 'from-green-500 to-emerald-500' },
    { name: 'Utilities', amount: 2100, percentage: 6, color: 'from-yellow-500 to-orange-500' },
  ];

  const monthlyData = [
    { month: 'Jan', amount: 25000 },
    { month: 'Feb', amount: 28000 },
    { month: 'Mar', amount: 32000 },
    { month: 'Apr', amount: 29000 },
    { month: 'May', amount: 35000 },
    { month: 'Jun', amount: 31000 },
  ];

  const insights = [
    {
      title: "Spending Increase",
      description: "You've spent 24% more this week on food compared to last week",
      trend: "up",
      icon: "📈"
    },
    {
      title: "Budget Alert",
      description: "You're approaching your monthly limit for entertainment (85% used)",
      trend: "warning",
      icon: "⚠️"
    },
    {
      title: "Savings Opportunity",
      description: "You could save ₹3,200 monthly by reducing dining out by 30%",
      trend: "positive",
      icon: "💡"
    }
  ];

  const recentTransactions = [
    { id: 1, title: 'Starbucks Coffee', category: 'Food & Dining', amount: 450, date: '2 hours ago', type: 'debit' },
    { id: 2, title: 'Netflix Subscription', category: 'Entertainment', amount: 649, date: '1 day ago', type: 'debit' },
    { id: 3, title: 'Uber Ride', category: 'Travel', amount: 280, date: '1 day ago', type: 'debit' },
    { id: 4, title: 'Salary Credit', category: 'Income', amount: 85000, date: '3 days ago', type: 'credit' },
    { id: 5, title: 'Grocery Shopping', category: 'Food & Dining', amount: 1850, date: '3 days ago', type: 'debit' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Expense Tracking</h1>
          <p className="text-muted-foreground mt-1">Monitor your spending habits and save more</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 bg-fintech-dark-card border-fintech-dark-card">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-fintech-dark-card border-fintech-dark-card">
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-fintech-dark-card">
            <Download size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="fintech-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Total Spent</h3>
            <TrendingUp size={20} className="text-fintech-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">₹35,400</div>
          <div className="text-sm text-fintech-danger">+12% from last month</div>
        </div>

        <div className="fintech-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Budget Remaining</h3>
            <PieChart size={20} className="text-fintech-success" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">₹14,600</div>
          <div className="text-sm text-fintech-success">29% of monthly budget</div>
        </div>

        <div className="fintech-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Avg. Daily Spend</h3>
            <Calendar size={20} className="text-fintech-warning" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">₹1,180</div>
          <div className="text-sm text-muted-foreground">Based on this month</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Spending by Category */}
        <div className="lg:col-span-2">
          <div className="fintech-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Spending by Category</h3>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-32 bg-fintech-dark border-fintech-dark-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-fintech-dark-card border-fintech-dark-card">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="food">Food & Dining</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {categoryData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{item.name}</span>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">₹{item.amount.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-fintech-dark-card rounded-full h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="fintech-card mt-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Monthly Spending Trend</h3>
              <BarChart3 size={20} className="text-fintech-primary" />
            </div>
            <div className="h-64 flex items-end justify-between space-x-2">
              {monthlyData.map((month, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-primary rounded-t-lg transition-all duration-500 hover:opacity-80"
                    style={{ height: `${(month.amount / 40000) * 100}%` }}
                  ></div>
                  <div className="text-sm text-muted-foreground mt-2">{month.month}</div>
                  <div className="text-xs text-foreground font-medium">₹{month.amount / 1000}k</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insights & Recent Transactions */}
        <div className="space-y-6">
          {/* Behavior Insights */}
          <div className="fintech-card">
            <h3 className="text-lg font-bold text-foreground mb-4">Insights</h3>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 bg-fintech-dark-card rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{insight.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-sm">{insight.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="fintech-card">
            <h3 className="text-lg font-bold text-foreground mb-4">Recent Transactions</h3>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'credit' ? 'bg-fintech-success' : 'bg-fintech-dark-card'
                    }`}>
                      {transaction.type === 'credit' ? '↑' : '↓'}
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{transaction.title}</div>
                      <div className="text-xs text-muted-foreground">{transaction.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold text-sm ${
                      transaction.type === 'credit' ? 'text-fintech-success' : 'text-foreground'
                    }`}>
                      {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                    </div>
                    <div className="text-xs text-muted-foreground">{transaction.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracking;
