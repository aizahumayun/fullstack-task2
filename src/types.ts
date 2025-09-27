// export type Links = {
//   // conditional rendering
//   linkedin?: string;
//   github?: string;
//   gmail?: string;
// };

export type Developer = {
  title: string;
  subtitle: string;
  image: string;
  links: [string, string, string];
};

export type Flag = {
  color1: string;
  color2: string;
  color3: string;
  countryName: string;
  directionHorizontal: boolean;
};
export type User = {
  name: string;
  title: string;
  pic: string;
  verified: boolean;
};
export interface UserCard {
  id: number;
  name: string;
  designation: string;
  rate: number;
  picture: string;
}
