// Mock FAQ data for the "Sıkça Sorulan Sorular" page
// Categories are based on the UI: Genel, Ürünler, Kargo

export type FaqCategorySlug = "genel" | "urunler" | "kargo";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSection {
  slug: FaqCategorySlug;
  title: string;
  items: FaqItem[];
}

export const FAQ_SECTIONS: FaqSection[] = [
  {
    slug: "genel",
    title: "GENEL",
    items: [
      {
        id: "genel-1",
        question: "OJS Nutrition ürünlerinin menşei neresi?",
        answer:
          "OJS Nutrition ürünleri Türkiye'de GMP ve ISO 22000 standartlarına uygun tesislerde üretilir. Ürün içeriklerimiz Avrupa Birliği mevzuatına ve T.C. Tarım ve Orman Bakanlığı düzenlemelerine göre formüle edilmiştir.",
      },
      {
        id: "genel-2",
        question: "Hangi sertifikalarınız var?",
        answer:
          "Tesislerimiz ISO 22000 Gıda Güvenliği Yönetim Sistemi ve HACCP sertifikalarına sahiptir. Hammadde tedarikçilerimizden gelen parti analizleri ayrıca ürünlerimiz üretim sonrası mikrobiyolojik ve ağır metal testlerinden geçirilir.",
      },
      {
        id: "genel-3",
        question: "Satılan ürünler garantili midir? Değişim var mı?",
        answer:
          "Tüm ürünlerimiz orijinal, adınıza kesilen e‑fatura ile gönderilir. Ambalaj hasarlı, son kullanma tarihi geçmiş veya yanlış ürün gelmesi durumunda 14 gün içinde ücretsiz değişim/iadeyi başlatabilirsiniz.",
      },
      {
        id: "genel-4",
        question: "Sipariş verirken sorun yaşıyorum, ne yapmam gerekir?",
        answer:
          "Ödeme veya adres adımında sorun yaşarsanız canlı destekten bize ulaşın ya da support@ojsnutrition.com adresine ekran görüntüsü ile e‑posta gönderin. Ekibimiz en kısa sürede yardımcı olur.",
      },
      {
        id: "genel-5",
        question: "OJS Nutrition ürünleri nerede satılıyor?",
        answer:
          "Ürünlerimizi ojsnutrition.com üzerinden, yetkili e‑ticaret mağazalarımızda ve seçili spor salonu iş ortaklarımızda bulabilirsiniz. Yetkili satıcı listesi için müşteri hizmetleriyle iletişime geçebilirsiniz.",
      },
      {
        id: "genel-6",
        question: "Yüksek proteinli ürünleri kimler kullanabilir?",
        answer:
          "Düzenli egzersiz yapan yetişkinler, günlük protein ihtiyacını karşılamak isteyen bireyler ve doktoru tarafından kısıtlanmamış kişiler kullanabilir. Hamilelik, emzirme, kronik hastalık veya ilaç kullanımı durumlarında hekiminize danışın.",
      },
      {
        id: "genel-7",
        question: "Taksit seçeneği neden yok?",
        answer:
          "Taksit imkanı, ödeme sağlayıcılarının sektör bazlı kısıtlamalarına göre belirlenir. Uygun kartlarda 2‑3 taksit seçenekleri dönemsel olarak açılmaktadır. Sepette, kartınıza uygun taksitler otomatik görünür.",
      },
      {
        id: "genel-8",
        question: "Siparişimi nasıl iptal edebilirim?",
        answer:
          "Siparişiniz kargoya verilmeden önce hesap sayfanızdaki sipariş detayından iptal talebi oluşturabilirsiniz. Kargoya verildiyse teslim almadan iade sürecini başlatabilirsiniz.",
      },
      {
        id: "genel-9",
        question:
          "Kapağın altındaki folyo açılmış veya tam yapışmamış gibi duruyor, ne yapmalıyım?",
        answer:
          "Ürün güvenliği için kapak altı emniyet bandı bulunur. Folyoda üretimden kaynaklı hava boşluğu görünebilir; bu bozulma değildir. Emin olamadığınız durumlarda lütfen ürün kodu ve fotoğrafla bize ulaşın.",
      },
      {
        id: "genel-10",
        question: "Sattığınız ürünler ilaç mıdır?",
        answer:
          "Hayır. Ürünlerimiz takviye edici gıda kategorisindedir, ilaç değildir. Hastalıkların önlenmesi veya tedavisi amacıyla kullanılmaz.",
      },
      {
        id: "genel-11",
        question: "Siparişimi teslim alırken nelere dikkat etmeliyim?",
        answer:
          "Kargo tesliminde paketi kargo görevlisinin yanında kontrol edin. Hasar, sızıntı veya eksik ürün varsa tutanak tutturup bize iletin. Böylece hızlı şekilde tekrar gönderim yapabiliriz.",
      },
      {
        id: "genel-12",
        question: "Kapıda ödeme hizmetiniz var mı?",
        answer:
          "Şu an için kapıda ödeme hizmetimiz yoktur. Kredi/Banka kartı ve havale/EFT seçenekleri mevcuttur.",
      },
      {
        id: "genel-13",
        question: "Sipariş takibini nasıl yapabilirim?",
        answer:
          "Siparişiniz kargoya verildiğinde SMS/e‑posta ile kargo takip numarası gönderilir. Ayrıca hesap > siparişlerim sayfasından anlık durumunu görebilirsiniz.",
      },
      {
        id: "genel-14",
        question:
          "İptal ve iade ettiğim ürünlerin tutarı hesabıma ne zaman aktarılır?",
        answer:
          "İade onayından sonra bankanıza bağlı olarak 1‑7 iş günü içinde tutar kartınıza yansır. Havale/EFT iadeleri aynı gün içinde yapılır.",
      },
    ],
  },
  {
    slug: "urunler",
    title: "ÜRÜNLER",
    items: [
      {
        id: "urunler-1",
        question: "BCAA+ ile BCAA 4:1:1 arasındaki fark nedir?",
        answer:
          "BCAA+ formülümüzde ek elektrolit ve B6 vitamini bulunur; antrenman sırasında hidrasyon ve enerji metabolizmasını destekler. 4:1:1 oranı ise lösin ağırlıklı klasik BCAA dengesidir. Hedefinize göre seçim yapabilirsiniz.",
      },
      {
        id: "urunler-2",
        question: "Green Detox ne işe yarar? Ne zaman kullanılmalıdır?",
        answer:
          "Green Detox, sebze‑meyve ekstraktları, lif ve probiyotik içeriğiyle günlük beslenmeyi destekler. Sabah aç karnına veya öğün aralarında kullanılabilir.",
      },
      {
        id: "urunler-3",
        question:
          "Spora yeni başladım, hacim kazanmak ve kas yapmak için ne kullanmalıyım?",
        answer:
          "Temel seçenekler: Whey protein (antrenman sonrası), kreatin monohidrat (günlük 3‑5 g), yeterli kalori alımı. Programınıza göre BCAA/EAA ve gainer da eklenebilir.",
      },
      {
        id: "urunler-4",
        question: "Ürünlerinizde ölçek bulunuyor mu?",
        answer:
          "Toz ürünlerimizin tamamında kutu içinde ölçek bulunur. Kayıp/eksik durumunda destek ekibimiz ücretsiz ölçek gönderimi sağlar.",
      },
      {
        id: "urunler-5",
        question: "Kilo veremiyorum, ne kullanmam lazım?",
        answer:
          "Kalori açığı oluşturmak esastır. Kafein/yeşil çay içerikli termojenikler antrenman performansını destekleyebilir. Her zaman beslenme planı ve uyku düzeniyle birlikte düşünülmelidir.",
      },
      {
        id: "urunler-6",
        question: "Kilo alamıyorum, ne kullanmam lazım?",
        answer:
          "Toplam kalori artırımı için gainer ürünleri pratik çözümdür. Öğün aralarında 1‑2 servis, kreatin ile birlikte kullanım önerilir. Direnç antrenmanı ile destekleyin.",
      },
      {
        id: "urunler-7",
        question: "Mass Gainer kullanarak 1 ayda kaç kilo alırım?",
        answer:
          "Kazanım; kalori fazlanız, antrenman ve uykuya bağlıdır. Ortalama haftalık 0.25‑0.5 kg sağlıklı artış hedeflenmelidir. Ürün tek başına kilo aldırmaz; düzenli beslenme şarttır.",
      },
      {
        id: "urunler-8",
        question:
          "Dekstroz, Maltodekstrin, Mass Gainer arasında ne gibi farklar var?",
        answer:
          "Dekstroz hızlı emilen basit karbonhidrattır; antrenman sonrası glikojen yenilemeye uygundur. Maltodekstrin orta hızlıdır. Gainer ise protein‑karbonhidrat karışımıdır; öğün arası kalori desteği sağlar.",
      },
      {
        id: "urunler-9",
        question: "Pre‑workout aldım işe yaramadı, nasıl kullanmalıyım?",
        answer:
          "Antrenmandan 20‑30 dakika önce, aç/kısmen boş mide ile deneyin. Kafein toleransı bireyseldir; öğleden sonra kullanımlarda uyku düzenine dikkat edin.",
      },
      {
        id: "urunler-10",
        question:
          "Pre‑workout kullandıktan sonra vücudumda neden karıncalanmalar oluyor?",
        answer:
          "Bu his genellikle beta‑alanin kaynaklıdır ve geçicidir. Rahatsızlık veriyorsa dozu bölerek tüketebilir veya beta‑alaninsiz pre‑workout tercih edebilirsiniz.",
      },
    ],
  },
  {
    slug: "kargo",
    title: "KARGO",
    items: [
      {
        id: "kargo-1",
        question: "Şimdi sipariş versem ne zaman elime ulaşır?",
        answer:
          "Hafta içi saat 14:00'e kadar verilen siparişler aynı gün kargoya teslim edilir. Büyük şehirlere teslimat genellikle 1‑2 iş günüdür.",
      },
      {
        id: "kargo-2",
        question: "Hafta sonu verilen siparişler hangi gün kargolanır?",
        answer:
          "Cumartesi 12:00 sonrası ve Pazar verilen siparişler Pazartesi kargoya teslim edilir.",
      },
      {
        id: "kargo-3",
        question: "Kargo ücreti var mı?",
        answer:
          "Belirli sepet tutarı üzeri siparişlerde kargo ücretsizdir. Kampanya eşiği ve güncel kargo ücretleri sepet sayfasında görüntülenir.",
      },
      {
        id: "kargo-4",
        question: "Yurt dışına kargo hizmetiniz var mı?",
        answer:
          "Şimdilik yalnızca Türkiye içi teslimat yapıyoruz. Yurt dışı gönderimler için çalışmalarımız sürüyor.",
      },
    ],
  },
];

export function getFaqSections(): FaqSection[] {
  return FAQ_SECTIONS;
}

export function getFaqByCategory(slug: FaqCategorySlug): FaqItem[] {
  return FAQ_SECTIONS.find((s) => s.slug === slug)?.items ?? [];
}

export function searchFaqs(query: string): FaqItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return FAQ_SECTIONS.flatMap((s) => s.items).filter(
    (i) =>
      i.question.toLowerCase().includes(q) || i.answer.toLowerCase().includes(q)
  );
}


