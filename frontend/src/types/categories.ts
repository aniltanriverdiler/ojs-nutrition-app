export type Category = {
  id: string;
  name: string;
  slug: string;
  order: number;
  children?: CategoryChild[];
  top_sellers?: TopSeller[];
};

export type CategoryChild = {
  id: string;
  name: string;
  slug: string;
  order: number;
  sub_children?: SubChild[];
};

export type SubChild = {
  name: string;
  slug: string;
  order: number;
};

export type TopSeller = {
  name: string;
  slug: string;
  description: string;
  picture_src: string;
};

export type CategoriesResponse = {
  status: "success";
  data: {
    data: Category[];
    status: "success";
  };
};
