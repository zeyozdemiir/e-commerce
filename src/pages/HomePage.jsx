import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();

  const slides = [
    { id: 1, title: "NEW COLLECTION", subtitle: "SUMMER 2026", image: "/slider-1.png" },
    { id: 2, title: "MODERN STYLE", subtitle: "BEST SELLER", image: "/slider-2.png" }
  ];

  // Ürün listesini senin istediğin product-X.jpg yapısına göre güncelledim
  const bestsellerProducts = [
    { id: 1, name: "Classic Sports Wear Set", category: "Activewear", price: "28.48", discount: "16.48" },
    { id: 2, name: "Basic Men's Cotton Tee", category: "Essentials", price: "15.00", discount: "9.50" },
    { id: 3, name: "Femme White Denim Jeans", category: "Women Fashion", price: "35.99", discount: "24.99" },
    { id: 4, name: "Vintage Brown Leather Jacket", category: "Outerwear", price: "85.00", discount: "55.00" },
    { id: 5, name: "Long Winter Parka Coat", category: "Outerwear", price: "120.00", discount: "89.00" },
    { id: 6, name: "Daily Performance Sportswear", category: "Activewear", price: "39.00", discount: "21.00" },
    { id: 7, name: "Men's Heritage Sweatshirt", category: "Casual Wear", price: "45.00", discount: "29.00" },
    { id: 8, name: "Urban Youth Street Style", category: "Young Fashion", price: "42.00", discount: "29.99" }
  ];

  return (
    <div className="w-full bg-white font-montserrat overflow-x-hidden">
      
      {/* HERO SLIDER */}
      <section className="relative w-full py-6 flex justify-center">
        <div className="relative h-[500px] md:h-[650px] w-[94%] bg-[#23A6F0] rounded-[20px] overflow-hidden shadow-2xl">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
              <div className="absolute inset-0 flex items-center justify-end">
                <img src={slide.image} className="h-full w-full md:w-auto object-contain object-right" alt="Hero" />
              </div>
              <div className="relative z-30 h-full max-w-[1050px] mx-auto px-10 flex items-center">
                <div className="text-white space-y-6">
                  <h5 className="font-bold tracking-widest text-sm uppercase">{slide.subtitle}</h5>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">{slide.title}</h1>
                  <Link to="/shop" className="bg-white text-[#23A6F0] px-12 py-4 rounded-md font-bold text-lg inline-block">Shop Now</Link>
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => setCurrentSlide(prev => prev === 0 ? 1 : 0)} className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white/40"><ChevronLeft size={60} /></button>
          <button onClick={() => setCurrentSlide(prev => prev === 1 ? 0 : 1)} className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white/40"><ChevronRight size={60} /></button>
        </div>
      </section>

      {/* EDITOR'S PICK (Görsel ve İsimler Tam İstediğin Gibi) */}
      <section className="bg-[#FAFAFA] py-20 px-6">
        <div className="max-w-[1050px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#252B42] uppercase tracking-wider">EDITOR'S PICK</h3>
            <p className="text-[#737373] text-sm mt-2">Problems trying to resolve the conflict between</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[500px]">
            {/* ESSENTIALS (Eski Men yazan yer) */}
            <div className="md:col-span-2 relative group overflow-hidden shadow-sm">
              <img src="/shop-1.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Essentials" />
              <div className="absolute bottom-6 left-6">
                <button className="bg-white px-12 py-3 font-bold text-[#252B42] uppercase hover:bg-[#23A6F0] hover:text-white transition-all shadow-md">Essentials</button>
              </div>
            </div>

            {/* WOMEN (Kadın fotoğrafı ortalı) */}
            <div className="relative group overflow-hidden shadow-sm">
              <img src="/shop-2.jpg" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" alt="Women" />
              <div className="absolute bottom-6 left-6">
                <button className="bg-white px-6 py-3 font-bold text-[#252B42] uppercase hover:bg-[#23A6F0] hover:text-white transition-all shadow-md">Women</button>
              </div>
            </div>

            {/* ACCESSORIES & KIDS (Buradaki KIDS gerçekten kids) */}
            <div className="flex flex-col gap-6">
              <div className="relative flex-1 group overflow-hidden shadow-sm">
                <img src="/shop-3.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Accessories" />
                <div className="absolute bottom-6 left-6">
                  <button className="bg-white px-4 py-2 font-bold text-[#252B42] uppercase text-xs">Accessories</button>
                </div>
              </div>
              <div className="relative flex-1 group overflow-hidden shadow-sm">
                <img src="/shop-4.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kids" />
                <div className="absolute bottom-6 left-6">
                  <button className="bg-white px-6 py-2 font-bold text-[#252B42] uppercase text-xs">Kids</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESTSELLER PRODUCTS (Görseller: product-1.jpg, 2, 3...) */}
      <section className="py-20 max-w-[1050px] mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-[#252B42] uppercase tracking-widest">Bestseller Products</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {bestsellerProducts.map((product) => (
            <div key={product.id} className="flex flex-col group text-center">
              <div className="relative aspect-[3/4] bg-[#f3f3f3] rounded-xl overflow-hidden mb-4 group-hover:shadow-2xl transition-all duration-300">
                {/* Product Resimleri product-1.jpg, product-2.jpg diye gidecek */}
                <img src={`/product-${product.id}.jpg`} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button onClick={() => addToCart(product)} className="p-3 bg-white text-[#252B42] rounded-full shadow-lg hover:bg-[#23A6F0] hover:text-white transition-colors"><ShoppingCart size={20} /></button>
                </div>
              </div>
              <h5 className="font-bold text-[#252B42] truncate px-2">{product.name}</h5>
              <p className="text-[#737373] text-sm font-bold uppercase mt-1">{product.category}</p>
              <div className="flex justify-center gap-3 font-bold mt-2">
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