
import React from 'react';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';

const FeaturedVendors = () => {
  return (
    <div className="wave-background py-20 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <Star className="star-decoration top-10 left-10 w-6 h-6 text-gold" />
        <Star className="star-decoration top-20 right-20 w-5 h-5 text-gold" />
        <Star className="star-decoration bottom-20 right-40 w-7 h-7 text-gold" />
        
        <div className="section-title">
          <h2 className="text-gray-300">FEATURED</h2>
          <h3 className="text-white">VENDORS</h3>
        </div>
        
        <div className="mt-16 relative">
          <div className="card-container mx-auto max-w-xl">
            <div className="featured-ribbon">Featured</div>
            <div className="absolute top-4 right-4 z-10">
              <button className="p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png"
                alt="Hilton Motif Seattle"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white text-2xl font-medium">Hilton Motif Seattle</h4>
              </div>
            </div>
            <div className="featured-badge">Featured!</div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button className="navigation-button">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="navigation-button">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVendors;
