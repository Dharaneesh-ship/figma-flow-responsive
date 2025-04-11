
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="font-serif text-white">
                <span className="text-3xl font-bold">Lets</span>
                <span className="text-4xl font-bold">Gala</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              LetsGala simplifies event planning by connecting you with the best venues, caterers, planners, and bands. Inquire, and book everything you need for unforgettable celebrations.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-dark transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-dark transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold hover:text-dark transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium mb-6">Event</h4>
              <ul className="space-y-4">
                <li><Link to="/weddings" className="text-gray-400 hover:text-gold transition-colors">Weddings</Link></li>
                <li><Link to="/birthdays" className="text-gray-400 hover:text-gold transition-colors">Birthdays</Link></li>
                <li><Link to="/baby-showers" className="text-gray-400 hover:text-gold transition-colors">Baby Showers</Link></li>
                <li><Link to="/corporate-events" className="text-gray-400 hover:text-gold transition-colors">Corporate Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-6">Event Professionals</h4>
              <ul className="space-y-4">
                <li><Link to="/become-member" className="text-gray-400 hover:text-gold transition-colors">Become A Member</Link></li>
                <li><Link to="/digital-events" className="text-gray-400 hover:text-gold transition-colors">Digital Events</Link></li>
                <li><Link to="/contact-support" className="text-gray-400 hover:text-gold transition-colors">Contact Pro Support</Link></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-6">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-gold" />
                <span className="text-gray-400">(408) 555-0120</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-gold" />
                <span className="text-gray-400">hey@letsgala.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-400">2972 Westheimer Rd, Santa, 85486</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} LetsGala. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
