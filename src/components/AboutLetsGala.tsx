
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutLetsGala = () => {
  return (
    <div className="cream-background py-20 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <Star className="star-decoration top-10 left-10 w-6 h-6" />
        <Star className="star-decoration bottom-10 right-10 w-5 h-5" />
        
        <div className="section-title">
          <h2>KNOW ABOUT</h2>
          <h3>LETSGALA</h3>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            LetsGala simplifies event planning by connecting you with the best venues, caterers, and 
            entertainers. Whether it's a birthday, anniversary, or social gathering, find and book 
            everything you need effortlessly in one place. Let's make your next event extraordinary!
          </p>
          
          <div className="mt-8">
            <Link 
              to="/about-us" 
              className="know-more-button inline-flex items-center"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png" 
              alt="People celebrating" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLetsGala;
