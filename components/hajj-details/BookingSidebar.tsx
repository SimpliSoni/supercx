'use client';

import { Phone, Mail } from 'lucide-react';

export const BookingCard = () => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-primary mb-4">Customize Your Booking</h3>

            <div className="mb-6">
                <label className="block text-xs font-medium text-gray-500 mb-2">
                    Room Sharing Type
                </label>
                <div className="relative">
                    <select className="w-full p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-secondary appearance-none cursor-pointer">
                        <option>Select Room Type</option>
                        <option>Quad Sharing</option>
                        <option>Triple Sharing</option>
                        <option>Double Sharing</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <button className="w-full py-3 bg-[#0f3d3e] hover:bg-[#0b2d2e] text-white font-medium rounded-lg text-sm transition-colors shadow-lg shadow-[#0f3d3e]/20">
                    Book This Package
                </button>
                <button className="w-full py-3 bg-white border border-[#0f3d3e] text-[#0f3d3e] hover:bg-gray-50 font-medium rounded-lg text-sm transition-colors">
                    Request Custom Quote
                </button>
            </div>
        </div>
    );
};

export const AssistanceCard = () => {
    return (
        <div className="bg-[#f2f6f9] rounded-2xl p-6 border border-gray-100">
            <h3 className="text-[#0f3d3e] font-bold mb-4 text-base">Need Assistance?</h3>

            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <div className="mt-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-0.5">Call Us</p>
                        <p className="text-sm font-medium text-gray-700">+91-78920-09800</p>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                <div className="flex items-start gap-3">
                    <div className="mt-1">
                        <Mail className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-0.5">Email Us</p>
                        <p className="text-sm font-medium text-gray-700">support@marhabahaji.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BookingSidebar = () => {
    return (
        <div className="space-y-6">
            <BookingCard />
            <AssistanceCard />
        </div>
    );
};

export default BookingSidebar;
