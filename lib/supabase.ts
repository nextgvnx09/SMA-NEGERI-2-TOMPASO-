
import { createClient } from '@supabase/supabase-js';

/**
 * Konfigurasi Supabase.
 * Kunci anon diset menggunakan kunci yang diberikan pengguna sebagai fallback.
 * Pastikan SUPABASE_URL diatur di environment variable untuk koneksi database.
 */
const supabaseUrl = process.env.SUPABASE_URL || 'https://vdyjxqgxcxlxwzpxzyuv.supabase.co'; // Contoh URL, harap sesuaikan dengan URL project Anda
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_CrSi6R-4DW3VoE2NXbGgWg_DkcuN-1Z';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase credentials missing. Pastikan SUPABASE_URL dan SUPABASE_ANON_KEY sudah diatur di dashboard deployment.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
