
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, Map, Calendar, Clock, Users, DollarSign, Mail, Phone, ChevronRight, Globe } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Sample vendor data - in a real app, this would come from an API
const vendorData = {
  'hilton-birthday-suite': {
    name: "Hilton Birthday Suite",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    location: "Seattle, WA",
    rating: 4.8,
    reviews: 126,
    category: "Venue",
    description: "The Hilton Birthday Suite offers an elegant, versatile space for hosting memorable birthday celebrations. With customizable packages and professional staff, we ensure your special day is everything you dreamed of and more.",
    capacity: "50-200 guests",
    price: "$1,000 - $5,000",
    availableDates: "All year round",
    amenities: ["Catering options", "Decoration services", "Sound system", "Lighting", "Parking"],
    phone: "+1 (206) 555-1234",
    email: "events@hiltonseattle.com",
    website: "https://www.hilton.com/en/events/",
    additionalImages: [
      "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
      "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
      "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png"
    ]
  },
  'grand-wedding-palace': {
    name: "Grand Wedding Palace",
    image: "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
    location: "Los Angeles, CA",
    rating: 4.9,
    reviews: 187,
    category: "Venue",
    description: "Grand Wedding Palace is a luxurious venue perfect for dream weddings. Our elegant ballrooms, exquisite gardens, and personalized service create an unforgettable experience for couples and their guests.",
    capacity: "100-500 guests",
    price: "$5,000 - $25,000",
    availableDates: "All year round",
    amenities: ["In-house catering", "Decoration packages", "Bridal suite", "Valet parking", "Professional staff"],
    phone: "+1 (310) 555-7890",
    email: "bookings@grandweddingpalace.com",
    website: "https://www.grandweddingpalace.com",
    additionalImages: [
      "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
      "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
      "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png"
    ]
  },
  'little-oasis-venue': {
    name: "Little Oasis Venue",
    image: "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
    location: "Portland, OR",
    rating: 4.8,
    reviews: 92,
    category: "Venue",
    description: "Little Oasis is a charming, intimate venue perfect for baby showers. Our space provides a warm, welcoming atmosphere with customizable decoration options to match your theme.",
    capacity: "20-80 guests",
    price: "$500 - $2,000",
    availableDates: "All year round",
    amenities: ["Catering options", "Decoration packages", "Baby-friendly facilities", "Ample parking", "Photography services"],
    phone: "+1 (503) 555-4321",
    email: "info@littleoasisvenue.com",
    website: "https://www.littleoasisvenue.com",
    additionalImages: [
      "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
      "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png",
      "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png"
    ]
  },
  'corporate-convention-center': {
    name: "Corporate Convention Center",
    image: "/public/lovable-uploads/a17ba88f-5fe8-4d39-9746-482daee65998.png",
    location: "New York, NY",
    rating: 4.9,
    reviews: 176,
    category: "Venue",
    description: "Our state-of-the-art convention center offers versatile spaces for all types of corporate events, from small meetings to large conferences. With cutting-edge technology and professional staff, we ensure your event runs smoothly.",
    capacity: "50-1000 guests",
    price: "$3,000 - $50,000",
    availableDates: "All year round",
    amenities: ["Advanced AV equipment", "Corporate catering", "Business center", "Breakout rooms", "High-speed internet"],
    phone: "+1 (212) 555-6789",
    email: "events@corporateconvention.com",
    website: "https://www.corporateconvention.com",
    additionalImages: [
      "/public/lovable-uploads/e93e382d-7f97-4dfa-8be2-a13661b7854e.png",
      "/public/lovable-uploads/ecb22880-5740-4c43-8e1e-3bdcf598948c.png",
      "/public/lovable-uploads/7e5e654a-27a5-4b5e-98ef-be13caa5597c.png"
    ]
  }
};

const VendorDetail = () => {
  const { vendorId } = useParams();
  const vendor = vendorData[vendorId as keyof typeof vendorData];
  
  if (!vendor) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Vendor Not Found</h1>
          <p className="mb-8">The vendor you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="action-button">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-cream py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={vendor.image} 
                  alt={vendor.name} 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                {vendor.additionalImages.map((img, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={img} 
                      alt={`${vendor.name} ${index + 1}`} 
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                <h1 className="text-2xl font-bold mb-2">{vendor.name}</h1>
                <div className="flex items-center mb-4">
                  <span className="bg-gold/20 text-dark px-2 py-1 rounded text-xs font-medium">
                    {vendor.category}
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Map className="w-4 h-4 mr-2" />
                  <span>{vendor.location}</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="ml-1 text-sm font-medium">{vendor.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({vendor.reviews} reviews)</span>
                </div>
                
                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium">Capacity</h4>
                      <p className="text-sm text-gray-600">{vendor.capacity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium">Price Range</h4>
                      <p className="text-sm text-gray-600">{vendor.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium">Availability</h4>
                      <p className="text-sm text-gray-600">{vendor.availableDates}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Button className="bg-dark hover:bg-dark/80 text-white w-full flex items-center justify-center py-2">
                    REQUEST INFORMATION <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-dark text-dark hover:bg-dark/10 w-full flex items-center justify-center py-2">
                    BOOK A MEETING <Calendar className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">About</h2>
                  <p className="text-gray-700 mb-8">{vendor.description}</p>
                  
                  <h3 className="text-lg font-bold mb-3">Amenities</h3>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {vendor.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-dark rounded-full mr-2"></span>
                        <span className="text-sm">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Contact</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium">Phone</h4>
                        <p className="text-sm text-gray-600">{vendor.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium">Email</h4>
                        <p className="text-sm text-gray-600">{vendor.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 text-gray-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium">Website</h4>
                        <a href={vendor.website} className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          {vendor.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default VendorDetail;
