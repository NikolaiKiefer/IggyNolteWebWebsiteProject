export interface Article {
  title: string;
  author: string;
  blogImg: string;
  chips: {name: string}[];
  text: string;
  articleNumber: number;
}
export interface PictureCard {
  title: String;
  subTitle: String;
  img: String;
  text: String;
}
export interface Chip {
  name: string;
}
