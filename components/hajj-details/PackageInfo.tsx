'use client';

import { useState } from 'react';
import { Clock, Calendar, MapPin, Wallet, Utensils } from 'lucide-react';

const TABS = ['Overview', 'Hotels', 'Itinerary', 'Activities', 'Pricing', 'Terms'];

const PackageInfo = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <div>
            {/* Tabs */}
            <div className="bg-white rounded-full px-2 py-2 mb-8 shadow-sm border border-gray-100 hidden md:inline-flex w-full">
                <div className="flex w-full justify-between items-center px-4">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab
                                ? 'bg-[#0f2e2e] text-white shadow-md'
                                : 'text-gray-500 hover:text-[#0f2e2e]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Tabs - Wrapping */}
            <div className="md:hidden mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-xs font-medium border transition-all ${activeTab === tab
                                ? 'bg-[#0f2e2e] text-white border-[#0f2e2e]'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-[#0f2e2e] hover:text-[#0f2e2e]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="mb-10 min-h-[400px]">
                {activeTab === 'Overview' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl md:text-3xl font-serif text-[#0f3d3e] mb-4">
                            Hajj 2025 Premium Package
                        </h2>
                        <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed mb-6">
                            Experience a premium Hajj journey with top hotels, guided rituals, and all-inclusive services.
                        </p>

                        {/* Info Pills */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span className="text-xs font-medium text-gray-600">25 Days / 24 Nights</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-xs font-medium text-gray-600">6/15/2025</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-xs font-medium text-gray-600">Makkah & Madinah</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
                                <Wallet className="w-4 h-4 text-gray-400" />
                                <span className="text-xs font-medium text-gray-600">₹450,000</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
                                <Utensils className="w-4 h-4 text-gray-400" />
                                <span className="text-xs font-medium text-gray-600">Full-board</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gray-100 mb-8"></div>

                        {/* Inclusions & Exclusions */}
                        <div>
                            <h3 className="text-[#0f3d3e] font-bold mb-6 text-lg">Inclusions & Exclusions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#f8fbfb] p-8 rounded-2xl border border-gray-50">
                                {/* Inclusions */}
                                <div>
                                    <h4 className="font-bold text-gray-700 mb-4 text-sm">Inclusions:</h4>
                                    <ul className="space-y-3">
                                        {['5 Star Hotels', 'Direct Flights', 'All Meals', 'Visa Processing', 'Local Transport'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* More Inclusions (as per image layout) */}
                                <div>
                                    <h4 className="font-bold text-gray-700 mb-4 text-sm">Inclusions (Additional):</h4>
                                    <ul className="space-y-3">
                                        {['Ziyarat Tours', 'Religious Guide', 'A/C Tents in Mina', 'Welcome Kit', '24/7 Support'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-gray-400 text-xs italic">
                            * Terms and conditions apply. Prices may vary based on exchange rates.
                        </div>
                    </div>
                )}

                {activeTab === 'Hotels' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl md:text-3xl font-serif text-[#0f3d3e] mb-8">
                            Hotels
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Makkah Hotel Card */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Makkah Hotel</h4>
                                    <h3 className="text-xl font-bold text-[#0f3d3e]">Swissotel Makkah</h3>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                        WiFi
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                        Breakfast
                                    </div>
                                </div>
                            </div>

                            {/* Madinah Hotel Card */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Madinah Hotel</h4>
                                    <h3 className="text-xl font-bold text-[#0f3d3e]">Pullman Zamzam Madina</h3>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                        WiFi
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                        Breakfast
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Itinerary' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl md:text-3xl font-serif text-[#0f3d3e] mb-4">
                            Itinerary
                        </h2>
                        <p className="text-gray-400 font-light text-sm">
                            No itinerary available.
                        </p>
                    </div>
                )}

                {activeTab === 'Activities' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl md:text-3xl font-serif text-[#0f3d3e] mb-4">
                            Activities
                        </h2>
                        <p className="text-gray-400 font-light text-sm">
                            No activities listed.
                        </p>
                    </div>
                )}

                {activeTab === 'Pricing' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl md:text-3xl font-serif text-[#0f3d3e] mb-4">
                            Pricing
                        </h2>
                        <p className="text-gray-400 font-light text-sm">
                            No pricing data.
                        </p>
                    </div>
                )}

                {activeTab === 'Terms' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-3xl md:text-3xl font-serif text-[#0f3d3e] mb-4">
                            Terms & Conditions
                        </h2>
                        <p className="text-gray-400 font-light text-sm">
                            No terms specified.
                        </p>
                    </div>
                )}

                {/* Placeholder for other tabs */}
                {!['Overview', 'Hotels', 'Itinerary', 'Activities', 'Pricing', 'Terms'].includes(activeTab) && (
                    <div className="py-12 text-center text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        <p>Content for {activeTab} will be available soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PackageInfo;
