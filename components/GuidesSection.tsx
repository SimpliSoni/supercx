import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GUIDES } from '../constants';

const GuidesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary mb-12">Guides & Resources</h2>

        <div className="flex overflow-x-auto space-x-6 pb-8 hide-scrollbar">
            {GUIDES.map((guide) => (
                <div key={guide.id} className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48">
                        <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                        <p className="text-sm text-gray-500 mb-6">{guide.description}</p>
                        
                        <a href="#" className="inline-flex items-center text-primary font-medium hover:text-secondary">
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            ))}
        </div>

        <div className="flex justify-center mt-8">
            <button className="px-8 py-3 border border-gray-400 text-gray-700 rounded-xl hover:bg-white hover:border-gray-600 transition-colors">
                View all
            </button>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;