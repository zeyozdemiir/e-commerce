import React from 'react';

export default function Brands() {
  const brandLogos = [
    { id: 1, img: "/fa-brands-1.png", name: "Hooli" },
    { id: 2, img: "/fa-brands-2.png", name: "Lyft" },
    { id: 3, img: "/fa-brands-3.png", name: "Pied Piper" },
    { id: 4, img: "/fa-brands-4.png", name: "Stripe" },
    { id: 5, img: "/fa-brands-5.png", name: "AWS" },
    { id: 6, img: "/fa-brands-6.png", name: "Reddit" },
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-[1050px] mx-auto px-6">
        {/* Başlık Bölümü (Opsiyonel) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#252B42] mb-4">Big Companies Are Here</h2>
          <p className="text-[#737373] max-w-sm mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center opacity-60 grayscale hover:opacity-100 transition-all">
          {brandLogos.map((logo) => (
            <div key={logo.id} className="w-32 h-20 flex items-center justify-center">
              <img 
                src={logo.img} 
                alt={logo.name} 
                className="max-w-full max-h-full object-contain hover:scale-110 transition-transform cursor-pointer" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}