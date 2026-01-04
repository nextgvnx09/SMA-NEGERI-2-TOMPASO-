
import React from 'react';
import { User, Award, GraduationCap, Briefcase } from 'lucide-react';

interface Teacher {
  name: string;
  role: string;
  type: 'kepala' | 'guru' | 'staf';
}

const TEACHERS_DATA: Teacher[] = [
  { name: 'Junus N M Akay', role: 'Kepala Sekolah', type: 'kepala' },
  { name: 'Novie Kalengkongan', role: 'Guru PJOK', type: 'guru' },
  { name: 'Diane Langi', role: 'Guru Fisika', type: 'guru' },
  { name: 'Rosni Lumentah', role: 'Guru Informatika', type: 'guru' },
  { name: 'Rike Tulenan', role: 'Guru Biologi', type: 'guru' },
  { name: 'Junita Takalamingan', role: 'Guru Kimia', type: 'guru' },
  { name: 'Merina Sumera', role: 'Guru Kimia', type: 'guru' },
  { name: 'Riany Kolibu', role: 'Guru Biologi', type: 'guru' },
  { name: 'Elsa Palar', role: 'Guru PPKN', type: 'guru' },
  { name: 'Yola Keles', role: 'Guru Ekonomi', type: 'guru' },
  { name: 'Ruly Kaparang', role: 'Guru Geografi', type: 'guru' },
  { name: 'Ireine Mukuan', role: 'Guru Bahasa Inggris', type: 'guru' },
  { name: 'Jessica Umboh', role: 'Guru Sosiologi', type: 'guru' },
  { name: 'Amelia Umboh', role: 'Guru Bahasa Indonesia', type: 'guru' },
  { name: 'Djenly Pajow', role: 'Guru Sejarah', type: 'guru' },
  { name: 'Natalia Siri', role: 'Guru Agama', type: 'guru' },
  { name: 'Eva Sepang', role: 'Guru Bahasa Jerman', type: 'guru' },
  { name: 'Jimri Roring', role: 'Staf TU', type: 'staf' },
  { name: 'Oktavia Laloan', role: 'Staf TU', type: 'staf' },
];

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const isPrincipal = teacher.type === 'kepala';
  
  return (
    <div className={`group relative overflow-hidden transition-all duration-500 ${
      isPrincipal ? 'col-span-full mb-12' : ''
    }`}>
      <div className={`p-8 rounded-[40px] border border-gray-100 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isPrincipal ? 'bg-[#0A0F1E] text-white flex flex-col md:flex-row items-center gap-10' : 'bg-white'
      }`}>
        {/* Avatar Placeholder */}
        <div className={`shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center text-3xl font-black shadow-xl transform group-hover:rotate-6 transition-transform ${
          isPrincipal ? 'bg-[#F3C623] text-[#0A0F1E]' : 'bg-gray-50 text-gray-300 group-hover:bg-[#F3C623]/10 group-hover:text-[#F3C623]'
        }`}>
          {teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>

        <div className="flex-grow">
          <div className="flex items-center space-x-3 mb-2">
             {isPrincipal ? (
               <Award className="h-5 w-5 text-[#F3C623]" />
             ) : teacher.type === 'guru' ? (
               <GraduationCap className="h-4 w-4 text-[#F3C623]" />
             ) : (
               <Briefcase className="h-4 w-4 text-[#F3C623]" />
             )}
             <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isPrincipal ? 'text-[#F3C623]' : 'text-gray-400'}`}>
               {teacher.role}
             </span>
          </div>
          <h3 className={`text-2xl md:text-3xl font-black tracking-tight ${isPrincipal ? 'text-white' : 'text-[#0A0F1E]'}`}>
            {teacher.name}
          </h3>
          {isPrincipal && (
            <p className="mt-4 text-white/50 font-light max-w-xl text-sm leading-relaxed">
              Memimpin SMAN 2 Tompaso menuju era transformasi digital yang cerdas, terampil, dan bermartabat. Berdedikasi tinggi untuk kemajuan pendidikan di Minahasa.
            </p>
          )}
        </div>
        
        {!isPrincipal && (
          <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-10 transition-opacity">
            <User className="h-20 w-20 text-[#0A0F1E]" />
          </div>
        )}
      </div>
    </div>
  );
};

const TeachersSection: React.FC = () => {
  const kepala = TEACHERS_DATA.find(t => t.type === 'kepala');
  const guru = TEACHERS_DATA.filter(t => t.type === 'guru');
  const staf = TEACHERS_DATA.filter(t => t.type === 'staf');

  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-xs mb-6 block">Our Educator Team</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#0A0F1E] tracking-tighter leading-none mb-8">
            Direktori <br /> <span className="text-gray-200">Guru & Staf.</span>
          </h1>
          <p className="text-gray-500 text-xl font-light leading-relaxed">
            Mengenal lebih dekat para pendidik dan tenaga kependidikan hebat yang membimbing siswa-siswi SMAN 2 Tompaso setiap harinya.
          </p>
        </div>

        {/* Kepala Sekolah Highlight */}
        {kepala && <TeacherCard teacher={kepala} />}

        {/* Tenaga Pendidik Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-6 mb-12">
            <h2 className="text-2xl font-black text-[#0A0F1E] tracking-tight uppercase">Tenaga Pendidik</h2>
            <div className="h-px flex-grow bg-gray-100"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guru.map((t, i) => (
              <TeacherCard key={i} teacher={t} />
            ))}
          </div>
        </div>

        {/* Tenaga Kependidikan Section */}
        <div>
          <div className="flex items-center space-x-6 mb-12">
            <h2 className="text-2xl font-black text-[#0A0F1E] tracking-tight uppercase">Tenaga Kependidikan</h2>
            <div className="h-px flex-grow bg-gray-100"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staf.map((t, i) => (
              <TeacherCard key={i} teacher={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersSection;
