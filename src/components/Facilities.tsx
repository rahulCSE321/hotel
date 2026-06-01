export default function Facilities() {
  const facilities = [
    {
      title: "Swimming Pool",
      desc: "Always use the clothes that are swimming pool friendly.",
      img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      title: "Amidst Nature",
      desc: "Enjoy the scenic views and peaceful environment.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      title: "Under Protection",
      desc: "This area is monitored 24/7 by security personnel. Please contact reception for assistance.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      title: "Bus Transfer",
      desc: "Please be ready at the pickup point 15 minutes before departure.",
      img: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <section className="py-32 bg-white text-center font-sans mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Facilities</h2>
        <p className="text-gray-500 mb-16 text-lg">Enjoy the luxury of time and convenience!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {facilities.map((fac, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-[8px] border-gray-50 shadow-lg">
                <img src={fac.img} alt={fac.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{fac.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[240px]">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
