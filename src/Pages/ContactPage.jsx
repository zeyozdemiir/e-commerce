import React from 'react';
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full font-montserrat bg-white">
      {/* HERO SECTION */}
      <section className="max-w-[1050px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h5 className="font-bold text-[#252B42] tracking-widest uppercase text-sm">CONTACT US</h5>
          <h1 className="text-5xl md:text-6xl font-bold text-[#252B42]">Get in touch today!</h1>
          <p className="text-[#737373] text-lg max-w-sm">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold text-[#252B42]">Phone : +451 215 215</h3>
            <h3 className="text-2xl font-bold text-[#252B42]">Fax : +451 215 215</h3>
          </div>
          <div className="flex gap-6 text-[#252B42] pt-6">
            <Twitter size={24} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <Facebook size={24} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <Instagram size={24} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <Linkedin size={24} className="cursor-pointer hover:text-[#23A6F0] transition-colors" />
          </div>
        </div>
        
        <div className="relative flex justify-center">
          
          <img 
            src="/contact.jpg" 
            alt="Contact Family" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </section>

      {/* CONTACT CARDS SECTION */}
      <section className="py-20 bg-[#FAFAFA] text-center">
        <div className="max-w-[1050px] mx-auto px-6">
          <h5 className="font-bold text-[#252B42] mb-4 uppercase text-sm">VISIT OUR OFFICE</h5>
          <h2 className="text-4xl font-bold text-[#252B42] mb-16">We help small businesses <br className="hidden md:block" /> with big ideas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center">
            {/* Phone Card */}
            <div className="bg-white p-12 flex flex-col items-center space-y-4 border border-transparent">
              <Phone size={72} className="text-[#23A6F0]" />
              <div className="font-bold text-[#252B42] text-sm">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <h5 className="font-bold text-[#252B42] pt-4">Get Support</h5>
              <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-3 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
                Submit Request
              </button>
            </div>

            {/* Middle Card (Dark) */}
            <div className="bg-[#252B42] p-16 flex flex-col items-center space-y-4 text-white scale-105 z-10 rounded-lg shadow-xl">
              <MapPin size={72} className="text-[#23A6F0]" />
              <div className="font-bold text-sm">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <h5 className="font-bold pt-4 text-lg">Get Support</h5>
              <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-3 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
                Submit Request
              </button>
            </div>

            {/* Mail Card */}
            <div className="bg-white p-12 flex flex-col items-center space-y-4 border border-transparent">
              <Mail size={72} className="text-[#23A6F0]" />
              <div className="font-bold text-[#252B42] text-sm">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <h5 className="font-bold text-[#252B42] pt-4">Get Support</h5>
              <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-3 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center space-y-8">
        <h5 className="font-bold text-[#252B42] uppercase tracking-[0.2em] text-sm">WE CAN'T WAIT TO MEET YOU</h5>
        <h2 className="text-6xl font-bold text-[#252B42]">Let’s Talk</h2>
        <button className="bg-[#23A6F0] text-white px-12 py-4 rounded-md font-bold uppercase hover:bg-[#1a8cd1] transition-colors shadow-lg">
          Try it free now
        </button>
      </section>
    </div>
  );
}