'use client';

import { useState, useEffect } from 'react';
import { Minus, Plus } from 'lucide-react';

interface GroupSizeSelectorProps {
    onNext: () => void;
    onBack: () => void;
}

interface CounterRowProps {
    label: string;
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    min?: number;
}

const CounterRow: React.FC<CounterRowProps> = ({ label, count, onIncrement, onDecrement, min = 0 }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
        <span className="text-gray-700 font-medium text-sm md:text-base">{label}</span>
        <div className="flex items-center gap-3">
            <button
                onClick={onDecrement}
                disabled={count <= min}
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border transition-colors ${count <= min
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                        : 'border-gray-300 text-gray-500 hover:border-[#0f3d3e] hover:text-[#0f3d3e]'
                    }`}
            >
                <Minus className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <span className="w-8 text-center font-bold text-gray-700 text-lg">{count.toString().padStart(2, '0')}</span>
            <button
                onClick={onIncrement}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:border-[#0f3d3e] hover:text-[#0f3d3e] transition-colors"
            >
                <Plus className="w-3 h-3 md:w-4 md:h-4" />
            </button>
        </div>
    </div>
);

const GroupSizeSelector: React.FC<GroupSizeSelectorProps> = ({ onNext, onBack }) => {
    const [counts, setCounts] = useState({
        adults: 1,
        childrenWithBed: 0,
        childrenWithoutBed: 0,
        infants: 0
    });

    const [total, setTotal] = useState(1);

    useEffect(() => {
        setTotal(counts.adults + counts.childrenWithBed + counts.childrenWithoutBed + counts.infants);
    }, [counts]);

    const updateCount = (type: keyof typeof counts, increment: boolean) => {
        setCounts(prev => {
            if (!increment && prev[type] === 0) return prev;
            if (!increment && type === 'adults' && prev.adults === 1) return prev; // Min 1 adult

            return {
                ...prev,
                [type]: increment ? prev[type] + 1 : prev[type] - 1
            };
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif text-[#0f3d3e] mb-3">
                    Enter Group Size
                </h2>
                <p className="text-gray-500 font-light text-sm md:text-base">
                    Specify the number of travelers in each category
                </p>
            </div>

            {/* Selection Area */}
            <div className="bg-gray-50/50 rounded-[40px] p-8 md:p-12 mb-8">
                <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-sm mb-8">
                    <CounterRow
                        label="Adults"
                        count={counts.adults}
                        onDecrement={() => updateCount('adults', false)}
                        onIncrement={() => updateCount('adults', true)}
                        min={1}
                    />
                    <CounterRow
                        label="Children (with bed)"
                        count={counts.childrenWithBed}
                        onDecrement={() => updateCount('childrenWithBed', false)}
                        onIncrement={() => updateCount('childrenWithBed', true)}
                    />
                    <CounterRow
                        label="Children (without bed)"
                        count={counts.childrenWithoutBed}
                        onDecrement={() => updateCount('childrenWithoutBed', false)}
                        onIncrement={() => updateCount('childrenWithoutBed', true)}
                    />
                    <CounterRow
                        label="Infants"
                        count={counts.infants}
                        onDecrement={() => updateCount('infants', false)}
                        onIncrement={() => updateCount('infants', true)}
                    />

                    <div className="pt-6 mt-2 flex justify-center items-center gap-2">
                        <span className="text-gray-400 font-medium">Total Group Size:</span>
                        <span className="text-2xl font-bold text-[#0f3d3e]">{total.toString().padStart(2, '0')}</span>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center max-w-2xl mx-auto">
                    <button
                        onClick={onBack}
                        className="px-12 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-bold rounded-xl transition-colors"
                    >
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

export default GroupSizeSelector;
