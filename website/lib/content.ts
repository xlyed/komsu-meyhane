export const content = {
  brand: {
    name: "Komşu Meyhane",
    nameShort: "Komşu",
  },
  nav: {
    links: [
      { label: "Hikâye", href: "#story" },
      { label: "Menü", href: "#menu" },
      { label: "Galeri", href: "#gallery" },
      { label: "Konum", href: "#location" },
    ],
    reserveLabel: "Rezervasyon",
    reserveHref: "tel:05309053535",
  },
  hero: {
    title: "Kıyıda başlayan uzun akşamlar",
    subtitle:
      "Denizin sesi, mum ışığı ve ağır ilerleyen sofralar aynı masada buluşuyor.",
    ctaPrimary: { label: "Rezervasyon", href: "tel:05309053535" },
    ctaSecondary: { label: "Menü", href: "#menu" },
    scrollHint: "Aşağı in",
  },
  atmosphere: {
    eyebrow: "Atmosfer",
    sectionTitle: "Akşamın ritmine bırak",
    lead: "Gün batımı yavaşça geceye dönerken masalar dolmaya başlar. Burada zaman acele etmez.",
    cards: [
      {
        key: "candle",
        title: "Sessiz Işık",
        caption: "Mumların arasında gece usulca derinleşir.",
      },
      {
        key: "sea",
        title: "Kıyı Havası",
        caption: "Denizden gelen serinlik masalara karışır.",
      },
      {
        key: "table",
        title: "Uzun Sofralar",
        caption: "Paylaşılan tabaklar gecenin ritmini belirler.",
      },
    ],
  },
  story: {
    eyebrow: "Hikâye",
    sectionTitle: "Bazı akşamlar yalnızca yaşanmak ister.",
    paragraphs: [
      "Burada hiçbir şey acele başlamaz. Önce masaya rüzgâr oturur, ardından hafif bir müzik ve uzun sohbetler gelir. Günün gürültüsü kıyıda yavaş yavaş geride kalır.",
      "Rakılar ağır ağır doldurulur, tabaklar ortaya gelir. Akşam derinleştikçe masaların ritmi değişir; sohbetler uzar, kahkahalar çoğalır, zaman biraz daha hafif akar.",
      "Bizim için meyhane yalnızca yemek değil, bir ruh hâlidir. Uzayan akşamların, eski şarkıların ve aynı masada tekrar buluşmanın bahanesidir. Bazı insanlar bir kez gelir, sonra hep geri döner.",
    ],
    pullQuote: "Gece yavaşlasın.",
  },
  menu: {
    eyebrow: "Lezzet",
    sectionTitle: "Menü",
    intro:
      "Mevsimine göre değişen mezeler ve kıyı sofralarından ilham alan tatlar hazırlıyoruz. Her tabak uzun akşamlara eşlik etsin diye düşünülüyor.",
    note: "Tam menü ve günlük seçenekler için bizi arayın.",
    categories: [
      {
        key: "meze",
        title: "Mezeler",
        subtitle: "Soğuk başlangıçlar",
        items: [
          { name: "Haydari", note: "süzme yoğurt, taze nane" },
          { name: "Acılı Ezme", note: "domates, biber, sumak" },
          { name: "Patlıcan Salatası", note: "közlenmiş, sarımsaklı" },
          { name: "Topik", note: "nohut, tahin, kuş üzümü" },
          { name: "Lakerda", note: "tuzlanmış palamut" },
        ],
      },
      {
        key: "deniz",
        title: "Deniz Mahsulleri",
        subtitle: "Günün avından",
        items: [
          { name: "Çupra Izgara", note: "limon, zeytinyağı" },
          { name: "Levrek Buğulama", note: "rezene, beyaz şarap" },
          { name: "Karides Güveç", note: "kiremitte, kaşarlı" },
          { name: "Kalamar Tava", note: "sarımsaklı sos" },
          { name: "Midye Dolma", note: "baharatlı pilav" },
        ],
      },
      {
        key: "sicak",
        title: "Sıcaklar",
        subtitle: "Ara sıcak ve ana yemekler",
        items: [
          { name: "Arnavut Ciğeri", note: "soğan, maydanoz" },
          { name: "Sigara Böreği", note: "beyaz peynir, maydanoz" },
          { name: "Tereyağlı Karides", note: "sarımsak, dereotu" },
          { name: "Sahanda Sucuk", note: "kahvaltı klasiği" },
        ],
      },
      {
        key: "icecek",
        title: "İçecekler",
        subtitle: "Rakı, şarap ve daha fazlası",
        items: [
          { name: "Yeni Rakı", note: "tek / duble" },
          { name: "Tekirdağ Rakısı", note: "tek / duble" },
          { name: "Ege Beyaz Şarabı", note: "kadeh / şişe" },
          { name: "Yerel Kırmızı", note: "kadeh / şişe" },
          { name: "Ev Yapımı Limonata", note: "taze sıkım" },
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Galeri",
    sectionTitle: "Akşamlar",
    lead: "Bazı anlar yalnızca ışığıyla bile hatırlanır.",
    items: [
      {
        caption: "Gün batımı, kıyının hemen yanı",
        gradient:
          "linear-gradient(170deg, #1A2E42 0%, #3D5A7A 50%, #C8954C 100%)",
        aspect: "aspect-[3/4]",
      },
      {
        caption: "Masada bir mum, sohbet uzar",
        gradient:
          "radial-gradient(ellipse at 50% 80%, rgba(232,184,114,0.6), transparent 60%), #0B1B2B",
        aspect: "aspect-[4/3]",
      },
      {
        caption: "Mezelerden bir kesit",
        gradient:
          "linear-gradient(140deg, #1A2E42 0%, #2A1810 60%, #C8954C 100%)",
        aspect: "aspect-square",
      },
      {
        caption: "Denizin tuzu, Ege'nin nefesi",
        gradient:
          "linear-gradient(190deg, #0B1B2B 0%, #1A2E42 50%, #3D5A7A 100%)",
        aspect: "aspect-[4/5]",
      },
      {
        caption: "Kadehler tazelenirken",
        gradient:
          "radial-gradient(ellipse at 30% 30%, rgba(200,149,76,0.5), transparent 65%), #1A2E42",
        aspect: "aspect-[3/4]",
      },
      {
        caption: "Akşamın ilk saatleri",
        gradient:
          "linear-gradient(180deg, #C8954C 0%, #1A2E42 60%, #0B1B2B 100%)",
        aspect: "aspect-[5/4]",
      },
      {
        caption: "Fenerler yanmaya başlarken",
        gradient:
          "radial-gradient(ellipse at 70% 40%, rgba(232,184,114,0.45), transparent 55%), #0B1B2B",
        aspect: "aspect-square",
      },
      {
        caption: "Bir akşamın sonu",
        gradient:
          "linear-gradient(160deg, #0B1B2B 0%, #1A1410 70%, #2A1810 100%)",
        aspect: "aspect-[4/5]",
      },
    ],
  },
  location: {
    eyebrow: "Konum",
    sectionTitle: "Kıyının sakin bir köşesinde, uzun sofraların yanında buluşuyoruz.",
    name: "Komşu Meyhane",
    phone: "0530 905 35 35",
    address: "Sakarya Mah. Atatürk Bulv. 20. Sokak No:5, Ayvalık",
    addressShort: "Sakarya Mah., Ayvalık",
    hours: "Hergün 18:00 — 00:00",
    hoursNote: "Saatler güncel değil — lütfen bizi arayın.",
    directionsLabel: "Yol Tarifi Al",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kom%C5%9Fu+Meyhane+Ayval%C4%B1k",
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Kom%C5%9Fu+Meyhane+Sakarya+Mah+Atat%C3%BCrk+Bulvar%C4%B1+Ayval%C4%B1k&output=embed",
  },
  footer: {
    tagline: "Uzayan akşamların kıyısında.",
    contactEyebrow: "İletişim",
    socialEyebrow: "Sosyal",
    socialPending: "Yakında",
    instagramUrl: "https://www.instagram.com/komsu_meyhane/",
    instagramHandle: "@komsu_meyhane",
    backToTop: "Başa Dön",
    copyright: "© 2026 Komşu Meyhane. Tüm hakları saklıdır.",
  },
} as const;

export type Content = typeof content;
