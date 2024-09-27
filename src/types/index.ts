export interface PodcastEpisodes {
  id: string;
  title: string;
  href: string;
  date: string;
  duration: string;
  track: string;
  trackFileExtension: string;
  description: string;
}

export interface PodcastFormatedDetails {
  id: string;
  image_url: string;
  title: string;
  description: string;
  episodes: PodcastEpisodes[];
  author: string;
}

export interface EpisodesGridContextType {
  podcastId?: string;
  episodes: PodcastEpisodes[];
}
