// Dükkan bilgileri tek yerde. Numara koda yazılmaz; .env dosyasındaki
// PUBLIC_WHATSAPP_NUMBER değerinden okunur (örnek için .env.example'a bak).

// wa.me ülke koduyla ister, başında 0 olmadan: 0505... -> 90505...
const whatsapp = import.meta.env.PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '');

if (!whatsapp || !/^90\d{10}$/.test(whatsapp)) {
  throw new Error(
    'PUBLIC_WHATSAPP_NUMBER eksik ya da hatalı. .env.example dosyasını .env olarak kopyalayıp 90 ile başlayan 12 haneli numarayı yaz.',
  );
}

// 905051234567 -> "0505 123 45 67"
const yerel = `0${whatsapp.slice(2)}`;
const telefonGorunen = `${yerel.slice(0, 4)} ${yerel.slice(4, 7)} ${yerel.slice(7, 9)} ${yerel.slice(9)}`;

export const DUKKAN = {
  ad: 'Çiçekcim',
  slogan: 'Taze çiçekler, kapına kadar',
  telefonGorunen,
  whatsapp,
} as const;
