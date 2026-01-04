
import React from 'react';
import { ArrowRight, Globe, Sparkles } from 'lucide-react';
import { SCHOOL_ASSETS } from '../constants/assets';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1E]">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center scale-110 opacity-30 mix-blend-overlay transition-transform duration-[10s] hover:scale-100" 
        style={{ backgroundImage: `url('${SCHOOL_ASSETS.HERO_BUILDING}')` }}
      ></div>
      
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#F3C623]/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[130px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 relative z-10 w-full pt-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-3 rounded-full mb-10 animate-reveal shadow-2xl">
            <Sparkles className="h-4 w-4 text-[#F3C623] animate-pulse" />
            <span className="text-[#F3C623] text-[10px] font-extrabold tracking-[0.4em] uppercase">SMAN 2 TOMPASO • VISION 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-black text-white leading-[0.85] mb-10 tracking-tighter opacity-0 animate-reveal delay-200" style={{ fontFamily: 'var(--font-heading)' }}>
            STRATEGI <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3C623] via-yellow-200 to-white italic font-serif font-light">MASA DEPAN.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/50 mb-14 leading-relaxed max-w-2xl font-light tracking-wide opacity-0 animate-reveal delay-400">
            Mencetak pemimpin yang cerdas teknologi dan teguh dalam integritas. Selamat datang di revolusi pendidikan Tompaso.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 opacity-0 animate-reveal delay-600">
            <button className="group w-full sm:w-auto bg-[#F3C623] text-[#0A0F1E] px-12 py-6 rounded-3xl font-extrabold text-sm uppercase tracking-widest hover:bg-white transition-all duration-500 shadow-[0_20px_50px_rgba(243,198,35,0.2)] flex items-center justify-center space-x-3 active:scale-95">
              <span>Registrasi PPDB</span>
              <div className="bg-[#0A0F1E] p-1 rounded-full group-hover:bg-[#F3C623] transition-colors">
                <ArrowRight className="h-4 w-4 text-white group-hover:text-[#0A0F1E] group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <button className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-6 rounded-3xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3 active:scale-95">
              <Globe className="h-5 w-5 text-[#F3C623] animate-spin-slow" style={{ animationDuration: '10s' }} />
              <span>Virtual Tour 360°</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:flex items-center space-x-12 px-12 py-8 bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/10 opacity-0 animate-reveal delay-600">
        <div className="text-center group cursor-default">
          <p className="text-[#F3C623] text-4xl font-black group-hover:scale-110 transition-transform" style={{ fontFamily: 'var(--font-heading)' }}>B</p>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Akreditasi</p>
        </div>
        <div className="h-10 w-px bg-white/10"></div>
        <div className="text-center group cursor-default">
          <p className="text-white text-4xl font-black group-hover:scale-110 transition-transform" style={{ fontFamily: 'var(--font-heading)' }}>24+</p>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Ekskul</p>
        </div>
        <div className="h-10 w-px bg-white/10"></div>
        <div className="text-center group cursor-default">
          <p className="text-white text-4xl font-black group-hover:scale-110 transition-transform" style={{ fontFamily: 'var(--font-heading)' }}>100%</p>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Digital Hub</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
