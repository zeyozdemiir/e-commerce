import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-auto border-t border-gray-100">
      {/* ÜST BANT: Sosyal Medya */}
      <div className="bg-[#FAFAFA] py-10">
        <div className="max-w-[1050px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-[24px] font-[800] text-[#252B42]">Bandage</h3>
          <div className="flex gap-5 text-[#23A6F0]">
            <Facebook size={24} fill="currentColor" className="cursor-pointer hover:scale-110 transition-all" />
            <Instagram size={24} className="cursor-pointer hover:scale-110 transition-all" />
            <Twitter size={24} fill="currentColor" className="cursor-pointer hover:scale-110 transition-all" />
          </div>
        </div>
      </div>

      {/* ORTA KISIM: Linkler ve Bülten */}
      <div className="max-w-[1050px] mx-auto px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-[#737373]">
        <div className="space-y-4">
          <h5 className="font-bold text-[#252B42]">Company Info</h5>
          <nav className="flex flex-col space-y-2 text-sm font-bold">
            <a href="#" className="hover:text-[#23A6F0]">About Us</a>
            <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
            <a href="#" className="hover:text-[#23A6F0]">Blog</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-[#252B42]">Legal</h5>
          <nav className="flex flex-col space-y-2 text-sm font-bold">
            <a href="#" className="hover:text-[#23A6F0]">Policy</a>
            <a href="#" className="hover:text-[#23A6F0]">Terms</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-[#252B42]">Features</h5>
          <nav className="flex flex-col space-y-2 text-sm font-bold">
            <a href="#" className="hover:text-[#23A6F0]">Marketing</a>
            <a href="#" className="hover:text-[#23A6F0]">Analytic</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-[#252B42]">Resources</h5>
          <nav className="flex flex-col space-y-2 text-sm font-bold">
            <a href="#" className="hover:text-[#23A6F0]">iOS & Android</a>
            <a href="#" className="hover:text-[#23A6F0]">API</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h5 className="font-bold text-[#252B42]">Get In Touch</h5>
          <div className="flex border border-[#E6E6E6] rounded-md overflow-hidden shadow-sm">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-[#F9F9F9] px-3 py-3 text-sm w-full outline-none focus:bg-white transition-all" 
            />
            <button className="bg-[#23A6F0] text-white px-4 py-3 text-sm font-bold hover:bg-[#1a85c2] transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs">Lore impum dolor amit</p>
        </div>
      </div>

      {/* ALT BANT */}
      <div className="bg-[#FAFAFA] py-6 text-center text-sm font-bold text-[#737373]">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;