type IdentifierEntity = {
  id: number;
  name: string;
};

type Category = IdentifierEntity & {
  description: string;
  image: string;
};
type Tag = IdentifierEntity;

export type { Category, IdentifierEntity, Tag };
