export interface DetailCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
}


export interface PodcastEpisodes {
  id: string;
  title: string;
  href: string;
  date: string;
  duration: string;
}
export interface PodcastFormatedDetails {
  id: string;
  image_url: string;
  title: string;
  description: string;
  episodes: PodcastEpisodes[];
}
