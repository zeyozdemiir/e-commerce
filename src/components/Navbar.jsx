import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, Search, ShoppingCart, Heart, Menu, Phone, Mail, 
  Instagram, Youtube, Facebook, Twitter, LogOut, X 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { cart = [] } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobil menü durumu
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full font-montserrat sticky top-0 z-50 shadow-sm bg-white">
      {/* ÜST BİLGİ ÇUBUĞU  */}
      <div className="hidden lg:flex bg-[#252B42] text-white py-3 px-10 justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-bold"><Phone size={16} /> (225) 555-0118</div>
          <div className="flex items-center gap-2 text-sm font-bold"><Mail size={16} /> michelle.rivera@example.com</div>
        </div>
        <div className="font-bold text-sm">Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center gap-4 text-sm font-bold">
          Follow Us :
          <div className="flex gap-3"><Instagram size={16} /><Youtube size={16} /><Facebook size={16} /><Twitter size={16} /></div>
        </div>
      </div>

      {/* ANA NAVİGASYON */}
      <nav className="bg-white py-6 px-8 flex justify-between items-center relative">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-[#252B42] tracking-wider shrink-0">Bandage</Link>

        {/* MASAÜSTÜ ORTA MENÜ */}
        <div className="hidden md:flex flex-1 justify-center gap-6 text-sm font-bold text-[#737373]">
          <Link to="/" className="hover:text-[#23A6F0] transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-[#23A6F0] transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-[#23A6F0] transition-colors">About</Link>
          <Link to="/blog" className="hover:text-[#23A6F0] transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-[#23A6F0] transition-colors">Contact</Link>
        </div>

        {/* SAĞ İKONLAR  */}
        <div className="flex items-center gap-4 md:gap-6 text-[#23A6F0]">
          {/* Arama Butonu */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:scale-110 transition-transform">
            <Search size={22} />
          </button>

          {/* Sepet Butonu */}
          <Link to="/cart" className="flex items-center gap-1 relative hover:scale-110 transition-transform">
            <ShoppingCart size={22} />
            <span className="text-xs font-bold">{cart.length}</span>
          </Link>

          {/* Favori Butonu  */}
          <button className="hidden sm:block hover:scale-110 transition-transform">
            <Heart size={22} />
          </button>

          {/* Kullanıcı / Login - Masaüstünde Görünür */}
          <div className="hidden md:block">
            {user ? (
              <button onClick={logout} className="text-[#E74C3C]"><LogOut size={20} /></button>
            ) : (
              <Link to="/login" className="font-bold text-sm">Login</Link>
            )}
          </div>

          {/* MENU BUTONU */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#252B42]">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ARAMA ÇUBUĞU */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white p-4 border-t border-b shadow-lg animate-in slide-in-from-top duration-300">
            <form onSubmit={handleSearch} className="max-w-[1050px] mx-auto flex items-center bg-[#F3F3F3] rounded-lg px-4 py-2">
              <input 
                autoFocus
                type="text" 
                placeholder="Ürün Ara..." 
                className="bg-transparent outline-none flex-grow text-[#252B42] font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-[#23A6F0]"><Search size={20} /></button>
            </form>
          </div>
        )}
      </nav>

      {/*  MENÜ  */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-100 flex flex-col items-center py-10 space-y-6 text-2xl text-[#737373] animate-in slide-in-from-top duration-500">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Shop</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">About</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Blog</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#23A6F0]">Contact</Link>
          
          <div className="pt-4 flex flex-col items-center gap-4 border-t w-full">
            {user ? (
              <button onClick={() => { logout(); setIsMenuOpen(false); }} className="text-[#E74C3C] font-bold">Logout</button>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-[#23A6F0] font-bold">Login</Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)} className="text-[#23A6F0] font-bold">Become a member</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}