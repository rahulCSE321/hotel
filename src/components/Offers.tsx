import { Star } from 'lucide-react';

export default function Offers() {
  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative h-[500px] w-full md:w-[85%] overflow-hidden bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1400" 
            alt="Resort View" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating Card */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-32 bg-white p-10 shadow-2xl max-w-[400px] z-10 hidden md:block">
          <p className="text-rose-700 font-medium mb-3 text-sm">Exclusive Offer</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">When to Book for the Best Deals</h2>
          
          <div className="flex justify-between items-end border-b border-gray-100 pb-6 mb-6">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">3 Beds | 5 Guest</p>
              <div className="flex text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Only</p>
              <p className="text-2xl font-bold text-gray-900">$1,400</p>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Immerse yourself in Colombia's natural beauty with a stay at Cristales River Trip, near the vibrant Caño Cristales River.
          </p>
          
          <button className="border-2 border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-white px-8 py-3 text-sm font-semibold transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
