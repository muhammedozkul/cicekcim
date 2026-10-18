// Dükkan bilgileri tek yerde. Numara koda yazılmaz; .env dosyasındaki
// PUBLIC_WHATSAPP_NUMBER değerinden okunur (örnek için .env.example'a bak).
// Değer "demo" ise gerçek numara kullanılmaz: ekranda maskeli numara görünür,
// WhatsApp bağlantısı da numarasız açılır (mesaj hazır gelir, kişiyi kullanıcı seçer).

const ham = import.meta.env.PUBLIC_WHATSAPP_NUMBER?.trim();
const demo = ham === 'demo';

// wa.me ülke koduyla ister, başında 0 olmadan: 0505... -> 90505...
const whatsapp = demo ? '' : (ham?.replace(/\D/g, '') ?? '');

if (!demo && !/^90\d{10}$/.test(whatsapp)) {
  throw new Error(
    'PUBLIC_WHATSAPP_NUMBER eksik ya da hatalı. .env.example dosyasını .env olarak kopyalayıp 90 ile başlayan 12 haneli numarayı ya da "demo" yaz.',
  );
}

// 905051234567 -> "0505 123 45 67"
function telefonBicimle(numara: string): string {
  const yerel = `0${numara.slice(2)}`;
  return `${yerel.slice(0, 4)} ${yerel.slice(4, 7)} ${yerel.slice(7, 9)} ${yerel.slice(9)}`;
}

export const DUKKAN = {
  ad: 'Çiçekcim',
  slogan: 'Taze çiçekler, kapına kadar',
  demo,
  telefonGorunen: demo ? '0555 *** ** **' : telefonBicimle(whatsapp),
  whatsapp,
} as const;
