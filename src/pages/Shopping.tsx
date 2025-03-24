import React from 'react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { ShoppingBag, Filter, Star, Heart, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'Minimalist Wallet',
    category: 'Accessories',
    price: 29.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1580747935427-96e646c3e59b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Leather Watch',
    category: 'Accessories',
    price: 79.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1524592094714-0fdf92d75463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    price: 19.99,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1523381294911-8cd694c2b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Denim Jeans',
    category: 'Clothing',
    price: 59.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1543508282-86b24e569b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    name: 'Running Shoes',
    category: 'Shoes',
    price: 89.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    name: 'Leather Boots',
    category: 'Shoes',
    price: 129.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

const categories = ['All', 'Accessories', 'Clothing', 'Shoes'];

const Shopping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-custom py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">Shop</h1>
          <div className="flex items-center space-x-4">
            <Input type="text" placeholder="Search products..." className="md:w-64" />
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <h2 className="text-lg font-semibold">Categories:</h2>
          {categories.map((category) => (
            <Badge key={category} className="cursor-pointer hover:bg-secondary">
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-card shadow-md hover:shadow-lg transition-shadow duration-200">
              <img src={product.image} alt={product.name} className="rounded-md h-48 w-full object-cover mb-4" />
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <span className="text-lg font-semibold">${product.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shopping;
