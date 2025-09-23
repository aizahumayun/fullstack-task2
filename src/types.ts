export type Links = {
  // conditional rendering
  linkedin?: string;
  github?: string;
  gmail?: string;
};

export type Developer = {
  title: string;
  subtitle: string;
  image: string;
  links: Links;
};
