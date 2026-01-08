import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-bandage-light px-6 py-20">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-10 space-y-8 border border-gray-100">
        
        {/* HEADER */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-bandage-dark tracking-tight">Create Account</h2>
          <p className="text-bandage-gray text-sm font-medium">Join us today! It only takes a minute.</p>
        </div>

        {/* FORM */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-bandage-dark mb-2">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-bandage-blue focus:ring-1 focus:ring-bandage-blue outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-bandage-dark mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-bandage-blue focus:ring-1 focus:ring-bandage-blue outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-bandage-dark mb-2">Password</label>
            <input 
              type="password" 
              placeholder="**********"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-bandage-blue focus:ring-1 focus:ring-bandage-blue outline-none transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-bandage-dark mb-2">Confirm Password</label>
            <input 
              type="password" 
              placeholder="**********"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-bandage-blue focus:ring-1 focus:ring-bandage-blue outline-none transition-all text-sm"
            />
          </div>

          <div className="pt-4">
            <button className="w-full bg-bandage-blue text-white py-4 rounded-md font-bold text-sm hover:shadow-lg hover:bg-opacity-90 transition-all active:scale-[0.98]">
              Register Now
            </button>
          </div>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm font-medium text-bandage-gray">
          Already have an account? 
          <Link to="/login" className="text-bandage-blue font-bold ml-1 hover:underline">Login here</Link>
        </p>

      </div>
    </div>
  );
}