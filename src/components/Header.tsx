import { Mail, Phone, ChevronDown, User, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 font-sans shadow-sm bg-white">
      {/* Top Bar */}
      <div className="bg-[#f8f8f8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs text-gray-500 font-medium">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@housey.com" className="flex items-center hover:text-rose-700 transition-colors">
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              info@housey.com
            </a>
            <a href="tel:+602376224330" className="flex items-center hover:text-rose-700 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              +(602) 376 224 330
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <button className="flex items-center hover:text-rose-700 transition-colors">
              EN <ChevronDown className="w-3.5 h-3.5 ml-1" />
            </button>
            <button className="flex items-center hover:text-rose-700 transition-colors">
              <User className="w-3.5 h-3.5 mr-1.5" />
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center gap-2 tracking-tight text-gray-900">
              <span className="text-rose-700 italic font-serif text-3xl">H.</span> Housey<span className="text-rose-700">.</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800">
            <a href="#" className="text-rose-700">Home</a>
            <a href="#" className="hover:text-rose-700 transition-colors">About Us</a>
            <a href="#" className="hover:text-rose-700 transition-colors">Room</a>
            <a href="#" className="hover:text-rose-700 transition-colors">Gallery</a>
            <a href="#" className="hover:text-rose-700 transition-colors">Blog</a>
            <a href="#" className="hover:text-rose-700 transition-colors">Pages</a>
            <a href="#" className="hover:text-rose-700 transition-colors">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative border-r border-gray-200 pr-4">
              <Search className="w-5 h-5 text-gray-400 absolute left-0 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-7 py-1 w-24 sm:w-32 text-sm focus:outline-none placeholder-gray-400"
              />
            </div>
            <button className="bg-gray-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-rose-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
