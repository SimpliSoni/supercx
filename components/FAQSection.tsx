import React, { useState } from 'react';
import { Plus, Minus, X } from 'lucide-react';
import { FAQS } from '../constants';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-primary mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-500 mb-12">Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.</p>

        <div className="space-y-4">
            {FAQS.map((faq, index) => (
                <div key={faq.id} className="border-b border-gray-100 pb-4">
                    <button 
                        className="w-full flex justify-between items-start text-left py-4 focus:outline-none group"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span className="font-medium text-gray-900 pr-8 group-hover:text-primary transition-colors">{faq.question}</span>
                        <span className="text-gray-400 flex-shrink-0 mt-1">
                            {openIndex === index ? <X className="w-5 h-5" /> : <Minus className="w-5 h-5" />}
                        </span>
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {faq.answer || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;