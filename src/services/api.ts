import axios from "axios";
import { API_BASE_URL, PODCAST_DETAILS_ID_URL, TOP_PODCASTS_URL } from "@/utils/config";
import { formatPodcastDetailResponse, formatPodcastListResponse } from "./utils";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

export const fetchTopPodcasts = async () => {
  const response = await api.get(TOP_PODCASTS_URL);
  console.log('top podcasts', response)
  return formatPodcastListResponse(response);
};

export const fetchPodcastDetails = async (podcastId: string) => {
  const response = await api.get(PODCAST_DETAILS_ID_URL + podcastId);
  console.log({response})
  return formatPodcastDetailResponse(podcastId, response.data);
};
