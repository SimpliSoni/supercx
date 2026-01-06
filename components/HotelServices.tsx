import { ChevronLeft, ChevronRight, Coffee, Star, Utensils } from 'lucide-react';
import { HOTELS } from '@/constants';

const HotelServices: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Travel Services
                    </span>
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-4xl font-serif text-primary mb-4">Complete Umrah Travel Services</h2>
                            <p className="text-gray-500 max-w-2xl">Make your pilgrimage seamless with our comprehensive travel services. From accommodation to guided tours, we&apos;ve got everything covered</p>
                        </div>
                        <div className="flex space-x-2 hidden md:flex">
                            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-lg bg-primary text-white hover:bg-primary/90">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex overflow-x-auto space-x-6 pb-8 hide-scrollbar">
                    {HOTELS.map((hotel) => (
                        <div key={hotel.id} className="min-w-[300px] md:min-w-[350px] bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                                <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                                    {hotel.rating.toFixed(1)}
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Very good</h4>
                                        <span className="text-xs text-gray-400">{hotel.reviews} reviews</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-400 block">From</span>
                                        <span className="font-bold text-gray-900">{hotel.price}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-1">{hotel.name}</h3>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-1">Premium hotel near Masjid al-Haram with best rates</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {hotel.features.map((feature, idx) => (
                                        <span key={idx} className="text-[10px] text-gray-600 bg-gray-100 px-2 py-1 rounded flex items-center">
                                            {feature.includes('Breakfast') && <Coffee className="w-3 h-3 mr-1" />}
                                            {feature.includes('5 star') && <Star className="w-3 h-3 mr-1" />}
                                            {feature.includes('Kitchen') && <Utensils className="w-3 h-3 mr-1" />}
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-primary transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotelServices;