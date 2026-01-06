import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Shield, Lock, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021315] text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                    <span className="font-serif text-2xl font-bold tracking-wider text-white">
                        <span className="text-accent">Marhaba</span> Haji
                    </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                
                <div className="flex gap-2">
                    <span className="bg-[#0a2325] px-3 py-1.5 rounded flex items-center gap-2 text-[10px] text-gray-400 border border-white/10">
                        <Shield className="w-3 h-3 text-green-500" /> SSL Secure
                    </span>
                    <span className="bg-[#0a2325] px-3 py-1.5 rounded flex items-center gap-2 text-[10px] text-gray-400 border border-white/10">
                        <Lock className="w-3 h-3 text-green-500" /> Secure Payments
                    </span>
                    <span className="bg-[#0a2325] px-3 py-1.5 rounded flex items-center gap-2 text-[10px] text-gray-400 border border-white/10">
                        <Globe className="w-3 h-3 text-green-500" /> Global Networks
                    </span>
                </div>
            </div>

            {/* Links Columns */}
            <div>
                <h4 className="font-bold text-white mb-6">Quick links</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-white mb-6">Visa Information</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-white mb-6">Support & Legal</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Our Services</a></li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
                <p className="text-[10px] text-gray-500">© 2024 Marhaba Haji Umrah Visa Services. All rights reserved</p>
                <p className="text-[10px] text-gray-600 mt-1">Licensed travel agency with official authorization for visa processing</p>
                <p className="text-[10px] text-gray-600 mt-1 flex items-center justify-center md:justify-start gap-1">
                    Powered by <span className="text-green-500">SuperCX Technologies</span>
                </p>
            </div>

            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;