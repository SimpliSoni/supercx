import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary mb-12">Our Services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-3xl hover:bg-orange-50/50 transition-colors cursor-pointer group">
              <div className="mb-4 text-primary group-hover:text-accent transition-colors">
                <service.icon strokeWidth={1.5} className="w-8 h-8" />
              </div>
              <span className="font-medium text-gray-700">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;