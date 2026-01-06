import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OFFERS } from '../constants';

const SpecialOffers: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-serif text-primary">Special Offers</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-primary text-white hover:bg-primary/90">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <div key={offer.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-4 h-64">
                 <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                 />
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">{offer.title}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{offer.description}</p>
              
              <div className="flex items-center justify-between">
                <div>
                   <span className="text-xs text-gray-400 line-through mr-2">{offer.oldPrice}</span>
                   <span className="text-lg font-bold text-gray-800 block md:inline">{offer.price}</span>
                   <span className="text-xs text-gray-400 block">From</span>
                </div>
                <button className="px-6 py-2 bg-secondary text-white rounded-lg font-medium hover:bg-primary transition-colors text-sm">
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