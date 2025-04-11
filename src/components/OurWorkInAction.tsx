
import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  {
    thumbnail: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    title: "Wedding Decoration"
  },
  {
    thumbnail: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    title: "Outdoor Events"
  },
  {
    thumbnail: "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
    title: "Birthday Party"
  },
  {
    thumbnail: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    title: "Wedding Ceremony"
  },
  {
    thumbnail: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    title: "Dinner Setting"
  }
];

const OurWorkInAction = () => {
  return (
    <div className="wave-background py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-title">
          <h2 className="text-gray-300">SEE OUR WORK</h2>
          <h3 className="text-white">IN ACTION</h3>
        </div>
        
        <div className="mt-12 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="venue-card">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="venue-image h-56"
                />
                <button className="play-button">
                  <Play className="w-8 h-8 text-dark" fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
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

export default OurWorkInAction;
