import { BedDouble, Car, Compass, Waves, Key, Coffee, Play } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: <BedDouble className="w-6 h-6" />, label: "Well Furnished Rooms" },
    { icon: <Waves className="w-6 h-6" />, label: "Swimming Pool" },
    { icon: <Car className="w-6 h-6" />, label: "Parking" },
    { icon: <Key className="w-6 h-6" />, label: "Smart Key" },
    { icon: <Compass className="w-6 h-6" />, label: "South Facing" },
    { icon: <Coffee className="w-6 h-6" />, label: "Free Breakfast" },
  ];

  return (
    <section className="bg-[#18181b] text-white py-0 flex flex-col lg:flex-row font-sans">
      <div className="w-full lg:w-1/2 p-12 lg:p-24 xl:px-40 flex flex-col justify-center">
        <p className="text-yellow-500 font-semibold mb-2 text-sm tracking-wide">Some Word About Us</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Why Choose Us</h2>
        <p className="text-gray-400 mb-12 leading-relaxed text-sm md:text-base max-w-md">
          Experience the ultimate convenience with a subway station located just moments from your doorstep.
        </p>
        <div className="grid grid-cols-2 gap-y-8 gap-x-4">
          {features.map((feat, idx) => (
            <div key={idx} className="flex items-center space-x-4 text-gray-200 hover:text-white transition-colors cursor-default">
              <div className="text-gray-400">
                {feat.icon}
              </div>
              <span className="font-medium text-sm md:text-base">{feat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[auto]">
        <img 
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000" 
          alt="Hotel Pool Night" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-rose-700 hover:scale-110 transition-transform shadow-xl">
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </button>
        </div>
      </div>
    </section>
  );
}
