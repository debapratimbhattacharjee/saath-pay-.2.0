
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { ShoppingBag, Filter, Star, Heart, Search, TrendingUp, ArrowDown, CreditCard, BadgePercent, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Sample data for price comparison
const products = [
  {
    id: 1,
    name: 'Minimalist Wallet',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1580747935427-96e646c3e59b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.5,
    prices: [
      { store: 'Amazon', price: 2999, originalPrice: 3499, discount: 14 },
      { store: 'Flipkart', price: 3199, originalPrice: 3599, discount: 11 },
      { store: 'Myntra', price: 3299, originalPrice: 3699, discount: 10 },
    ],
    saathpayDiscount: 5,
  },
  {
    id: 2,
    name: 'Leather Watch',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0fdf92d75463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    rating: 4.8,
    prices: [
      { store: 'Amazon', price: 7499, originalPrice: 8999, discount: 16 },
      { store: 'Flipkart', price: 7199, originalPrice: 8499, discount: 15 },
      { store: 'Tata CLiQ', price: 7999, originalPrice: 8999, discount: 11 },
    ],
    saathpayDiscount: 8,
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1523381294911-8cd694c2b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.2,
    prices: [
      { store: 'Amazon', price: 1999, originalPrice: 2499, discount: 20 },
      { store: 'Myntra', price: 1799, originalPrice: 2299, discount: 21 },
      { store: 'Ajio', price: 1899, originalPrice: 2399, discount: 20 },
    ],
    saathpayDiscount: 5,
  },
  {
    id: 4,
    name: 'Denim Jeans',
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1543508282-86b24e569b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    rating: 4.6,
    prices: [
      { store: 'Amazon', price: 5999, originalPrice: 6999, discount: 14 },
      { store: 'Flipkart', price: 5499, originalPrice: 6499, discount: 15 },
      { store: 'Myntra', price: 5799, originalPrice: 6799, discount: 14 },
    ],
    saathpayDiscount: 7,
  },
  {
    id: 5,
    name: 'Running Shoes',
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.9,
    prices: [
      { store: 'Amazon', price: 8999, originalPrice: 10999, discount: 18 },
      { store: 'Flipkart', price: 9499, originalPrice: 11499, discount: 17 },
      { store: 'Decathlon', price: 8599, originalPrice: 9999, discount: 14 },
    ],
    saathpayDiscount: 10,
  },
  {
    id: 6,
    name: 'Leather Boots',
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    rating: 4.7,
    prices: [
      { store: 'Amazon', price: 12999, originalPrice: 14999, discount: 13 },
      { store: 'Myntra', price: 11999, originalPrice: 13999, discount: 14 },
      { store: 'Tata CLiQ', price: 12499, originalPrice: 14499, discount: 13 },
    ],
    saathpayDiscount: 8,
  },
];

// Featured deals
const featuredDeals = [
  {
    id: 1,
    name: 'Apple iPhone 15',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww',
    bestPrice: 74999,
    originalPrice: 79999,
    bestStore: 'Amazon',
    saathpayDiscount: 10,
    savedAmount: 7500,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww',
    bestPrice: 62999,
    originalPrice: 74999,
    bestStore: 'Flipkart',
    saathpayDiscount: 8,
    savedAmount: 7000,
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
    bestPrice: 26999,
    originalPrice: 34999,
    bestStore: 'Croma',
    saathpayDiscount: 12,
    savedAmount: 5000,
  },
  {
    id: 4,
    name: 'Dyson V12 Vacuum',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFjdXVtJTIwY2xlYW5lcnxlbnwwfHwwfHx8MA%3D%3D',
    bestPrice: 47999,
    originalPrice: 58999,
    bestStore: 'Reliance Digital',
    saathpayDiscount: 7,
    savedAmount: 7700,
  },
];

// Credit card offers
const creditCardOffers = [
  { bank: 'HDFC Bank', discount: '10% up to ₹1,500', minAmount: 5000 },
  { bank: 'ICICI Bank', discount: '12% up to ₹2,000', minAmount: 8000 },
  { bank: 'SBI Card', discount: '15% up to ₹2,500', minAmount: 10000 },
  { bank: 'Axis Bank', discount: '8% up to ₹1,200', minAmount: 4000 },
];

const calculateFinalPrice = (productPrice, saathpayDiscount) => {
  return Math.round(productPrice - (productPrice * saathpayDiscount / 100));
};

const formatIndianPrice = (price) => {
  return '₹' + price.toLocaleString('en-IN');
};

const getBestPrice = (prices) => {
  return prices.reduce((min, store) => min.price < store.price ? min : store);
};

const Shopping = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // In a real application, this would fetch search results
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    window.scrollTo({
      top: document.getElementById('comparison-section').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
    {/* Hero Section */}
<div className="pt-20 bg-background :from-cyan-800 dark:to-blue-900">
  <div className="container-custom py-16 md:py-24">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="text-black dark:text-white max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white">
          Compare. Save. Shop Smart.
        </h1>
        <p className="text-lg md:text-xl text-black/90 dark:text-white/90 mb-8">
          Find the best prices across top e-commerce platforms and save even more with exclusive SaathPay credit card discounts.
        </p>
        
        {/* Search form remains unchanged */}
        <form onSubmit={handleSearch} className="flex w-full max-w-2xl">
          <div className="relative flex-1">
            <Input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products across all platforms..."
              className="pr-10 h-14 pl-5 w-full rounded-l-md text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Button type="submit" className="h-14 rounded-l-none px-6 bg-amber-500 hover:bg-amber-600 text-black font-medium text-base">
            Compare Prices
          </Button>
        </form>
        
        <div className="flex flex-wrap gap-4 mt-6">
          <Badge variant="outline" className="bg-white/10 hover:bg-white/20 text-black dark:text-white border-none py-1.5 px-3 text-sm cursor-pointer">
            iPhone 15
          </Badge>
          <Badge variant="outline" className="bg-white/10 hover:bg-white/20 text-black dark:text-white border-none py-1.5 px-3 text-sm cursor-pointer">
            Samsung TV
          </Badge>
          <Badge variant="outline" className="bg-white/10 hover:bg-white/20 text-black dark:text-white border-none py-1.5 px-3 text-sm cursor-pointer">
            Air Fryer
          </Badge>
          <Badge variant="outline" className="bg-white/10 hover:bg-white/20 text-black dark:text-white border-none py-1.5 px-3 text-sm cursor-pointer">
            Gaming Laptop
          </Badge>
        </div>
      </div>
      
      <div className="bg-slate-500/10 backdrop-blur-sm p-6 rounded-xl w-full max-w-md">
        <div className="flex items-center mb-5">
          <BadgePercent className="h-6 w-6 text-amber-300 mr-2" />
          <h3 className="text-black dark:text-white text-xl font-semibold">Today's Best Deals</h3>
        </div>
        <div className="space-y-4">
          {featuredDeals.slice(0, 3).map((deal) => (
            <div key={deal.id} className="flex items-center gap-4 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
              <img src={deal.image} alt={deal.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="flex-1">
                <h4 className="text-black dark:text-white font-medium line-clamp-1">{deal.name}</h4>
                <div className="flex items-center mt-1">
                  <span className="text-amber-300 font-bold">{formatIndianPrice(deal.bestPrice)}</span>
                  <span className="text-black/60 dark:text-white/60 text-sm line-through ml-2">
                    {formatIndianPrice(deal.originalPrice)}
                  </span>
                </div>
                <div className="flex items-center mt-1 text-sm text-black/80 dark:text-white/80">
                  <span>Best at {deal.bestStore}</span>
                  <Badge variant="outline" className="ml-2 bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                    Save {formatIndianPrice(deal.savedAmount)}
                  </Badge>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-black/50 dark:text-white/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  <div className="bg-gradient-to-t bg-sky-300 dark:bg-cyan-500 ">
    <div className="container-custom py-4">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center md:text-left">
        <div className="flex items-center">
          <CreditCard className="h-6 w-6 text-amber-900 dark:text-amber-800 mr-2" />
          <span className="text-amber-900 dark:text-amber-800 font-medium">
            Extra SaathPay discounts on all purchases
          </span>
        </div>
        <div className="flex items-center">
          <TrendingUp className="h-6 w-6 text-amber-900 dark:text-amber-800 mr-2" />
          <span className="text-amber-900 dark:text-amber-800 font-medium">
            Real-time price tracking across platforms
          </span>
        </div>
        <div className="flex items-center">
          <ArrowDown className="h-6 w-6 text-amber-900 dark:text-amber-800 mr-2" />
          <span className="text-amber-900 dark:text-amber-800 font-medium">
            Get alerts when prices drop
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
      
      {/* Featured Products Carousel */}
      <div className="container-custom py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Top Price Drops & Deals</h2>
          <Button variant="outline" size="sm" className="gap-1">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {featuredDeals.map((deal) => (
              <CarouselItem key={deal.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="h-full border-transparent hover:border-cyan-200 dark:hover:border-cyan-800 transition-all">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={deal.image} 
                        alt={deal.name}
                        className="w-full aspect-square object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-red-500 text-white border-0">
                        {Math.round((deal.originalPrice - deal.bestPrice) / deal.originalPrice * 100)}% OFF
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-2 line-clamp-1">{deal.name}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold">{formatIndianPrice(deal.bestPrice)}</span>
                        <span className="text-sm text-muted-foreground line-through">{formatIndianPrice(deal.originalPrice)}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <Badge variant="outline" className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30">
                          Best at {deal.bestStore}
                        </Badge>
                        <div className="flex items-center text-amber-500 font-medium">
                          <CreditCard className="h-4 w-4 mr-1" />
                          <span className="text-xs">+{deal.saathpayDiscount}% off</span>
                        </div>
                      </div>
                      <Button variant="default" className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                        View Deal
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
      
      {/* Credit Card Offers Section */}
      <div className="bg-muted py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Exclusive Credit Card Offers</h2>
              <p className="text-muted-foreground">Save even more with these bank offers when you shop with SaathPay</p>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              <CreditCard className="mr-2 h-5 w-5" />
              Get SaathPay Card
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditCardOffers.map((offer, index) => (
              <Card key={index} className="border-transparent">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">{offer.bank}</h3>
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30">
                      {offer.discount}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Min. transaction: {formatIndianPrice(offer.minAmount)}</p>
                  <Button variant="outline" className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Product Comparison Section */}
      <div id="comparison-section" className="container-custom py-12">
        <h2 className="text-2xl font-bold mb-8">Price Comparison</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {products.slice(0, 6).map((product) => {
            const bestPrice = getBestPrice(product.prices);
            const finalPrice = calculateFinalPrice(bestPrice.price, product.saathpayDiscount);
            
            return (
              <Card 
                key={product.id}
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:shadow-md border-transparent", 
                  selectedProduct?.id === product.id ? "ring-2 ring-cyan-500 dark:ring-cyan-400" : "hover:border-cyan-200 dark:hover:border-cyan-800"
                )}
                onClick={() => handleProductSelect(product)}
              >
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-1/3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <div className="flex items-center text-amber-500 mb-1">
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                      <h3 className="font-medium mb-2">{product.name}</h3>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-lg font-bold">{formatIndianPrice(bestPrice.price)}</span>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-0">
                          {bestPrice.store}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800">
                          <CreditCard className="h-3 w-3 mr-1" />
                          {product.saathpayDiscount}% extra off
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Compare {product.prices.length} stores
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {selectedProduct && (
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="w-full md:w-1/4">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-amber-500 mr-4">
                      <Star size={18} fill="currentColor" />
                      <span className="ml-1 font-medium">{selectedProduct.rating}</span>
                    </div>
                    <Badge>{selectedProduct.category}</Badge>
                  </div>
                  
                  <div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                      <h4 className="font-medium text-cyan-800 dark:text-cyan-300">SaathPay Discount</h4>
                    </div>
                    <p className="text-sm text-cyan-700 dark:text-cyan-400 mb-2">
                      Get an extra {selectedProduct.saathpayDiscount}% discount when purchasing with SaathPay!
                    </p>
                    <Button variant="link" className="text-cyan-600 dark:text-cyan-400 p-0 h-auto text-sm">
                      Learn more about SaathPay benefits
                    </Button>
                  </div>
                  
                  <h4 className="font-semibold mb-3">Store Price Comparison</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Store</TableHead>
                        <TableHead>Original Price</TableHead>
                        <TableHead>Discount</TableHead>
                        <TableHead>Current Price</TableHead>
                        <TableHead>With SaathPay</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedProduct.prices.map((price, index) => {
                        const finalPrice = calculateFinalPrice(price.price, selectedProduct.saathpayDiscount);
                        const isBestPrice = price.price === getBestPrice(selectedProduct.prices).price;
                        
                        return (
                          <TableRow key={index} className={isBestPrice ? "bg-cyan-50 dark:bg-cyan-900/20" : ""}>
                            <TableCell className="font-medium">
                              {price.store}
                              {isBestPrice && (
                                <Badge className="ml-2 bg-green-500 text-white">Best Price</Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-muted-foreground line-through">
                              {formatIndianPrice(price.originalPrice)}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                                {price.discount}%
                              </Badge>
                            </TableCell>
                            <TableCell className="font-semibold">
                              {formatIndianPrice(price.price)}
                            </TableCell>
                            <TableCell className="font-bold text-cyan-600 dark:text-cyan-400">
                              {formatIndianPrice(finalPrice)}
                            </TableCell>
                            <TableCell>
                              <Button size="sm" className={isBestPrice ? "bg-gradient-to-r from-cyan-500 to-blue-600" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}>
                                {isBestPrice ? "Buy Now" : "View"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Shopping;
