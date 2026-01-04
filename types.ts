
import React from 'react';

export interface NewsItem {
  id: string | number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string;
  date: string;
  author_name: string;
  created_at?: string;
}

export enum Page {
  HOME = 'HOME',
  PROFIL = 'PROFIL',
  BERITA = 'BERITA',
  GALERI = 'GALERI',
  KONTAK = 'KONTAK',
  GURU = 'GURU',
  ADMIN = 'ADMIN'
}
