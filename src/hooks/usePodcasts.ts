import useSWR from "swr";
import { fetchTopPodcasts } from "@/services/api";
import {
  CACHE_EXPIRATION_TIME,
  CACHE_KEY,
  CACHE_TIMESTAMP_KEY,
} from "@/utils/config";
import { checkIsCacheExpired } from "./utils";
import { getLocalStorageItem, setLocalStorageItem, setLocalStorageTimestamp } from "@/utils/localStorage";

export const usePodcasts = () => {
  const isCacheExpired = checkIsCacheExpired();
  const { data, error, mutate } = useSWR("toppodcasts", isCacheExpired ? fetchTopPodcasts : null, {
    revalidateOnFocus: false,
    dedupingInterval: CACHE_EXPIRATION_TIME,
    fallbackData: getLocalStorageItem(CACHE_KEY),
  });

  if (data) {
    setLocalStorageItem(CACHE_KEY, data);
    setLocalStorageTimestamp(CACHE_TIMESTAMP_KEY);
  }

  if (isCacheExpired) {
    mutate();
  }

  return {
    podcasts: data,
    isLoading: !error && !data,
    isError: error,
  };
};
