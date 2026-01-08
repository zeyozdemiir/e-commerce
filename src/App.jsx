import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 1. CONTEXT
import { CartProvider } from './context/CartContext';

// 2. COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Brands from './components/Brands'; 

// 3. PAGES
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <CartProvider>
      <Router>
        
        <Navbar />

        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-40 font-montserrat">
                <h1 className="text-6xl font-bold text-[#252B42]">404</h1>
                <p className="text-[#737373] mt-4 font-montserrat">Sayfa bulunamadı.</p>
                <Link to="/" className="mt-6 text-[#23A6F0] font-bold hover:underline">Ana Sayfaya Dön</Link>
              </div>
            } />
          </Routes>
        </div>

        
        <Brands />

       
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;