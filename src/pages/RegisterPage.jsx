import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full name is required.";
    if (!formData.email.includes("@")) tempErrors.email = "Valid email is required.";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Registered:", formData);
      navigate('/login'); // Kayıt başarılıysa login'e gönder
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-bandage-light px-6 py-20 pointer-events-auto">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-10 space-y-8 border border-gray-100">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-bandage-dark tracking-tight">Create Account</h2>
          <p className="text-bandage-gray text-sm font-medium">Join us today!</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-bold text-bandage-dark mb-2">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-md border ${errors.fullName ? 'border-[#E74C3C]' : 'border-gray-200'} focus:border-bandage-blue outline-none transition-all text-sm`}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
            {errors.fullName && <p className="text-[#E74C3C] text-xs mt-1 font-bold">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-bandage-dark mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="example@mail.com"
              className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-[#E74C3C]' : 'border-gray-200'} focus:border-bandage-blue outline-none transition-all text-sm`}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <p className="text-[#E74C3C] text-xs mt-1 font-bold">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-bandage-dark mb-2">Password</label>
            <input 
              type="password" 
              placeholder="**********"
              className={`w-full px-4 py-3 rounded-md border ${errors.password ? 'border-[#E74C3C]' : 'border-gray-200'} focus:border-bandage-blue outline-none transition-all text-sm`}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            {errors.password && <p className="text-[#E74C3C] text-xs mt-1 font-bold">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-bandage-dark mb-2">Confirm Password</label>
            <input 
              type="password" 
              placeholder="**********"
              className={`w-full px-4 py-3 rounded-md border ${errors.confirmPassword ? 'border-[#E74C3C]' : 'border-gray-200'} focus:border-bandage-blue outline-none transition-all text-sm`}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            {errors.confirmPassword && <p className="text-[#E74C3C] text-xs mt-1 font-bold">{errors.confirmPassword}</p>}
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full bg-bandage-blue text-white py-4 rounded-md font-bold text-sm hover:shadow-lg hover:bg-opacity-90 transition-all active:scale-[0.98] cursor-pointer">
              Register Now
            </button>
          </div>
        </form>

        <p className="text-center text-sm font-medium text-bandage-gray">
          Already have an account? 
          <Link to="/login" className="text-bandage-blue font-bold ml-1 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}