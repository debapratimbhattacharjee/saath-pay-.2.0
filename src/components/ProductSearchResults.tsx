
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CreditCard, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ProductOffer {
  id: string;
  platform: string;
  price: number;
  originalPrice: number;
  discount: number;
  cardOffer?: {
    bank: string;
    discount: number;
    description: string;
  };
  deliveryDays: number;
  link: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  offers: ProductOffer[];
}

interface ProductSearchResultsProps {
  products: Product[];
  searchQuery: string;
  onClose: () => void;
}

const ProductSearchResults: React.FC<ProductSearchResultsProps> = ({
  products,
  searchQuery,
  onClose,
}) => {
  if (!searchQuery.trim()) return null;

  return (
    <div className="absolute top-14 left-0 right-0 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 border border-border z-50 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          {products.length} results for "{searchQuery}"
        </h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Close
        </Button>
      </div>

      {products.length === 0 && (
        <div className="text-center p-6">
          <p className="text-muted-foreground">No products found. Try a different search term.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 min-h-[150px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[130px] max-w-full object-contain"
                />
              </div>
              <CardContent className="w-full md:w-2/3 p-4">
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="font-semibold text-base line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mt-1 mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`text-sm ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-medium text-sm mb-1">Best offers:</h4>
                    {product.offers.slice(0, 2).map((offer) => (
                      <div key={offer.id} className="flex items-center justify-between text-sm mb-2 border-b pb-2">
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium">{offer.platform}</span>
                            <span className="mx-2 text-muted-foreground">·</span>
                            <span className="text-green-600 font-medium">{offer.discount}% off</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <span className="font-bold">₹{offer.price}</span>
                            <span className="ml-1 text-muted-foreground line-through text-xs">₹{offer.originalPrice}</span>
                            <span className="ml-2 text-xs text-muted-foreground">{offer.deliveryDays} day delivery</span>
                          </div>
                          {offer.cardOffer && (
                            <div className="flex items-center mt-1 text-xs text-primary">
                              <CreditCard className="h-3 w-3 mr-1" />
                              <span>Extra {offer.cardOffer.discount}% off with {offer.cardOffer.bank} cards</span>
                            </div>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 gap-1"
                          onClick={() => window.open(offer.link, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3" />
                          View
                        </Button>
                      </div>
                    ))}
                    {product.offers.length > 2 && (
                      <div className="text-xs text-center text-muted-foreground">
                        +{product.offers.length - 2} more offers
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductSearchResults;
