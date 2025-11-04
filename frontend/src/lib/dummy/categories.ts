import {
  CategoriesResponse,
  Category,
  CategoryChild,
  TopSeller,
} from "@/types/categories";

export const mockCategories: CategoriesResponse = {
  status: "success",
  data: {
    data: [
      {
        id: "38fb5754-3068-4490-a12a-169fa564c675",
        name: "PROTEİN",
        slug: "protein",
        order: 1,
        children: [
          {
            id: "04c9618e-553a-43cd-a72e-b646215d23e5",
            name: "PROTEİNLER",
            slug: "proteinler",
            order: 1,
            sub_children: [
              {
                name: "Whey Protein",
                slug: "whey-protein",
                order: 1,
              },
              {
                name: "Whey İzole",
                slug: "whey-isolate",
                order: 2,
              },
              {
                name: "Bezelye Proteini",
                slug: "pea-protein",
                order: 3,
              },
              {
                name: "Kazein",
                slug: "micellar-casein",
                order: 4,
              },
              {
                name: "Yumurta Akı Proteini",
                slug: "egg-white-powder",
                order: 5,
              },
              {
                name: "Süt Proteini",
                slug: "milk-protein",
                order: 6,
              },
              {
                name: "Soya Proteini",
                slug: "soya-protein",
                order: 7,
              },
              {
                name: "Kolajen Proteini",
                slug: "collagen",
                order: 8,
              },
            ],
          },
          {
            id: "fc8db3ca-f0b6-4c35-9f43-319248a9526c",
            name: "PROTEİNLİ ÜRÜNLER",
            slug: "proteinli-urunler",
            order: 2,
            sub_children: [
              {
                name: "Mass Gainer",
                slug: "mass-gainer",
                order: 1,
              },
              {
                name: "Vegan Gainer",
                slug: "vegan-gainer",
                order: 2,
              },
            ],
          },
        ],
        top_sellers: [
          {
            name: "WHEY PROTEIN",
            slug: "whey-protein",
            description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
            picture_src: "/media/whey-protein_400_biscuit.webp",
          },
          {
            name: "WHEY ISOLATE",
            slug: "whey-isolate",
            description: "%90 PROTEİNLİ EN SAF WHEY",
            picture_src: "/media/whey-isolate_400_biscuit.webp",
          },
          {
            name: "PEA PROTEIN",
            slug: "pea-protein",
            description: "EN POPÜLER VEGAN PROTEİN KAYNAĞI",
            picture_src: "/media/pea-protein_400_strawberry.webp",
          },
        ],
      },
      {
        id: "d3cdcefe-eedd-4ee0-a254-b821ed4e2b8c",
        name: "SPOR GIDALARI",
        slug: "spor-gidalari",
        order: 2,
        children: [
          {
            id: "13e12b25-5f83-4d5a-b555-e252c9b39012",
            name: "AMİNO ASİTLER",
            slug: "amino-asitler",
            order: 1,
            sub_children: [
              {
                name: "Creatine",
                slug: "creatine",
                order: 1,
              },
              {
                name: "Creatine Creapure",
                slug: "creatine-creapure",
                order: 2,
              },
              {
                name: "BCAA",
                slug: "bcaa-411",
                order: 3,
              },
              {
                name: "L-Carnitine",
                slug: "l-carnitine",
                order: 4,
              },
              {
                name: "Glutamine",
                slug: "glutamine",
                order: 5,
              },
              {
                name: "Eaa+",
                slug: "eaa",
                order: 6,
              },
              {
                name: "Arginine",
                slug: "eaa",
                order: 7,
              },
              {
                name: "Taurine",
                slug: "taurine",
                order: 8,
              },
              {
                name: "Leucine",
                slug: "leucine",
                order: 9,
              },
            ],
          },
          {
            id: "55e4309a-c005-490d-949f-496553ba67fe",
            name: "PRE-WORKOUT",
            slug: "preworkoutlar",
            order: 2,
            sub_children: [
              {
                name: "Heavy Duty Pre-Workout",
                slug: "heavy-duty-preworkout",
                order: 1,
              },
              {
                name: "Pre-Workout Supreme",
                slug: "preworkout",
                order: 2,
              },
              {
                name: "HydroPrime",
                slug: "hydroprime",
                order: 3,
              },
              {
                name: "Citrulline",
                slug: "citrulline",
                order: 4,
              },
              {
                name: "Thermo Burner",
                slug: "burner",
                order: 5,
              },
              {
                name: "Caffeine",
                slug: "caffeine",
                order: 6,
              },
              {
                name: "Pump Stim Free",
                slug: "pump",
                order: 7,
              },
              {
                name: "Beta Alanine",
                slug: "beta-alanine",
                order: 8,
              },
              {
                name: "Betaine",
                slug: "betaine",
                order: 9,
              },
            ],
          },
          {
            id: "e38f4498-a5b5-4afd-838a-8f88fc53e59d",
            name: "KARBONHİDRATLAR",
            slug: "karbonhidratlar",
            order: 3,
            sub_children: [
              {
                name: "Cream of Rice",
                slug: "cream-of-rice",
                order: 1,
              },
              {
                name: "Mass Gainer",
                slug: "mass-gainer",
                order: 2,
              },
              {
                name: "Maltodextrin",
                slug: "maltodextrin",
                order: 3,
              },
              {
                name: "Dextrose",
                slug: "dextrose",
                order: 4,
              },
              {
                name: "Vegan Gainer",
                slug: "vegan-gainer",
                order: 5,
              },
            ],
          },
          {
            id: "4a15e356-8699-4510-81ee-98cc02489a3d",
            name: "DİĞER",
            slug: "diger",
            order: 3,
            sub_children: [
              {
                name: "Ultra Focus",
                slug: "ultra-mind",
                order: 1,
              },
              {
                name: "Gamer Hack",
                slug: "gamer-hack",
                order: 2,
              },
              {
                name: "CLA",
                slug: "cla-softgel",
                order: 3,
              },
              {
                name: "Post-Workout",
                slug: "post-workout-tm",
                order: 4,
              },
              {
                name: "Electrolyte Blend",
                slug: "electrolyte-blend",
                order: 5,
              },
            ],
          },
        ],
        top_sellers: [
          {
            name: "CREATINE",
            slug: "creatine",
            description: "EN POPÜLER SPORCU TAKVİYESİ",
            picture_src: "/media/creatine_300_.webp",
          },
          {
            name: "PRE-WORKOUT SUPREME",
            slug: "preworkout",
            description: "ANTREMAN ÖNCESİ TAKVİYESİ",
            picture_src: "/media/preworkout_300_apple.webp",
          },
          {
            name: "CREAM OF RICE",
            slug: "cream-of-rice",
            description: "EN LEZZETLİ PİRİNÇ KREMASI",
            picture_src: "/media/cream-of-rice_1000_chocolate.webp",
          },
        ],
      },
      {
        id: "8eaeff30-3138-49ac-b120-0eac18866190",
        name: "GIDA",
        slug: "gida",
        order: 4,
        children: [
          {
            id: "5d0137ad-4d65-4b3d-9f20-d5e88d16ba55",
            name: "GIDA ÜRÜNLERİ",
            slug: "gida-urunleri",
            order: 1,
            sub_children: [
              {
                name: "Pirinç Kreması",
                slug: "cream-of-rice",
                order: 1,
              },
              {
                name: "Fıstık Ezmesi",
                slug: "fistik-ezmesi",
                order: 2,
              },
            ],
          },
        ],
        top_sellers: [
          {
            name: "CREAM OF RICE",
            slug: "cream-of-rice",
            description: "EN LEZZETLİ PİRİNÇ KREMASI",
            picture_src: "/media/cream-of-rice_1000_chocolate.webp",
          },
          {
            name: "FISTIK EZMESİ",
            slug: "fistik-ezmesi",
            description: "%100 DOĞAL, KATKISIZ FISTIK EZMESİ",
            picture_src: "/media/fistik-ezmesi_650_.webp",
          },
        ],
      },
      {
        id: "cae64711-98b9-48f4-82b4-c5d460718dcf",
        name: "SAĞLIK",
        slug: "saglik",
        order: 3,
        children: [
          {
            id: "ff5b7fd9-f56e-4d8f-a0b4-edfc7836b615",
            name: "FONKSİYONEL GIDALAR",
            slug: "fonksiyonel-gidalar",
            order: 1,
            sub_children: [
              {
                name: "Collagen",
                slug: "collagen",
                order: 1,
              },
              {
                name: "Deep Sleep",
                slug: "deep-sleep",
                order: 2,
              },
              {
                name: "Multivitamin",
                slug: "multivitamin",
                order: 3,
              },
              {
                name: "C Vitamini Efervesan",
                slug: "c-vitamini-efervesan",
                order: 4,
              },
              {
                name: "Digestion",
                slug: "digestion",
                order: 5,
              },
              {
                name: "Prebiotics",
                slug: "prebiotics",
                order: 6,
              },
              {
                name: "Inulin",
                slug: "inulin",
                order: 7,
              },
              {
                name: "Mct Oil",
                slug: "mctoil",
                order: 8,
              },
            ],
          },
          {
            id: "54a6ef5a-ae85-4d9b-a5a4-4cfb65c62471",
            name: "BİTKİ TOZLARI",
            slug: "bitki-tozlari",
            order: 2,
            sub_children: [
              {
                name: "Green Detox+",
                slug: "green-detox",
                order: 1,
              },
              {
                name: "Red Detox+",
                slug: "red-detox",
                order: 2,
              },
              {
                name: "Brokoli Tozu",
                slug: "broccoli-powder",
                order: 3,
              },
              {
                name: "Maca Kökü Tozu",
                slug: "maca-root-powder",
                order: 4,
              },
              {
                name: "Ispanak Tozu",
                slug: "spinach-powder",
                order: 5,
              },
              {
                name: "Maydonoz Tozu",
                slug: "parsley-powder",
                order: 6,
              },
            ],
          },
          {
            id: "36662165-01ca-4954-b39a-1b8cbf420751",
            name: "ZAYIFLAMA",
            slug: "zayiflama",
            order: 3,
            sub_children: [
              {
                name: "Thermo Burner",
                slug: "burner",
                order: 1,
              },
              {
                name: "L-Carnitine",
                slug: "l-carnitine",
                order: 2,
              },
              {
                name: "CLA",
                slug: "cla-softgel",
                order: 3,
              },
              {
                name: "Hunger Buster",
                slug: "hunger-buster",
                order: 4,
              },
            ],
          },
        ],
        top_sellers: [
          {
            name: "COLLAGEN",
            slug: "collagen",
            description: "VÜCUTTAKİ EN BOL PROTEİN",
            picture_src: "/media/collagen_250_raspberry.webp",
          },
          {
            name: "DEEP SLEEP",
            slug: "deep-sleep",
            description: "UYKU ÖNCESİ TAKVİSYESİ",
            picture_src: "/media/deep-sleep_150_raspberry.webp",
          },
          {
            name: "GREEN DETOX",
            slug: "green-detox",
            description: "SEBZE TÜKETMENİN KOLAY YOLU",
            picture_src: "/media/green-detox_300_.webp",
          },
        ],
      },
      {
        id: "cae64711-98b9-48f4-82b4-c5d460718dcf",
        name: "VİTAMİN",
        slug: "vitamin",
        order: 5,
        children: [
          {
            id: "a69a6f39-a7c1-49d6-8287-fee0e311ad43",
            name: "ÖZEL FORMÜL ÜRÜNLER",
            slug: "ozel-formul-urunler",
            order: 1,
            sub_children: [
              {
                name: "Thermo Burner",
                slug: "burner",
                order: 1,
              },
              {
                name: "T-Prime",
                slug: "tprime",
                order: 2,
              },
              {
                name: "Gamer Multivitamin",
                slug: "gamer-multi",
                order: 3,
              },
              {
                name: "LVR",
                slug: "liver",
                order: 4,
              },
              {
                name: "KDNY",
                slug: "kidney",
                order: 5,
              },
              {
                name: "Relax",
                slug: "relax",
                order: 6,
              },
              {
                name: "Beauty Formula",
                slug: "hair-nails-skin",
                order: 7,
              },
              {
                name: "Focus Formula",
                slug: "ultra-brain",
                order: 8,
              },
              {
                name: "GDA",
                slug: "gda",
                order: 9,
              },
            ],
          },
          {
            id: "23ea76ff-cd3b-41f3-a31f-81d99ba7213a",
            name: "POPÜLER TAKVİYELER",
            slug: "populer-takviyeler",
            order: 2,
            sub_children: [
              {
                name: "ZMA",
                slug: "zma",
                order: 1,
              },
              {
                name: "Multivitamin",
                slug: "multivitamin",
                order: 2,
              },
              {
                name: "Omega 3",
                slug: "omega3",
                order: 3,
              },
              {
                name: "Kafein",
                slug: "caffeine",
                order: 4,
              },
              {
                name: "C Vitamini Efervesan",
                slug: "c-vitamini-efervesan",
                order: 5,
              },
              {
                name: "Melatonin",
                slug: "melatonin",
                order: 6,
              },
              {
                name: "Glikozamin Kondroitin MSM",
                slug: "glucosamine",
                order: 7,
              },
              {
                name: "Kolajen + Hyaluronik Asit",
                slug: "collagen-tablet",
                order: 8,
              },
            ],
          },
          {
            id: "6d1b9cc0-dccc-4f4c-9606-7d6414d76cfa",
            name: "VİTAMİNLER",
            slug: "vitaminler",
            order: 3,
            sub_children: [
              {
                name: "C Vitamini",
                slug: "c-vitamini-efervesan",
                order: 1,
              },
              {
                name: "B Vitamini",
                slug: "b12vitamini",
                order: 2,
              },
              {
                name: "D Vitamini",
                slug: "vitamin-d3",
                order: 3,
              },
              {
                name: "K Vitamini",
                slug: "vitamin-k2",
                order: 4,
              },
            ],
          },
          {
            id: "8905e76d-b357-4f89-8845-f520cd7c8af7",
            name: "MİNERALLER",
            slug: "mineraller",
            order: 4,
            sub_children: [
              {
                name: "Magnezyum",
                slug: "mag-bisglisinate",
                order: 1,
              },
              {
                name: "Demir",
                slug: "iron",
                order: 2,
              },
              {
                name: "Krom",
                slug: "chromium",
                order: 3,
              },
              {
                name: "Selenyum",
                slug: "selenium",
                order: 4,
              },
            ],
          },
          {
            id: "1593fa38-8c5d-4ca3-98e6-5a8826bd1d31",
            name: "BİTKİSEL ÜRÜNLER",
            slug: "bitkisel-urunler",
            order: 5,
            sub_children: [
              {
                name: "Milk Thistle",
                slug: "milk-thistle",
                order: 1,
              },
              {
                name: "Tribulus Terrestris",
                slug: "tribulus-terrestris",
                order: 2,
              },
              {
                name: "5-HTP",
                slug: "5-htp",
                order: 3,
              },
              {
                name: "L-Tyrosine",
                slug: "tyrosine",
                order: 4,
              },
              {
                name: "L-Theanine",
                slug: "theanine",
                order: 5,
              },
              {
                name: "Saw Palmetto",
                slug: "saw-palmetto",
                order: 6,
              },
              {
                name: "Panax Ginseng",
                slug: "ginseng",
                order: 7,
              },
              {
                name: "Gingko Biloba",
                slug: "gingko-biloba",
                order: 8,
              },
              {
                name: "Beta Glucan",
                slug: "beta-glucan",
                order: 9,
              },
            ],
          },
          {
            id: "a23349d3-08e7-42ac-b428-e28541337c30",
            name: "DİĞER",
            slug: "diger-1",
            order: 6,
            sub_children: [
              {
                name: "CLA",
                slug: "cla-softgel",
                order: 1,
              },
              {
                name: "Koenzim Q 10",
                slug: "coenzyme",
                order: 2,
              },
              {
                name: "Bromelain",
                slug: "bromelain",
                order: 3,
              },
              {
                name: "Glutatyon",
                slug: "glutathione",
                order: 4,
              },
              {
                name: "Hyaluronik Asit",
                slug: "hyaluronic-acid",
                order: 5,
              },
            ],
          },
        ],
        top_sellers: [
          {
            name: "ZMA",
            slug: "zma",
            description: "ÇİNKO - MAGNEZYUM - B6 VİTAMİNİ",
            picture_src: "/media/zma_.webp",
          },
          {
            name: "MULTİVİTAMİN",
            slug: "multivitamin",
            description: "GÜNLÜK VİTAMİN VE MİNERAL İHTİYACINIZ",
            picture_src: "/media/multivitamin_.webp",
          },
          {
            name: "THERMO BURNER",
            slug: "burner",
            description: "KUVVETLİ TERMOJENİK ETKİ",
            picture_src: "/media/burner_.webp",
          },
        ],
      },
    ],
    status: "success",
  },
};

// Returns all main categories (only the data array)
export function getCategoryBySlug(slug: string): Category | undefined {
  return mockCategories.data.data.find((cat) => cat.slug === slug);
}

// Returns all main categories (only the data array)
export function getAllCategories(): Category[] {
  return mockCategories.data.data;
}

// Returns the top sellers for a specific category
export function getTopSellersByCategory(slug: string): TopSeller[] {
  const category = getCategoryBySlug(slug);
  return category?.top_sellers || [];
}

// Returns the children for a specific category
export function getCategoryChildren(slug: string): CategoryChild[] {
  const category = getCategoryBySlug(slug);
  return category?.children || [];
}
