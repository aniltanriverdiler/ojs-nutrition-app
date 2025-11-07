import { Review } from "@/types/reviews";

export const mockReviews: Review[] = [
  {
    id: 1,
    rating: 5,
    date: "03/05/2024",
    title: "Beğendim gayet güzeldi",
    text: "Ürün gayet güzel ama ekşiliği bir süreden sonra bayabiliyor insanı. Teşekkürler.",
    author: "Anıl T.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
  {
    id: 2,
    rating: 5,
    date: "21/06/2024",
    title: "Hızlı teslimat",
    text: "Kargom çok hızlı geldi. Tadını da çok beğendim, tekrar alırım.",
    author: "Elif K.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
  {
    id: 3,
    rating: 4,
    date: "02/07/2024",
    title: "Lezzetli",
    text: "Genel olarak başarılı. Bir tık daha az ekşi olsa mükemmel olurdu.",
    author: "Mert A.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
  {
    id: 4,
    rating: 5,
    date: "10/08/2024",
    title: "Harika deneyim",
    text: "Paketleme çok özenliydi. Ailecek severek tüketiyoruz.",
    author: "Selin D.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
  {
    id: 5,
    rating: 5,
    date: "15/09/2024",
    title: "Taze ve kaliteli",
    text: "Gerçekten taze. İçeriği temiz olduğu için gönül rahatlığıyla aldım.",
    author: "Baran Y.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
  {
    id: 6,
    rating: 5,
    date: "22/09/2024",
    title: "Mükemmel kalite",
    text: "Fiyat performans açısından çok iyi. Tavsiye ederim, kesinlikle tekrar alacağım.",
    author: "Can Ö.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
  {
    id: 7,
    rating: 4,
    date: "05/10/2024",
    title: "İyi ürün",
    text: "Beklentilerimi karşıladı. Kullanımı kolay ve etkili. Bir sonraki siparişimde yine bunu alacağım.",
    author: "Zeynep S.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
  {
    id: 8,
    rating: 5,
    date: "18/10/2024",
    title: "Çok memnun kaldım",
    text: "Ürün gerçekten kaliteli. Paketleme de çok iyiydi. Hızlı kargo için teşekkürler.",
    author: "Emre B.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
  {
    id: 9,
    rating: 5,
    date: "01/11/2024",
    title: "Harika",
    text: "İkinci kez alıyorum. İlk aldığımdan beri düzenli kullanıyorum ve çok memnunum.",
    author: "Ayşe M.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
  {
    id: 10,
    rating: 4,
    date: "14/11/2024",
    title: "Başarılı",
    text: "Ürün beklentilerimi karşıladı. Fiyatına göre çok iyi bir kalite. Tavsiye ederim.",
    author: "Kerem L.",
    productImage: "/images/gold-whey.png",
    readMoreHref: "#",
  },
];

export function getHomeReviews(limit?: number): Review[] {
  return limit ? mockReviews.slice(0, limit) : mockReviews;
}

export function getReviewsSummary() {
  return {
    totalReviews: 19845,
    averageRating: 5,
  };
}
