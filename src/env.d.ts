interface ImportMetaEnv {
  /** WhatsApp sipariş numarası, ülke koduyla ve başında 0 olmadan (ör. 905051234567). */
  readonly PUBLIC_WHATSAPP_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
