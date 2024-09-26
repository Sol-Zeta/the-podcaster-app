import axios from "axios";
import {
  API_BASE_URL,
  PODCAST_DETAILS_ID_URL,
  TOP_PODCASTS_URL,
} from "@/utils/config";
import {
  formatPodcastDetailResponse,
  formatPodcastListResponse,
} from "./utils";

const api = axios.create({
  // TODO: fix cors
  // baseURL: ALL_ORIGINS_URL + API_BASE_URL,
  baseURL: API_BASE_URL,
  timeout: 5000,
});

// const getData = async (url: string) => {
//   try {
//     const response = await api.get(url);
//     console.log("getData - response", response);
//     const data = JSON.parse(response.data.contents);
//     return data;
//   } catch (error) {
//     console.error("Error fetching podcast data:", error);
//     throw error;
//   }
// };

export const fetchTopPodcasts = async () => {
  const response = await api.get(TOP_PODCASTS_URL);
  return formatPodcastListResponse(response);
};

export const fetchPodcastDetails = async (podcastId: string) => {
  const response = await api.get(PODCAST_DETAILS_ID_URL + podcastId);
  return formatPodcastDetailResponse(podcastId, response.data);
};
