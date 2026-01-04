
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PrincipalWelcome from './components/PrincipalWelcome';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import SchoolProfile from './components/SchoolProfile';
import Facilities from './components/Facilities';
import ContactSection from './components/ContactSection';
import TeachersSection from './components/TeachersSection';
import Achievements from './components/Achievements';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { getCurrentUser } from './lib/actions';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = await getCurrentUser();
    if (user) setIsAdminAuthenticated(true);
  };

  const renderContent = () => {
    switch (activePage) {
      case Page.HOME:
        return (
          <>
            <Hero />
            <PrincipalWelcome />
            <Features />
            <Achievements />
            <div className="py-32 bg-white relative">
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-[#0A0F1E] rounded-[80px] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,15,30,0.3)]">
                  <div className="relative z-10">
                    <span className="text-[#F3C623] font-black text-[10px] uppercase tracking-[0.5em] mb-8 block">Future is calling</span>
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
                      Wujudkan Impian <br /> 
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3C623] to-yellow-200">Di Era Digital.</span>
                    </h2>
                    <p className="text-white/50 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                      Bergabunglah bersama SMAN 2 Tompaso untuk pengalaman belajar kelas dunia dengan fasilitas teknologi terdepan.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10">
                      <button className="bg-[#F3C623] text-[#0A0F1E] px-20 py-7 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20">
                        Daftar PPDB 2026
                      </button>
                      <button 
                        onClick={() => setActivePage(Page.KONTAK)}
                        className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
                      >
                        <span className="text-xs font-black uppercase tracking-widest">Bantuan Admin</span>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F3C623] group-hover:border-[#F3C623] transition-all">
                           <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#F3C623]/5 rounded-full blur-[120px]"></div>
                  <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
                </div>
              </div>
            </div>
            <Facilities />
            <NewsSection />
          </>
        );
      case Page.PROFIL:
        return <SchoolProfile />;
      case Page.GURU:
        return <TeachersSection />;
      case Page.BERITA:
        return <NewsSection isFullPage={true} />;
      case Page.GALERI:
        return (
          <div className="py-40 bg-[#F8F9FB] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-24 text-center">
                <span className="text-[#F3C623] font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">The Visual Essence</span>
                <h1 className="text-6xl md:text-8xl font-black text-[#0A0F1E] tracking-tighter">Lensa <span className="text-gray-200">Sekolah.</span></h1>
              </div>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                  <div key={i} className="group relative overflow-hidden rounded-[40px] shadow-xl bg-white border border-gray-100 break-inside-avoid">
                     <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + (i * 100000)}?q=80&w=1000&auto=format&fit=crop`} 
                      className="w-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/id/${i+100}/800/800`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity p-10 flex flex-col justify-end">
                      <p className="text-[#F3C623] text-[10px] font-black uppercase tracking-widest mb-2">Moment 2026</p>
                      <p className="text-white font-bold text-xl leading-tight">Harmoni Belajar & Kreativitas</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case Page.KONTAK:
        return <ContactSection />;
      case Page.ADMIN:
        return isAdminAuthenticated ? (
          <AdminDashboard onLogout={() => setIsAdminAuthenticated(false)} />
        ) : (
          <AdminLogin onSuccess={() => setIsAdminAuthenticated(true)} />
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {activePage !== Page.ADMIN && (
        <Navbar 
          activePage={activePage} 
          setActivePage={(p) => {
            setActivePage(p);
            window.scrollTo(0, 0);
          }} 
        />
      )}
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {activePage !== Page.ADMIN && (
        <>
          <Footer onAdminClick={() => setActivePage(Page.ADMIN)} />
          <AIAssistant />
        </>
      )}
    </div>
  );
};

export default App;
