
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-cream py-6 px-4 lg:px-8 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-serif font-bold text-2xl">Lets<span className="text-3xl">Gala</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link to="/vendors" className="hover:text-gold transition-colors font-medium">All Vendors</Link>
            <Link to="/weddings" className="hover:text-gold transition-colors font-medium">Weddings</Link>
            <Link to="/birthdays" className="hover:text-gold transition-colors font-medium">Birthdays</Link>
            <Link to="/baby-showers" className="hover:text-gold transition-colors font-medium">Baby Showers</Link>
            <Link to="/corporate-events" className="hover:text-gold transition-colors font-medium">Corporate Events</Link>
            <Link to="/become-member" className="hover:text-gold transition-colors font-medium">Become A Member</Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <button aria-label="Favorites" className="hover:text-gold transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button aria-label="Search" className="hover:text-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="Menu" className="md:hidden hover:text-gold transition-colors" onClick={toggleMenu}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/vendors" className="hover:text-gold transition-colors font-medium">All Vendors</Link>
              <Link to="/weddings" className="hover:text-gold transition-colors font-medium">Weddings</Link>
              <Link to="/birthdays" className="hover:text-gold transition-colors font-medium">Birthdays</Link>
              <Link to="/baby-showers" className="hover:text-gold transition-colors font-medium">Baby Showers</Link>
              <Link to="/corporate-events" className="hover:text-gold transition-colors font-medium">Corporate Events</Link>
              <Link to="/become-member" className="hover:text-gold transition-colors font-medium">Become A Member</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
