import { CardProps } from "@/types";

/**
 * Transform API response into CardProps[].
 * @param podcastData - Data retrived by API.
 * @return CardProps[] - An array to use in Podcast CardList.
 */

export const formatResponse = (podcastData: any): CardProps[] =>
  podcastData?.data?.feed?.entry?.map((podcast: any) => ({
    id: podcast.id.attributes["im:id"],
    title: podcast["im:name"].label,
    author: podcast["im:artist"].label,
    images: podcast["im:image"].map((img: any) => ({
      image_url: img.label,
      height: img.height,
    })),
    href: `/podcast/${podcast.id.attributes["im:id"]}`,
  })) || [];
