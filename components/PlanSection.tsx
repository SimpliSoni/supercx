import React from 'react';
import { Calendar, CreditCard, Ticket, Building } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Step 1',
    subtitle: 'Choose Dates',
    icon: Calendar,
  },
  {
    id: 2,
    title: 'Step 2',
    subtitle: 'Add Visa, Flights, Hotels',
    icon: Ticket,
  },
  {
    id: 3,
    title: 'Step 3',
    subtitle: 'Add Ziyarats & Transport',
    icon: Building,
  },
  {
    id: 4,
    title: 'Step 4',
    subtitle: 'Checkout & Pay',
    icon: CreditCard,
  },
];

const PlanSection: React.FC = () => {
  return (
    <section className="bg-[#fcf3eb] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-2 leading-tight">Plan Your Umrah & <br className="md:hidden"/> Hajj the Smart Way</h2>
          <p className="text-gray-500 font-light text-sm md:text-base">Visa, Hotels, Flights, Ziyarats — All in One Islamic Travel App</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-secondary">
                <step.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-xl md:text-3xl font-serif text-gray-800 mb-1 md:mb-2">{step.title}</h3>
              <p className="text-xs md:text-base text-gray-500">{step.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium text-sm md:text-lg hover:bg-secondary transition-colors w-full md:w-auto shadow-lg shadow-primary/20">
                Start Building Your Umrah Package
            </button>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;