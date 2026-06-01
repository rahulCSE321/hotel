import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function VacationGallery() {
  return (
    <section className="bg-[#f8f8f8] py-24 font-sans overflow-hidden">
      <div className="flex flex-col md:flex-row max-w-full">
        {/* Images Track */}
        <div className="flex gap-4 px-4 sm:px-8 overflow-x-auto pb-8 snap-x w-full">
          {/* Main Large Image */}
          <div className="min-w-[60%] md:min-w-[40%] h-[300px] md:h-[450px] shrink-0 snap-center relative">
            <img src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Beach Resort" />
          </div>
          <div className="min-w-[40%] h-[300px] md:h-[450px] shrink-0 snap-center relative">
            <img src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Aerial Waves" />
          </div>
        </div>

        {/* Info & Navigation below images for mobile, overlaid or beside for desktop?
            Actually in the design, there's an image track, then text below it. */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
         <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-16">
            <span className="text-gray-500 font-medium">1 / 4</span>
            <div className="flex gap-4">
              <button className="p-2 hover:text-rose-700 text-gray-400 transition-colors"><ChevronLeft className="w-6 h-6"/></button>
              <button className="p-2 hover:text-rose-700 text-gray-400 transition-colors"><ChevronRight className="w-6 h-6"/></button>
            </div>
         </div>
         
         {/* Vacation Text Section */}
         <div className="flex flex-col md:flex-row gap-12 items-start relative max-w-4xl">
            <div className="text-[180px] font-serif text-gray-200 absolute -top-8 -left-12 -z-10 leading-none select-none opacity-50">H</div>
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">Planning a Dream Vacation or a Spontaneous Weekend Getaway?</h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-500 mb-8 leading-relaxed">
                In the era of endless possibilities, travel enthusiasts embark on journeys to explore new horizons. A crucial aspect of any travel plan is finding the perfect accommodation, and in this blog post, we will delve into the art of seamless hotel booking. Whether you are a seasoned traveler or a first-timer, these tips will ensure your hotel booking experience is smooth and rewarding.
              </p>
              <a href="#" className="inline-flex items-center text-rose-700 font-medium hover:text-rose-800 before:content-[''] before:w-8 before:h-[1px] before:bg-rose-700 before:mr-3">
                View Prices
              </a>
            </div>
         </div>
      </div>
    </section>
  );
}
