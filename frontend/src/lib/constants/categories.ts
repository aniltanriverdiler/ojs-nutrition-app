export const CATEGORIES = {
  PROTEIN: "protein",
  SPORTS_NUTRITION: "spor-gidalari",
  HEALTH: "saglik",
  FOOD: "gida",
  VITAMIN: "vitamin",
} as const;

export type CategorySlug = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export const CATEGORY_NAMES: Record<CategorySlug, string> = {
  [CATEGORIES.PROTEIN]: "Protein",
  [CATEGORIES.SPORTS_NUTRITION]: "Spor Gıdaları",
  [CATEGORIES.HEALTH]: "Sağlık",
  [CATEGORIES.FOOD]: "Gıda",
  [CATEGORIES.VITAMIN]: "Vitamin",
};

export const CATEGORY_DESCRIPTIONS: Record<CategorySlug, string> = {
  [CATEGORIES.PROTEIN]: "Kas gelişimi ve toparlanma için protein ürünleri",
  [CATEGORIES.SPORTS_NUTRITION]: "Spor performansınızı artıran ürünler",
  [CATEGORIES.HEALTH]: "Sağlıklı yaşam için destek ürünleri",
  [CATEGORIES.FOOD]: "Beslenme ihtiyaçlarınız için gıda ürünleri",
  [CATEGORIES.VITAMIN]: "Vitamin ve mineral takviyeleri",
};
