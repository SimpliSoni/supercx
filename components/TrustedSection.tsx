import { ShieldCheck, Lock, Globe, Award, Landmark, CheckCircle, Briefcase } from 'lucide-react';

const TrustedSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <span className="px-3 py-1 border border-gray-200 rounded text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 inline-block">
              Licensed & Certified
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              Trusted by Pilgrims worldwide
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base">
              We are officially licensed and certified by leading authorities to provide you with safe, secure and reliable Umrah service
            </p>

            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 lg:mb-0">
              <div className="px-3 py-2 bg-gray-50 rounded-full text-[10px] md:text-xs font-medium text-gray-600 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-blue-500" /> SSI Secure
              </div>
              <div className="px-3 py-2 bg-gray-50 rounded-full text-[10px] md:text-xs font-medium text-gray-600 flex items-center gap-2">
                <Lock className="w-3 h-3 md:w-4 md:h-4 text-green-500" /> Secure Payments
              </div>
              <div className="px-3 py-2 bg-gray-50 rounded-full text-[10px] md:text-xs font-medium text-gray-600 flex items-center gap-2">
                <Globe className="w-3 h-3 md:w-4 md:h-4 text-purple-500" /> Global Networks
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
            {/* Card 1 */}
            <div className="bg-[#e0f2f1] p-4 md:p-6 rounded-2xl flex flex-col justify-between min-h-[120px] md:min-h-[140px]">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-xs md:text-sm">IATA Certified</h4>
                <p className="text-[10px] text-gray-500 mt-1 leading-tight">International Air Transport Association</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#e8eaf6] p-4 md:p-6 rounded-2xl flex flex-col justify-between min-h-[120px] md:min-h-[140px]">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
                <Landmark className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-xs md:text-sm">Ministry Approved</h4>
                <p className="text-[10px] text-gray-500 mt-1 leading-tight">Indian Ministry of Minority Affairs</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#eec15c] p-4 md:p-6 rounded-2xl flex flex-col justify-between min-h-[120px] md:min-h-[140px]">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-xs md:text-sm">Saudi Umrah Visa Licensed</h4>
                <p className="text-[10px] text-gray-800 mt-1 leading-tight">Ministry of Hajj and Umrah</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#799583] p-4 md:p-6 rounded-2xl flex flex-col justify-between min-h-[120px] md:min-h-[140px]">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-lime-600" />
              </div>
              <div>
                <h4 className="font-bold text-white text-xs md:text-sm">Karnataka Tourism Certified</h4>
                <p className="text-[10px] text-white/80 mt-1 leading-tight">State Government Approved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;