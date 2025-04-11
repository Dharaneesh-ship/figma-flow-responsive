
import React from 'react';
import { Star } from 'lucide-react';

const images = [
  "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
  "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
  "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
  "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
  "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
  "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png"
];

const Community = () => {
  return (
    <div className="cream-background py-16 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <Star className="star-decoration top-10 left-10 w-5 h-5" />
        <Star className="star-decoration bottom-20 right-20 w-4 h-4" />
        
        <div className="section-title">
          <h2>CONNECT WITH OUR</h2>
          <h3>BEAUTIFUL COMMUNITY</h3>
        </div>
        
        <div className="mt-12">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {images.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img 
                  src={image} 
                  alt={`Community image ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-gold rounded-2xl py-8 px-6 md:py-10 md:px-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="relative z-10 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark">
              Ready to plan your<br />
              unforgettable celebration?
            </h3>
          </div>
          
          <button className="bg-white hover:bg-gray-100 text-dark font-medium px-6 py-3 rounded-lg transition-colors z-10">
            START PLANNING
          </button>
          
          {/* Background decoration */}
          <div className="absolute right-0 bottom-0 opacity-20">
            <img 
              src="/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png" 
              alt="Decoration" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
