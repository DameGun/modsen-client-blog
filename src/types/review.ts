type ReviewDTO = {
  id: string;
  name: string;
  content: string;
  image: string;
  address: string;
};

type Review = ReviewDTO;

export type { Review, ReviewDTO };
