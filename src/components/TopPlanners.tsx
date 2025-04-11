
import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const planners = [
  {
    type: "Wedding Planners",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    link: "/planners/wedding"
  },
  {
    type: "Wedding Planners",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    link: "/planners/wedding"
  },
  {
    type: "Corporate Planners",
    image: "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
    link: "/planners/corporate"
  },
  {
    type: "Corporate Planners",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    link: "/planners/corporate"
  },
  {
    type: "Corporate Planners",
    image: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    link: "/planners/corporate"
  }
];

const TopPlanners = () => {
  return (
    <div className="cream-background py-20 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <Star className="star-decoration top-10 left-10 w-6 h-6" />
        <Star className="star-decoration bottom-10 right-20 w-5 h-5" />
        
        <div className="section-title">
          <h2>TOP RATED</h2>
          <h3>PLANNERS</h3>
        </div>
        
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto pb-4">
            {planners.map((planner, index) => (
              <div key={index} className="venue-card rounded-xl overflow-hidden">
                <img
                  src={planner.image}
                  alt={planner.type}
                  className="venue-image h-48 w-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white text-center text-base">{planner.type}</h4>
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
    </div>
  );
};

export default TopPlanners;
