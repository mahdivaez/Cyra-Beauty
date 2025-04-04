import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import StickyBooking from '@/components/StickyBooking';
import ScrollComponent from '@/components/ScrollComponent';
import Banner from '@/components/Banner';
import FindUsFullPage from '@/components/FindUsFullPage';
import Gallery from '@/components/Gallery';
import VideoIntro from '@/components/VideoIntro';
import TeamSection from '@/components/TeamSection';
import CustomVelocityScroll from '@/components/CustomVelocityScroll';
import CustomVelocityScroll2 from '@/components/CustomVelocityScroll2';




const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Banner />
      <Hero/>
      <VideoIntro/>
      <CustomVelocityScroll2/>

      <ScrollComponent />
    
      <Services />
      <CustomVelocityScroll/>

      <About />
      <Gallery/>
 
      <Testimonials />
      <TeamSection/>
      <Booking />
      <FindUsFullPage/>
      {/* <FindUs/> */}
      <Footer />
      <StickyBooking />
    </div>
  );
};

export default Index;
