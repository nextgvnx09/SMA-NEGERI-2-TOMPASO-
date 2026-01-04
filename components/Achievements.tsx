
import React from 'react';
import { Trophy, Star, Medal, Target } from 'lucide-react';

const achievements = [
  {
    title: 'Juara 1 OSN Astronomi',
    level: 'Tingkat Provinsi',
    year: '2025',
    student: 'Andi Pratama',
    icon: <Star className="h-6 w-6" />,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Medali Emas FLS2N Vokal Solo',
    level: 'Tingkat Nasional',
    year: '2024',
    student: 'Siti Aminah',
    icon: <Trophy className="h-6 w-6" />,
    color: 'from-blue-400 to-indigo-600'
  },
  {
    title: 'Best Digital Innovation School',
    level: 'Sulawesi Utara',
    year: '2025',
    student: 'Tim Robotik SMAN 2',
    icon: <Target className="h-6 w-6" />,
    color: 'from-emerald-400 to-teal-600'
  },
  {
    title: 'Juara Umum O2SN Minahasa',
    level: 'Kabupaten',
    year: '2024',
    student: 'Kontingen Atletik',
    icon: <Medal className="h-6 w-6" />,
    color: 'from-pink-400 to-rose-600'
  }
];

const Achievements: React.FC = () => {
  return (
    <section className="py-32 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <span className="text-[#F3C623] font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">Hall of Fame</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0A0F1E] tracking-tighter leading-none">
              Jejak <br /> <span className="text-gray-200">Prestasi.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-light max-w-xs text-right mt-6 md:mt-0">
            Dedikasi tanpa henti melahirkan hasil yang membanggakan bagi almamater.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-10 rounded-[48px] border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#0A0F1E] group-hover:text-[#F3C623] transition-all mb-10 shadow-sm`}>
                  {item.icon}
                </div>
                
                <span className="text-[10px] font-black text-[#F3C623] uppercase tracking-[0.2em] mb-2 block">{item.level}</span>
                <h4 className="text-xl font-black text-[#0A0F1E] leading-tight mb-4 group-hover:text-[#F3C623] transition-colors">{item.title}</h4>
                
                <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Siswa</p>
                    <p className="text-sm font-bold text-[#0A0F1E]">{item.student}</p>
                  </div>
                  <span className="text-2xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
