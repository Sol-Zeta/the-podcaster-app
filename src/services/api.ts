import { API_BASE_URL, TOP_PODCASTS_URL } from '@/utils/config';
import axios from 'axios';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

export const fetchTopPodcasts = async () => {
    console.log('FETCHING')
  const response = await api.get(TOP_PODCASTS_URL);
  console.log({response})
  return response.data.feed.entry.map((podcast: any) => ({
    id: podcast.id.attributes["im:id"],
    title: podcast["im:name"].label,
  }));
};
