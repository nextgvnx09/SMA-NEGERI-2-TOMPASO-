
import React, { useState } from 'react';
import { Quote, Award, ChevronRight, Play, Loader2 } from 'lucide-react';
import { SCHOOL_ASSETS } from '../constants/assets';

const PrincipalWelcome: React.FC = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <section className="py-48 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -mr-300 -mt-300 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-32">
          
          <div className="w-full lg:w-5/12 relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#F3C623] to-yellow-500 rounded-[70px] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-1000"></div>
            
            <div className="relative h-[750px] w-full rounded-[64px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 flex items-center justify-center">
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                   <Loader2 className="h-10 w-10 text-[#F3C623] animate-spin" />
                </div>
              )}
              <img 
                src={SCHOOL_ASSETS.PRINCIPAL_PHOTO} 
                alt="Junus N M Akay" 
                onLoad={() => setIsImageLoading(false)}
                className={`w-full h-full object-cover object-[center_20%] transition-all duration-[1.5s] ease-out group-hover:scale-105 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop';
                  setIsImageLoading(false);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-50 group-hover:scale-100">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 text-white cursor-pointer hover:bg-[#F3C623] hover:text-[#0A0F1E] transition-colors">
                  <Play className="h-8 w-8 fill-current ml-1" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white p-10 rounded-[48px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-gray-100 w-[85%] text-center transform group-hover:-translate-y-4 transition-transform duration-700">
              <h4 className="text-[#0A0F1E] font-black text-3xl tracking-tighter mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Junus N M Akay, S.Pd</h4>
              <div className="flex items-center justify-center space-x-3">
                <div className="h-px w-6 bg-[#F3C623]"></div>
                <p className="text-[#F3C623] text-[10px] font-extrabold uppercase tracking-[0.4em]">Kepala SMAN 2 Tompaso</p>
                <div className="h-px w-6 bg-[#F3C623]"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="flex items-center space-x-6 mb-16">
              <span className="text-[#F3C623] text-[11px] font-extrabold uppercase tracking-[0.6em]">Pesan Nakhoda</span>
              <div className="h-px flex-grow bg-gray-100"></div>
            </div>

            <h2 className="text-6xl md:text-[95px] font-black text-[#0A0F1E] tracking-tighter leading-[0.85] mb-14" style={{ fontFamily: 'var(--font-heading)' }}>
              Membentuk <br /> 
              <span className="text-gray-200 italic font-serif font-light underline decoration-[#F3C623]/30 underline-offset-8 decoration-4">Karakter Unggul.</span>
            </h2>

            <div className="relative mb-20 pl-14">
              <Quote className="absolute top-0 left-0 h-10 w-10 text-[#F3C623]/20" />
              <p className="text-3xl md:text-5xl font-serif italic text-gray-400 leading-[1.15]" style={{ fontFamily: 'var(--font-serif)' }}>
                "Pendidikan bukan sekadar transfer ilmu, melainkan proses memanusiakan manusia agar siap menghadapi tantangan zaman."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-500 text-lg font-light leading-relaxed">
              <p>
                Selamat datang di SMAN 2 Tompaso. Kami bertekad untuk menjadikan sekolah ini sebagai rahim bagi lahirnya generasi digital yang tetap memegang teguh nilai-nilai integritas dan budaya Minahasa.
              </p>
              <p>
                Melalui sinergi antara teknologi dan empati, kami percaya setiap siswa memiliki potensi unik yang bisa kita asah bersama demi masa depan yang lebih cerah bagi Sulawesi Utara.
              </p>
            </div>

            <div className="mt-20 pt-16 border-t border-gray-50 flex flex-wrap items-center gap-12">
               <button className="group flex items-center space-x-6">
                 <div className="w-16 h-16 bg-[#0A0F1E] rounded-full flex items-center justify-center text-white group-hover:bg-[#F3C623] group-hover:text-[#0A0F1E] transition-all duration-500 shadow-xl shadow-blue-900/10 active:scale-90">
                   <ChevronRight className="h-7 w-7 transform group-hover:translate-x-1 transition-transform" />
                 </div>
                 <div className="flex flex-col text-left">
                   <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F3C623] mb-1">Kenali Lebih Dalam</span>
                   <span className="text-lg font-bold text-[#0A0F1E]">Lihat Profil Sekolah</span>
                 </div>
               </button>
               
               <div className="flex items-center space-x-5">
                 <div className="w-14 h-14 bg-gray-50 rounded-[24px] flex items-center justify-center text-[#F3C623]">
                   <Award className="h-7 w-7" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-300 mb-1">Akreditasi</span>
                   <span className="text-lg font-bold text-[#0A0F1E]">B (Baik)</span>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalWelcome;
