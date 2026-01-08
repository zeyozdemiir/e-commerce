import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartPage() {
 
  const cartContext = useCart();
  
  if (!cartContext) {
    return <div className="p-20 text-center">Cart Context not found!</div>;
  }

  const { cart, removeFromCart, updateQuantity } = cartContext;

  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  return (
    <div className="max-w-[1050px] mx-auto px-10 py-20 font-montserrat">
      <h2 className="text-3xl font-bold text-[#252B42] mb-10 text-center">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#737373] mb-5 font-bold">Your cart is empty.</p>
          <Link to="/shop" className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold uppercase">Go Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-center gap-6 bg-white p-4 border border-[#ECECEC] rounded-lg shadow-sm">
                <div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-md bg-[#F5F5F5]">
                  <img 
                    src={item.image || `/product-1.jpg`} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/100x150?text=Product"; }}
                  />
                </div>
                
                <div className="flex-grow">
                  <h4 className="font-bold text-[#252B42]">{item.name}</h4>
                  <p className="text-sm text-[#737373] mb-2 flex items-center gap-2">
                    Color: <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: item.selectedColor }}></span>
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[#BDBDBD] rounded">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-100"><Minus size={14} /></button>
                      <span className="px-3 font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-100"><Plus size={14} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 transition-colors"><Trash2 size={18} /></button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-[#23856D]">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FAFAFA] p-8 rounded-lg h-fit border border-[#ECECEC]">
            <h3 className="text-xl font-bold text-[#252B42] mb-6">Order Summary</h3>
            <div className="space-y-4 text-[#737373] font-bold">
              <div className="flex justify-between"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span className="text-[#23A6F0]">FREE</span></div>
              <hr className="border-[#BDBDBD]" />
              <div className="flex justify-between text-[#252B42] text-xl">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold mt-8 hover:bg-[#1a85c2] transition-all shadow-md active:scale-95">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}