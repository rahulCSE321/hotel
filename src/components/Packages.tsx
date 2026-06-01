import { ArrowUpRight } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      name: "Classic Room",
      price: "$375",
      features: [
        "Amidst Nature", "Swimming Pool", "1 Bed Room", "2 People in Room"
      ],
      isPrimary: false
    },
    {
      name: "Bogota Colombia",
      price: "$725",
      features: [
        "Amidst Nature", "Swimming Pool", "2 Bed Room", "4 People in Room"
      ],
      isPrimary: true
    },
    {
      name: "Cristales River Trip",
      price: "$1,400",
      features: [
        "Amidst Nature", "Swimming Pool", "3 Bed Room", "5 People in Room"
      ],
      isPrimary: false
    }
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-rose-700 font-medium mb-2 text-sm">Our Room Prices</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-16 tracking-tight">Our Awesome Packages</h2>

        <div className="flex flex-col space-y-4">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row lg:items-center justify-between p-8 border hover:-translate-y-1 transition-transform duration-300 ${pkg.isPrimary ? 'border-rose-700 shadow-md' : 'border-gray-100 bg-gray-50/50'}`}
            >
              <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
              </div>
              
              <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                <span className="text-gray-500 text-sm ml-1">/ Per Night</span>
              </div>
              
              <div className="w-full lg:w-1/3 flex flex-wrap gap-y-2 mb-6 lg:mb-0">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 w-full">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center before:content-['·'] before:mr-2 before:text-lg before:font-bold before:text-gray-400">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full lg:w-auto text-right">
                <button 
                  className={`inline-flex items-center justify-center px-6 py-3 border font-semibold text-sm transition-colors w-full lg:w-auto ${
                    pkg.isPrimary 
                      ? 'bg-rose-700 border-rose-700 text-white hover:bg-rose-800' 
                      : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  Book Rooms <ArrowUpRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
