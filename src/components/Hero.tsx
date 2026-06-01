import { useState, useEffect } from 'react';
import { Calendar, Users, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  // "https://images.unsplash.com/photo-1542314831-c6a4d140f847?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative h-[650px] flex items-center justify-center font-sans group">
      {/* Background Image Carousel */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url("${img}")` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all z-20"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all z-20"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-4 mt-[-80px]">
        <p className="text-white text-sm md:text-base font-medium tracking-wide mb-4 uppercase drop-shadow-md">
          Best Choice for Family
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight mb-8 drop-shadow-lg">
          Indulge in a Luxurious <br /> Hotel Experience
        </h1>
        <button className="inline-flex items-center justify-center bg-transparent border border-white/50 text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all font-medium text-sm backdrop-blur-sm">
          Explore More <ArrowUpRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      {/* Booking Form overhanging bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-4 z-20">
        <div className="bg-white shadow-2xl p-6 flex flex-col md:flex-row gap-4 justify-between items-end rounded-sm">
          <div className="flex-1 w-full relative">
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Check-In</label>
            <div className="relative pb-2 border-b border-gray-200 focus-within:border-gray-900 transition-colors">
              <Calendar className="w-5 h-5 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Choose Date" className="w-full pl-8 focus:outline-none text-sm text-gray-700 bg-transparent" />
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Check-Out</label>
            <div className="relative pb-2 border-b border-gray-200 focus-within:border-gray-900 transition-colors">
              <Calendar className="w-5 h-5 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Choose Date" className="w-full pl-8 focus:outline-none text-sm text-gray-700 bg-transparent" />
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Guests</label>
            <div className="relative pb-2 border-b border-gray-200 focus-within:border-gray-900 transition-colors">
              <Users className="w-5 h-5 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2" />
              <select className="w-full pl-8 focus:outline-none text-sm text-gray-700 bg-transparent appearance-none">
                <option>1 Guest(s)</option>
                <option>2 Guest(s)</option>
                <option>3 Guest(s)</option>
                <option>4+ Guest(s)</option>
              </select>
            </div>
          </div>
          <button className="w-full md:w-auto bg-rose-700 hover:bg-rose-800 text-white font-medium px-10 py-3.5 transition-colors rounded-sm">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
