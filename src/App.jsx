import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 1. CONTEXT
import { CartProvider } from './Context/CartContext';

// 2. COMPONENTS
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Brands from './Components/Brands'; 

// 3. PAGES
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';

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