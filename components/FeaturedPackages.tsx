import { Calendar, Star } from 'lucide-react';
import { FEATURED_PACKAGES } from '@/constants';

const FeaturedPackages: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">Featured Packages</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-10">
          {FEATURED_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl p-3 md:p-4 shadow-sm flex flex-row gap-4 md:gap-6 hover:shadow-lg transition-shadow items-center md:items-stretch">
              <div className="relative w-28 h-28 md:w-1/3 md:h-auto rounded-2xl overflow-hidden shrink-0">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className={`absolute bottom-2 left-2 md:bottom-3 md:left-3 px-2 py-0.5 md:px-3 md:py-1 rounded text-[10px] md:text-xs font-bold text-white ${pkg.type === 'premium' ? 'bg-primary' : 'bg-orange-400'}`}>
                  {pkg.type === 'premium' ? 'Premium' : 'Standard'}
                </div>
              </div>

              <div className="flex flex-col justify-center flex-grow py-1 md:py-2">
                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">{pkg.title}</h3>

                <div className="space-y-1 md:space-y-2 mb-3 md:mb-6">
                  <div className="flex items-center text-gray-600 text-xs md:text-sm">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    <span>{pkg.days} Days</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-xs md:text-sm">
                    <Star className="w-3 h-3 md:w-4 md:h-4 mr-2 text-gray-400" />
                    <span>{pkg.tags?.[0]}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] md:text-xs text-gray-400 block">From</span>
                    <span className="text-sm md:text-xl font-bold text-gray-800">{pkg.price}</span>
                  </div>
                  <button className="px-4 py-1.5 md:px-6 md:py-2 bg-primary text-white rounded-lg text-xs md:text-sm font-medium hover:bg-secondary transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Third dummy item to match screenshot 3 items */}
          <div className="bg-white rounded-3xl p-3 md:p-4 shadow-sm flex flex-row gap-4 md:gap-6 hover:shadow-lg transition-shadow items-center md:items-stretch">
            <div className="relative w-28 h-28 md:w-1/3 md:h-auto rounded-2xl overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2670&auto=format&fit=crop" alt="Family Package" className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 px-2 py-0.5 md:px-3 md:py-1 rounded text-[10px] md:text-xs font-bold text-white bg-orange-700">
                Family
              </div>
            </div>

            <div className="flex flex-col justify-center flex-grow py-1 md:py-2">
              <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">Family Umrah Package</h3>

              <div className="space-y-1 md:space-y-2 mb-3 md:mb-6">
                <div className="flex items-center text-gray-600 text-xs md:text-sm">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  <span>14 Days</span>
                </div>
                <div className="flex items-center text-gray-600 text-xs md:text-sm">
                  <Star className="w-3 h-3 md:w-4 md:h-4 mr-2 text-gray-400" />
                  <span>4 Star Hotels</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] md:text-xs text-gray-400 block">From</span>
                  <span className="text-sm md:text-xl font-bold text-gray-800">₹95,000</span>
                </div>
                <button className="px-4 py-1.5 md:px-6 md:py-2 bg-primary text-white rounded-lg text-xs md:text-sm font-medium hover:bg-secondary transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 border border-gray-400 text-gray-700 rounded-xl hover:bg-white hover:border-gray-600 transition-colors bg-transparent font-medium text-sm">
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;