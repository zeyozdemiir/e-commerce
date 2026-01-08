import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 15.00 : 0;
  const total = subtotal + shipping;

  return (
    <div className="w-full bg-white min-h-screen pb-20">
      <div className="max-w-[1200px] mx-auto px-10 py-10">
        <h1 className="text-3xl font-bold text-bandage-dark mb-2">Checkout</h1>
        <p className="text-bandage-gray text-sm font-medium">Please enter your shipping and payment details.</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* FORM ALANI */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-bandage-dark border-b pb-4">1. Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="p-3 border rounded-md focus:border-bandage-blue outline-none" />
              <input type="text" placeholder="Last Name" className="p-3 border rounded-md focus:border-bandage-blue outline-none" />
              <input type="text" placeholder="Address" className="md:col-span-2 p-3 border rounded-md focus:border-bandage-blue outline-none" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-bandage-dark border-b pb-4">2. Payment Method</h2>
            <div className="bg-bandage-light p-6 rounded-xl space-y-4">
              <input type="text" placeholder="Card Number" className="w-full p-3 border rounded-md outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="p-3 border rounded-md outline-none" />
                <input type="text" placeholder="CVC" className="p-3 border rounded-md outline-none" />
              </div>
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-xl p-8 sticky top-32 shadow-sm">
            <h3 className="text-xl font-bold text-bandage-dark mb-6">Review Your Order</h3>
            
            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span className="text-bandage-gray">{item.title} x {item.quantity}</span>
                  <span className="text-bandage-dark font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between items-center text-bandage-gray">
                <span>Shipping</span>
                <span className="font-bold">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-bandage-blue">${total.toFixed(2)}</span>
              </div>
              
              <button 
                onClick={() => navigate('/success')}
                className="w-full bg-bandage-blue text-white py-4 rounded-md font-bold hover:shadow-lg transition-all active:scale-95"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}