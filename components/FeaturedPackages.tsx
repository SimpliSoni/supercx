import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { FEATURED_PACKAGES } from '../constants';

const FeaturedPackages: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary mb-8">Featured Packages</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {FEATURED_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl p-4 shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow">
               <div className="relative w-full sm:w-1/3 h-48 sm:h-auto rounded-2xl overflow-hidden shrink-0">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  <div className={`absolute bottom-3 left-3 px-3 py-1 rounded text-xs font-bold text-white ${pkg.type === 'premium' ? 'bg-primary' : 'bg-orange-400'}`}>
                    {pkg.type === 'premium' ? 'Premium' : 'Standard'}
                  </div>
               </div>

               <div className="flex flex-col justify-center flex-grow py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{pkg.title}</h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{pkg.days} Days</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                        <Star className="w-4 h-4 mr-2 text-gray-400" />
                        <span>{pkg.tags?.[0]}</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between mt-auto">
                    <div>
                        <span className="text-xs text-gray-400 block">From</span>
                        <span className="text-xl font-bold text-gray-800">{pkg.price}</span>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                        Details
                    </button>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <button className="px-8 py-3 border border-gray-300 text-gray-600 rounded-xl hover:bg-white hover:border-gray-400 transition-colors bg-white">
                View all
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;