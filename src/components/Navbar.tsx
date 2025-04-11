
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-cream py-4 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-serif font-bold text-2xl">Lets<span className="text-3xl">Gala</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <Link to="/vendors" className="hover:text-gold transition-colors">All Vendors</Link>
            <Link to="/weddings" className="hover:text-gold transition-colors">Weddings</Link>
            <Link to="/birthdays" className="hover:text-gold transition-colors">Birthdays</Link>
            <Link to="/baby-showers" className="hover:text-gold transition-colors">Baby Showers</Link>
            <Link to="/corporate-events" className="hover:text-gold transition-colors">Corporate Events</Link>
            <Link to="/become-member" className="hover:text-gold transition-colors">Become A Member</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button aria-label="Favorites">
              <Heart className="w-5 h-5" />
            </button>
            <button aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
