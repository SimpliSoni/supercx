import Navbar from '@/components/Navbar';
import PackageHero from '@/components/PackageHero';
import PackageSelection from '@/components/PackageSelection';
import WhyChooseSection from '@/components/WhyChooseSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navbar activePage="umrah" />
            <PackageHero />
            <PackageSelection />
            <WhyChooseSection />
            <Footer />
        </>
    );
}
