
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const categories = [
  {
    name: "Birthdays",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    link: "/categories/birthdays"
  },
  {
    name: "Weddings",
    image: "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
    link: "/categories/weddings"
  },
  {
    name: "Baby Showers",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    link: "/categories/baby-showers"
  },
  {
    name: "Corporate Events",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    link: "/categories/corporate-events"
  }
];

const ExploreByCategory = () => {
  return (
    <div className="wave-background py-24 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <Star className="absolute top-20 left-[10%] w-6 h-6 text-gold opacity-70" />
        <Star className="absolute bottom-20 right-[15%] w-7 h-7 text-gold opacity-70" />
        
        <div className="section-title text-center mb-16">
          <h2 className="text-gray-300 text-lg font-medium tracking-wider uppercase">EXPLORE BY</h2>
          <h3 className="text-white text-4xl font-serif font-bold mt-2">CELEBRATION</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={index} to={category.link} className="block group">
              <div className="venue-card overflow-hidden rounded-xl shadow-lg">
                <div className="relative h-80 w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h4 className="text-white text-center font-medium text-xl">{category.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreByCategory;
