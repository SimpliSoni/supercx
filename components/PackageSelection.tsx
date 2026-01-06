import { Check, Star } from 'lucide-react';
import { PACKAGE_SELECTION_OPTIONS } from '@/constants';

const PackageSelection: React.FC = () => {
  return (
    <div className="bg-white relative z-20 -mt-16 md:-mt-20 rounded-t-[2.5rem] md:rounded-t-[3rem] pt-12 md:pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PACKAGE_SELECTION_OPTIONS.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">

              {/* Header with Badge Handling for Mobile Layout */}
              <div className="pt-8 px-6 md:px-8 md:pt-8 relative">
                {pkg.badge && (
                  <div className="mb-4 inline-block">
                    <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold border border-orange-100 flex items-center gap-1 shadow-sm uppercase tracking-wide">
                      <span className="text-yellow-500">👑</span> {pkg.badge}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl md:text-2xl font-serif text-[#0f3d3e] leading-tight max-w-[85%]">
                    {pkg.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[#eef4f6] flex items-center justify-center text-[#0f3d3e] shrink-0 mt-1">
                    <pkg.icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                  {pkg.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="relative h-48 mx-6 rounded-2xl overflow-hidden mb-6 bg-gray-100">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Includes List */}
              <div className="px-6 md:px-8 mb-6">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Package Includes:</h4>
                <ul className="space-y-3">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <Check className="w-5 h-5 text-[#0f3d3e] shrink-0 stroke-[2.5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spacer */}
              <div className="flex-grow"></div>

              {/* Pricing & Benefits Box */}
              <div className="bg-[#f3f5f7] p-5 mx-4 md:mx-6 rounded-2xl mb-6">
                {/* Price Row */}
                <div className="flex justify-between items-start mb-4 border-b border-gray-200/50 pb-4">
                  <div>
                    <div className="text-lg font-bold text-gray-900 leading-none mb-1">
                      {pkg.price}
                    </div>
                    {pkg.priceLabel && (
                      <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">{pkg.priceLabel} per person</div>
                    )}
                    {!pkg.priceLabel && (
                      <div className="text-[10px] font-medium text-gray-500">per person</div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">{pkg.duration}</div>
                    <div className="text-[10px] text-gray-500">{pkg.durationLabel}</div>
                  </div>
                </div>

                {/* Benefits Tags */}
                <div>
                  <h5 className="text-[11px] font-bold text-gray-900 mb-2">Key Benefits:</h5>
                  <div className="flex flex-wrap gap-2">
                    {pkg.benefits.map((benefit, idx) => (
                      <span key={idx} className="bg-white border border-gray-200 px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-600 flex items-center gap-1.5 shadow-sm">
                        <Star className="w-3 h-3 text-[#0f3d3e] fill-[#0f3d3e]" />
                        {benefit.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Button Outside Box */}
              <div className="px-4 md:px-6 pb-6 md:pb-8">
                <button className="w-full py-4 bg-[#0f3d3e] text-white rounded-xl font-bold text-sm hover:bg-[#0b2e2f] transition-all transform active:scale-[0.98] shadow-lg shadow-[#0f3d3e]/20">
                  {pkg.buttonText}
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageSelection;