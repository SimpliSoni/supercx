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
import connectToDatabase from '@/lib/mongodb';
import Package from '@/models/Package';

export const dynamic = 'force-dynamic';

async function getPackages() {
    await connectToDatabase();
    const packages = await Package.find({}).sort({ createdAt: -1 }).lean();
    return packages.map((pkg: any) => ({
        _id: pkg._id.toString(),
        title: pkg.title,
        description: pkg.description,
        price: pkg.price,
        oldPrice: pkg.oldPrice,
        imageUrl: pkg.imageUrl,
        slug: pkg.slug,
    }));
}

export default async function Home() {
    const packages = await getPackages();
    return (
        <>
            <Navbar activePage="home" />
            <Hero />
            <PlanSection />
            <ServicesSection />
            <ServicesSection />
            <SpecialOffers packages={packages} />
            <TrustedSection />
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
