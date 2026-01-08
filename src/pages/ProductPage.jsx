import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Heart, ShoppingCart } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('#23A6F0');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = {
    id: id || "1",
    name: `Graphic Design - Model ${id}`,
    price: 1139.33,
    image: `/product-${id || 1}.jpg`,
    colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor: selectedColor
    });
  };

  return (
    <div className="w-full font-montserrat bg-[#FAFAFA] pb-20">
      <div className="max-w-[1050px] mx-auto px-10 py-6 flex items-center gap-3 text-sm font-bold">
        <Link to="/" className="text-[#252B42]">Home</Link>
        <ChevronRight size={16} className="text-[#BDBDBD]" />
        <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
        <ChevronRight size={16} className="text-[#BDBDBD]" />
        <span className="text-[#BDBDBD]">Product {id}</span>
      </div>

      <section className="max-w-[1050px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full aspect-square overflow-hidden bg-white shadow-sm">
            <img src={product.image} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col space-y-5">
            <h4 className="text-[20px] font-normal text-[#252B42]">{product.name}</h4>
            <h3 className="text-[24px] font-bold text-[#252B42]">${product.price}</h3>
            
            <div className="flex gap-2 text-sm font-bold">
              <span className="text-[#737373]">Availability :</span>
              <span className="text-[#23A6F0]">In Stock</span>
            </div>

            <hr className="border-[#BDBDBD]" />

            <div className="flex gap-2">
              {product.colors.map(color => (
                <button 
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full ${selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 pt-5">
              <button 
                onClick={handleAddToCart}
                className="bg-[#23A6F0] text-white px-10 py-3 rounded-md font-bold text-sm hover:bg-[#1a85c2]"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}