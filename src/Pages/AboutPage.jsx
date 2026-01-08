import React from 'react';
import { Facebook, Instagram, Twitter, Play } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full font-montserrat bg-white">
      {/* HERO SECTION */}
      <section className="max-w-[1050px] mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="space-y-8">
          <h5 className="font-bold text-[#252B42] tracking-widest uppercase">About Company</h5>
          <h1 className="text-5xl md:text-6xl font-bold text-[#252B42]">ABOUT US</h1>
          <p className="text-[#737373] text-lg max-w-sm">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold uppercase hover:bg-[#1a8cd1] transition-colors">
            Get Quote Now
          </button>
        </div>
        <div className="relative">
          
          <img src="/about-1.jpg" alt="Shopping Experience" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1050px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div><h2 className="text-6xl font-bold text-[#252B42]">15K</h2><p className="text-[#737373] font-bold">Happy Customers</p></div>
          <div><h2 className="text-6xl font-bold text-[#252B42]">150K</h2><p className="text-[#737373] font-bold">Monthly Visitors</p></div>
          <div><h2 className="text-6xl font-bold text-[#252B42]">15</h2><p className="text-[#737373] font-bold">Countries Worldwide</p></div>
          <div><h2 className="text-6xl font-bold text-[#252B42]">100+</h2><p className="text-[#737373] font-bold">Top Partners</p></div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="max-w-[1050px] mx-auto px-6 py-20">
        <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
         
          <img src="/video.jpg" alt="Company Video" className="w-full h-[540px] object-cover" />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="w-24 h-24 bg-[#23A6F0] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <Play fill="white" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 max-w-[1050px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#252B42] mb-4">Meet Our Team</h2>
        <p className="text-[#737373] mb-16 max-w-sm mx-auto">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Örnek Takım Üyesi - Senin verdiğin about-2.jpg görselini buraya ekliyoruz */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[3/4] overflow-hidden mb-6">
              <img src="/about-2.jpg" alt="Team Member" className="w-full h-full object-cover" />
            </div>
            <h5 className="font-bold text-[#252B42]">Username</h5>
            <p className="text-[#737373] font-bold text-sm mb-4">Profession</p>
            <div className="flex gap-4 text-[#23A6F0]">
              <Facebook size={20} className="cursor-pointer" />
              <Instagram size={20} className="cursor-pointer" />
              <Twitter size={20} className="cursor-pointer" />
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}