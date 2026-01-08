import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
 
  const orderNumber = Math.floor(Math.random() * 90000) + 10000;

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-lg w-full text-center space-y-8">
        
        {/* ONAY İKONU */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-bandage-success bg-opacity-10 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-5xl">✅</span>
          </div>
        </div>

        {/* METİNLER */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-bandage-dark">Thank You for Your Purchase!</h1>
          <p className="text-bandage-gray font-medium">
            Your order <span className="text-bandage-dark font-bold">#{orderNumber}</span> has been placed successfully. 
            We'll send you a confirmation email with details shortly.
          </p>
        </div>

        {/* DETAY KARTI */}
        <div className="bg-bandage-light p-6 rounded-xl border border-gray-100 text-left space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-bandage-gray">Status:</span>
            <span className="text-bandage-success font-bold">Processing</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-bandage-gray">Estimated Delivery:</span>
            <span className="text-bandage-dark font-bold">3-5 Business Days</span>
          </div>
        </div>

        {/* BUTONLAR */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link 
            to="/" 
            className="flex-1 bg-bandage-blue text-white py-4 rounded-md font-bold text-sm hover:shadow-lg transition-all active:scale-95"
          >
            Back to Home
          </Link>
          <Link 
            to="/shop" 
            className="flex-1 border border-gray-200 text-bandage-gray py-4 rounded-md font-bold text-sm hover:bg-gray-50 transition-all active:scale-95"
          >
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
}