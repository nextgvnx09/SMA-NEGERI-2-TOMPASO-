
import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon, Send, Loader2, User, Tag, Save } from 'lucide-react';
import { insertNews, updateNews, fetchCategories } from '../lib/actions';
import { NewsItem } from '../types';

interface NewsFormProps {
  onClose: () => void;
  onSuccess: () => void;
  initialData?: NewsItem | null;
}

const NewsForm: React.FC<NewsFormProps> = ({ onClose, onSuccess, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [authorName, setAuthorName] = useState(initialData?.author_name || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(initialData?.image_url || '');
  const [loading, setLoading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const isEditMode = !!initialData;

  useEffect(() => {
    const loadCategories = async () => {
      setCategoriesLoading(true);
      const { data } = await fetchCategories();
      
      if (data && data.length > 0) {
        const catNames = data.map((c: any) => c.name);
        setAvailableCategories(catNames);
        if (!category) setCategory(catNames[0]);
      } else {
        const fallback = ['Pendidikan', 'Prestasi', 'Kegiatan Siswa', 'Agenda Sekolah', 'Pengumuman'];
        setAvailableCategories(fallback);
        if (!category) setCategory(fallback[0]);
      }
      setCategoriesLoading(false);
    };

    loadCategories();
  }, [category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) return;
    setLoading(true);

    try {
      const newsPayload = {
        title,
        category,
        excerpt,
        content,
        author_name: authorName,
        image_url: imageUrl,
      };

      if (isEditMode && initialData) {
        await updateNews(initialData.id, newsPayload, image || undefined);
      } else {
        await insertNews(newsPayload, image || undefined);
      }
      
      onSuccess();
    } catch (err) {
      console.error(err);
      alert('Gagal memproses berita. Pastikan koneksi dan izin storage sudah benar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#011627]/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-gray-100">
        <div className="flex items-center justify-between p-8 border-b border-gray-100">
          <div>
            <h3 className="text-2xl font-bold text-[#011627]">
              {isEditMode ? 'Sunting Berita' : 'Publikasikan Berita'}
            </h3>
            <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-bold">Portal Administrasi SMAN 2 Tompaso</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-gray-100 rounded-2xl transition-all">
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Judul Berita</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all text-[#011627] font-medium"
              placeholder="Berikan judul yang informatif dan menarik..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Kategori Berita</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Tag className="h-4 w-4 text-[#D4AF37]" />
                </span>
                <select 
                  value={category}
                  disabled={categoriesLoading}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all appearance-none text-[#011627] font-medium disabled:opacity-50"
                >
                  {categoriesLoading ? (
                    <option>Memuat kategori...</option>
                  ) : (
                    availableCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))
                  )}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Nama Penulis</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-[#D4AF37]" />
                </span>
                <input
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full pl-12 px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all text-[#011627] font-medium"
                  placeholder="Nama Lengkap Penulis"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Visual Utama</label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="hidden"
                id="image-upload"
              />
              <label 
                htmlFor="image-upload"
                className="flex items-center space-x-4 px-5 py-4 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 cursor-pointer transition-all text-sm text-gray-500 font-medium"
              >
                <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37]">
                  <ImageIcon className="h-5 w-5" />
                </div>
                <span className="truncate">
                  {image ? image.name : isEditMode ? 'Ganti gambar (Opsional)' : 'Pilih berkas gambar berita'}
                </span>
              </label>
              {isEditMode && !image && imageUrl && (
                <p className="mt-2 text-[10px] text-gray-400 px-2 italic">Gambar saat ini: {imageUrl.split('/').pop()}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Ringkasan Berita</label>
            <textarea
              required
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all text-[#011627] font-medium resize-none"
              placeholder="Tuliskan ringkasan singkat untuk tampilan kartu berita..."
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Konten Lengkap</label>
            <textarea
              required
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all text-[#011627] font-medium"
              placeholder="Tuliskan narasi lengkap berita di sini..."
            />
          </div>

          <div className="pt-6 flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-8 py-5 rounded-2xl font-bold border border-gray-100 hover:bg-gray-50 transition-all text-gray-500"
            >
              Batalkan
            </button>
            <button
              type="submit"
              disabled={loading || categoriesLoading}
              className="flex-[2] bg-[#011627] text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-[#022a4d] transition-all disabled:opacity-50 shadow-xl shadow-blue-900/10"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  {isEditMode ? <Save className="h-5 w-5 text-[#D4AF37]" /> : <Send className="h-5 w-5 text-[#D4AF37]" />}
                  <span>{isEditMode ? 'Simpan Perubahan' : 'Kirim & Publikasikan'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsForm;
