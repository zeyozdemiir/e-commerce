import React from 'react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter,
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full font-montserrat">
      
      {/* 1. TOP BAR - Sosyal Medya İkonları ve İletişim */}
      <div className="hidden lg:block w-full bg-[#252B42] text-white py-3 px-8">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center text-sm font-bold tracking-tight">
          
          {/* Sol: İletişim */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-[#23A6F0] transition-colors cursor-pointer">
              <Phone size={16} />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#23A6F0] transition-colors cursor-pointer">
              <Mail size={16} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          {/* Orta: Kampanya Mesajı */}
          <div className="uppercase tracking-wider">
            Follow Us and get a chance to win 80% off
          </div>

          {/* Sağ: Görkem'in İstediği Sosyal Medya İkonları */}
          <div className="flex items-center gap-4">
            <span>Follow Us :</span>
            <div className="flex items-center gap-3">
              <Instagram size={18} className="cursor-pointer hover:text-[#23A6F0] transition-all" />
              <Youtube size={18} className="cursor-pointer hover:text-[#23A6F0] transition-all" />
              <Facebook size={18} className="cursor-pointer hover:text-[#23A6F0] transition-all" />
              <Twitter size={18} className="cursor-pointer hover:text-[#23A6F0] transition-all" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. ANA NAVBAR - Logo ve Menüler */}
      <nav className="w-full bg-white py-4 px-6 md:px-10 border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#252B42] tracking-wider">
            Bandage
          </Link>

          {/* Menü Linkleri */}
          <div className="hidden md:flex items-center gap-6 text-[#737373] font-bold text-sm">
            <Link to="/" className="hover:text-[#252B42] transition-colors">Home</Link>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#252B42] transition-colors group">
               <Link to="/shop">Shop</Link>
               <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </div>
            <Link to="/about" className="hover:text-[#252B42] transition-colors">About</Link>
            <Link to="/blog" className="hover:text-[#252B42] transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-[#252B42] transition-colors">Contact</Link>
            <Link to="/pages" className="hover:text-[#252B42] transition-colors">Pages</Link>
          </div>

          {/* Sağ İkonlar ve Login */}
          <div className="flex items-center gap-4 md:gap-8 text-[#23A6F0] font-bold text-sm">
            <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:opacity-80">
              <User size={18} />
              <span>Login / Register</span>
            </div>

            <div className="flex items-center gap-5">
              <Search size={20} className="cursor-pointer" />
              <div className="flex items-center gap-1 cursor-pointer">
                <ShoppingCart size={20} />
                <span className="text-xs font-medium">1</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <Heart size={20} />
                <span className="text-xs font-medium">1</span>
              </div>
              <Menu size={24} className="md:hidden cursor-pointer text-[#252B42]" />
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}