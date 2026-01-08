import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-bandage-light px-6 py-20">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-10 space-y-8 border border-gray-100">
        
        {/* HEADER */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-bandage-dark tracking-tight">Welcome Back</h2>
          <p className="text-bandage-gray text-sm font-medium">Enter your details to access your account</p>
        </div>

        {/* FORM */}
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-bandage-dark mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="example@mail.com"
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-bandage-blue focus:ring-1 focus:ring-bandage-blue outline-none transition-all text-sm"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-bandage-dark">Password</label>
                <Link to="#" className="text-xs font-bold text-bandage-blue hover:underline">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="**********"
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-bandage-blue focus:ring-1 focus:ring-bandage-blue outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="w-4 h-4 accent-bandage-blue" />
            <label htmlFor="remember" className="text-sm font-medium text-bandage-gray cursor-pointer">Remember me</label>
          </div>

          <button className="w-full bg-bandage-blue text-white py-4 rounded-md font-bold text-sm hover:shadow-lg hover:bg-opacity-90 transition-all active:scale-[0.98]">
            Login
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm font-medium text-bandage-gray">
          Don't have an account? 
          <Link to="#" className="text-bandage-blue font-bold ml-1 hover:underline">Sign up for free</Link>
        </p>

      </div>
    </div>
  );
}