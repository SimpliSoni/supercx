import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlanSection from './components/PlanSection';
import ServicesSection from './components/ServicesSection';
import SpecialOffers from './components/SpecialOffers';
import TrustedSection from './components/TrustedSection';
import FeaturedPackages from './components/FeaturedPackages';
import HotelServices from './components/HotelServices';
import Testimonials from './components/Testimonials';
import GuidesSection from './components/GuidesSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// New Components
import PackageHero from './components/PackageHero';
import PackageSelection from './components/PackageSelection';
import WhyChooseSection from './components/WhyChooseSection';

function App() {
  // Simple state-based routing. Default to 'hajj' (Home) or 'umrah' (Packages)
  const [activePage, setActivePage] = useState('umrah'); // Defaulting to 'umrah' to show the requested new page

  const handleNavigation = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      <Navbar activePage={activePage} onNavigate={handleNavigation} />
      
      {activePage === 'umrah' ? (
        // Umrah Packages View (New)
        <>
          <PackageHero />
          <PackageSelection />
          <WhyChooseSection />
          {/* We can optionally reuse other sections if needed, but the screenshot implies a focused landing page. 
              I'll add the Footer which is common. */}
        </>
      ) : (
        // Hajj Packages / Home View (Original)
        <>
          <Hero />
          <PlanSection />
          <ServicesSection />
          <SpecialOffers />
          <TrustedSection />
          <FeaturedPackages />
          <HotelServices />
          <Testimonials />
          <GuidesSection />
          <FAQSection />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;