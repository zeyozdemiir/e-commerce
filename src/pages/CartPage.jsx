import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { 
  Trash2, Plus, Minus, ChevronRight, CreditCard, 
  Lock, ShieldCheck, ShoppingCart 
} from 'lucide-react'; // ShoppingCart eklendi, hata çözüldü
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Toplam fiyat hesaplama
  const subtotal = cart.reduce((acc, item) => {
    const price = Number(item.discount) || Number(item.price) || 0;
    return acc + (price * item.quantity);
  }, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      clearCart();
      navigate('/success');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 font-montserrat">
        <div className="bg-[#F3F9FF] p-6 rounded-full text-[#23A6F0] mb-4">
          <ShoppingCart size={48} />
        </div>
        <h2 className="text-2xl font-bold text-[#252B42]">Sepetiniz şu an boş.</h2>
        <p className="text-[#737373]">Harika ürünlerimizi keşfetmeye ne dersin?</p>
        <Link to="/shop" className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold hover:bg-[#1a8cd1] transition-all shadow-lg mt-4">
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-montserrat pb-20">
      <div className="max-w-[1050px] mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#252B42] mb-8">Sepetim & Ödeme</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* ÜRÜN LİSTESİ */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row items-center gap-6 border border-[#ECECEC]">
                <img 
                  src={item.fileName ? `/${item.fileName}` : `/product-${item.id}.jpg`} 
                  alt={item.name} 
                  className="w-24 h-32 object-cover rounded-md"
                />
                
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-lg font-bold text-[#252B42]">{item.name}</h3>
                  <p className="text-[#737373] text-sm font-bold mt-1 uppercase">{item.category || 'Kategori'}</p>
                  <p className="text-[#23856D] font-bold mt-2 text-lg">${Number(item.discount || item.price).toFixed(2)}</p>
                </div>

                <div className="flex items-center border-2 border-[#E8E8E8] rounded-xl overflow-hidden bg-white">
                  <button type="button" onClick={() => updateQuantity(item.id, -1)} className="p-2 px-3 hover:bg-[#F3F3F3] text-[#252B42]">
                    <Minus size={16} strokeWidth={3} />
                  </button>
                  <span className="px-4 font-black text-[#252B42] text-lg">{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.id, 1)} className="p-2 px-3 hover:bg-[#F3F3F3] text-[#252B42]">
                    <Plus size={16} strokeWidth={3} />
                  </button>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="text-[#BDBDBD] hover:text-[#E74C3C] transition-colors p-2">
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* ÖDEME FORMU */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#ECECEC]">
              <h3 className="text-xl font-bold text-[#252B42] mb-6 flex items-center gap-2">
                <CreditCard className="text-[#23A6F0]" /> Ödeme Detayları
              </h3>
              
              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#737373] uppercase">Kart Sahibi</label>
                  <input type="text" required className="w-full mt-1 p-3 border border-[#ECECEC] rounded-md outline-none focus:border-[#23A6F0]" placeholder="Ad Soyad" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#737373] uppercase">Kart Numarası</label>
                  <input type="text" required className="w-full mt-1 p-3 border border-[#ECECEC] rounded-md outline-none focus:border-[#23A6F0]" placeholder="**** **** **** ****" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#737373] uppercase">S.K.T</label>
                    <input type="text" required className="w-full mt-1 p-3 border border-[#ECECEC] rounded-md outline-none focus:border-[#23A6F0]" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#737373] uppercase">CVV</label>
                    <input type="text" required className="w-full mt-1 p-3 border border-[#ECECEC] rounded-md outline-none focus:border-[#23A6F0]" placeholder="***" />
                  </div>
                </div>

                <div className="pt-6 border-t mt-6 space-y-3">
                  <div className="flex justify-between text-[#737373] font-bold"><span>Ara Toplam</span><span>${subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between text-[#737373] font-bold"><span>Kargo</span><span className="text-[#23856D]">Ücretsiz</span></div>
                  <div className="flex justify-between text-2xl font-black text-[#252B42] pt-2">
                    <span>Toplam</span><span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full ${loading ? 'bg-gray-400' : 'bg-[#23A6F0]'} text-white py-4 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#1a8cd1] transition-all mt-4`}
                >
                  {loading ? 'İşleniyor...' : 'Ödemeyi Tamamla'} <ChevronRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}