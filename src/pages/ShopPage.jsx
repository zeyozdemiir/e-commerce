import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const { addToCart } = useCart();

  const shopProducts = [
    { id: 1, name: "Classic Sports Wear Set", category: "Activewear", price: "28.48", discount: "16.48", fileName: "product-1.jpg" },
    { id: 2, name: "Basic Men's Cotton Tee", category: "Essentials", price: "15.00", discount: "9.50", fileName: "product-2.jpg" },
    { id: 3, name: "Femme White Denim Jeans", category: "Women Fashion", price: "35.99", discount: "24.99", fileName: "product-3.jpg" },
    { id: 4, name: "Vintage Brown Leather Jacket", category: "Outerwear", price: "85.00", discount: "55.00", fileName: "product-4.jpg" },
    { id: 5, name: "Long Winter Parka Coat", category: "Outerwear", price: "120.00", discount: "89.00", fileName: "product-5.jpg" },
    { id: 6, name: "Daily Performance Sportswear", category: "Activewear", price: "39.00", discount: "21.00", fileName: "product-6.jpg" },
    { id: 7, name: "Men's Heritage Sweatshirt", category: "Casual Wear", price: "45.00", discount: "29.00", fileName: "product-7.jpg" },
    { id: 8, name: "Urban Youth Street Style", category: "Young Fashion", price: "42.00", discount: "29.99", fileName: "product-8.jpg" },
    { id: 11, name: "Tropical Print Maxi Dress", category: "Beachwear", price: "65.00", discount: "42.99", fileName: "product-11.jpg.webp" },
    { id: 12, name: "Minimalist Smart Casual Set", category: "Men Fashion", price: "89.00", discount: "64.50", fileName: "product-12.jpg.webp" }
  ];

  return (
    <div className="w-full bg-white font-montserrat min-h-screen">
      <div className="bg-[#FAFAFA] py-12 px-6">
        <div className="max-w-[1050px] mx-auto flex justify-between items-center font-bold">
          <h2 className="text-2xl text-[#252B42]">Shop</h2>
          <div className="text-sm">
            <Link to="/" className="text-[#252B42]">Home</Link>
            <span className="mx-2 text-[#BDBDBD]">/</span>
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      <section className="py-20 max-w-[1050px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6">
          {shopProducts.map(product => (
            <div key={product.id} className="text-center group">
              <div className="relative aspect-[3/4] bg-[#f3f3f3] rounded-xl overflow-hidden mb-4 group-hover:shadow-xl transition-all">
                <img src={`/${product.fileName}`} className="w-full h-full object-cover" alt={product.name} />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button onClick={() => addToCart(product)} className="p-2.5 bg-white text-[#252B42] rounded-full hover:bg-[#23A6F0] hover:text-white transition-all">
                    <ShoppingCart size={18} />
                  </button>
                  <Link to={`/product/${product.id}`} className="p-2.5 bg-white text-[#252B42] rounded-full">
                    <Eye size={18} />
                  </Link>
                </div>
              </div>
              <h5 className="font-bold text-[#252B42] truncate text-sm">{product.name}</h5>
              <p className="text-[#737373] text-xs font-bold uppercase">{product.category}</p>
              <div className="flex justify-center gap-2 font-bold text-sm">
                <span className="text-[#BDBDBD] line-through">${product.price}</span>
                <span className="text-[#23856D]">${product.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}