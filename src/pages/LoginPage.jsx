import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ name: email.split('@')[0], email }); 
      navigate('/'); 
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-[#FAFAFA] px-6 py-20">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-10 space-y-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-[#252B42] text-center tracking-tight">Login</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-2">Email Address</label>
            <input type="email" required className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none" onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#252B42] mb-2">Password</label>
            <input type="password" required className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold cursor-pointer hover:bg-opacity-90 transition-all">
            LOGIN
          </button>
        </form>
        <p className="text-center text-sm font-medium text-[#737373]">New here? <Link to="/register" className="text-[#23A6F0] font-bold ml-1">Create an account</Link></p>
      </div>
    </div>
  );
}