
import React from 'react';
import { Smartphone, ShoppingBag, Shirt, Tv, Headphones, ShoppingBasket, Home, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Electronics', icon: <Tv className="h-5 w-5" />, query: 'electronics' },
  { name: 'Smartphones', icon: <Smartphone className="h-5 w-5" />, query: 'smartphone' },
  { name: 'Fashion', icon: <ShoppingBag className="h-5 w-5" />, query: 'fashion' },
  { name: 'Clothing', icon: <Shirt className="h-5 w-5" />, query: 'clothing' },
  { name: 'Shoes', icon: <ShoppingBasket className="h-5 w-5" />, query: 'shoes' },
  { name: 'Audio', icon: <Headphones className="h-5 w-5" />, query: 'headphones' },
  { name: 'Home', icon: <Home className="h-5 w-5" />, query: 'home' },
  { name: 'Deals', icon: <Heart className="h-5 w-5" />, query: 'deals' },
];

const ShoppingCategories = () => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (query: string) => {
    navigate(`/shopping?category=${query}`);
  };
  
  return (
    <div className="py-3 overflow-x-auto">
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex flex-col items-center min-w-[80px] px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => handleCategoryClick(category.query)}
          >
            <div className="rounded-full bg-gray-100 dark:bg-gray-800 p-2 mb-1">
              {category.icon}
            </div>
            <span className="text-xs font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCategories;
