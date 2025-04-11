
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Star, Map, ChevronRight, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const corporateVendors = [
  {
    name: "Corporate Convention Center",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    location: "New York, NY",
    rating: 4.9,
    reviews: 176,
    category: "Venue",
    featured: true
  },
  {
    name: "Executive Catering",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    location: "Chicago, IL",
    rating: 4.7,
    reviews: 143,
    category: "Catering",
    featured: false
  },
  {
    name: "Business Tech Solutions",
    image: "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
    location: "San Francisco, CA",
    rating: 4.8,
    reviews: 128,
    category: "Equipment",
    featured: false
  },
  {
    name: "Corporate Photography",
    image: "/public/lovable-uploads/44b8301a-d324-4fe9-9409-f891548f918d.png",
    location: "Boston, MA",
    rating: 4.6,
    reviews: 97,
    category: "Photography",
    featured: false
  },
  {
    name: "Team Building Experts",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    location: "Seattle, WA",
    rating: 4.8,
    reviews: 112,
    category: "Activities",
    featured: false
  },
  {
    name: "Conference Planners",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    location: "Austin, TX",
    rating: 4.7,
    reviews: 89,
    category: "Planning",
    featured: false
  }
];

const CorporateEventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="wave-background py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Corporate Events
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From conferences and team building to award ceremonies and product launches - find everything you need for successful corporate events.
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
                  <option value="equipment">Equipment</option>
                  <option value="photography">Photography</option>
                  <option value="activities">Activities</option>
                  <option value="planning">Planning</option>
                </select>
              </div>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold appearance-none">
                  <option value="">Event Size</option>
                  <option value="small">Small (under 50)</option>
                  <option value="medium">Medium (50-200)</option>
                  <option value="large">Large (200-500)</option>
                  <option value="xlarge">Extra Large (500+)</option>
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
            <h2>TOP CORPORATE</h2>
            <h3>VENDORS</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateVendors.map((vendor, index) => (
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
      
      {/* Corporate Events Ideas Section */}
      <div className="wave-background py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-title">
            <h2 className="text-gray-300">CORPORATE EVENT</h2>
            <h3 className="text-white">IDEAS & FORMATS</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Building className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Conferences & Conventions</h4>
              </div>
              <p className="text-gray-300">
                Organize impactful industry gatherings with expert speakers, networking opportunities, and cutting-edge presentations.
              </p>
              <Link to="/ideas/conferences" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
            
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Building className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Team Building Events</h4>
              </div>
              <p className="text-gray-300">
                Boost morale and strengthen team bonds with creative activities from adventure challenges to collaborative workshops.
              </p>
              <Link to="/ideas/team-building" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
            
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Building className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Product Launches</h4>
              </div>
              <p className="text-gray-300">
                Create buzz and excitement around your new products with memorable launch events that captivate your audience.
              </p>
              <Link to="/ideas/product-launches" className="inline-block mt-4 text-gold hover:underline">
                Explore ideas →
              </Link>
            </div>
            
            <div className="bg-dark p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Building className="text-gold w-8 h-8 mr-3" />
                <h4 className="text-white text-xl font-medium">Award Ceremonies</h4>
              </div>
              <p className="text-gray-300">
                Recognize achievements and celebrate success with elegant award ceremonies that inspire and motivate your team.
              </p>
              <Link to="/ideas/award-ceremonies" className="inline-block mt-4 text-gold hover:underline">
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

export default CorporateEventsPage;
