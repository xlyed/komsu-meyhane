# Komşu Meyhane — Session Handoff Log

Bu dosya her session'da ne yapıldığını **append olarak** kaydeder. Her session başında en son entry okunur — kaldığımız yerden devam etmek için. Her session sonunda yeni entry **dosyanın sonuna eklenir**.

**Entry formatı:**
- Tarih + session numarası
- Ne yapıldı
- Verilen kararlar
- Bir sonraki session'da nereden başlanacak
- Müşteriden beklenen şeyler

---

## 2026-05-25 — Session 1 (Plan & Kurulum Hazırlığı)

### Ne yapıldı
- Proje brief'i okundu, kapsam netleşti (Ayvalık'ta cinematic deniz kenarı meyhane sitesi)
- Tech stack tartışıldı: 21st.dev MCP **reddedildi** (template hissi yaratır), Framer Motion **onaylandı** (subtle animasyonlar için gerekli)
- Font karşılaştırması için `font-preview.html` oluşturuldu (kök klasörde, referans olarak duruyor)
- 2 font opsiyonu mock'landı, müşteri **Seçenek B (Cormorant Garamond + Manrope)** seçti
- Müşterinin logosu görüldü (geometric thin sans + tech sans + balık+çatal+bıçak ikonu, deep navy daire)
- Logo analizi yapıldı → "match etme, complement et" stratejisi onaylandı
- Detaylı implementation planı yazıldı: `~/.claude/plans/whimsical-seeking-emerson.md`
- Plan mode'da resmi onay alındı
- `CLAUDE.md` projeye yazıldı (tasarım sistemi, çalışma kuralları, session protokolleri)
- Bu `HANDOFF.md` dosyası oluşturuldu
- Global skill `setup-project-docs` yazıldı (`~/.claude/skills/setup-project-docs/SKILL.md`) — sonraki projelerde kullanılacak

### Verilen kararlar (kilitli)
- **Tech stack:** Next.js 15, TypeScript, Tailwind v4, Framer Motion, Lucide React, `next/font/google`
- **Fontlar:** Cormorant Garamond (display) + Manrope (body)
- **Renk paleti:** 8 token — `navy-deep #0B1B2B`, `navy-soft #1A2E42`, `gold-sunset #C8954C`, `amber-candle #E8B872`, `cream #F5EFE4`, `cream-warm #EBE3D3`, `gray-stone #8A8377`, `ocean-soft #3D5A7A`
- **Klasör yapısı:** `komsu meyhane/{font-preview.html, assets-raw/, website/}` — assets-raw kod klasörünün dışında
- **Animasyon kuralları:** 600-900ms, `easeOut`, no bounce/spring/aggressive parallax
- **UI kit yasak:** 21st.dev, shadcn, NextUI, MagicUI — hiçbiri. Her şey elden yazılacak
- **Git:** Phase 1'in ilk adımı olacak (`create-next-app` zaten otomatik git init yapıyor + kök klasörde ayrı git başlatılacak, `.gitignore`'a `assets-raw/` + `node_modules/`)

### Henüz YAPILMADI (Phase 1 - sonraki session başlangıcı)
1. `assets-raw/` klasörü oluştur
2. `npx create-next-app@latest website --typescript --tailwind --app --no-src-dir --import-alias "@/*"` ile iskelet
3. `cd website && npm install framer-motion lucide-react`
4. Kök klasörde `git init` + `.gitignore`
5. `tailwind.config.ts` → custom renk paleti
6. `app/layout.tsx` → `next/font` ile Cormorant Garamond + Manrope, `Metadata` export, JSON-LD Restaurant schema iskeleti
7. `app/globals.css` → CSS variables + reset
8. `lib/content.ts` → placeholder Türkçe metinlerle
9. İlk commit: "Initial project scaffold with design system"
10. **Müşteriye göster:** "Kurulum hazır, Hero bölümüne geçelim mi?"

### Bir sonraki session'da nereden başlanacak
- Bu HANDOFF.md'nin **bu entry'sini oku**
- Plan dosyasını oku: `~/.claude/plans/whimsical-seeking-emerson.md`
- Müşteriye sor: "Phase 1'i başlatalım mı, yoksa başka bir şey mi konuşalım?"

### Müşteriden bekleniyor
- **Görseller/video sonradan tek tek gelecek** — Phase 1 placeholder'larla yapılacak
- Logo dosyası (mesajda görüldü ama henüz yüklenmedi)
- Instagram URL'si
- Çalışma saatleri (Restaurant JSON-LD için)
- Google Maps'te kesin konum (iframe embed URL'si için)
- GitHub hesabı bilgisi (deploy için ileride)

### Notlar / Bilinen riskler
- Hero videosu büyük gelirse `ffmpeg` ile compress edilecek (desktop <8MB, mobile <3MB)
- Tailwind v4 yeni — v3 örnekleri yanıltabilir
- Müşterinin programlama bilgisi yok → her teknik karar sade Türkçe açıklanıp onay alınacak

---

## 2026-05-25 — Session 2 (Phase 1 + Phase 2 tamamlandı + Polish)

### Ne yapıldı

**Phase 1 — kurulum:**
- `assets-raw/` klasörü oluşturuldu
- `create-next-app` ile **Next.js 16.2.6** iskeleti (planda 15 yazıyordu ama `@latest` 16 geldi)
- `framer-motion` v12.40 + `lucide-react` v1.16 paketleri
- **Tek git deposu kökte** kuruldu (`website/.git` silindi, root'tan git init, `.gitignore` ile `assets-raw/`, `node_modules/`, `.next/` vb. hariç)
- `globals.css` → Tailwind v4 `@theme` directive ile 8 renk tokeni + font CSS değişkenleri
- `layout.tsx` → Cormorant Garamond (300/400/500/600 + italic) + Manrope (300-600), TR Metadata, Restaurant JSON-LD iskeleti
- `lib/content.ts` → tüm Türkçe metin tek dosyada
- İlk commit atıldı

**Phase 2 — 8 bölüm sırasıyla:**
1. **Navbar** — sticky, scroll'da koyulaşan transparan başlangıç, mobile hamburger (kendi yazıldı, hiçbir kütüphane yok)
2. **Hero** — tam ekran gradient placeholder (navy→ocean→amber gün batımı), sağ-alt hizalı metin (mobile sol-alt), Framer Motion staggered fade-up, "video gelecek" notu
3. **Atmosphere** — 3-kart asimetrik cinematic grid, gradient placeholder kartlar (Mum / Deniz / Sofra), Lucide ikonlu chip + caption
4. **Story** — `bg-navy-soft`, ortalanmış editorial kolon, ilk paragrafta amber **drop-cap**, altta pull-quote ("Acelemiz yok.")
5. **Menu** — 4 kategori 2×2 grid (Mezeler / Deniz Mahsulleri / Sıcaklar / İçecekler), klasik noktalı çizgi tipografi, hover'da çerçeve altın olur, telefon CTA. **Lightbox eklenmedi** — fotosuz lightbox açmak anlamsız, Phase 3'te eklenir
6. **Gallery** — 8-tile masonry (3/2/1 col), her tile farklı oran + gradient, tıklayınca **Lightbox** açılıyor (← → / ESC / X / dışarı tıklama, scale+fade animasyon, sayaç). Lightbox **generic primitive** olarak yazıldı
7. **Location** — 2-kolon: solda Google Maps iframe (search-based URL, grayscale 30% + kontrast filtresi), sağda MapPin/Phone/Clock ikonlu info satırları + "Yol Tarifi Al" CTA
8. **Footer** — 3-kolon (Marka / İletişim / Sosyal), Instagram için **kendi inline SVG** (lucide v1.16'da Instagram ikonu yok), "Yukarıya dön" link, copyright

**Polish:**
- `scroll-behavior: smooth` + `scroll-padding-top: 5rem` (navbar offset için anchor link'ler altında kalmasın)
- `prefers-reduced-motion` → smooth scroll devre dışı, FadeIn statik, Lightbox animasyonsuz
- `viewport` export'u: `themeColor: #0B1B2B` (mobile tarayıcı çerçevesi marka rengini alıyor)
- **Skip-to-content** link (a11y, klavye/screen reader)
- `<main id="main">` sarmalayıcı eklendi
- **Custom 404 sayfası** — "Bu sokaktan geçen yok." brand-matching

### Verilen kararlar (kilitli)
- **Next.js 16.2.6** kullanılıyor — `@latest` bunu getirdi. Plan'daki "15" referansı artık geçersiz. Mevcut yazdıklarımız 16 ile uyumlu (App Router, Tailwind v4, next/font, Metadata, JSON-LD doc'ları doğrulandı).
- **Tek git deposu kökte**. Plan "ayrı git" diyordu ama nested git pratikte karışıklık. Tek depo daha temiz, `.gitignore` ile asset/node_modules hariç.
- **Tailwind v4 canonical class isimleri ZORUNLU:**
  - `bg-linear-to-*` (eski `bg-gradient-to-*` değil)
  - `z-100`, `z-200` (eski `z-[100]` değil)
  - Yeni utility yazarken IDE diagnostic'i takip et, baştan doğru yaz.
- **Lucide-react v1.16.0**'da marka ikonları (Instagram, Facebook, X/Twitter) **yok**. Sosyal/marka ikonu lazımsa inline SVG yaz — `Footer.tsx`'deki `InstagramIcon` örnek olabilir.
- **CSS gradient placeholder stratejisi** — Atmosphere/Gallery/Hero'da bilinçli minimalism. Phase 3'te gerçek görsel direkt yerine geçecek, layout ve oranlar korunacak.
- **Lightbox primitive generic** (`components/ui/Lightbox.tsx`) — `render: () => ReactNode` API'si ile her şeyi gösterebilir. Foto gelince Gallery sadece `<Image>` ile değiştirilecek, Lightbox API'sine dokunulmayacak.
- **Menü içeriği örnek meyhane klasikleri** — müşteri kendi menüsünü verecek. `lib/content.ts` `menu.categories` düzenlemesi kolay.
- **Çalışma saatleri** şimdilik "Hergün 18:00 — 00:00" placeholder kaldı (müşteri onayladı). Gerçek saatler gelince hem `location.hours` hem JSON-LD `openingHours` eklenecek.

### Bir sonraki session = Phase 3 (Asset Entegrasyonu)
Yapılacaklar (asset geldikçe sırayla):

1. **Hero videosu** — orijinal video → `ffmpeg` ile 2 varyant (desktop 1080p `mp4`+`webm` <8MB, mobile 720p <3MB), poster image, `Hero.tsx` gradient'i yerine `<video playsInline muted loop autoplay preload="metadata">` ve `<source media="...">` ile
2. **Atmosphere fotoları** (3 adet) — `next/image` ile, asimetrik cinematic layout korunarak
3. **Gallery fotoları** (8-12+) — masonry'e yerleştirme, Lightbox `render` fonksiyonu `<Image>` döndürecek şekilde güncellenecek
4. **Logo** → `public/images/logo.png` (veya SVG), Navbar'da yazı yerine ya da yazıyla beraber küçük olarak ("Meyhane" altyazısı zayıf olduğu için büyük gösterilmeyecek)
5. **Gerçek menü** → `lib/content.ts` `menu.categories` güncellenecek
6. **Instagram URL** → `lib/content.ts` `footer.instagramUrl` (otomatik link olur, "yakında" rozeti kaybolur)
7. **Google Maps iframe** → işletme claim edilmişse "Paylaş > Yerleştir" iframe URL'si `location.mapsEmbedSrc`'ye
8. **Gerçek çalışma saatleri** → `location.hours` + JSON-LD `openingHours`
9. **OpenGraph image** → `app/opengraph-image.{tsx,jpg}` (sosyal medya paylaşım kartı, gerçek foto gerekir)
10. **Favicon** → logo geldikten sonra `app/favicon.ico` değiştirilecek
11. **robots.txt** + **sitemap.ts** (App Router native, basit ekleme)
12. **Phase 4 polish** — Lighthouse audit (Performance >90, A11y >95, SEO 100), gerçek mobile cihazda video testi

### Bir sonraki session'da nereden başlanacak
- Bu HANDOFF.md entry'sini oku
- Müşteriye sor: "Asset göndermeye hazır mısın? Hangisinden başlayalım — Hero videosu mu, Gallery fotoları mı, logo mu?"
- Asset yoksa: `robots.txt` + `sitemap.ts` + `opengraph-image` placeholder gibi asset-gerektirmeyen küçük işler yapılabilir

### Müşteriden bekleniyor
- **Hero videosu** (en kritik — mobile performans buna bağlı)
- **Atmosphere için 3 foto** (mum/sofra/deniz teması)
- **Gallery için 8-12+ foto** (sofra, atmosfer, yemek, dış mekan — varied)
- **Logo dosyası** (PNG veya SVG)
- **Gerçek menü** (kategoriler + yemek listesi)
- **Instagram URL'si**
- **Gerçek çalışma saatleri**
- **Google Maps embed iframe** (claim edilmiş işletme sayfası varsa)
- **Domain + GitHub hesabı bilgisi** (deploy zamanı geldiğinde)

### Notlar / Riskler
- **Lightbox şu an placeholder gradient gösteriyor** — Phase 3'te Gallery `render` fonksiyonu değişecek, Lightbox dokunulmayacak.
- **Menu örnek yemekler** live'a çıkmadan önce mutlaka müşteri menüsüyle değiştirilmeli.
- **Map iframe** search-based URL kullanıyor, yanlış yer gösterebilir — müşterinin claim ettiği işletme sayfasının iframe kodu daha doğru olur.
- **Next.js 16 docs** `website/node_modules/next/dist/docs/` altında — yeni feature eklerken oradan oku (AGENTS.md uyarısı geçerli).
- Tüm Türkçe metin **`lib/content.ts`'de** — gelecek session'da bileşene hard-code yazmamaya dikkat.

---
