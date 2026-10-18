// Veritabanının yerini tutan dosya: ürün eklemek, silmek ya da fiyat değiştirmek için burayı düzenle.
export type CicekTuru = 'gul' | 'lale' | 'sakayik' | 'papatya' | 'aycicegi' | 'orkide' | 'karisik';

export interface Urun {
  id: string;
  ad: string;
  aciklama: string;
  /** Türk lirası, tam sayı */
  fiyat: number;
  tur: CicekTuru;
  /** Görseldeki çiçeklerin renkleri; sırayla dağıtılır */
  renkler: string[];
}

export const urunler: Urun[] = [
  {
    id: 'kirmizi-gul',
    ad: 'Kırmızı Gül Buketi',
    aciklama: '11 adet kırmızı gül, okaliptüs yapraklarıyla.',
    fiyat: 650,
    tur: 'gul',
    renkler: ['#c0223b', '#a81830', '#d42f49'],
  },
  {
    id: 'beyaz-gul',
    ad: 'Beyaz Gül Buketi',
    aciklama: '11 adet beyaz gül, sade ve zarif.',
    fiyat: 600,
    tur: 'gul',
    renkler: ['#f7f1e8', '#efe6d8', '#fffaf2'],
  },
  {
    id: 'renkli-lale',
    ad: 'Renkli Lale Demeti',
    aciklama: '10 adet karışık renk lale.',
    fiyat: 450,
    tur: 'lale',
    renkler: ['#e2445c', '#f2a93b', '#c94f9b', '#f06d3b'],
  },
  {
    id: 'pembe-sakayik',
    ad: 'Pembe Şakayık Buketi',
    aciklama: '7 adet dolgun pembe şakayık.',
    fiyat: 950,
    tur: 'sakayik',
    renkler: ['#f2a7bb', '#ec8fa8', '#f7c3d0'],
  },
  {
    id: 'papatya',
    ad: 'Papatya Demeti',
    aciklama: 'Kır papatyaları, neşeli bir hediye.',
    fiyat: 350,
    tur: 'papatya',
    renkler: ['#ffffff'],
  },
  {
    id: 'aycicegi',
    ad: 'Ayçiçeği Buketi',
    aciklama: '5 adet ayçiçeği, güneş gibi.',
    fiyat: 500,
    tur: 'aycicegi',
    renkler: ['#f5b301', '#f7c22b'],
  },
  {
    id: 'beyaz-orkide',
    ad: 'Beyaz Orkide',
    aciklama: 'Saksıda çift dallı beyaz orkide.',
    fiyat: 1200,
    tur: 'orkide',
    renkler: ['#fbf8fb', '#f4eef5'],
  },
  {
    id: 'mevsim-aranjmani',
    ad: 'Mevsim Çiçekleri',
    aciklama: 'Mevsimin en taze çiçeklerinden karışık buket.',
    fiyat: 750,
    tur: 'karisik',
    renkler: ['#e2445c', '#ffffff', '#f2a93b', '#f2a7bb'],
  },
];
