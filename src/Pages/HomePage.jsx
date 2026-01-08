import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, title: "NEW COLLECTION", subtitle: "SUMMER 2024", image: "/slider-1.png" },
    { id: 2, title: "MODERN MINIMALIST", subtitle: "BEST SELLER", image: "/slider-2.png" }
  ];

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
    <div className="w-full font-montserrat bg-white overflow-x-hidden">
      
    
      <section className="relative w-full py-6 flex justify-center"> 
        <div className="relative h-[500px] md:h-[650px] w-[92%] bg-[#23A6F0] rounded-[20px] overflow-hidden shadow-lg">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
              {/* Görsel */}
              <div className="absolute inset-0 flex items-center justify-end pointer-events-none pr-0 md:pr-10">
                <img src={slide.image} className="h-full w-full md:w-auto object-contain object-right" alt="Hero" />
              </div>
              {/* İçerik */}
              <div className="relative z-30 h-full max-w-[1050px] mx-auto px-10 flex items-center">
                <div className="space-y-6 text-white">
                  <h5 className="font-bold tracking-widest uppercase text-sm">{slide.subtitle}</h5>
                  <h1 className="text-5xl md:text-7xl font-bold max-w-md leading-tight">{slide.title}</h1>
                  <Link to="/shop" className="bg-white text-[#23A6F0] px-10 py-4 rounded-md font-bold text-lg uppercase inline-block shadow-lg hover:bg-gray-100 transition-all pointer-events-auto">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* Kontrol Okları */}
          <button onClick={() => setCurrentSlide(prev => (prev === 0 ? 1 : 0))} className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white/60 hover:text-white transition-all">
            <ChevronLeft size={50} />
          </button>
          <button onClick={() => setCurrentSlide(prev => (prev === 1 ? 0 : 1))} className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white/60 hover:text-white transition-all">
            <ChevronRight size={50} />
          </button>
        </div>
      </section>

      
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-[1050px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#252B42] uppercase tracking-wider">EDITOR'S PICK</h2>
            <p className="text-[#737373] text-sm mt-2">Discover your signature style</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[500px]">
            <div className="w-full md:w-[37.5%] relative group h-[500px] md:h-full overflow-hidden shadow-sm">
              <img src="/shop-1.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Essentials" />
              <Link to="/shop/essentials" className="absolute bottom-8 left-8 bg-white min-w-[170px] py-3 text-center font-bold text-[#252B42] uppercase shadow-md hover:bg-gray-100 transition-colors z-40">
                ESSENTIALS
              </Link>
            </div>
            <div className="w-full md:w-[37.5%] relative group h-[500px] md:h-full overflow-hidden shadow-sm">
              <img src="/shop-2.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Women" />
              <Link to="/shop/women" className="absolute bottom-8 left-8 bg-white min-w-[170px] py-3 text-center font-bold text-[#252B42] uppercase shadow-md hover:bg-gray-100 transition-colors z-40">
                WOMEN
              </Link>
            </div>
            <div className="w-full md:w-[25%] flex flex-col gap-6 h-[500px] md:h-full">
               <div className="relative h-1/2 group overflow-hidden shadow-sm">
                  <img src="/shop-3.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Accessories" />
                  <Link to="/shop/accessories" className="absolute bottom-4 left-4 bg-white px-4 py-2 font-bold text-[#252B42] uppercase text-xs shadow-md z-40">
                    ACCESSORIES
                  </Link>
               </div>
               <div className="relative h-1/2 group overflow-hidden shadow-sm">
                  <img src="/shop-5.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kids" />
                  <Link to="/shop/kids" className="absolute bottom-4 left-4 bg-white px-6 py-2 font-bold text-[#252B42] uppercase text-xs shadow-md z-40">
                    KIDS
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BESTSELLER PRODUCTS */}
      <section className="py-20 max-w-[1050px] mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-[#252B42] mb-12 uppercase tracking-widest">Bestseller Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {bestsellerProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="block group relative z-30">
              <div className="aspect-[3/4] bg-[#F3F3F3] overflow-hidden mb-4 shadow-sm">
                <img src={`/product-${product.id}.jpg`} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" alt={product.name} />
              </div>
              <h5 className="font-bold text-[#252B42] truncate">{product.name}</h5>
              <p className="text-[#737373] text-[14px] font-bold mb-2">{product.category}</p>
              <div className="flex justify-center gap-2 font-bold">
                <span className="text-[#BDBDBD]">${product.price}</span>
                <span className="text-[#23856D]">${product.discount}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}