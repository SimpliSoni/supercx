import { WHY_CHOOSE_STATS } from '@/constants';

const WhyChooseSection: React.FC = () => {
  return (
    <section className="bg-white pb-24 pt-4 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-[#0f3d3e] mb-8 md:mb-12 leading-tight">
          Why Choose Our Umrah <br className="block md:hidden" /> Packages?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {WHY_CHOOSE_STATS.map((stat) => (
            <div key={stat.id} className={`${stat.bgColor} rounded-[1.5rem] p-6 flex items-start gap-4 transition-transform hover:-translate-y-1`}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm mt-1">
                <stat.icon className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;