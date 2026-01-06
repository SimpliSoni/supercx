import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8 md:mb-12">Our Services</h2>
        
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col items-center justify-center p-4 md:p-8 bg-[#f9f9f9] rounded-2xl md:rounded-3xl hover:bg-orange-50/50 transition-colors cursor-pointer group aspect-square md:aspect-auto">
              <div className="mb-2 md:mb-4 text-primary group-hover:text-accent transition-colors">
                <service.icon strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="font-medium text-gray-700 text-[10px] md:text-base text-center">{service.title}</span>
            </div>
          ))}
          {/* Add extra dummy items to fill grid if needed to match 4 cols roughly for screenshot visual */}
           <div className="flex flex-col items-center justify-center p-4 md:p-8 bg-[#f9f9f9] rounded-2xl md:rounded-3xl hover:bg-orange-50/50 transition-colors cursor-pointer group aspect-square md:aspect-auto">
              <div className="mb-2 md:mb-4 text-primary group-hover:text-accent transition-colors">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <span className="font-medium text-gray-700 text-[10px] md:text-base text-center">Transport</span>
           </div>
           <div className="flex flex-col items-center justify-center p-4 md:p-8 bg-[#f9f9f9] rounded-2xl md:rounded-3xl hover:bg-orange-50/50 transition-colors cursor-pointer group aspect-square md:aspect-auto">
              <div className="mb-2 md:mb-4 text-primary group-hover:text-accent transition-colors">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <span className="font-medium text-gray-700 text-[10px] md:text-base text-center">Ziyarath</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;