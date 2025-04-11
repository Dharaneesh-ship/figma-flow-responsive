
import React from 'react';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';

const categories = ["Venue", "Catering", "Entertainment"];

const vendors = [
  {
    name: "Hilton Motif Seattle",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    category: "Venue"
  },
  {
    name: "Hilton Motif Seattle",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    category: "Venue"
  },
  {
    name: "Hilton Motif Seattle",
    image: "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
    category: "Venue"
  },
  {
    name: "Hilton Motif Seattle",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    category: "Venue"
  }
];

const VendorCategories = () => {
  const [activeCategory, setActiveCategory] = React.useState("Venue");
  
  return (
    <div className="wave-background py-16 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <Star className="star-decoration top-10 left-20 w-6 h-6 text-gold" />
        <Star className="star-decoration bottom-20 right-40 w-7 h-7 text-gold" />
        
        <div className="section-title">
          <h2 className="text-gray-300">VENDOR</h2>
          <h3 className="text-white">CATEGORIES</h3>
        </div>
        
        <div className="flex justify-center mt-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                activeCategory === category ? "bg-gold text-dark" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor, index) => (
            <div key={index} className="card-container bg-dark">
              <div className="relative">
                <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-white text-lg font-medium mb-4">{vendor.name}</h4>
                  <button className="know-more-button w-full">KNOW MORE</button>
                </div>
              </div>
            </div>
          ))}
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
  );
};

export default VendorCategories;
