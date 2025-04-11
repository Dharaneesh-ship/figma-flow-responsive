
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative cream-background pt-24 pb-28 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Star decorations */}
        <Star className="absolute top-4 left-10 w-6 h-6 text-gold opacity-70" />
        <Star className="absolute bottom-20 right-10 w-8 h-8 text-gold opacity-70" />
        <Star className="absolute top-40 right-20 w-4 h-4 text-gold opacity-70" />
        <Star className="absolute bottom-60 left-20 w-5 h-5 text-gold opacity-70" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Plan Your<br />
              Perfect Event<br />
              with LetsGala
            </h1>
            <p className="mt-6 text-lg max-w-md mx-auto lg:mx-0 text-gray-700">
              Connecting you with the best venues, caterers, and entertainers
            </p>
            <div className="mt-8">
              <Link 
                to="/planning" 
                className="action-button inline-block"
              >
                START PLANNING
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="transform -translate-y-6">
                <img 
                  src="/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png" 
                  alt="Event celebration" 
                  className="rounded-full w-full h-auto shadow-xl animate-float"
                />
              </div>
              <div className="transform translate-y-8">
                <img 
                  src="/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png" 
                  alt="Wedding decoration" 
                  className="rounded-3xl w-full h-auto shadow-xl animate-float" 
                />
              </div>
              <div className="transform translate-x-4">
                <img 
                  src="/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png" 
                  alt="Table setting" 
                  className="rounded-tr-3xl rounded-bl-3xl w-full h-auto shadow-xl animate-float"
                />
              </div>
              <div className="transform -translate-x-4 translate-y-4">
                <img 
                  src="/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png" 
                  alt="Event decoration" 
                  className="rounded-3xl w-full h-auto shadow-xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
