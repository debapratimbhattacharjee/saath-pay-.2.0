
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    query: 'electronics'
  },
  {
    name: 'Men\'s Fashion',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    query: 'mens-fashion'
  },
  {
    name: 'Women\'s Fashion',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    query: 'womens-fashion'
  },
  {
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    query: 'shoes'
  },
  {
    name: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    query: 'smartphone'
  },
  {
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bda9f7f7597b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    query: 'home-kitchen'
  },
  {
    name: 'Audio & Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    query: 'headphones'
  },
  {
    name: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    query: 'beauty'
  },
];

const ShopByCategory = () => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (query: string) => {
    navigate(`/shopping?category=${query}`);
  };
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Card 
          key={category.name}
          className="group overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300"
          onClick={() => handleCategoryClick(category.query)}
        >
          <div className="relative aspect-square">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <h3 className="text-white font-medium p-3 w-full">{category.name}</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ShopByCategory;
