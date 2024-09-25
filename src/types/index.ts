export interface CardImage {
  image_url: string;
  height: string;
}

export interface CardProps {
  id: string;
  title: string;
  author: string;
  images: CardImage[];
  href: string;
}
