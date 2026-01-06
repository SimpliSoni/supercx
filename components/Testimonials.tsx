import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
            <div>
                <h2 className="text-4xl font-serif mb-4">What client says</h2>
                <p className="text-gray-400 max-w-xl font-light">In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo</p>
            </div>
            <div className="flex space-x-2">
                <button className="p-2 rounded-lg bg-white text-primary hover:bg-gray-200 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg bg-white text-primary hover:bg-gray-200 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="bg-[#e8f5e9] text-gray-800 p-8 rounded-3xl relative">
                    <div className="flex items-center mb-6">
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <h4 className="font-bold text-sm">{testimonial.name}</h4>
                            <p className="text-xs text-gray-500">{testimonial.role} of <span className={testimonial.companyColor}>{testimonial.company}</span></p>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600 mb-8 italic">
                        {testimonial.text}
                    </p>
                    
                    {/* Mock Logo Text - Ideally would be SVGs */}
                    <div className={`font-bold text-xl ${testimonial.companyColor}`}>
                        {testimonial.company === 'Youtube' ? 'YouTube' : testimonial.company}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;