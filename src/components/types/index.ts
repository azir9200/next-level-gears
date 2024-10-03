export type TPost = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
};

export type TComment = {
  postId: string;
  comment: string;
};

export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  ratings: string;
};
