
import React, { useState } from 'react';
import { LogIn, AlertCircle, Loader2, GraduationCap, ArrowLeft } from 'lucide-react';
import { login } from '../lib/actions';
import { Page } from '../types';

interface AdminLoginProps {
  onSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await login(email, password);
      
      if (authError) {
        // Menampilkan pesan error spesifik dari Supabase
        if (authError.message === 'Invalid login credentials') {
          setError('Email atau password salah. Pastikan Anda sudah terdaftar di Supabase Auth.');
        } else if (authError.message.includes('Email not confirmed')) {
          setError('Email belum dikonfirmasi. Silakan cek inbox Anda atau matikan konfirmasi email di dashboard Supabase.');
        } else {
          setError(authError.message);
        }
        setLoading(false);
      } else if (data.user) {
        onSuccess();
      }
    } catch (err) {
      setError('Terjadi kesalahan koneksi. Pastikan URL Supabase di lib/supabase.ts sudah benar.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FB] px-4 py-20">
      <div className="max-w-md w-full">
        {/* Info Box */}
        <div className="mb-8 bg-blue-50 border border-blue-100 p-6 rounded-3xl">
          <h4 className="text-blue-800 font-bold text-sm mb-2 flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            Petunjuk Akses
          </h4>
          <p className="text-blue-600/80 text-xs leading-relaxed">
            Pastikan Anda telah membuat akun di <b>Supabase Dashboard > Authentication</b>. 
            Gunakan email dan password tersebut untuk masuk ke portal guru.
          </p>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 overflow-hidden border border-gray-100">
          <div className="bg-[#0A0F1E] p-10 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3C623]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="inline-flex bg-[#F3C623] p-4 rounded-[24px] mb-6 shadow-xl shadow-yellow-500/20 transform -rotate-6">
              <GraduationCap className="h-8 w-8 text-[#0A0F1E]" />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Portal <span className="text-[#F3C623]">Guru</span></h2>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">SMAN 2 Tompaso Digital Hub</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-10 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl flex items-start space-x-3 text-xs animate-shake">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span className="font-medium leading-relaxed">{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Sekolah</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-[#F3C623] focus:bg-white transition-all font-medium text-sm"
                placeholder="nama@sman2tompaso.sch.id"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:outline-none focus:border-[#F3C623] focus:bg-white transition-all font-medium text-sm"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0A0F1E] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#F3C623] hover:text-[#0A0F1E] transition-all flex items-center justify-center space-x-3 shadow-xl shadow-blue-900/10 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <LogIn className="h-5 w-5" />
                  <span>Autentikasi</span>
                </>
              )}
            </button>
            
            <p className="text-center text-[9px] text-gray-400 font-bold uppercase tracking-widest pt-4">
              Sistem Keamanan Terenkripsi Supabase
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
