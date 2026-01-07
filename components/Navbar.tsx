'use client';

import { useState } from 'react';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

interface NavbarProps {
  activePage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ activePage = 'hajj' }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Map page IDs to routes
  const getRoute = (pageId: string) => {
    if (pageId === 'home') return '/';
    if (pageId === 'umrah') return '/umrah';
    if (pageId === 'hajj') return '/hajj';
    return '#';
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="w-12 h-12 rounded-full border-2 border-accent/80 flex items-center justify-center relative overflow-hidden group">
              <span className="font-serif text-3xl font-bold text-accent italic relative z-10">M</span>
              <div className="absolute top-0 right-0 text-accent/50">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = activePage === link.id;
              const route = getRoute(link.id);

              if (route === '#') {
                return (
                  <span
                    key={link.name}
                    className={`text-sm font-medium transition-all px-4 py-2 rounded-full cursor-pointer ${isActive
                      ? 'bg-white text-primary font-bold shadow-lg'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {link.name}
                  </span>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={route}
                  className={`text-sm font-medium transition-all px-4 py-2 rounded-full cursor-pointer ${isActive
                    ? 'bg-white text-primary font-bold shadow-lg'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center gap-2 px-5 py-2.5 border border-white/30 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all backdrop-blur-sm">
              <User className="w-4 h-4" />
              <span>User Name</span>
            </button>
            <button className="w-11 h-11 flex items-center justify-center border border-white/30 rounded-full text-white hover:bg-white/10 transition-all backdrop-blur-sm relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#02121d]/95 backdrop-blur-xl absolute w-full border-t border-white/10">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = activePage === link.id;
              const route = getRoute(link.id);

              if (route === '#') {
                return (
                  <span
                    key={link.name}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-xl cursor-pointer ${isActive ? 'bg-white text-primary' : 'text-gray-200 hover:bg-white/10'
                      }`}
                  >
                    {link.name}
                  </span>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={route}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-xl ${isActive ? 'bg-white text-primary' : 'text-gray-200 hover:bg-white/10'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-6 flex flex-col space-y-3 px-2">
              <button className="flex items-center justify-center gap-2 px-5 py-3 border border-white/30 rounded-xl text-base font-medium text-white">
                <User className="w-5 h-5" />
                <span>User Name</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;