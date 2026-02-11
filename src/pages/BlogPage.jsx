import React from 'react';
import { ChevronRight, Clock, ChevronRight as ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Colorful Streets",
      excerpt: "The journey through the bright facades of the city was a dream come true for any photographer...",
      date: "July 15, 2024",
      image: "/blog-1.jpg", 
      category: "Google",
      trending: "New"
    },
    {
      id: 2,
      title: "The Magic of Summer Umbrellas",
      excerpt: "Underneath the floating umbrellas, the city takes on a new perspective full of shadows and light...",
      date: "July 10, 2024",
      image: "/blog-2.jpg", 
      category: "Trending",
      trending: "Hot"
    }
  ];

  return (
    <div className="w-full font-montserrat bg-white pb-20">
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img 
          src="/blog-hero.jpg" 
          className="w-full h-full object-cover" 
          alt="Blog Hero" 
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog Page</h1>
          <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight size={16} />
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <div className="max-w-[1050px] mx-auto px-6 md:px-10 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#252B42] mb-4">Our Latest Stories</h2>
          <p className="text-[#737373] max-w-lg mx-auto">
            Find the latest news, updates and stories from our colorful community.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white border border-[#ECECEC] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              {/* Image Container */}
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-sm text-xs font-bold uppercase shadow-md">
                  {blog.trending}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-6 space-y-4">
                <div className="flex gap-4 text-xs text-[#737373]">
                  <span className="text-[#23A6F0]">{blog.category}</span>
                  <span>Liew</span>
                  <span>Inorne</span>
                </div>
                
                <h4 className="text-xl font-bold text-[#252B42] group-hover:text-[#23A6F0] transition-colors">
                  {blog.title}
                </h4>
                
                <p className="text-[#737373] text-sm leading-relaxed">
                  {blog.excerpt}
                </p>

                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2 text-[#737373] text-xs font-bold">
                    <Clock size={16} className="text-[#23A6F0]" />
                    {blog.date}
                  </div>
                  <Link 
                    to={`/blog/${blog.id}`} 
                    className="flex items-center gap-3 text-[#23A6F0] font-bold text-sm hover:translate-x-1 transition-transform"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}