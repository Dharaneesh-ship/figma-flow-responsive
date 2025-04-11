
import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="wave-background py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-title">
          <h2 className="text-gray-300">EXPLORE BY</h2>
          <h3 className="text-white">CELEBRATION</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category, index) => (
            <Link key={index} to={category.link} className="block">
              <div className="venue-card">
                <img
                  src={category.image}
                  alt={category.name}
                  className="venue-image"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white text-center font-medium">{category.name}</h4>
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
