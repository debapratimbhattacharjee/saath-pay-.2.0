
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { searchProducts } from '@/utils/mockProducts';
import ProductSearchResults from '@/components/ProductSearchResults';
import ShoppingCategories from '@/components/ShoppingCategories';
import ShopByCategory from '@/components/ShopByCategory';

const Shopping = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = searchProducts(searchQuery);
      setProducts(results);
      setShowResults(true);
    }
  };

  const closeResults = () => {
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with search */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold">Shopping Comparison</h1>
            
            <form onSubmit={handleSearch} className="w-full md:max-w-md">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 h-full"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
          
          <ShoppingCategories />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {showResults ? (
          <ProductSearchResults 
            products={products}
            searchQuery={searchQuery}
            onClose={closeResults}
          />
        ) : (
          <>
            {/* Featured deal */}
            <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <Badge variant="outline" className="mb-2 border-white text-white">Featured Deal</Badge>
                    <h2 className="text-xl md:text-2xl font-bold mb-2">Extra 15% Off on Electronics</h2>
                    <p className="mb-4">Use our Virtual Credit Card for exclusive discounts across all platforms!</p>
                    <Button 
                      variant="outline" 
                      className="bg-white/10 text-white border-white hover:bg-white/20"
                      onClick={() => navigate('/dashboard')}
                    >
                      Activate Offer
                    </Button>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg text-center">
                    <p className="text-white text-lg font-medium">Limited Time Only!</p>
                    <p className="text-3xl font-bold">15% OFF</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Shop by Category */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
              <ShopByCategory />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shopping;
