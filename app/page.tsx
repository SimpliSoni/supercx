import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PlanSection from '@/components/PlanSection';
import ServicesSection from '@/components/ServicesSection';
import SpecialOffers from '@/components/SpecialOffers';
import TrustedSection from '@/components/TrustedSection';
import FeaturedPackages from '@/components/FeaturedPackages';
import HotelServices from '@/components/HotelServices';
import Testimonials from '@/components/Testimonials';
import GuidesSection from '@/components/GuidesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navbar activePage="home" />
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
            <Footer />
        </>
    );
}
