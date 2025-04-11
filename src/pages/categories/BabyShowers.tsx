
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Star, Map, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const babyShowerVendors = [
  {
    name: "Little Oasis Venue",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    location: "Portland, OR",
    rating: 4.8,
    reviews: 92,
    category: "Venue",
    featured: true
  },
  {
    name: "Sweet Beginnings",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    location: "Denver, CO",
    rating: 4.7,
    reviews: 78,
    category: "Catering",
    featured: false
  },
  {
    name: "Tiny Treasures",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    location: "Austin, TX",
    rating: 4.9,
    reviews: 113,
    category: "Decor",
    featured: false
  },
  {
    name: "Cake & Cookies",
    image: "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
    location: "Seattle, WA",
    rating: 4.6,
    reviews: 86,
    category: "Catering",
    featured: false
  },
  {
    name: "Baby Bloom Photography",
    image: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    location: "Atlanta, GA",
    rating: 4.8,
    reviews: 94,
    category: "Photography",
    featured: false
  },
  {
    name: "Pastel Balloons",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    location: "Nashville, TN",
    rating: 4.7,
    reviews: 68,
    category: "Decor",
    featured: false
  }
];

const BabyShowersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="wave-background py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Baby Shower Celebrations
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Create cherished memories with the perfect baby shower - find venues, decorations, and treats all in one place.
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
                  <option value="decor">Decor</option>
                  <option value="photography">Photography</option>
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
            <h2>TOP BABY SHOWER</h2>
            <h3>VENDORS</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {babyShowerVendors.map((vendor, index) => (
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
      
      {/* Baby Shower Ideas Section */}
      <div className="wave-background py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-title">
            <h2 className="text-gray-300">BABY SHOWER</h2>
            <h3 className="text-white">IDEAS & THEMES</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Heart className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Gender Reveal Parties</h4>
              </div>
              <p className="text-gray-300">
                Create a memorable moment with creative gender reveal ideas, from balloon releases to cake cutting ceremonies.
              </p>
              <Link to="/ideas/gender-reveal" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
            
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Heart className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Classic Baby Showers</h4>
              </div>
              <p className="text-gray-300">
                Celebrate the upcoming arrival with timeless themes, games, and traditions that friends and family will love.
              </p>
              <Link to="/ideas/classic-baby-showers" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
            
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Heart className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Co-ed Baby Celebrations</h4>
              </div>
              <p className="text-gray-300">
                Modern approaches to include partners and male friends in the celebration with activities everyone will enjoy.
              </p>
              <Link to="/ideas/co-ed-baby-showers" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
            
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Heart className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Virtual Baby Showers</h4>
              </div>
              <p className="text-gray-300">
                Connect with loved ones near and far with virtual celebrations that maintain the joy and traditions of in-person events.
              </p>
              <Link to="/ideas/virtual-baby-showers" className="inline-block mt-4 text-gold hover:underline">
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

export default BabyShowersPage;
