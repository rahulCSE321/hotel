import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white font-sans text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex text-yellow-400 mb-6">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Flexible Booking Options</h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 font-normal">
          "This was an amazing trip! There were so many highlights... our outstanding, kind, patient, amazing leader Gustavo!! What an absolute saint. He was so organized and insightful!"
        </p>
        
        <div className="flex flex-col items-center">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150" 
            alt="User" 
            className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-gray-50"
          />
          <h4 className="font-bold text-gray-900">Gerardo V. Smith</h4>
          <p className="text-xs text-gray-500 mt-1">Member- La Jolla</p>
        </div>
      </div>
    </section>
  );
}
