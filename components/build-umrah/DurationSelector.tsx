'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const DURATION_OPTIONS = [3, 5, 7, 10, 15];

interface DurationSelectorProps {
    onNext: () => void;
}

const DurationSelector: React.FC<DurationSelectorProps> = ({ onNext }) => {
    const [selectedDuration, setSelectedDuration] = useState<number | 'custom'>(3);
    const [customDays, setCustomDays] = useState(1);

    const handleCustomDecrement = () => {
        if (customDays > 1) setCustomDays(customDays - 1);
        setSelectedDuration('custom');
    };

    const handleCustomIncrement = () => {
        setCustomDays(customDays + 1);
        setSelectedDuration('custom');
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif text-[#0f3d3e] mb-3">
                    Select Trip Duration
                </h2>
                <p className="text-gray-500 font-light text-sm md:text-base">
                    How many days do you want your Umrah trip to be
                </p>
            </div>

            {/* Selection Area */}
            <div className="bg-gray-50/50 rounded-[40px] p-8 md:p-12 mb-8">
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {DURATION_OPTIONS.map((days) => (
                        <button
                            key={days}
                            onClick={() => setSelectedDuration(days)}
                            className={`px-8 py-3 rounded-xl text-base font-bold transition-all shadow-sm ${selectedDuration === days
                                ? 'bg-[#00c58e] text-white shadow-md transform scale-105'
                                : 'bg-white text-gray-700 border border-gray-100 hover:border-[#00c58e] hover:text-[#00c58e]'
                                }`}
                        >
                            {days} days
                        </button>
                    ))}
                </div>

                <div className="text-center text-sm text-gray-500 mb-4">Or enter number of days</div>

                <div className="flex justify-center mb-12">
                    <div className={`flex items-center bg-white border rounded-xl overflow-hidden p-1 ${selectedDuration === 'custom' ? 'border-[#00c58e] shadow-sm' : 'border-gray-200'}`}>
                        <button
                            onClick={handleCustomDecrement}
                            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#0f3d3e] hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <div className="px-6 py-2 text-sm font-medium text-gray-500 min-w-[120px] text-center">
                            {selectedDuration === 'custom' ? `${customDays} days` : 'Custom days'}
                        </div>
                        <button
                            onClick={handleCustomIncrement}
                            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#0f3d3e] hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Quote Box */}
                <div className="border border-[#d4af37] bg-[#fffcf5] rounded-xl p-4 md:p-6 text-center max-w-2xl mx-auto mb-12">
                    <p className="text-[#b98d18] font-medium text-sm md:text-base italic">
                        "Did you know? Your Umrah journey can be fully customized for your family's needs."
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center max-w-2xl mx-auto">
                    <button className="px-12 py-3 bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold rounded-xl transition-colors">
                        Back
                    </button>
                    <button
                        onClick={onNext}
                        className="px-12 py-3 bg-[#0f3d3e] hover:bg-[#0b2d2e] text-white font-bold rounded-xl shadow-lg shadow-[#0f3d3e]/20 transition-all transform hover:-translate-y-0.5"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DurationSelector;
