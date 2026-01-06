import React from 'react';
import { Globe, ChevronDown, CheckCircle2, ShieldCheck, Banknote, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      
      {/* Top Section with Image */}
      <div className="relative min-h-[850px] flex flex-col items-center pt-32 lg:pt-40 pb-48 overflow-hidden">
        
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
            style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=2670&auto=format&fit=crop")',
            }}
        ></div>
        
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2e2e]/80 via-[#0a1f20]/60 to-[#02121d] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#02121d] via-transparent to-transparent opacity-90"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-5 py-1.5 bg-[#f5f1e6] rounded-full text-[11px] font-bold text-gray-800 uppercase tracking-widest shadow-lg border border-white/50">
                99% Visa Approval Rate
            </span>
            <span className="px-5 py-1.5 bg-[#f5f1e6] rounded-full text-[11px] font-bold text-gray-800 uppercase tracking-widest shadow-lg border border-white/50">
                2-4 Days Processing
            </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-2xl">
            Apply for your Umrah Visa <br />
            <span className="font-normal block mt-2">Online</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-3xl mx-auto text-gray-200 text-base md:text-lg mb-12 font-light leading-relaxed drop-shadow-md">
            Start your sacred journey to Mecca and Medina. Fast, Secure and hassle-free Umrah visa 
            processing with guaranteed approval and expert support
            </p>

        </div>

        {/* Bottom Curve (Wave) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0">
             <svg 
                className="relative block w-full h-[80px] md:h-[120px]" 
                data-name="Layer 1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
            >
                <path 
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                    fill="none" // Keeping it custom logic via simple curve below instead of complex path
                ></path>
                {/* Simple Convex Curve */}
                 <path d="M0,60 C400,150 800,150 1200,60 L1200,120 L0,120 Z" fill="#02121d"></path>
            </svg>
        </div>
      </div>

      {/* Floating Action Bar Container */}
      <div className="relative z-20 -mt-24 md:-mt-28 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-3 shadow-2xl shadow-black/30 flex flex-col md:flex-row items-center gap-2 md:gap-0">
            
            {/* Left: Price & Badges */}
            <div className="w-full md:w-[35%] px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-start">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-1">Starting from</span>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">₹ 1</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase">PER PERSON - ALL INCLUSIVE</span>
                </div>
                <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#448cef] bg-[#eef6ff] px-2 py-1 rounded-full border border-[#448cef]/20">
                        <ShieldCheck className="w-3 h-3" /> Secure SSI
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#448cef] bg-[#eef6ff] px-2 py-1 rounded-full border border-[#448cef]/20">
                        <Shield className="w-3 h-3" /> No Hidden Fees
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#448cef] bg-[#eef6ff] px-2 py-1 rounded-full border border-[#448cef]/20">
                        <Banknote className="w-3 h-3" /> Money Back
                    </span>
                </div>
            </div>

            {/* Middle: Nationality */}
            <div className="w-full md:w-[30%] px-6 py-3 flex items-center justify-between border-b md:border-b-0 md:border-r border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors rounded-xl md:rounded-none">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                        <Globe className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">Your Nationality</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* Right: Buttons */}
            <div className="w-full md:w-[35%] pl-2 pr-2 py-2 flex gap-3">
                <button className="flex-1 bg-primary hover:bg-[#0b2e2f] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-primary/30 transition-all transform hover:scale-[1.02]">
                    Apply Now - ₹1
                </button>
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-4 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all">
                    Chat On Whatsapp
                </button>
            </div>
        </div>
      </div>

      {/* Stats Section (Dark Footer) */}
      <div className="bg-[#02121d] pt-20 pb-16">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-serif text-[#d4af37] font-bold mb-2">1,000+</div>
                    <div className="text-sm text-white font-medium">Visas Processed</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-serif text-[#d4af37] font-bold mb-2">99%</div>
                    <div className="text-sm text-white font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-serif text-[#d4af37] font-bold mb-2">7 Days</div>
                    <div className="text-sm text-white font-medium">Support Available</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-serif text-[#d4af37] font-bold mb-2">2 - 4</div>
                    <div className="text-sm text-white font-medium">Days Processing</div>
                </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Hero;