import { ArrowUpRight, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4a4242] text-white pt-20 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold flex items-center gap-2 tracking-tight text-white mb-6">
              <span className="text-white italic font-serif text-3xl">H.</span> Housey<span className="text-rose-500">.</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              84 N. Hill Field St.<br/>Scarsdale, NY 10583
            </p>
            <div className="mb-6">
              <p className="text-rose-400 text-xs font-bold tracking-wider mb-1">CALL FOR RESERVATIONS</p>
              <p className="text-xl font-bold text-yellow-500">+(62) 4350 2476</p>
            </div>
            <a href="#" className="inline-flex items-center text-sm font-semibold hover:text-rose-400 transition-colors">
              View Map <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Things To Do</a></li>
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Rooms & Suites</a></li>
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Book Now</a></li>
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
             <h4 className="text-lg font-bold mb-6 opacity-0">Quick Links 2</h4>
             <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Popular Destination</a></li>
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Pricing Plan</a></li>
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-colors before:content-['·'] before:mr-2">Restaurant</a></li>
            </ul>
          </div>

          {/* Col 3 - Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-bold mb-2">Don't miss</h4>
            <h4 className="text-lg font-bold mb-6">Our Latest Updated</h4>
            <p className="text-sm text-gray-300 mb-6">
              Sign up to our newsletter for exclusive offers.
            </p>
            <div className="flex bg-white rounded-sm overflow-hidden mb-8">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full px-4 py-3 text-sm text-gray-900 focus:outline-none"
              />
              <button className="bg-rose-700 hover:bg-rose-800 text-white px-6 font-medium text-sm transition-colors">
                Subscribe
              </button>
            </div>
            
            <div className="flex space-x-4 text-gray-300">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors">𝕏</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>Copyright © 2026 Housey. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Developed by: <span className="text-white font-semibold">ThemePure</span></p>
        </div>
      </div>
    </footer>
  );
}
