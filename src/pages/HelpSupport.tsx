import { useState } from 'react';
import { Search, ChevronDown, ChevronRight, MessageCircle, Phone, Mail, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useNavigate } from 'react-router-dom';

const HelpSupport = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const faqData = [
    {
      id: 1,
      question: "How do I share my virtual card with someone?",
      answer: "You can share your virtual card by going to the Virtual Cards section, selecting the card you want to share, and clicking 'Share Card'. Set spending limits and duration before sharing."
    },
    {
      id: 2,
      question: "Is it safe to use someone else's shared card?",
      answer: "Yes, our platform uses bank-level security with spending limits set by the card owner. All transactions are monitored and the card owner can revoke access anytime."
    },
    {
      id: 3,
      question: "How do I earn cashback as a card lender?",
      answer: "When someone uses your shared card, you earn cashback from your credit card company plus additional platform rewards. Track your earnings in the dashboard."
    },
    {
      id: 4,
      question: "What if I need to block a shared card immediately?",
      answer: "Go to your Virtual Cards section, find the shared card, and click 'Revoke Access'. The card will be blocked immediately for the borrower."
    },
    {
      id: 5,
      question: "How do I change my UPI or payment settings?",
      answer: "Go to Settings > Linked Accounts to manage your UPI and card connections. You can add, remove, or modify your payment methods there."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = searchQuery 
    ? faqData.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqData;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Help & Support</h1>
        <p className="text-muted-foreground">Find answers to your questions or get help from our team</p>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Type your question..."
              className="pl-10 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Common FAQs */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Find quick answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredFaqs.map((faq) => (
              <Collapsible key={faq.id}>
                <CollapsibleTrigger
                  className="flex items-center justify-between w-full p-4 text-left hover:bg-accent rounded-lg transition-colors"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaqs.includes(faq.id) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4 text-muted-foreground">
                  {faq.answer}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No FAQs found matching your search.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Support Channels */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Get personalized help from our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center hover:bg-accent transition-colors">
              <MessageCircle className="w-8 h-8 text-fintech-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-3">Get instant help</p>
              <Button variant="outline" size="sm" className="w-full">
                Start Chat
              </Button>
            </div>
            
            <div className="p-4 border rounded-lg text-center hover:bg-accent transition-colors">
              <Mail className="w-8 h-8 text-fintech-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-3">help@splitpay.com</p>
              <Button variant="outline" size="sm" className="w-full">
                Send Email
              </Button>
            </div>
            
            <div className="p-4 border rounded-lg text-center hover:bg-accent transition-colors">
              <Phone className="w-8 h-8 text-fintech-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-3">+1 (555) 123-HELP</p>
              <Button variant="outline" size="sm" className="w-full">
                Call Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => navigate('/settings')}
            >
              <Settings className="mr-2 h-4 w-4" />
              Back to Settings
            </Button>
            
            <Button 
              className="flex-1 fintech-button-primary"
              onClick={() => navigate('/profile')}
            >
              <User className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpSupport;
