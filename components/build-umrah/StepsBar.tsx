'use client';

import { Calendar, Users, FileText, Plane, Building2, Car, UserCog, Map } from 'lucide-react';

const STEPS = [
    { id: 'duration', label: 'Trip Duration', icon: Calendar },
    { id: 'group', label: 'Group Size', icon: Users },
    { id: 'visa', label: 'Visa', icon: FileText },
    { id: 'flight', label: 'Flight', icon: Plane },
    { id: 'makkah', label: 'Makkah Hotel', icon: Building2 },
    { id: 'madinah', label: 'Madinah Hotel', icon: Building2 }, // Using Building2 for both hotels for now
    { id: 'transport', label: 'Transport', icon: Car },
    { id: 'guide', label: 'Guide', icon: UserCog },
    { id: 'ziarath', label: 'Ziarath', icon: Map },
];

interface StepsBarProps {
    currentStep?: string;
}

const StepsBar: React.FC<StepsBarProps> = ({ currentStep = 'duration' }) => {
    const activeIndex = STEPS.findIndex(s => s.id === currentStep);

    return (
        <div className="bg-[#02121d] py-6 overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 min-w-[1000px]"> {/* min-w to ensure horizontal scroll on small screens */}
                <div className="flex items-center justify-between relative">
                    {/* Connecting Line */}
                    <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-700 -z-0 -translate-y-[15px]"></div>

                    {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = step.id === currentStep;
                        const isCompleted = index < activeIndex;

                        return (
                            <div key={step.id} className="flex flex-col items-center z-10 gap-2 min-w-[80px]">
                                <div
                                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${isActive || isCompleted
                                            ? 'bg-[#00c58e] border-[#00c58e] text-white'
                                            : 'bg-white border-white text-[#02121d]'
                                        }`}
                                >
                                    {isCompleted ? (
                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                    )}
                                </div>
                                <span className={`text-[10px] md:text-xs font-medium whitespace-nowrap ${isActive || isCompleted ? 'text-[#00c58e]' : 'text-gray-400'}`}>
                                    {step.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StepsBar;
