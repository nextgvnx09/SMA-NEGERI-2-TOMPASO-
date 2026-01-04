
import React from 'react';
import { Share2, MapPin, Phone, Mail, ExternalLink, Shield } from 'lucide-react';
import { SCHOOL_ASSETS } from '../constants/assets';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  const shareWebsite = () => {
    if (navigator.share) {
      navigator.share({
        title: 'SMAN 2 Tompaso Official Website',
        text: 'Cek informasi terbaru dan pendaftaran siswa baru SMAN 2 Tompaso di sini!',
        url: window.location.href,
      });
    } else {
      alert('Salin link ini: ' + window.location.href);
    }
  };

  return (
    <footer className="bg-[#050811] text-white pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 p-1.5 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white/10">
                <img src={SCHOOL_ASSETS.LOGO} alt="Logo Footer" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter leading-none">SMAN 2 <br /> <span className="text-[#F3C623]">TOMPASO</span></span>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed font-light">
              Pusat keunggulan pendidikan menengah di Minahasa. Mempersiapkan generasi digital 2026 dengan integritas dan inovasi.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={shareWebsite}
                className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#F3C623] hover:text-[#0A0F1E] transition-all"
              >
                <Share2 className="h-3 w-3" />
                <span>Bagikan Portal</span>
              </button>
              {onAdminClick && (
                <button 
                  onClick={onAdminClick}
                  className="p-2 bg-white/5 border border-white/10 rounded-xl text-white/20 hover:text-[#F3C623] transition-all"
                  title="Portal Guru"
                >
                  <Shield className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#F3C623] mb-10">Navigasi Utama</h4>
            <ul className="space-y-5 text-sm font-light text-white/40">
              {['Visi & Misi 2026', 'Kurikulum Merdeka', 'Portal Siswa', 'E-Library', 'PPDB Online'].map((link) => (
                <li key={link}><a href="#" className="hover:text-[#F3C623] transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-4 h-px bg-[#F3C623] mr-0 group-hover:mr-2 transition-all"></span>
                  {link}
                </a></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#F3C623] mb-10">Kontak Sekolah</h4>
            <ul className="space-y-6 text-sm font-light text-white/40">
              <li className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-[#F3C623] shrink-0" />
                <span className="leading-relaxed">Jl. Raya Tompaso, Kec. Tompaso, Kab. Minahasa, Sulawesi Utara</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-[#F3C623] shrink-0" />
                <span>+62 812-xxxx-xxxx</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-[#F3C623] shrink-0" />
                <span className="truncate">info@sman2tompaso.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Access Hub */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#F3C623] mb-10">Akses Cepat</h4>
            <div className="space-y-4">
              <a href="#" className="block p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#F3C623]/30 transition-all group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase">Lapor Sekolah</span>
                  <ExternalLink className="h-3 w-3 text-[#F3C623]" />
                </div>
              </a>
              <a href="#" className="block p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#F3C623]/30 transition-all group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase">Cek Kelulusan</span>
                  <ExternalLink className="h-3 w-3 text-[#F3C623]" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[9px] text-white/20 font-bold uppercase tracking-[0.4em]">
          <p>© 2026 SMAN 2 TOMPASO. DIGITAL INFRASTRUCTURE BY VISION 2026.</p>
          <div className="flex space-x-10">
            <span>Powered by Open-Web</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
