import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageHero from '@/components/PackageHero';
import PackageInfo from '@/components/hajj-details/PackageInfo';
import BookingSidebar, { BookingCard, AssistanceCard } from '@/components/hajj-details/BookingSidebar';

export default function HajjPackageDetailsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar activePage="hajj" />

            {/* Hero Section */}
            <PackageHero
                title={<>Hajj 2025 Premium <span className="font-normal italic">Package</span></>}
                subtitle="Embark on the spiritual journey of a lifetime with our carefully curated Hajj packages, designed to provide comfort, guidance, and peace of mind throughout your pilgrimage."
                backgroundImage="https://images.unsplash.com/photo-1565552684383-7182b6b47c09?q=80&w=3540&auto=format&fit=crop"
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Content Column */}
                    <div className="lg:col-span-2">
                        {/* Mobile: Booking Card appears explicitly before content */}
                        <div className="block lg:hidden mb-8">
                            <BookingCard />
                        </div>

                        <PackageInfo />

                        {/* Mobile: Assistance Card appears explicitly after content */}
                        <div className="block lg:hidden mt-8">
                            <AssistanceCard />
                        </div>
                    </div>

                    {/* Right Sidebar Column - Desktop Only */}
                    <div className="hidden lg:block lg:col-span-1">
                        <BookingSidebar />
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
