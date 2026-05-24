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
