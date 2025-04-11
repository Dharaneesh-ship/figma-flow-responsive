
import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: "Ganeshaya Sodha",
    avatar: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    rating: 5,
    time: "3 days ago",
    text: "LetsGala made planning my 50th birthday party a breeze! Their expert planners connected me with the perfect venue, amazing food, and a fantastic DJ. The event was a huge success, and I received countless compliments from my guests. I couldn't have done it without LetsGala!"
  },
  {
    name: "Ganeshaya Sodha",
    avatar: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    rating: 5,
    time: "3 days ago",
    text: "LetsGala made planning my 50th birthday party a breeze! Their expert planners connected me with the perfect venue, amazing food, and a fantastic DJ. The event was a huge success, and I received countless compliments from my guests. I couldn't have done it without LetsGala!"
  },
  {
    name: "Ganeshaya Sodha",
    avatar: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    rating: 5,
    time: "3 days ago",
    text: "LetsGala made planning my 50th birthday party a breeze! Their expert planners connected me with the perfect venue, amazing food, and a fantastic DJ. The event was a huge success, and I received countless compliments from my guests. I couldn't have done it without LetsGala!"
  },
  {
    name: "Ganeshaya Sodha",
    avatar: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    rating: 5,
    time: "3 days ago",
    text: "LetsGala made planning my 50th birthday party a breeze! Their expert planners connected me with the perfect venue, amazing food, and a fantastic DJ. The event was a huge success, and I received countless compliments from my guests. I couldn't have done it without LetsGala!"
  }
];

const Reviews = () => {
  return (
    <div className="cream-background py-20 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-8 h-8 mr-3" />
            <span className="text-xl font-medium">Rating</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-3">4.7</span>
            <div className="flex">
              {[1, 2, 3, 4].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
              <Star className="w-5 h-5 text-gold" strokeWidth={2} />
            </div>
            <span className="ml-3 text-sm text-gray-500">166 Reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-gold fill-gold' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">{review.time}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 line-clamp-4">{review.text}</p>
              
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center">
                  <span className="text-xs text-gray-500">Posted on</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-4 h-4 ml-2" />
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

export default Reviews;
