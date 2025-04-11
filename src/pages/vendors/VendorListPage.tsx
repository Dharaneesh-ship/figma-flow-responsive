
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Star, Map, ChevronRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const vendorList = [
  {
    id: 'hilton-birthday-suite',
    name: "Hilton Birthday Suite",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    location: "Seattle, WA",
    rating: 4.8,
    reviews: 126,
    category: "Venue",
    featured: true
  },
  {
    id: 'grand-wedding-palace',
    name: "Grand Wedding Palace",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    location: "Los Angeles, CA",
    rating: 4.9,
    reviews: 187,
    category: "Venue",
    featured: true
  },
  {
    id: 'little-oasis-venue',
    name: "Little Oasis Venue",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    location: "Portland, OR",
    rating: 4.8,
    reviews: 92,
    category: "Venue",
    featured: false
  },
  {
    id: 'corporate-convention-center',
    name: "Corporate Convention Center",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    location: "New York, NY",
    rating: 4.9,
    reviews: 176,
    category: "Venue",
    featured: false
  },
  {
    id: 'sweet-celebrations',
    name: "Sweet Celebrations",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    location: "Portland, OR",
    rating: 4.6,
    reviews: 98,
    category: "Catering",
    featured: false
  },
  {
    id: 'party-paradise',
    name: "Party Paradise",
    image: "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 156,
    category: "Decoration",
    featured: false
  },
  {
    id: 'amazing-cakes',
    name: "Amazing Cakes",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    location: "Los Angeles, CA",
    rating: 4.7,
    reviews: 112,
    category: "Catering",
    featured: false
  },
  {
    id: 'party-photobooth',
    name: "Party Photobooth",
    image: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    location: "San Diego, CA",
    rating: 4.5,
    reviews: 87,
    category: "Entertainment",
    featured: false
  }
];

const VendorListPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="wave-background py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              All Vendors
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover top-rated vendors for all your event needs - venues, catering, decorations, entertainment, and more.
            </p>
          </div>
          
          {/* Search Filters */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-300" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search vendors..." 
                  className="w-full pl-10 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold appearance-none">
                  <option value="">Category</option>
                  <option value="venue">Venue</option>
                  <option value="catering">Catering</option>
                  <option value="decoration">Decoration</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="photography">Photography</option>
                </select>
              </div>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold appearance-none">
                  <option value="">Location</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                  <option value="seattle">Seattle</option>
                  <option value="miami">Miami</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="bg-white/30 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                Price: $$$
                <span className="ml-1">×</span>
              </button>
              <button className="bg-white/30 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                Rating: 4+
                <span className="ml-1">×</span>
              </button>
              <button className="bg-white/30 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                Featured Only
                <span className="ml-1">×</span>
              </button>
              <button className="ml-auto text-white flex items-center text-sm">
                <Filter className="w-4 h-4 mr-1" />
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vendors List */}
      <div className="py-16 px-4 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-title mb-12">
            <h2>TOP</h2>
            <h3>VENDORS</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {vendorList.map((vendor, index) => (
              <div key={index} className="card-container bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {vendor.featured && <div className="featured-ribbon">Featured</div>}
                  <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium line-clamp-1">{vendor.name}</h4>
                      <span className="bg-gold/20 text-dark px-2 py-1 rounded text-xs font-medium">
                        {vendor.category}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Map className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="line-clamp-1">{vendor.location}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-gold fill-gold flex-shrink-0" />
                        <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({vendor.reviews})</span>
                      </div>
                    </div>
                    <Link to={`/vendors/${vendor.id}`} className="know-more-button w-full flex justify-center items-center">
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
      
      <Footer />
    </div>
  );
};

export default VendorListPage;
