export default function Rooms() {
  const rooms = [
    {
      title: "Perfect Relax Room",
      img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=800",
      price: "$1,225",
      guests: "3 Guests",
      size: "1500"
    },
    {
      title: "Royal Class Room",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
      price: "$2,350",
      guests: "6 Guests",
      size: "3500"
    },
    {
      title: "Day City View",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
      price: "$1,650",
      guests: "4 Guests",
      size: "1200"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 font-sans text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-rose-700 font-medium mb-2 text-sm tracking-wide">Extraordinary Suites</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 tracking-tight max-w-2xl mx-auto">
          Discover Tranquility in Our Relax Rooms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-white shadow-md cursor-pointer">
              <div className="relative h-96 w-full overflow-hidden">
                <img 
                  src={room.img} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1.5 text-sm font-bold shadow-sm">
                  {room.price} <span className="text-xs font-normal text-gray-500">Per Night</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{room.title}</h3>
                  <div className="flex items-center text-gray-300 text-sm space-x-4">
                    <span>{room.guests}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span>Size: {room.size} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
