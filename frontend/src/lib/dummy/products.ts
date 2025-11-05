import {
  ProductsListResponse,
  ProductResponse,
  ProductsDetailsResponse,
  ProductsBestSellersResponse,
  ProductDetail,
  BestSellerProduct,
  Product,
} from "@/types/product";

export const mockProductsList: ProductsListResponse = {
  status: "success",
  data: {
    count: 85,
    next: "https://fe1111.projects.academy.onlyjs.com/api/v1/products/?limit=20&offset=20",
    previous: null,
    results: [
      {
        name: "WHEY ISOLATE",
        short_explanation: "%90 PROTEİNLİ EN SAF WHEY",
        slug: "whey-isolate",
        price_info: {
          profit: null,
          total_price: 749,
          discounted_price: null,
          price_per_servings: 46.81,
          discount_percentage: null,
        },
        photo_src: "/media/whey-isolate_400_biscuit.webp",
        comment_count: 0,
        average_star: 0,
        id: "2",
      },
      {
        name: "WHEY PROTEIN",
        short_explanation: "En Saf Whey",
        slug: "whey-protein",
        price_info: {
          profit: null,
          total_price: 549,
          discounted_price: null,
          price_per_servings: 31.31,
          discount_percentage: null,
        },
        photo_src: "/media/whey-protein_400_biscuit.webp",
        comment_count: 0,
        average_star: 0,
        id: "3",
      },
      {
        name: "PEA PROTEIN",
        short_explanation: "EN POPÜLER VEGAN PROTEİN KAYNAĞI",
        slug: "pea-protein",
        price_info: {
          profit: null,
          total_price: 349,
          discounted_price: null,
          price_per_servings: 21.81,
          discount_percentage: null,
        },
        photo_src: "/media/pea-protein_400_strawberry.webp",
        comment_count: 0,
        average_star: 0,
        id: "4",
      },
      {
        name: "MICELLAR CASEIN",
        short_explanation: "YAVAŞ SİNDİRİLEN PROTEİN KAYNAĞI",
        slug: "micellar-casein",
        price_info: {
          profit: null,
          total_price: 599,
          discounted_price: null,
          price_per_servings: 37.44,
          discount_percentage: null,
        },
        photo_src: "/media/micellar-casein_400_strawberry.webp",
        comment_count: 0,
        average_star: 0,
        id: "5",
      },
      {
        name: "EGG WHITE POWDER",
        short_explanation: "PROTEİNİN ALTIN STANDARTI",
        slug: "egg-white-powder",
        price_info: {
          profit: null,
          total_price: 899,
          discounted_price: null,
          price_per_servings: 56.19,
          discount_percentage: null,
        },
        photo_src: "/media/egg-white-powder_400_.webp",
        comment_count: 0,
        average_star: 0,
        id: "6",
      },
      {
        name: "MILK PROTEIN",
        short_explanation: "%80 KAZEIN, %20 WHEY PROTEİNİ",
        slug: "milk-protein",
        price_info: {
          profit: null,
          total_price: 699,
          discounted_price: null,
          price_per_servings: 43.69,
          discount_percentage: null,
        },
        photo_src: "/media/milk-protein_400_strawberry.webp",
        comment_count: 0,
        average_star: 0,
        id: "7",
      },
      {
        name: "SOYA PROTEIN",
        short_explanation: "VEGAN PROTEİN KAYNAĞI",
        slug: "soya-protein",
        price_info: {
          profit: null,
          total_price: 449,
          discounted_price: null,
          price_per_servings: 28.06,
          discount_percentage: null,
        },
        photo_src: "/media/soya-protein_400_strawberry.webp",
        comment_count: 0,
        average_star: 0,
        id: "8",
      },
      {
        name: "COLLAGEN",
        short_explanation: "VÜCUTTAKİ EN BOL PROTEİN",
        slug: "collagen",
        price_info: {
          profit: null,
          total_price: 449,
          discounted_price: null,
          price_per_servings: 19.69,
          discount_percentage: null,
        },
        photo_src: "/media/collagen_250_raspberry.webp",
        comment_count: 0,
        average_star: 0,
        id: "9",
      },
      {
        name: "MASS GAINER",
        short_explanation: "YÜKSEK KALORİLİ PRATİK ÖĞÜN",
        slug: "mass-gainer",
        price_info: {
          profit: null,
          total_price: 999,
          discounted_price: null,
          price_per_servings: 36.96,
          discount_percentage: null,
        },
        photo_src: "/media/mass-gainer_2500_strawberry.webp",
        comment_count: 0,
        average_star: 0,
        id: "10",
      },
      {
        name: "VEGAN GAINER",
        short_explanation: "VEGANLAR İÇİN YÜKSEK PROTEİNLİ VE KALORİLİ ÖĞÜN",
        slug: "vegan-gainer",
        price_info: {
          profit: null,
          total_price: 999,
          discounted_price: null,
          price_per_servings: 36.96,
          discount_percentage: null,
        },
        photo_src: "/media/vegan-gainer_2500_strawberry.webp",
        comment_count: 0,
        average_star: 0,
        id: "11",
      },
      {
        name: "CREATINE",
        short_explanation: "EN POPÜLER SPORCU TAKVİYESİ",
        slug: "creatine",
        price_info: {
          profit: null,
          total_price: 239,
          discounted_price: null,
          price_per_servings: 5.97,
          discount_percentage: null,
        },
        photo_src: "/media/creatine_120_.webp",
        comment_count: 0,
        average_star: 0,
        id: "12",
      },
      {
        name: "CREATINE CREAPURE",
        short_explanation: "PATENTLİ ALMAN HAMMADDE",
        slug: "creatine-creapure",
        price_info: {
          profit: null,
          total_price: 599,
          discounted_price: null,
          price_per_servings: 7.22,
          discount_percentage: null,
        },
        photo_src: "/media/creatine-creapure_250_.webp",
        comment_count: 0,
        average_star: 0,
        id: "13",
      },
      {
        name: "BCAA 4:1:1",
        short_explanation: "DAHA ÇOK LÖSİN",
        slug: "bcaa-411",
        price_info: {
          profit: null,
          total_price: 219,
          discounted_price: null,
          price_per_servings: 9.13,
          discount_percentage: null,
        },
        photo_src: "/media/bcaa-411_120_apple.webp",
        comment_count: 0,
        average_star: 0,
        id: "14",
      },
      {
        name: "L-CARNITINE",
        short_explanation: "TOZ FORMU SAYESİNDE KOLAY TÜKETİM",
        slug: "l-carnitine",
        price_info: {
          profit: null,
          total_price: 399,
          discounted_price: null,
          price_per_servings: 7.98,
          discount_percentage: null,
        },
        photo_src: "/media/l-carnitine_150_apple.webp",
        comment_count: 0,
        average_star: 0,
        id: "15",
      },
      {
        name: "GLUTAMINE",
        short_explanation: "KASTA EN ÇOK BULUNAN AMİNO ASİT",
        slug: "glutamine",
        price_info: {
          profit: null,
          total_price: 199,
          discounted_price: null,
          price_per_servings: 8.29,
          discount_percentage: null,
        },
        photo_src: "/media/glutamine_120_.webp",
        comment_count: 0,
        average_star: 0,
        id: "16",
      },
      {
        name: "EAA+",
        short_explanation: "ESANSİYEL AMİNO ASİT KAYNAĞI",
        slug: "eaa",
        price_info: {
          profit: null,
          total_price: 219,
          discounted_price: null,
          price_per_servings: 18.25,
          discount_percentage: null,
        },
        photo_src: "/media/eaa_120_apple.webp",
        comment_count: 0,
        average_star: 0,
        id: "17",
      },
      {
        name: "ARGININE",
        short_explanation: "%100 ARGININE",
        slug: "arginine",
        price_info: {
          profit: null,
          total_price: 229,
          discounted_price: null,
          price_per_servings: 9.54,
          discount_percentage: null,
        },
        photo_src: "/media/arginine_120_.webp",
        comment_count: 0,
        average_star: 0,
        id: "18",
      },
      {
        name: "TAURINE",
        short_explanation: "ENERJİ İÇECEKLERİNDE EN YAYGIN KULLANILAN ÜRÜN",
        slug: "taurine",
        price_info: {
          profit: null,
          total_price: 249,
          discounted_price: null,
          price_per_servings: 2.49,
          discount_percentage: null,
        },
        photo_src: "/media/taurine_300_.webp",
        comment_count: 0,
        average_star: 0,
        id: "19",
      },
      {
        name: "LEUCINE",
        short_explanation: "%100 LÖSİN",
        slug: "leucine",
        price_info: {
          profit: null,
          total_price: 499,
          discounted_price: null,
          price_per_servings: 8.32,
          discount_percentage: null,
        },
        photo_src: "/media/leucine_300_.webp",
        comment_count: 0,
        average_star: 0,
        id: "20",
      },
      {
        name: "HEAVY DUTY PRE-WORKOUT",
        short_explanation: "SERT VE UZUN ANTRENMANLAR İÇİN",
        slug: "heavy-duty-preworkout",
        price_info: {
          profit: null,
          total_price: 599,
          discounted_price: null,
          price_per_servings: 29.95,
          discount_percentage: null,
        },
        photo_src: "/media/heavy-duty-preworkout_300_apple.webp",
        comment_count: 0,
        average_star: 0,
        id: "21",
      },
    ],
  },
};

export const mockProduct: ProductResponse = {
  status: "success",
  data: {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        name: "EGG WHITE POWDER",
        short_explanation: "PROTEİNİN ALTIN STANDARTI",
        slug: "egg-white-powder",
        price_info: {
          profit: null,
          total_price: 899,
          discounted_price: null,
          price_per_servings: 56.19,
          discount_percentage: null,
        },
        photo_src: "/media/egg-white-powder_400_.webp",
        comment_count: 0,
        average_star: 0,
        id: "6",
      },
    ],
  },
};

export const mockProductsDetails: ProductsDetailsResponse = {
  status: "success",
  data: [
    {
      id: "3",
      name: "WHEY PROTEIN",
      slug: "whey-protein",
      short_explanation: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
      explanation: {
        usage:
          "Antrenman sonrası ve sabah uyandığında, su veya süt ile karıştırarak tüketilmesini öneririz. 1 ölçek (yaklaşık 25 gram) ürünü 200 ml su veya süt ile karıştırarak tüketebilirsiniz.\n\nÖnemli Not: Ürünün köpürmesi doğaldır ve köpüğün geçmesi için birkaç dakika bekletmek yeterlidir.\n\nBunun dışında ihtiyacına göre pratik ve lezzetli bir şekilde gün içerisinde protein tüketmek için idealdir. Bu şekilde günde 1-4 servis kullanılabilir.\n\nNe kadar az sıvı kullanırsan tadı o kadar yoğun olacaktır. Damak tadına göre koyacağın sıvı miktarını ayarlayabilirsin.",
        features:
          "Yüksek proteinli beslenmek spordaki hedeflerine ulaşman için gereklidir. Spor salonuna uzun süre gidip, yeterli kas gelişimi gösterilememesinin en büyük sebeplerinden biri yeterli protein tüketmemektir. Mevcut kas kütlesini korumak ve zayıflandığında formda ve sıkı bir vücut elde etmek için yüksek protein tüketmek gerekir.",
        description:
          "Biyoyararlılığı ve hızlı sindirimi sayesinde dünyada en popüler protein kaynağıdır. İlave sindirim enzimi ile zenginleştirilmiştir.\n\n-   Patentli DigeZyme® ilavelidir.\n-   Alman menşeli hammadde ile üretilmiştir.\n-   Normal protein metabolizmasına katkıda bulunan B6 Vitamini ilaveli.\n-   Birbirinden lezzetli aromalar ile keyifle tüketilebilir.",
        nutritional_content: {
          ingredients: [
            {
              aroma: "Bisküvi Aromalı",
              value:
                "Whey Proteini Konsantresi (Süt), Aroma Verici, DigeZyme® (Multi-Enzim Karışımı), Tatlandırıcı: Sukraloz, Emülgatör: Ayçiçek Lesitini, B6 Vitamini (Piridoksin HCL)",
            },
            {
              aroma: "Çikolata Aromalı",
              value:
                "Whey Proteini Konsantresi (Süt), Aroma Verici, Yağı Azaltılmış Kakao, DigeZyme® (Multi-Enzim Karışımı), Tatlandırıcı: Sukraloz, Emülgatör: Ayçiçek Lesitini, B6 Vitamini (Piridoksin HCL)",
            },
            {
              aroma: "Choco Nut Aromalı",
              value:
                "Whey Proteini Konsantresi (Süt), Aroma Verici, Yağı Azaltılmış Kakao, DigeZyme® (Multi-Enzim Karışımı), Tatlandırıcı: Sukraloz, Emülgatör: Ayçiçek Lesitini, B6 Vitamini (Piridoksin HCL)",
            },
            {
              aroma: "Salted Caramel Aromalı",
              value:
                "Whey Proteini Konsantresi (Süt), Aroma Verici, Himalaya Tuzu, Renklendirici: Karamel, DigeZyme® (Multi-Enzim Karışımı), Tatlandırıcı: Sukraloz, Emülgatör: Ayçiçek Lesitini, B6 Vitamini (Piridoksin HCL)",
            },
            {
              aroma: "Hindistan Cevizi Aromalı",
              value:
                "Whey Proteini Konsantresi (Süt), Aroma Verici, DigeZyme® (Multi-Enzim Karışımı), Tatlandırıcı: Sukraloz, Emülgatör: Ayçiçek Lesitini, B6 Vitamini (Piridoksin HCL)",
            },
            {
              aroma: "Muz Aromalı",
              value:
                "Whey Proteini Konsantresi (Süt), Aroma Verici, DigeZyme® (Multi-Enzim Karışımı), Tatlandırıcı: Sukraloz, Emülgatör: Ayçiçek Lesitini, B6 Vitamini (Piridoksin HCL)",
            },
            {
              aroma: "Raspberry Cheesecake Aromalı",
              value:
                "Whey Proteini Konsantresi (Süt), Aroma Verici, Renklendirici: Pancar Kökü Kırmızısı, DigeZyme® (Multi-Enzim Karışımı), Tatlandırıcı: Sukraloz, Emülgatör: Ayçiçek Lesitini, Vanilin, B6 Vitamini (Piridoksin HCL)",
            },
            {
              aroma: "Çilek Aromalı",
              value:
                "Whey Proteini Konsantresi (Süt), Aroma Verici, Renklendirici: Pancar Kökü Kırmızısı, DigeZyme® (Multi-Enzim Karışımı), Tatlandırıcı: Sukraloz, Emülgatör: Ayçiçek Lesitini, B6 Vitamini (Piridoksin HCL)",
            },
          ],
          nutrition_facts: {
            ingredients: [
              {
                name: "Enerji",
                amounts: ["399 kj | 94 kcal"],
              },
              {
                name: "Protein",
                amounts: ["19 g"],
              },
              {
                name: "Karbonhidrat",
                amounts: ["1.5 g"],
              },
              {
                name: "Şeker",
                amounts: ["1.5 g"],
              },
              {
                name: "Yağ",
                amounts: ["1.2 g"],
              },
              {
                name: "Doymuş Yağ",
                amounts: ["0.7 g"],
              },
              {
                name: "Tuz",
                amounts: ["0.05 g"],
              },
              {
                name: "B6 Vitamini",
                amounts: ["1.4 mg"],
              },
              {
                name: "DigeZyme®",
                amounts: ["50 mg"],
              },
            ],
            portion_sizes: ["25 g servis için"],
          },
          amino_acid_facts: {
            ingredients: [
              {
                name: "Glutamik Asit",
                amounts: ["13.5 g"],
              },
              {
                name: "Lizin",
                amounts: ["10.7 g"],
              },
              {
                name: "Aspartik Asit",
                amounts: ["10.3 g"],
              },
              {
                name: "Lösin (BCAA)",
                amounts: ["6.4 g"],
              },
              {
                name: "Prolin",
                amounts: ["6.2 g"],
              },
              {
                name: "Treonin",
                amounts: ["5.6 g"],
              },
              {
                name: "İzolösin (BCAA)",
                amounts: ["4.2 g"],
              },
              {
                name: "Serin",
                amounts: ["3.8 g"],
              },
              {
                name: "Alanin",
                amounts: ["3.5 g"],
              },
              {
                name: "Valin (BCAA)",
                amounts: ["3.4 g"],
              },
              {
                name: "Trosin",
                amounts: ["1.9 g"],
              },
              {
                name: "Histidin",
                amounts: ["1.7 g"],
              },
              {
                name: "Metiyonin",
                amounts: ["1.7 g"],
              },
              {
                name: "Fenil Alanin",
                amounts: ["1.7 g"],
              },
              {
                name: "Glisin",
                amounts: ["1.2 g"],
              },
              {
                name: "Arjinin",
                amounts: ["1.1 g"],
              },
            ],
            portion_sizes: ["100 g"],
          },
        },
      },
      main_category_id: "38fb5754-3068-4490-a12a-169fa564c675",
      sub_category_id: "04c9618e-553a-43cd-a72e-b646215d23e5",
      tags: ["VEJETARYEN", "GLUTENSİZ"],
      variants: [
        {
          id: "fb583ba6-62c9-4ae9-ac06-f46c0c01be5e",
          size: {
            gram: 400,
            pieces: 1,
            total_services: 16,
          },
          aroma: "Bisküvi",
          price: {
            profit: null,
            total_price: 549,
            discounted_price: null,
            price_per_servings: 31.31,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_400_biscuit.webp",
          is_available: true,
        },
        {
          id: "de0de01b-6f0d-49fd-bd79-ae832249e4b1",
          size: {
            gram: 1600,
            pieces: 1,
            total_services: 64,
          },
          aroma: "Bisküvi",
          price: {
            profit: null,
            total_price: 1699,
            discounted_price: null,
            price_per_servings: 26.55,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_1600_biscuit.webp",
          is_available: true,
        },
        {
          id: "a0038b29-8472-4483-a13e-eb8baf79ddfa",
          size: {
            gram: 1600,
            pieces: 2,
            total_services: 128,
          },
          aroma: "Bisküvi",
          price: {
            profit: 199,
            total_price: 3398,
            discounted_price: 3199,
            price_per_servings: 26.55,
            discount_percentage: 6,
          },
          photo_src: "/media/whey-protein_1600_2_biscuit.webp",
          is_available: true,
        },
        {
          id: "fcefbb45-3ee6-4159-abbe-c411e279c4ae",
          size: {
            gram: 400,
            pieces: 1,
            total_services: 16,
          },
          aroma: "Çikolata",
          price: {
            profit: null,
            total_price: 549,
            discounted_price: null,
            price_per_servings: 31.31,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_400_chocolate.webp",
          is_available: true,
        },
        {
          id: "6b6fb4fd-d99a-4e92-a39e-e162ef6e0ea8",
          size: {
            gram: 1600,
            pieces: 1,
            total_services: 64,
          },
          aroma: "Çikolata",
          price: {
            profit: null,
            total_price: 1699,
            discounted_price: null,
            price_per_servings: 26.55,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_1600_chocolate.webp",
          is_available: true,
        },
        {
          id: "199429cb-e2f4-4f94-acee-9e6a61e7c0fe",
          size: {
            gram: 1600,
            pieces: 2,
            total_services: 128,
          },
          aroma: "Çikolata",
          price: {
            profit: 199,
            total_price: 3398,
            discounted_price: 3199,
            price_per_servings: 26.55,
            discount_percentage: 6,
          },
          photo_src: "/media/whey-protein_1600_2_chocolate.webp",
          is_available: true,
        },
        {
          id: "ce2fd75b-be39-4f0a-96ee-b52708dd1f84",
          size: {
            gram: 1600,
            pieces: 1,
            total_services: 64,
          },
          aroma: "Muz",
          price: {
            profit: null,
            total_price: 1699,
            discounted_price: null,
            price_per_servings: 26.55,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_1600_banana.webp",
          is_available: true,
        },
        {
          id: "8e2297d4-56e5-4f02-a6ff-5c9368117bc5",
          size: {
            gram: 1600,
            pieces: 2,
            total_services: 128,
          },
          aroma: "Muz",
          price: {
            profit: 199,
            total_price: 3398,
            discounted_price: 3199,
            price_per_servings: 26.55,
            discount_percentage: 6,
          },
          photo_src: "/media/whey-protein_1600_2_banana.webp",
          is_available: true,
        },
        {
          id: "b02aaab5-3904-474f-af06-383e21c30bed",
          size: {
            gram: 400,
            pieces: 1,
            total_services: 16,
          },
          aroma: "Salted Caramel",
          price: {
            profit: null,
            total_price: 549,
            discounted_price: null,
            price_per_servings: 31.31,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_400_saltedcaramel.webp",
          is_available: true,
        },
        {
          id: "b18139b0-fc89-4700-a588-c28c0b50c1e0",
          size: {
            gram: 1600,
            pieces: 1,
            total_services: 64,
          },
          aroma: "Salted Caramel",
          price: {
            profit: null,
            total_price: 1699,
            discounted_price: null,
            price_per_servings: 26.55,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_1600_saltedcaramel.webp",
          is_available: true,
        },
        {
          id: "09a085c5-3482-4459-beee-1626715f8e70",
          size: {
            gram: 1600,
            pieces: 2,
            total_services: 128,
          },
          aroma: "Salted Caramel",
          price: {
            profit: 199,
            total_price: 3398,
            discounted_price: 3199,
            price_per_servings: 26.55,
            discount_percentage: 6,
          },
          photo_src: "/media/whey-protein_1600_2_saltedcaramel.webp",
          is_available: true,
        },
        {
          id: "bb748c75-3972-478f-8fb6-3d38bbf4bb76",
          size: {
            gram: 400,
            pieces: 1,
            total_services: 16,
          },
          aroma: "Choco Nut",
          price: {
            profit: null,
            total_price: 549,
            discounted_price: null,
            price_per_servings: 31.31,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_400_choconut.webp",
          is_available: true,
        },
        {
          id: "5327ec69-1032-45e3-a14e-70c5cc605fc7",
          size: {
            gram: 400,
            pieces: 1,
            total_services: 16,
          },
          aroma: "Hindistan Cevizi",
          price: {
            profit: null,
            total_price: 549,
            discounted_price: null,
            price_per_servings: 31.31,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_400_coconut.webp",
          is_available: true,
        },
        {
          id: "f7af529c-e96a-4cf6-998a-562f7b3b9ceb",
          size: {
            gram: 1600,
            pieces: 1,
            total_services: 64,
          },
          aroma: "Hindistan Cevizi",
          price: {
            profit: null,
            total_price: 1699,
            discounted_price: null,
            price_per_servings: 26.55,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_1600_coconut.webp",
          is_available: true,
        },
        {
          id: "e620d5c3-2da3-4607-878a-42a956bd0147",
          size: {
            gram: 1600,
            pieces: 2,
            total_services: 128,
          },
          aroma: "Hindistan Cevizi",
          price: {
            profit: 199,
            total_price: 3398,
            discounted_price: 3199,
            price_per_servings: 26.55,
            discount_percentage: 6,
          },
          photo_src: "/media/whey-protein_1600_2_coconut.webp",
          is_available: true,
        },
        {
          id: "f94a9ab7-78d3-487c-9bef-a02912a7e0cc",
          size: {
            gram: 400,
            pieces: 1,
            total_services: 16,
          },
          aroma: "Raspberry Cheesecake",
          price: {
            profit: null,
            total_price: 549,
            discounted_price: null,
            price_per_servings: 31.31,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_400_raspberrycheesecake.webp",
          is_available: true,
        },
        {
          id: "d9e5d207-53ab-420e-b65d-b0cbd42ce469",
          size: {
            gram: 1600,
            pieces: 1,
            total_services: 64,
          },
          aroma: "Raspberry Cheesecake",
          price: {
            profit: null,
            total_price: 1699,
            discounted_price: null,
            price_per_servings: 26.55,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_1600_raspberrycheesecake.webp",
          is_available: true,
        },
        {
          id: "dc694a51-dcb9-437f-bf1f-8701086ad2db",
          size: {
            gram: 1600,
            pieces: 2,
            total_services: 128,
          },
          aroma: "Raspberry Cheesecake",
          price: {
            profit: 199,
            total_price: 3398,
            discounted_price: 3199,
            price_per_servings: 26.55,
            discount_percentage: 6,
          },
          photo_src: "/media/whey-protein_1600_2_raspberrycheesecake.webp",
          is_available: true,
        },
        {
          id: "57aba386-b4d4-43af-adca-3aa73c076613",
          size: {
            gram: 400,
            pieces: 1,
            total_services: 16,
          },
          aroma: "Çilek",
          price: {
            profit: null,
            total_price: 549,
            discounted_price: null,
            price_per_servings: 31.31,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_400_strawberry.webp",
          is_available: true,
        },
        {
          id: "a7323fe8-6e42-4208-9105-bc8afe35755a",
          size: {
            gram: 1600,
            pieces: 1,
            total_services: 64,
          },
          aroma: "Çilek",
          price: {
            profit: null,
            total_price: 1699,
            discounted_price: null,
            price_per_servings: 26.55,
            discount_percentage: null,
          },
          photo_src: "/media/whey-protein_1600_strawberry.webp",
          is_available: true,
        },
        {
          id: "236070e2-2002-4f22-aae2-f5ad5b30fa03",
          size: {
            gram: 1600,
            pieces: 2,
            total_services: 128,
          },
          aroma: "Çilek",
          price: {
            profit: 199,
            total_price: 3398,
            discounted_price: 3199,
            price_per_servings: 26.55,
            discount_percentage: 6,
          },
          photo_src: "/media/whey-protein_1600_2_strawberry.webp",
          is_available: true,
        },
      ],
      comment_count: 10869,
      average_star: 0,
    },
    {
      id: "86",
      name: "HYALURONIC ACID",
      slug: "hyaluronic-acid",
      short_explanation: "CİLTTE NEM TUTUCU GÖREVİ GÖRÜR",
      explanation: {
        usage:
          "11 Yaş ve üzeri yetişkinler için; günde 1 kapsül kullanılması tavsiye edilmektedir.\n\nGün içerisinde kendi programınıza göre öğünlerden önce veya sonra kullanılması önerilmektedir.",
        features:
          "Tarım ve Orman Bakanlığı Onaylı.\nFLAVA Hyaluronik Asit İçeren Takviye Edici Gıda\nTakviye Edici Gıda Onay Numarası: 012757-04.02.2022\n\nHyaluronik Asit; yapılan araştırmalarda cilt üzerindeki olumlu etkisiyle daha sağlıklı ve esnek bir cilde sahip olma yönündeki etkisi gözlemlenmiştir. Bunun yanı sıra yaraların iyileşmesine, gözlerdeki kuruluğa, kemik gelişimine olumlu etkisi olduğu bilinmektedir.",
        description:
          "Hyaluronik Asit; vücutta doğal olarak cilt, bağ doku ve gözlerde bulunmaktadır.\n\n-   Yüksek kaliteli hyaluronik asit içeriği.\n-   1 kapsülde 120 mg Hyaluronik Asit içerir.",
        nutritional_content: {
          ingredients: [
            {
              aroma: null,
              value:
                "Topaklanmayı Önleyici: Yağ Asitlerinin Magnezyum Tuzları, Hyaluronik Asit, Kapsül: Hidroksipropil Metil Selüloz",
            },
          ],
          nutrition_facts: {
            ingredients: [],
            portion_sizes: [],
          },
          amino_acid_facts: null,
        },
      },
      main_category_id: "cae64711-98b9-48f4-82b4-c5d460718dcf",
      sub_category_id: "a23349d3-08e7-42ac-b428-e28541337c30",
      tags: ["VEJETARYEN", "GLUTENSİZ", "VEGAN"],
      variants: [
        {
          id: "d204a3bf-754d-4ecb-b9f6-6c22a56495bc",
          size: {
            pieces: 1,
            total_services: 45,
          },
          aroma: "Aromasız",
          price: {
            profit: null,
            total_price: 199,
            discounted_price: null,
            price_per_servings: 4.42,
            discount_percentage: null,
          },
          photo_src: "/media/hyaluronic-acid_.webp",
          is_available: true,
        },
        {
          id: "870e00f4-583f-409d-a91c-f2c7624d0814",
          size: {
            pieces: 2,
            total_services: 90,
          },
          aroma: "Aromasız",
          price: {
            profit: 49,
            total_price: 398,
            discounted_price: 349,
            price_per_servings: 3.88,
            discount_percentage: 12,
          },
          photo_src: "/media/hyaluronic-acid_2_.webp",
          is_available: true,
        },
      ],
      comment_count: 0,
      average_star: 0,
    },
  ],
};

export const mockProductsBestSellers: ProductsBestSellersResponse = {
  status: "success",
  data: [
    {
      name: "WHEY PROTEIN",
      short_explanation: "En Saf Whey",
      price_info: {
        profit: null,
        total_price: 549,
        discounted_price: null,
        price_per_servings: 31.31,
        discount_percentage: null,
      },
      photo_src: "/media/whey-protein_400_biscuit.webp",
      comment_count: 0,
      average_star: 0,
    },
    {
      name: "CREATINE",
      short_explanation: "EN POPÜLER SPORCU TAKVİYESİ",
      price_info: {
        profit: null,
        total_price: 239,
        discounted_price: null,
        price_per_servings: 5.97,
        discount_percentage: null,
      },
      photo_src: "/media/creatine_120_.webp",
      comment_count: 0,
      average_star: 0,
    },
    {
      name: "PRE-WORKOUT SUPREME",
      short_explanation: "ANTRENMAN ÖNCESİ TAKVİYESİ",
      price_info: {
        profit: null,
        total_price: 399,
        discounted_price: null,
        price_per_servings: 19.95,
        discount_percentage: null,
      },
      photo_src: "/media/preworkout_300_apple.webp",
      comment_count: 0,
      average_star: 0,
    },
    {
      name: "CREAM OF RICE",
      short_explanation: "EN LEZZETLİ PİRİNÇ KREMASI",
      price_info: {
        profit: null,
        total_price: 239,
        discounted_price: null,
        price_per_servings: 11.95,
        discount_percentage: null,
      },
      photo_src: "/media/cream-of-rice_1000_chocolate.webp",
      comment_count: 0,
      average_star: 0,
    },
  ],
};

// Get product details by ID
export function getProductById(id: string): ProductDetail | undefined {
  return mockProductsDetails.data.find((p) => p.id === id);
}

// Get product details by slug
export function getProductBySlug(slug: string): ProductDetail | undefined {
  return mockProductsDetails.data.find((p) => p.slug === slug);
}

// Get all products
export function getAllProducts(): Product[] {
  return mockProductsList.data.results;
}

// Get best sellers
export function getBestSellers(): BestSellerProduct[] {
  return mockProductsBestSellers.data;
}

// Get products by category id
export function getProductsByCategoryId(category: string): ProductDetail[] {
  return mockProductsDetails.data.filter(
    (p) => p.main_category_id === category
  );
}
