import { ChevronLeft, ChevronRight } from 'lucide-react';
import PackageCard from './PackageCard';

interface PackageData {
  _id: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  slug: string;
}

interface SpecialOffersProps {
  packages: PackageData[];
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ packages }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-primary">Special Offers</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500 hidden md:block">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-primary text-white hover:bg-primary/90 hidden md:block">
              <ChevronRight className="w-5 h-5" />
            </button>
            {/* Mobile Nav */}
            <div className="flex space-x-2 md:hidden">
              <button className="p-2 border rounded-md"><ChevronLeft className="w-4 h-4" /></button>
              <button className="p-2 bg-primary text-white rounded-md"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto space-x-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 pb-6 md:pb-0 hide-scrollbar snap-x">
          {packages.map((pkg) => (
            <div key={pkg._id} className="min-w-[85%] md:min-w-0 snap-center">
              <PackageCard
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                oldPrice={pkg.oldPrice}
                imageUrl={pkg.imageUrl}
                slug={pkg.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;