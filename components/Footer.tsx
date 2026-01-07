import { Facebook, Twitter, Instagram, Linkedin, Youtube, Shield, Lock, Globe, Zap } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#000810] text-white pt-20 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 pr-0 lg:pr-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center relative overflow-hidden shrink-0">
                                <span className="font-serif text-2xl font-bold text-[#d4af37] italic relative z-10">M</span>
                                {/* Optional subtle mosque silhouette could go here if needed, keeping it simple for now */}
                            </div>
                            <span className="font-serif text-2xl font-normal text-white">
                                Marhaba <span className="italic">Haji</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <span className="w-fit px-4 py-2 rounded-full flex items-center gap-2 text-xs text-gray-300 border border-gray-700 bg-transparent">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> SSL Secure
                            </span>
                            <span className="w-fit px-4 py-2 rounded-full flex items-center gap-2 text-xs text-gray-300 border border-gray-700 bg-transparent">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Secure Payments
                            </span>
                            <span className="w-fit px-4 py-2 rounded-full flex items-center gap-2 text-xs text-gray-300 border border-gray-700 bg-transparent">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span> Global Networks
                            </span>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:pl-8">
                        <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-wide">Quick links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-wide">Visa Information</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm uppercase tracking-wide">Support & Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Our Services</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 relative">
                    {/* Social Links - Absolute aligned to bottom right in desktop, relative in mobile */}
                    <div className="flex space-x-5 mb-6 md:mb-0 md:absolute md:right-0 md:bottom-8 z-10">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-4 h-4" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                    </div>

                    <div className="text-center">
                        <p className="text-[10px] text-gray-500">c 2024 Marhaba Haji Umrah Visa Services. All rights reserved</p>
                        <p className="text-[10px] text-gray-500 mt-1">Licensed travel agency with official authorization for visa processing</p>
                        <div className="flex items-center justify-center gap-1.5 mt-3">
                            <Zap className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
                            <p className="text-[10px] text-gray-500">
                                Powered by <span className="text-gray-300">SuperCX Technologies</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;