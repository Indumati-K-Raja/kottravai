import React from 'react';
import Hero from '../components/home/Hero';
import WhyKottravai from '../components/home/WhyKottravai';
import CraftingHubs from '../components/home/CraftingHubs';
import Testimonials from '../components/home/Testimonials';
import FirstPurchase from '../components/home/FirstPurchase';
import OurMovement from '../components/home/OurMovement';
import CoveredSection from '../components/home/CoveredSection';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyKottravai />
      <OurMovement />
      <CraftingHubs />
      <Testimonials />
      <FirstPurchase />
      <CoveredSection />
      <CTA />
    </div>
  );
};

export default Home;