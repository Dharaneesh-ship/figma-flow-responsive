
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const venueTypes = [
  {
    type: "Wedding Venues",
    image: "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
    link: "/venues/wedding"
  },
  {
    type: "Birthday Venues",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    link: "/venues/birthday"
  },
  {
    type: "Baby Shower Venues",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    link: "/venues/baby-shower"
  },
  {
    type: "Corporate Venues",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    link: "/venues/corporate"
  }
];

const FastBookingVenues = () => {
  return (
    <div className="cream-background py-20 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <Star className="star-decoration top-10 left-20 w-6 h-6" />
        <Star className="star-decoration bottom-20 right-10 w-5 h-5" />
        
        <div className="section-title">
          <h2>EXPLORE OUR</h2>
          <h3>FAST BOOKING VENUES</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {venueTypes.map((venue, index) => (
            <div key={index} className="text-center">
              <Link to={venue.link} className="block">
                <div className="overflow-hidden rounded-full mx-auto" style={{width: "180px", height: "180px"}}>
                  <img 
                    src={venue.image} 
                    alt={venue.type} 
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <h4 className="mt-4 font-medium text-lg">{venue.type}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FastBookingVenues;
