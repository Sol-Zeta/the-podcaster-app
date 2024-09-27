import { PodcastFormatedDetails } from "@/types";
import {
  PodcastDetails,
  PodcastDetailsApiResponse,
} from "@/types/podcastDetails";
import {
  PodcastEntry,
  PodcastImage,
  PodcastListApiResponse,
} from "@/types/podcastList";
import { PODCAST_LIST_CACHE_KEY } from "@/utils/config";
import { getLocalStorageItem } from "@/utils/localStorage";
import { PodcastCardProps } from "@/components/home/PodcastCard";
import { fetchTopPodcasts } from "./api";

/**
 * Transform API response into CardProps[].
 * @param podcastData - Data retrived by API.
 * @return PodcastCardProps[] - An array to use in PodcastList.
 */

export const formatPodcastListResponse = (
  podcastData?: PodcastListApiResponse | null
): PodcastCardProps[] =>
  podcastData?.data?.feed?.entry?.map((podcast: PodcastEntry) => ({
    id: podcast.id.attributes["im:id"],
    title: podcast["im:name"]?.label || "",
    author: podcast["im:artist"]?.label || "",
    description: podcast.summary?.label || "",
    images:
      podcast["im:image"]?.map((img: PodcastImage) => ({
        image_url: img.label,
        height: img.attributes?.height || "",
      })) || [],
    href: `/podcast/${podcast.id.attributes["im:id"]}`,
  })) || [];

/**
 * Converts milliseconds to a formatted string of hours, minutes, and seconds.
 * @param ms - The number of milliseconds to convert.
 * @returns A string in the format "MM:SS" or "HH:MM:SS" if the duration is an hour or longer.
 */
export const msToHoursMinutesAndSeconds = (ms: number): string => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  const formattedHours =
    hours > 0 ? `${hours.toString().padStart(2, "0")}:` : "";
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
};

/**
 * Converts an ISO date string to a formatted date string in DD/MM/YYYY format.
 * @param isoDate - The ISO date string to convert.
 * @returns A string representing the date in DD/MM/YYYY format.
 */
export const formatDateToDDMMYYYY = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

/**
 * Transform API response into PodcastDetails
 * @param podcastEpisodes - Data retrived by API
 * @return PodcastDetails - An object to use in PodcastDetails Page
 */

export const formatPodcastDetailResponse = async (
  podcastId: string,
  podcastEpisodes: PodcastDetailsApiResponse
): Promise<PodcastFormatedDetails> => {
  try {
    let listData: PodcastCardProps[] = getLocalStorageItem(
      PODCAST_LIST_CACHE_KEY
    );

    if (!listData) {
      const podcastList = await fetchTopPodcasts();
      if (!podcastList) {
        throw new Error("No podcast list found");
      }
      listData = podcastList;
    }

    const podcastData = listData.find(
      (item: PodcastCardProps) => item.id === podcastId
    );

    if (!podcastData) {
      throw new Error("No podcast data found");
    }

    return {
      id: podcastData.id,
      image_url: podcastData.images[podcastData.images.length - 1].image_url,
      title: podcastData.title,
      description: podcastData.description || "",
      author: podcastData.author,
      episodes: podcastEpisodes.results.map((item: PodcastDetails) => ({
        id: item.trackId.toString(),
        title: item.trackName,
        href: `podcast/${podcastData.id}/episode/${item.trackId}`,
        date: formatDateToDDMMYYYY(item.releaseDate),
        duration: msToHoursMinutesAndSeconds(item.trackTimeMillis),
        track: item.episodeUrl || "",
        trackFileExtension: item.episodeFileExtension,
        description: item.description,
      })),
    };
  } catch (error) {
    console.error("Error fetching podcast details:", error);
    throw error;
  }
};
