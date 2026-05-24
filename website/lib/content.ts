export const content = {
  hero: {
    title: "Deniz kenarında, akşamın en sevdiğin yeri.",
    subtitle:
      "Ayvalık'ta gün batımının bir akşama dönüştüğü, uzun sofraların huzuruyla.",
    ctaPrimary: "Rezervasyon",
    ctaSecondary: "Menüyü Gör",
  },
  atmosphere: {
    sectionTitle: "Bir akşamın ritmi",
    lead: "Mum ışığı, ahşap masalar, denizin tuzu. Komşu Meyhane bir restoran değil, bir ev hissi.",
  },
  story: {
    sectionTitle: "Hikâye",
    paragraphs: [
      "Komşu Meyhane, Ayvalık'ın eski mahallelerinden birinde, denizin hemen yanında doğdu. Buraya gelenler komşu olur — kısa süreliğine de olsa.",
      "Mezelerimiz mevsiminde, balıklarımız o sabahki. Şarabımız Ege'den, sohbetimiz uzun. Acelemiz yok.",
      "Aile yemeği gibi başlayan akşamlar, yıldızlar çıktığında bambaşka bir tat alır. Sen de bizim komşumuz ol.",
    ],
  },
  menu: {
    sectionTitle: "Sofra",
    intro:
      "Mezelerimiz her gün taze hazırlanır. Balıklarımız o günün avına göre değişir.",
  },
  gallery: {
    sectionTitle: "Anlardan",
  },
  location: {
    name: "Komşu Meyhane",
    phone: "0530 905 35 35",
    address: "Sakarya Mah. Atatürk Bulv. 20. Sokak No:5, Ayvalık",
    mapsUrl: "https://maps.google.com/?q=Komşu+Meyhane+Ayvalık",
    mapsEmbedSrc: "",
  },
  footer: {
    tagline: "Ayvalık'ta deniz kenarında bir meyhane.",
    instagramUrl: "",
    copyright: "© 2026 Komşu Meyhane",
  },
} as const;

export type Content = typeof content;
