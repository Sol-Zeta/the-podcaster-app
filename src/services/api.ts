import axios from "axios";
import { API_BASE_URL, TOP_PODCASTS_URL } from "@/utils/config";
import { formatResponse } from "./utils";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

export const fetchTopPodcasts = async () => {
  const response = await api.get(TOP_PODCASTS_URL);
  return formatResponse(response);
};
