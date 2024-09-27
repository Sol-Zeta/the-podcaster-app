import { PodcastCardProps } from "@/components/home/PodcastCard";

export const filterPodcasts = (
  filterTerm: string,
  podcastsData: PodcastCardProps[]
) => {
  if (!podcastsData) return [];
  if (!filterTerm) return podcastsData;

  return podcastsData.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(filterTerm.toLowerCase()) ||
      podcast.author.toLowerCase().includes(filterTerm.toLowerCase())
  );
};
