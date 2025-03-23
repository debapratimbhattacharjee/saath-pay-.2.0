
import { Product } from '@/components/ProductSearchResults';

// Mock product data
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Slim Fit Cotton Oxford Shirt - Premium Casual Button Down',
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.5,
    offers: [
      {
        id: '1-1',
        platform: 'Flipkart',
        price: 899,
        originalPrice: 1499,
        discount: 40,
        cardOffer: {
          bank: 'HDFC',
          discount: 10,
          description: 'Use HDFC Credit Card for additional 10% off',
        },
        deliveryDays: 2,
        link: 'https://flipkart.com',
      },
      {
        id: '1-2',
        platform: 'Amazon',
        price: 949,
        originalPrice: 1499,
        discount: 37,
        cardOffer: {
          bank: 'ICICI',
          discount: 5,
          description: 'Use ICICI Debit Card for additional 5% off',
        },
        deliveryDays: 1,
        link: 'https://amazon.in',
      },
      {
        id: '1-3',
        platform: 'Myntra',
        price: 979,
        originalPrice: 1399,
        discount: 30,
        deliveryDays: 3,
        link: 'https://myntra.com',
      },
    ],
  },
  {
    id: '2',
    name: 'Ultra Boost Running Shoes - High Performance Athletic Sneakers',
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.7,
    offers: [
      {
        id: '2-1',
        platform: 'Amazon',
        price: 3499,
        originalPrice: 6999,
        discount: 50,
        cardOffer: {
          bank: 'SBI',
          discount: 15,
          description: 'SBI Credit Card users get 15% instant discount',
        },
        deliveryDays: 2,
        link: 'https://amazon.in',
      },
      {
        id: '2-2',
        platform: 'Decathlon',
        price: 3699,
        originalPrice: 6999,
        discount: 47,
        deliveryDays: 4,
        link: 'https://decathlon.in',
      },
    ],
  },
  {
    id: '3',
    name: '55" 4K UHD Smart LED TV - Quantum Pro Series with Dolby Atmos',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    rating: 4.3,
    offers: [
      {
        id: '3-1',
        platform: 'Croma',
        price: 48999,
        originalPrice: 79999,
        discount: 39,
        cardOffer: {
          bank: 'Axis',
          discount: 7,
          description: 'Axis Bank customers get additional 7% cashback',
        },
        deliveryDays: 3,
        link: 'https://croma.com',
      },
      {
        id: '3-2',
        platform: 'Flipkart',
        price: 49999,
        originalPrice: 79999,
        discount: 38,
        cardOffer: {
          bank: 'HDFC',
          discount: 10,
          description: 'HDFC Credit Card EMI transactions get 10% instant discount',
        },
        deliveryDays: 2,
        link: 'https://flipkart.com',
      },
      {
        id: '3-3',
        platform: 'Reliance Digital',
        price: 51499,
        originalPrice: 79999,
        discount: 36,
        deliveryDays: 5,
        link: 'https://reliancedigital.in',
      },
    ],
  },
  {
    id: '4',
    name: 'Premium Wireless Noise Cancelling Headphones - Studio Pro Edition',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.8,
    offers: [
      {
        id: '4-1',
        platform: 'Amazon',
        price: 18499,
        originalPrice: 29999,
        discount: 38,
        cardOffer: {
          bank: 'HDFC',
          discount: 5,
          description: 'HDFC Debit Card transactions get 5% cashback',
        },
        deliveryDays: 1,
        link: 'https://amazon.in',
      },
      {
        id: '4-2',
        platform: 'Vijay Sales',
        price: 18999,
        originalPrice: 29999,
        discount: 37,
        deliveryDays: 2,
        link: 'https://vijaysales.com',
      },
    ],
  },
  {
    id: '5',
    name: 'Casual Denim Jacket - Vintage Style with Modern Comfort',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.2,
    offers: [
      {
        id: '5-1',
        platform: 'Myntra',
        price: 1899,
        originalPrice: 3499,
        discount: 46,
        cardOffer: {
          bank: 'ICICI',
          discount: 10,
          description: 'Use ICICI Credit Card to get 10% instant discount',
        },
        deliveryDays: 3,
        link: 'https://myntra.com',
      },
      {
        id: '5-2',
        platform: 'Ajio',
        price: 1999,
        originalPrice: 3499,
        discount: 43,
        deliveryDays: 4,
        link: 'https://ajio.com',
      },
    ],
  },
  {
    id: '6',
    name: 'Smartphone 128GB - 5G Enabled with 108MP Camera and Fast Charging',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnRwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    rating: 4.6,
    offers: [
      {
        id: '6-1',
        platform: 'Flipkart',
        price: 24999,
        originalPrice: 34999,
        discount: 29,
        cardOffer: {
          bank: 'SBI',
          discount: 10,
          description: 'SBI Credit Card users get 10% instant discount up to ₹1500',
        },
        deliveryDays: 1,
        link: 'https://flipkart.com',
      },
      {
        id: '6-2',
        platform: 'Amazon',
        price: 25499,
        originalPrice: 34999,
        discount: 27,
        cardOffer: {
          bank: 'HDFC',
          discount: 7,
          description: 'HDFC Bank Card users get 7% instant discount up to ₹1000',
        },
        deliveryDays: 2,
        link: 'https://amazon.in',
      },
      {
        id: '6-3',
        platform: 'Croma',
        price: 25999,
        originalPrice: 34999,
        discount: 26,
        deliveryDays: 3,
        link: 'https://croma.com',
      },
    ],
  },
];

// Function to filter products based on search query
export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return [];
  
  const lowerCaseQuery = query.toLowerCase().trim();
  
  return mockProducts.filter(product => 
    product.name.toLowerCase().includes(lowerCaseQuery) || 
    product.category.toLowerCase().includes(lowerCaseQuery)
  );
};
