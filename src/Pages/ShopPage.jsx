import React from 'react';
import { Link } from 'react-router-dom';

export default function ShopPage() {
 
  const products = [
    { id: 1, name: "Classic Sports Wear Set", category: "Activewear", price: "28.48", discount: "16.48" },
    { id: 2, name: "Basic Men's Cotton Tee", category: "Essentials", price: "15.00", discount: "9.50" },
    { id: 3, name: "Femme White Denim Jeans", category: "Women Fashion", price: "35.99", discount: "24.99" },
    { id: 4, name: "Vintage Brown Leather Jacket", category: "Outerwear", price: "85.00", discount: "55.00" },
    { id: 5, name: "Long Winter Parka Coat", category: "Outerwear", price: "120.00", discount: "89.00" },
    { id: 6, name: "Daily Performance Sportswear", category: "Activewear", price: "39.00", discount: "21.00" },
    { id: 7, name: "Men's Heritage Sweatshirt", category: "Casual Wear", price: "45.00", discount: "29.00" },
    { id: 8, name: "Urban Youth Street Style", category: "Young Fashion", price: "42.00", discount: "29.99" },
    
  ];

  return (
    <div className="w-full font-montserrat bg-white">
     
      
      <section className="py-12 max-w-[1050px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="block group cursor-pointer">
              <div className="aspect-[3/4] bg-[#F3F3F3] overflow-hidden mb-4 shadow-sm">
                <img 
                  src={`/product-${product.id}.jpg`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  alt={product.name} 
                />
              </div>
              <div className="text-center">
                <h5 className="font-bold text-[#252B42] text-[16px] truncate">{product.name}</h5>
                <p className="text-[#737373] text-[14px] font-bold mb-2">{product.category}</p>
                <div className="flex justify-center gap-2 font-bold">
                  <span className="text-[#BDBDBD]">${product.price}</span>
                  <span className="text-[#23856D]">${product.discount}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}