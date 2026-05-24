# Komşu Meyhane — Project Instructions

Bu dosya bu projeye dair tüm temel bilgileri ve Claude'un nasıl davranması gerektiğini tanımlar. Her yeni session'da önce bu dosyayı oku.

---

## Proje Kimliği

**Komşu Meyhane** — Ayvalık'ta deniz kenarında bir meyhane için cinematic, butik, tek-sayfa website.

**Hedeflenen his:** Ayvalık'ta gün batımı bir akşama dönüşürken denizin kenarındaki uzun bir sofranın huzuru. Premium ama doğal. Sakin, atmosferik, sıcak.

**Müşteri:** Ahmet (baturay.celikk@gmail.com). Programlama bilgisi yok. Her yapısal karar/değişiklik sade Türkçe ile açıklanıp onay alınmalı.

---

## Tech Stack (Kilitlenmiş Kararlar)

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config — v3'ten farklı, dikkat)
- **Framer Motion** — sadece subtle animasyonlar için
- **Lucide React** — ikonlar
- **`next/font/google`** — Cormorant Garamond + Manrope (self-hosted)

**KULLANILMAYACAK:** 21st.dev, shadcn, NextUI, MagicUI, hiçbir external UI kit. Her component elden yazılır.

---

## Tasarım Sistemi

### Renk Paleti

| Token | Hex | Kullanım |
|---|---|---|
| `navy-deep` | `#0B1B2B` | ana arka plan, video overlay |
| `navy-soft` | `#1A2E42` | ikincil arka planlar |
| `gold-sunset` | `#C8954C` | birincil aksan, butonlar |
| `amber-candle` | `#E8B872` | sıcak vurgular, italic başlıklar |
| `cream` | `#F5EFE4` | koyu üzerine birincil yazı |
| `cream-warm` | `#EBE3D3` | gövde yazısı |
| `gray-stone` | `#8A8377` | muted secondary yazı |
| `ocean-soft` | `#3D5A7A` | nadir kullanılan mavi aksan |

**ASLA kullanma:** saf siyah (`#000`), saf beyaz (`#FFF`), neon renkler, parlak gradientlar.

### Tipografi

- **Başlıklar:** Cormorant Garamond (serif) — CSS variable `--font-display`
- **Gövde:** Manrope (sans) — CSS variable `--font-body`
- Hero title letter-spacing: `0.04em` (logoyla quiet visual rhyme)
- Italic stiller `amber-candle` rengiyle

### Animasyon Kuralları

- Süre: **600–900ms**, easing: **`easeOut`**
- Framer Motion sadece: hero metin fade-up, scroll-reveal görseller, lightbox aç/kapa
- CSS yetiyorsa Framer Motion kullanma (hover, navbar bg fade vb.)
- **YASAK:** bounce, spring physics, agresif parallax, flashy transition

---

## Çalışma Kuralları (Önemli!)

### Müşteri-Claude İlişkisi

1. **Hiçbir dosyaya dokunmadan önce** ne yapacağını sade Türkçe açıkla, onay bekle.
2. Müşterinin teknik bilgisi yok — "componentized", "memoization" gibi terimler kullanma.
3. Müşteri Türkçe yazıyor — **sen de Türkçe cevap ver.**
4. Bug düzeltirken root cause bul — `--no-verify` gibi shortcut'lar kullanma.

### Kod Standartları

1. **Tüm Türkçe metin `lib/content.ts`'de.** Bileşene hard-code yazma.
2. **Yeni component yazmadan önce `components/ui/` klasörüne bak** — ortak primitive var mı?
3. **Hiç emoji yok.** Tasarımda da kodda da. (Müşteri özellikle isterse hariç.)
4. **Comment yazma** — kod kendini anlatsın. Sadece "neden" gerekiyorsa kısa bir satır.
5. **Generic template hissi yok** — her bölüm Komşu Meyhane'ye özel.

### Verification

- "Test geçti" yetmez. **Gerçek browser'da görsel kontrol** şart.
- `npm run dev` → `localhost:3000` → mobile + desktop bak
- Her bölüm tamamlandığında müşteriye ekran görüntüsü/link ile göster

---

## Asset Workflow

Müşteri foto/video'ları **tek tek** gönderecek:

1. Orijinal dosya `assets-raw/` klasörüne düşer (kod klasörünün dışında)
2. Optimize edilip `website/public/images/` veya `website/public/video/` altına kopyalanır
3. Hero videosu: `ffmpeg` ile 2 varyant — desktop 1080p (<8MB), mobile 720p (<3MB)
4. Tüm fotolar `next/image` ile render edilir
5. Asset gelene kadar **tasteful Unsplash placeholder'ları** kullanılır, ekranlarda "henüz gerçek değil" notu

---

## İletişim Bilgileri (Footer/Location için)

- **Ad:** Komşu Meyhane
- **Telefon:** 0530 905 35 35
- **Adres:** Sakarya Mah. Atatürk Bulv. 20. Sokak No:5, Ayvalık, Turkey
- **Instagram:** (müşteriden alınacak)

---

## Klasör Yapısı

```
komsu meyhane/
├── CLAUDE.md                    (bu dosya)
├── font-preview.html            (font seçim referansı — silinmez)
├── assets-raw/                  (müşterinin orijinal dosyaları)
└── website/                     (Next.js uygulaması)
    ├── public/
    ├── app/
    ├── components/ui/
    ├── lib/content.ts
    └── ...
```

---

## Session Start Protocol

Yeni session açıldığında **bu sırayla**:

1. Bu `CLAUDE.md` dosyasını oku
2. **`HANDOFF.md` dosyasındaki en son entry'yi oku** — son session'da ne yapıldı, neyi yarım bıraktık, müşteriden ne bekleniyor
3. `~/.claude/plans/whimsical-seeking-emerson.md` plan dosyasını oku
4. `website/` klasörü varsa `npm install`'un güncel olduğunu kontrol et
5. Müşteriye HANDOFF.md'deki "Bir sonraki session'da nereden başlanacak" maddesine göre sor: "Geçen sefer X kaldı, oradan devam mı?"

---

## Session Close Protocol

Müşteri "session'ı kapatıyorum" / "yeni session açıyorum" / "bugünlük bu kadar" dediğinde:

1. Bu session'da ne yapıldığını **kısa Türkçe** özetle (sohbette)
2. **`HANDOFF.md` dosyasının SONUNA yeni entry append et** — şu yapıyla:
   - `## YYYY-MM-DD — Session N (Kısa başlık)`
   - **Ne yapıldı** (madde madde)
   - **Verilen kararlar** (kilitlenen şeyler, gelecekteki Claude bilmesi için)
   - **Henüz YAPILMADI / Sonraki session başlangıcı** (devam noktası)
   - **Müşteriden bekleniyor** (asset, onay, bilgi)
   - **Notlar / Riskler** (varsa)
   - Sonunda `---` separator
3. Üst üste eski entry'yi **silme**, sadece **append** et — log büyüsün
4. Eksik kalan/yarım kalan iş varsa müşteriye sözlü olarak da hatırlat
5. Git aktifse: değişiklikleri commit'le ("Session N — kısa açıklama"), push'lama (müşteri isterse push edilir)

---

## Önemli Referanslar

- **Plan dosyası:** `~/.claude/plans/whimsical-seeking-emerson.md` (Phase planı + tüm teknik kararlar)
- **Font önizleme:** `./font-preview.html` (neden Cormorant + Manrope seçildi)
- **Global kurallar:** `~/.claude/CLAUDE.md` (kullanıcının tüm projeleri için)

---

## Riskler ve Bilinen Sorunlar

1. **Hero videosu boyutu kritik** — optimize edilmezse mobile yavaş hissedecek
2. **Tailwind v4 yeni** — internetteki v3 örneklerinden farklı çalışıyor
3. **Logo'nun "Meyhane" altyazısı zayıf** — sadece navbar'da küçük kullan, hero'da büyütme
4. **Asset eksikliği** — her şey gelene kadar placeholder'larla çalışılıyor
