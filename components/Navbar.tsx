
import React, { useState, useEffect } from 'react';
import { Menu, X, Info, Loader2 } from 'lucide-react';
import { Page } from '../types';
import { SCHOOL_ASSETS } from '../constants/assets';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageState, setImageState] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', value: Page.HOME },
    { name: 'Profil', value: Page.PROFIL },
    { name: 'Guru & Staf', value: Page.GURU },
    { name: 'Berita', value: Page.BERITA },
    { name: 'Lensa', value: Page.GALERI },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
      isScrolled ? 'bg-[#0A0F1E]/95 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-4 cursor-pointer group" 
            onClick={() => setActivePage(Page.HOME)}
          >
            <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-xl shadow-black/20 p-1 border-2 border-white/10">
              {imageState === 'loading' && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                  <Loader2 className="h-5 w-5 text-[#F3C623] animate-spin" />
                </div>
              )}
              
              {imageState === 'error' ? (
                <div className="flex flex-col items-center justify-center text-[#0A0F1E] font-black leading-none bg-[#F3C623] w-full h-full">
                  <span className="text-[10px]">SMAN</span>
                  <span className="text-lg">2T</span>
                </div>
              ) : (
                <img 
                  src={SCHOOL_ASSETS.LOGO} 
                  alt="Logo SMAN 2 Tompaso" 
                  onLoad={() => setImageState('success')}
                  onError={() => setImageState('error')}
                  className={`w-full h-full object-contain rounded-full transition-opacity duration-500 ${imageState === 'success' ? 'opacity-100' : 'opacity-0'}`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-white font-black text-xl tracking-tight leading-none uppercase">SMAN 2 <span className="text-[#F3C623]">TOMPASO</span></span>
              <span className="text-[8px] text-[#F3C623] uppercase tracking-[0.4em] font-bold mt-1.5 opacity-80">Cerdas • Terampil • Bermartabat</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-10">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => setActivePage(link.value)}
                  className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 hover:text-[#F3C623] relative group ${
                    activePage === link.value ? 'text-[#F3C623]' : 'text-white/60'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#F3C623] transition-all duration-500 ${
                    activePage === link.value ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setActivePage(Page.KONTAK)}
              className="bg-[#F3C623] border border-[#F3C623]/20 text-[#0A0F1E] px-7 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 hover:bg-white hover:text-[#0A0F1E] flex items-center space-x-3 shadow-lg shadow-yellow-500/10"
            >
              <Info className="h-3.5 w-3.5" />
              <span>Portal Info</span>
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 h-screen bg-[#0A0F1E] flex flex-col justify-center items-center space-y-10 animate-in fade-in slide-in-from-top-10 duration-500">
           <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
            <X className="h-8 w-8" />
          </button>
          
          <div className="w-24 h-24 bg-white rounded-full p-1.5 mb-4 shadow-2xl flex items-center justify-center">
            <img src={SCHOOL_ASSETS.LOGO} alt="Logo Mobile" className="w-full h-full object-contain rounded-full" />
          </div>
          
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => { setActivePage(link.value); setIsOpen(false); }}
              className={`text-2xl font-black uppercase tracking-widest transition-colors ${
                activePage === link.value ? 'text-[#F3C623]' : 'text-white/40'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => { setActivePage(Page.KONTAK); setIsOpen(false); }}
            className="bg-[#F3C623] text-[#0A0F1E] px-14 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-yellow-500/20"
          >
            Hubungi Kami
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
