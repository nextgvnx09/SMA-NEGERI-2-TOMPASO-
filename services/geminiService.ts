
import { GoogleGenAI } from "@google/genai";

// Menginisialisasi GoogleGenAI menggunakan process.env.API_KEY secara langsung sesuai pedoman.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSchoolAssistantResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah AI Assistant Profesional untuk SMA Negeri 2 Tompaso (Minahasa, Sulawesi Utara). 
        Sekolah ini memiliki motto: "CERDAS, TERAMPIL, BERMARTABAT".
        
        Karakteristik Jawaban Anda:
        1. PROFESIONAL & RAMAH: Gunakan bahasa Indonesia yang santun namun akrab.
        2. KONTEKSTUAL: SMAN 2 Tompaso berfokus pada transformasi digital 2026.
        3. INFORMATIF: Jika ditanya tentang PPDB (Pendaftaran Peserta Didik Baru), jelaskan bahwa pendaftaran biasanya dilakukan secara online melalui portal resmi atau hubungi admin via dashboard.
        4. LOKAL: Anda mengerti tentang geografis Tompaso dan budaya Minahasa.
        
        Visi Sekolah: Menjadi pusat keunggulan pendidikan menengah yang melahirkan pemimpin masa depan Sulawesi Utara.
        Akreditasi: Sekolah saat ini terus meningkatkan standar (sebutkan keunggulan fasilitas jika relevan).
        
        Batasan: Jangan memberikan informasi palsu. Jika tidak tahu, sarankan untuk menghubungi pihak sekolah secara langsung di Tompaso.`,
        temperature: 0.8,
        topP: 0.9,
      },
    });
    
    // Properti .text adalah getter, jangan gunakan sebagai method.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mohon maaf, sistem AI kami sedang melakukan sinkronisasi data rutin. Anda dapat menghubungi admin sekolah secara langsung melalui menu kontak di bawah.";
  }
};
