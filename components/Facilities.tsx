
import React from 'react';
import { BookOpen, FlaskConical, Monitor, Trophy, Music, Coffee } from 'lucide-react';

const facilities = [
  {
    title: 'Digital Library',
    desc: 'Akses ribuan literatur digital dan koleksi fisik dalam ruang baca yang tenang.',
    icon: <BookOpen className="h-7 w-7" />,
  },
  {
    title: 'Advanced Labs',
    desc: 'Laboratorium sains dengan perlengkapan standar industri untuk riset siswa.',
    icon: <FlaskConical className="h-7 w-7" />,
  },
  {
    title: 'IT Hub Center',
    desc: 'Fasilitas komputasi tinggi untuk pengembangan software dan desain kreatif.',
    icon: <Monitor className="h-7 w-7" />,
  },
  {
    title: 'Sport Arena',
    desc: 'Kompleks olahraga terpadu untuk basket, voli, dan aktivitas atletik.',
    icon: <Trophy className="h-7 w-7" />,
  },
  {
    title: 'Amphitheater',
    desc: 'Aula serbaguna megah untuk pertunjukan seni dan konferensi resmi.',
    icon: <Music className="h-7 w-7" />,
  },
  {
    title: 'Social Space',
    desc: 'Area interaksi yang asri dan kantin modern dengan standar nutrisi tinggi.',
    icon: <Coffee className="h-7 w-7" />,
  },
];

const Facilities: React.FC = () => {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-32">
          <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Infrastructure Hub</span>
          <h2 className="text-5xl md:text-7xl font-black text-[#0A0F1E] tracking-tighter">Fasilitas <span className="text-gray-200">Modern.</span></h2>
          <div className="w-24 h-1 bg-[#F3C623] mx-auto rounded-full mt-10 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {facilities.map((item, idx) => (
            <div 
              key={idx}
              className="group flex flex-col items-center text-center p-10 rounded-[56px] hover:bg-[#F8F9FB] transition-all duration-700"
            >
              <div className="mb-10 w-24 h-24 bg-white rounded-[32px] border border-gray-100 flex items-center justify-center text-[#F3C623] shadow-lg group-hover:bg-[#0A0F1E] group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-4">
                {item.icon}
              </div>
              <h4 className="text-3xl font-black text-[#0A0F1E] mb-6 tracking-tight group-hover:text-[#F3C623] transition-colors">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed font-light text-base max-w-xs italic">
                "{item.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
