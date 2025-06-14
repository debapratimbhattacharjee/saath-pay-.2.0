import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus,
  Users,
  Calculator,
  Calendar,
  Tag,
  Upload,
  X,
  QrCode,
  UserPlus,
  Trash2
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SplitExpenses = () => {
  const [expenseForm, setExpenseForm] = useState({
    title: '',
    amount: '',
    payer: '',
    participants: [],
    category: '',
    date: '',
    notes: '',
    splitType: 'equal'
  });

  const [qrSplitForm, setQrSplitForm] = useState({
    amount: '',
    numberOfPeople: 2,
    description: ''
  });

  const navigate = useNavigate(); // ✅ FIX: Add this line

  const generateQrSplit = () => {
    const amount = parseFloat(qrSplitForm.amount);
    if (amount > 0 && qrSplitForm.numberOfPeople > 0) {
      const splitAmountPerPerson = amount / qrSplitForm.numberOfPeople;

      navigate('/dashboard/split-expenses/qr', {
        state: {
          totalAmount: amount.toFixed(2),
          numberOfPeople: qrSplitForm.numberOfPeople,
          amountPerPerson: splitAmountPerPerson.toFixed(2),
          description: qrSplitForm.description || 'Split Payment'
        }
      });
    }
  };


  

  const [participants, setParticipants] = useState([
    { id: 1, name: 'You', email: 'you@example.com', avatar: '👤', share: 0, color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
    { id: 2, name: 'Sarah', email: 'sarah@example.com', avatar: '🐱', share: 0, color: 'bg-gradient-to-br from-pink-500 to-rose-500' },
    { id: 3, name: 'Mike', email: 'mike@example.com', avatar: '🐸', share: 0, color: 'bg-gradient-to-br from-green-500 to-emerald-500' },
    { id: 4, name: 'Alex', email: 'alex@example.com', avatar: '🦊', share: 0, color: 'bg-gradient-to-br from-orange-500 to-red-500' },
  ]);

  const [newParticipant, setNewParticipant] = useState({ name: '', email: '' });

  const categories = [
    { value: 'food', label: '🍔 Food & Dining', color: 'from-orange-400 to-red-500' },
    { value: 'travel', label: '✈️ Travel', color: 'from-blue-400 to-purple-500' },
    { value: 'entertainment', label: '🎬 Entertainment', color: 'from-pink-400 to-rose-500' },
    { value: 'shopping', label: '🛍️ Shopping', color: 'from-green-400 to-emerald-500' },
    { value: 'utilities', label: '⚡ Utilities', color: 'from-yellow-400 to-orange-500' },
    { value: 'rent', label: '🏠 Rent', color: 'from-indigo-400 to-blue-500' },
  ];

  const avatars = ['🐱', '🐸', '🦊', '🐻', '🐼', '🐨', '🦁', '🐯', '🐮', '🐷', '🐵', '🦄'];

  const recentExpenses = [
    { id: 1, title: 'Dinner at Italian Restaurant', amount: 2400, payer: 'You', participants: 4, date: '2 hours ago', category: 'food' },
    { id: 2, title: 'Uber Ride to Airport', amount: 850, payer: 'Sarah', participants: 3, date: '1 day ago', category: 'travel' },
    { id: 3, title: 'Movie Tickets', amount: 1200, payer: 'Mike', participants: 4, date: '2 days ago', category: 'entertainment' },
  ];

  const addParticipant = () => {
    if (newParticipant.name) {
      const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
      const colors = [
        'bg-gradient-to-br from-purple-500 to-indigo-500',
        'bg-gradient-to-br from-cyan-500 to-blue-500',
        'bg-gradient-to-br from-teal-500 to-green-500',
        'bg-gradient-to-br from-amber-500 to-orange-500',
        'bg-gradient-to-br from-red-500 to-pink-500',
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      setParticipants([...participants, {
        id: Date.now(),
        name: newParticipant.name,
        email: newParticipant.email || `${newParticipant.name.toLowerCase()}@example.com`,
        avatar: randomAvatar,
        share: 0,
        color: randomColor
      }]);
      setNewParticipant({ name: '', email: '' });
    }
  };

  const removeParticipant = (id) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  const calculateSplit = () => {
    const amount = parseFloat(expenseForm.amount) || 0;
    const activeParticipants = participants.filter(p => p.share > 0 || expenseForm.splitType === 'equal');
    
    if (expenseForm.splitType === 'equal') {
      const splitAmount = amount / activeParticipants.length;
      return activeParticipants.map(p => ({ ...p, share: splitAmount }));
    }
    return participants;
  };
 

  const splitAmountPerPerson = parseFloat(qrSplitForm.amount) / qrSplitForm.numberOfPeople || 0;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Split Expenses</h1>
          <p className="text-muted-foreground mt-1">Easily split bills with friends and family</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* QR Split Section */}
        <div className="lg:col-span-2">
          <Card className="fintech-card mb-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <QrCode size={24} className="text-fintech-primary" />
                <span>Split with QR Code</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Total Amount</label>
                  <Input
                    type="number"
                    placeholder="₹ 0.00"
                    value={qrSplitForm.amount}
                    onChange={(e) => setQrSplitForm({...qrSplitForm, amount: e.target.value})}
                    className="bg-fintech-dark-card border-fintech-dark-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Number of People</label>
                  <Input
                    type="number"
                    min="2"
                    value={qrSplitForm.numberOfPeople}
                    onChange={(e) => setQrSplitForm({...qrSplitForm, numberOfPeople: parseInt(e.target.value) || 2})}
                    className="bg-fintech-dark-card border-fintech-dark-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Amount per Person</label>
                  <div className="bg-fintech-dark-card border border-fintech-dark-card rounded-md px-3 py-2 text-foreground">
                    ₹{splitAmountPerPerson.toFixed(2)}
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description (Optional)</label>
                <Input
                  placeholder="e.g., Dinner at Restaurant"
                  value={qrSplitForm.description}
                  onChange={(e) => setQrSplitForm({...qrSplitForm, description: e.target.value})}
                  className="bg-fintech-dark-card border-fintech-dark-card"
                />
              </div>

              <Button 
                onClick={generateQrSplit}
                className="fintech-button-primary w-full"
                disabled={!qrSplitForm.amount || parseFloat(qrSplitForm.amount) <= 0}
              >
                <QrCode size={20} className="mr-2" />
                Generate QR Code
              </Button>
            </CardContent>
          </Card>
          {/* Main Form */}
          <div className="xl:col-span-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                  <Plus size={20} className="text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">New Expense</h2>
              </div>

              <div className="space-y-8">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                      <Tag size={16} />
                      <span>What did you spend on?</span>
                    </label>
                    <Input
                      placeholder="e.g., Dinner at Italian Restaurant"
                      value={expenseForm.title}
                      onChange={(e) => setExpenseForm({...expenseForm, title: e.target.value})}
                      className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                      <Calculator size={16} />
                      <span>How much?</span>
                    </label>
                    <Input
                      type="number"
                      placeholder="₹ 0.00"
                      value={expenseForm.amount}
                      onChange={(e) => setExpenseForm({...expenseForm, amount: e.target.value})}
                      className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm text-lg font-semibold"
                    />
                  </div>
                </div>

                {/* Category and Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Category</label>
                    <Select value={expenseForm.category} onValueChange={(value) => setExpenseForm({...expenseForm, category: value})}>
                      <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm">
                        <SelectValue placeholder="Choose a category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-border/50">
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value} className="rounded-lg">
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>When?</span>
                    </label>
                    <Input
                      type="date"
                      value={expenseForm.date}
                      onChange={(e) => setExpenseForm({...expenseForm, date: e.target.value})}
                      className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Split Type */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-foreground">How to split?</label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { type: 'equal', icon: '⚖️', title: 'Equal Split', desc: 'Split equally among all' },
                      { type: 'percentage', icon: '📊', title: 'Percentage', desc: 'Custom percentages' },
                      { type: 'custom', icon: '🎯', title: 'Custom', desc: 'Exact amounts' }
                    ].map((option) => (
                      <button
                        key={option.type}
                        onClick={() => setExpenseForm({...expenseForm, splitType: option.type})}
                        className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                          expenseForm.splitType === option.type
                            ? 'border-primary bg-primary/10 shadow-lg scale-105'
                            : 'border-border/50 bg-card/30 hover:border-primary/50 hover:bg-primary/5'
                        }`}
                      >
                        <div className="text-2xl mb-2">{option.icon}</div>
                        <div className="font-semibold text-foreground">{option.title}</div>
                        <div className="text-xs text-muted-foreground">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Participants */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                      <Users size={16} />
                      <span>Split with</span>
                    </label>
                    <span className="text-sm text-muted-foreground">{participants.length} people</span>
                  </div>
                  
                  {/* Add New Participant */}
                  <div className="flex space-x-3 p-4 bg-muted/30 rounded-2xl border border-dashed border-border">
                    <Input
                      placeholder="Friend's name"
                      value={newParticipant.name}
                      onChange={(e) => setNewParticipant({...newParticipant, name: e.target.value})}
                      className="flex-1 h-10 rounded-xl border-0 bg-background/50"
                    />
                    <Input
                      placeholder="Email (optional)"
                      value={newParticipant.email}
                      onChange={(e) => setNewParticipant({...newParticipant, email: e.target.value})}
                      className="flex-1 h-10 rounded-xl border-0 bg-background/50"
                    />
                    <Button onClick={addParticipant} size="sm" className="h-10 px-4 rounded-xl bg-primary hover:bg-primary/90">
                      <UserPlus size={16} />
                    </Button>
                  </div>

                  {/* Participants List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {participants.map((participant) => (
                      <div key={participant.id} className="flex items-center justify-between p-4 bg-card/30 rounded-2xl border border-border/30 hover:bg-card/50 transition-all duration-200">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 ${participant.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                            {participant.avatar}
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{participant.name}</div>
                            <div className="text-sm text-muted-foreground">{participant.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {expenseForm.splitType !== 'equal' && (
                            <Input
                              type="number"
                              placeholder={expenseForm.splitType === 'percentage' ? '%' : '₹'}
                              className="w-20 h-8 text-sm rounded-lg border-border/50 bg-background/50"
                              value={participant.share}
                              onChange={(e) => {
                                const newParticipants = participants.map(p =>
                                  p.id === participant.id ? {...p, share: parseFloat(e.target.value) || 0} : p
                                );
                                setParticipants(newParticipants);
                              }}
                            />
                          )}
                          <span className="text-sm font-semibold text-primary">
                            ₹{expenseForm.splitType === 'equal' ? 
                              (parseFloat(expenseForm.amount) / participants.length || 0).toFixed(2) :
                              participant.share.toFixed(2)
                            }
                          </span>
                          {participant.name !== 'You' && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeParticipant(participant.id)}
                              className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 size={14} />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">Add a note (optional)</label>
                  <Textarea
                    placeholder="Any additional details about this expense..."
                    value={expenseForm.notes}
                    onChange={(e) => setExpenseForm({...expenseForm, notes: e.target.value})}
                    className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm resize-none"
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200">
                  <Plus size={20} className="mr-2" />
                  Split This Expense
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-4 space-y-6">
            {/* Recent Expenses */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Calendar size={16} className="text-white" />
                </div>
                <span>Recent Splits</span>
              </h3>
              <div className="space-y-4">
                {recentExpenses.map((expense) => (
                  <div key={expense.id} className="p-4 bg-card/30 rounded-2xl border border-border/30 hover:bg-card/50 transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-foreground text-sm leading-relaxed">{expense.title}</h4>
                      <span className="text-primary font-bold text-lg">₹{expense.amount}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <span>by</span>
                        <span className="font-medium text-foreground">{expense.payer}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users size={12} />
                        <span>{expense.participants}</span>
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">{expense.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Balance Summary */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Calculator size={16} className="text-white" />
                </div>
                <span>Your Balance</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                  <span className="text-red-400 font-medium">You owe</span>
                  <span className="text-red-500 font-bold text-xl">₹1,200</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
                  <span className="text-green-400 font-medium">You are owed</span>
                  <span className="text-green-500 font-bold text-xl">₹850</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/20 rounded-2xl">
                    <span className="font-semibold text-foreground">Net Balance</span>
                    <span className="text-red-500 font-bold text-xl">-₹350</span>
                  </div>
                </div>
                <Button className="w-full h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 font-semibold shadow-lg">
                  Settle Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitExpenses;
