
import { supabase } from './supabase';
import { NewsItem } from '../types';

/**
 * Authentication
 */
export const login = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const logout = async () => {
  return await supabase.auth.signOut();
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

/**
 * Database Operations
 */
export const fetchNews = async () => {
  return await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false });
};

export const fetchCategories = async () => {
  return await supabase
    .from('categories')
    .select('name')
    .order('name', { ascending: true });
};

export const insertNews = async (news: Omit<NewsItem, 'id' | 'date'>, imageFile?: File) => {
  let finalImageUrl = news.image_url;

  if (imageFile) {
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
    const filePath = `news-covers/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('school-assets')
      .upload(filePath, imageFile);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('school-assets')
      .getPublicUrl(filePath);
    
    finalImageUrl = publicUrl;
  }

  return await supabase
    .from('news')
    .insert([{
      title: news.title,
      category: news.category,
      excerpt: news.excerpt,
      content: news.content,
      image_url: finalImageUrl,
      author_name: news.author_name
    }])
    .select();
};

export const updateNews = async (id: string | number, news: Omit<NewsItem, 'id' | 'date'>, imageFile?: File) => {
  let finalImageUrl = news.image_url;

  if (imageFile) {
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
    const filePath = `news-covers/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('school-assets')
      .upload(filePath, imageFile);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('school-assets')
      .getPublicUrl(filePath);
    
    finalImageUrl = publicUrl;
  }

  return await supabase
    .from('news')
    .update({
      title: news.title,
      category: news.category,
      excerpt: news.excerpt,
      content: news.content,
      image_url: finalImageUrl,
      author_name: news.author_name
    })
    .eq('id', id)
    .select();
};

export const deleteNews = async (id: string | number) => {
  return await supabase.from('news').delete().eq('id', id);
};
