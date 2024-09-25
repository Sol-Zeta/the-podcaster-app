import { API_BASE_URL, TOP_PODCASTS_URL } from "@/utils/config";
import axios from "axios";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

const formatResponse = (podcastData: any) =>
  podcastData.data.feed.entry.map((podcast: any) => ({
    id: podcast.id.attributes["im:id"],
    title: podcast["im:name"].label,
    author: podcast["im:artist"].label,
    images: podcast["im:image"].map((img: any) => ({
      image_url: img.label,
      height: img.height,
    })),
    href: `/podcast/${podcast.id.attributes["im:id"]}`,
  }));

export const fetchTopPodcasts = async () => {
  const response = await api.get(TOP_PODCASTS_URL);
  return formatResponse(response);
};
