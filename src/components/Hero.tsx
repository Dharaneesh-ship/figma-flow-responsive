
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative cream-background pt-16 pb-24 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Star decorations */}
        <Star className="star-decoration top-4 left-10 w-6 h-6" />
        <Star className="star-decoration bottom-20 right-10 w-8 h-8" />
        <Star className="star-decoration top-40 right-20 w-4 h-4" />
        <Star className="star-decoration bottom-60 left-20 w-5 h-5" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 mt-10 lg:mt-0">
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
                  className="rounded-full w-full h-auto animate-float"
                />
              </div>
              <div className="transform translate-y-8">
                <img 
                  src="/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png" 
                  alt="Wedding decoration" 
                  className="rounded-star w-full h-auto animate-float" 
                  style={{clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"}}
                />
              </div>
              <div className="transform translate-x-4">
                <img 
                  src="/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png" 
                  alt="Table setting" 
                  className="rounded-tr-3xl rounded-bl-3xl w-full h-auto animate-float"
                />
              </div>
              <div className="transform -translate-x-4 translate-y-4">
                <img 
                  src="/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png" 
                  alt="Event decoration" 
                  className="rounded-flower w-full h-auto animate-float"
                  style={{clipPath: "path('M 100 100 C 120 80 150 80 170 100 C 190 120 190 150 170 170 C 150 190 120 190 100 170 C 80 150 80 120 100 100 Z')"}}
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
