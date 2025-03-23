
import React from 'react';
import { Search, SplitSquareVertical, ReceiptText, CreditCard, TagsIcon, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with search */}
      <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <span className="text-xl font-bold text-primary">
              <span className="text-primary">Saath</span>Pay
            </span>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products, offers, and more..."
                  className="w-full rounded-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                />
              </div>
            </div>
            <nav className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <CreditCard className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ReceiptText className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <div className="relative">
                  <div className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-primary"></div>
                  <TagsIcon className="h-5 w-5" />
                </div>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="https://avatars.githubusercontent.com/u/124599?v=4"
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-6">
        {/* Quick Access Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <SplitSquareVertical className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium">Split Expenses</h3>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <ReceiptText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium">Expense Tracking</h3>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium">Virtual Cards</h3>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <TagsIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium">Offers & Cashback</h3>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different content sections */}
        <Tabs defaultValue="recommendations" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
            <TabsTrigger value="groups">Your Groups</TabsTrigger>
          </TabsList>
          
          {/* Personalized Recommendations Tab */}
          <TabsContent value="recommendations" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Trending Offers</CardTitle>
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                  </div>
                  <CardDescription>Based on your interests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                        <TagsIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">10% Cashback on Food</p>
                        <p className="text-xs text-muted-foreground">Valid until Jun 30</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                        <TagsIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">5% Off on Electronics</p>
                        <p className="text-xs text-muted-foreground">Valid until May 15</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Spending Insights</CardTitle>
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                  </div>
                  <CardDescription>Based on your transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                        <ReceiptText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Food expenses increased</p>
                        <p className="text-xs text-muted-foreground">15% higher than last month</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                        <ReceiptText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Shopping expenses reduced</p>
                        <p className="text-xs text-muted-foreground">20% lower than average</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">For You</CardTitle>
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                  </div>
                  <CardDescription>Personalized recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Virtual Card for Amazon</p>
                        <p className="text-xs text-muted-foreground">Create a dedicated card</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                        <SplitSquareVertical className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Split bill with friends</p>
                        <p className="text-xs text-muted-foreground">For your weekend plans</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest transactions and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between border-b pb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          <ReceiptText className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Coffee with Friends</p>
                          <p className="text-xs text-muted-foreground">Split with 3 people</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">₹ 450</p>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="groups" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Groups</CardTitle>
                <CardDescription>Groups you've created or joined</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="hover:shadow-md transition-all cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">
                              {['R', 'F', 'T', 'W'][i-1]}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">{['Roommates', 'Friends', 'Trip to Goa', 'Weekend'][i-1]}</p>
                            <p className="text-xs text-muted-foreground">{[4, 6, 8, 3][i-1]} members • Created {i} {i === 1 ? 'week' : 'weeks'} ago</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
