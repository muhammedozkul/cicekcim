import { DUKKAN } from '../data/dukkan';
import { urunler, type Urun } from '../data/urunler';

/** Ürün id'si -> adet. Tarayıcıda localStorage'da tutulur. */
export type Sepet = Record<string, number>;

export interface SepetSatiri {
  urun: Urun;
  adet: number;
  tutar: number;
}

export interface TeslimatBilgisi {
  adSoyad: string;
  adres: string;
  /** input[type=date] değeri: YYYY-AA-GG */
  tarih: string;
  kartNotu: string;
}

const tl = new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 0,
});

export function fiyatYaz(tutar: number): string {
  return tl.format(tutar);
}

export function sepetSatirlari(sepet: Sepet): SepetSatiri[] {
  return Object.entries(sepet).flatMap(([id, adet]) => {
    const urun = urunler.find((u) => u.id === id);
    if (!urun || !Number.isInteger(adet) || adet < 1) return [];
    return [{ urun, adet, tutar: urun.fiyat * adet }];
  });
}

export function toplamTutar(satirlar: SepetSatiri[]): number {
  return satirlar.reduce((toplam, satir) => toplam + satir.tutar, 0);
}

function tarihYaz(tarih: string): string {
  const [yil, ay, gun] = tarih.split('-');
  return yil && ay && gun ? `${gun}.${ay}.${yil}` : tarih;
}

export function siparisMesaji(satirlar: SepetSatiri[], bilgi: TeslimatBilgisi): string {
  const kalemler = satirlar.map(
    (s) => `• ${s.adet} x ${s.urun.ad} — ${fiyatYaz(s.tutar)}`,
  );
  const satirListesi = [
    `Merhaba ${DUKKAN.ad}, sipariş vermek istiyorum 🌸`,
    '',
    'Sipariş:',
    ...kalemler,
    `Toplam: ${fiyatYaz(toplamTutar(satirlar))}`,
    '',
    `Ad Soyad: ${bilgi.adSoyad}`,
    `Teslimat adresi: ${bilgi.adres}`,
    `Teslimat tarihi: ${tarihYaz(bilgi.tarih)}`,
  ];
  if (bilgi.kartNotu) satirListesi.push(`Kart notu: ${bilgi.kartNotu}`);
  return satirListesi.join('\n');
}

export function whatsappLinki(mesaj: string): string {
  return `https://wa.me/${DUKKAN.whatsapp}?text=${encodeURIComponent(mesaj)}`;
}
