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
    <section className="bg-orange-50/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-primary mb-2">Plan Your Umrah & Hajj the Smart Way</h2>
          <p className="text-gray-500 font-light">Visa, Hotels, Flights, Ziyarats — All in One Islamic Travel App</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <button className="bg-secondary text-white px-10 py-4 rounded-xl font-medium text-lg hover:bg-primary transition-colors w-full md:w-auto shadow-lg shadow-secondary/20">
                Start Building Your Umrah Package
            </button>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;