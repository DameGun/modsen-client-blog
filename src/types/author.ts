type SocialsType = Partial<{
  facebook: string;
  twitter: string;
  instagram: string;
  linkedIn: string;
}>;

type AuthorDTO = {
  id: string;
  name: string;
  bio: string;
  image: string;
  socials: SocialsType;
};

type Author = AuthorDTO;

export type { Author, AuthorDTO, SocialsType };
