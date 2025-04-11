
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FastBookingVenues from '@/components/FastBookingVenues';
import FeaturedVendors from '@/components/FeaturedVendors';
import ExploreByCategory from '@/components/ExploreByCategory';
import AboutLetsGala from '@/components/AboutLetsGala';
import TopPlanners from '@/components/TopPlanners';
import VendorCategories from '@/components/VendorCategories';
import OurWorkInAction from '@/components/OurWorkInAction';
import Reviews from '@/components/Reviews';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FastBookingVenues />
      <FeaturedVendors />
      <ExploreByCategory />
      <AboutLetsGala />
      <TopPlanners />
      <VendorCategories />
      <OurWorkInAction />
      <Reviews />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
