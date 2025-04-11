
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Cake, Star, Map, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const birthdayVendors = [
  {
    name: "Hilton Birthday Suite",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    location: "Seattle, WA",
    rating: 4.8,
    reviews: 126,
    category: "Venue",
    featured: true
  },
  {
    name: "Sweet Celebrations",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    location: "Portland, OR",
    rating: 4.6,
    reviews: 98,
    category: "Catering",
    featured: false
  },
  {
    name: "Party Paradise",
    image: "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 156,
    category: "Decoration",
    featured: false
  },
  {
    name: "Amazing Cakes",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    location: "Los Angeles, CA",
    rating: 4.7,
    reviews: 112,
    category: "Catering",
    featured: false
  },
  {
    name: "Party Photobooth",
    image: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    location: "San Diego, CA",
    rating: 4.5,
    reviews: 87,
    category: "Entertainment",
    featured: false
  },
  {
    name: "Birthday Balloons",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    location: "Seattle, WA",
    rating: 4.8,
    reviews: 126,
    category: "Decoration",
    featured: false
  }
];

const BirthdaysPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="wave-background py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Birthday Celebrations
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Find the perfect venues, caterers, and entertainers to make your birthday celebration unforgettable.
            </p>
          </div>
          
          {/* Search Filters */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search vendors..." 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold appearance-none">
                  <option value="">Category</option>
                  <option value="venue">Venue</option>
                  <option value="catering">Catering</option>
                  <option value="decoration">Decoration</option>
                  <option value="entertainment">Entertainment</option>
                </select>
              </div>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold appearance-none">
                  <option value="">Price Range</option>
                  <option value="budget">Budget</option>
                  <option value="mid">Mid-range</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Vendors */}
      <div className="py-16 px-4 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-title mb-12">
            <h2>TOP BIRTHDAY</h2>
            <h3>VENDORS</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {birthdayVendors.map((vendor, index) => (
              <div key={index} className="card-container bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {vendor.featured && <div className="featured-ribbon">Featured</div>}
                  <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-medium">{vendor.name}</h4>
                      <span className="bg-gold/20 text-dark px-2 py-1 rounded text-xs font-medium">
                        {vendor.category}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Map className="w-4 h-4 mr-1" />
                      <span>{vendor.location}</span>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-gold fill-gold" />
                        <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({vendor.reviews} reviews)</span>
                      </div>
                    </div>
                    <Link to={`/vendors/${vendor.name.toLowerCase().replace(/\s+/g, '-')}`} className="know-more-button w-full flex justify-center items-center">
                      VIEW DETAILS <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <button className="action-button flex items-center">
              LOAD MORE <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Birthday Ideas Section */}
      <div className="wave-background py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-title">
            <h2 className="text-gray-300">BIRTHDAY</h2>
            <h3 className="text-white">IDEAS & THEMES</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Cake className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Kids Birthday Parties</h4>
              </div>
              <p className="text-gray-300">
                Discover magical themes, entertainment ideas, and decorations that will make your child's special day unforgettable.
              </p>
              <Link to="/ideas/kids-birthday" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
            
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Cake className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Adult Birthday Celebrations</h4>
              </div>
              <p className="text-gray-300">
                From elegant dinner parties to adventurous experiences, find the perfect way to celebrate another trip around the sun.
              </p>
              <Link to="/ideas/adult-birthday" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
            
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Cake className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Milestone Birthdays</h4>
              </div>
              <p className="text-gray-300">
                Make those landmark birthdays extra special with our curated ideas for 30th, 40th, 50th, and beyond celebrations.
              </p>
              <Link to="/ideas/milestone-birthdays" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
            
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Cake className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Surprise Parties</h4>
              </div>
              <p className="text-gray-300">
                Plan the perfect surprise with our tips on venues, timing, guest coordination, and keeping the secret.
              </p>
              <Link to="/ideas/surprise-parties" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BirthdaysPage;
