import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OFFERS } from '@/constants';

const SpecialOffers: React.FC = () => {
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
          {OFFERS.map((offer) => (
            <div key={offer.id} className="min-w-[85%] md:min-w-0 snap-center group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-4 h-56 md:h-64">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{offer.title}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{offer.description}</p>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 line-through mr-2">{offer.oldPrice}</span>
                  <span className="text-lg font-bold text-gray-800 block md:inline">{offer.price}</span>
                  <span className="text-xs text-gray-400 block md:hidden">From</span>
                </div>
                <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors text-sm">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;