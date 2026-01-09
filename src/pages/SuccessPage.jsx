import React from 'react';
import { CheckCircle, Package, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SuccessPage() {
  // Rastgele bir sipariş numarası üretelim
  const orderNumber = Math.floor(Math.random() * 900000) + 100000;

  return (
    <div className="min-h-[80vh] bg-[#FAFAFA] flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full bg-white rounded-[30px] shadow-2xl overflow-hidden text-center p-10 md:p-20 relative">
        
        {/* Üst Kısım: Başarı İkonu */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[#23856D] opacity-20 rounded-full animate-ping"></div>
            <div className="relative bg-[#23856D] p-6 rounded-full text-white shadow-lg">
              <CheckCircle size={60} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Metin Alanı */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#252B42] mb-4">
          Teşekkürler!
        </h1>
        <p className="text-xl text-[#737373] mb-8 font-medium">
          Siparişiniz başarıyla alındı ve hazırlık aşamasına geçildi.
        </p>

        {/* Sipariş Bilgi Kutusu */}
        <div className="bg-[#F9F9F9] border border-dashed border-gray-300 rounded-2xl p-6 mb-10 flex flex-col md:flex-row justify-around items-center gap-4">
          <div className="text-left">
            <p className="text-xs text-[#737373] uppercase tracking-widest font-bold">Sipariş Numarası</p>
            <p className="text-lg font-bold text-[#252B42]">#BDG-{orderNumber}</p>
          </div>
          <div className="h-px md:h-10 w-full md:w-px bg-gray-300"></div>
          <div className="text-left">
            <p className="text-xs text-[#737373] uppercase tracking-widest font-bold">Tahmini Teslimat</p>
            <p className="text-lg font-bold text-[#23856D]">3-5 İş Günü</p>
          </div>
        </div>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            to="/shop" 
            className="flex items-center justify-center gap-2 bg-[#23A6F0] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1a8cd1] hover:shadow-lg transition-all active:scale-95"
          >
            <ShoppingBag size={20} />
            Alışverişe Devam Et
          </Link>
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 border-2 border-gray-200 text-[#252B42] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
          >
            Siparişimi Takip Et
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Alt Bilgi */}
        <p className="mt-12 text-sm text-[#737373]">
          Sipariş onayı e-posta adresinize gönderilmiştir. <br />
          Herhangi bir sorunuz varsa <Link to="/contact" className="text-[#23A6F0] font-bold">destek ekibimizle</Link> iletişime geçebilirsiniz.
        </p>

      </div>
    </div>
  );
}