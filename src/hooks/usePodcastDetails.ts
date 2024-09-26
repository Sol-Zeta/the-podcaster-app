import useSWR from "swr";
import { fetchPodcastDetails } from "@/services/api";
import {
  CACHE_EXPIRATION_TIME,
  PODCAST_DETAILS_CACHE_KEY,
} from "@/utils/config";
import { checkIsCacheExpired } from "./utils";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  setLocalStorageTimestamp,
} from "@/utils/localStorage";
import { useEffect } from "react";

export const usePodcastsDetails = (podcastId: string) => {
  const CACHE_KEY = `${PODCAST_DETAILS_CACHE_KEY}${podcastId}`;
  const isCacheExpired = checkIsCacheExpired(CACHE_KEY);

  if (!isCacheExpired) {
    return {
      data: getLocalStorageItem(CACHE_KEY),
      isLoading: false,
      isError: false,
    };
  }

  const { data, error, mutate, isLoading } = useSWR(
    CACHE_KEY,
    isCacheExpired ? () => fetchPodcastDetails(podcastId) : null,
    {
      revalidateOnFocus: false,
      dedupingInterval: CACHE_EXPIRATION_TIME,
      fallbackData: getLocalStorageItem(CACHE_KEY),
    }
  );

  if (data) {
    setLocalStorageItem(CACHE_KEY, data);
    setLocalStorageTimestamp(`CACHE_TIMESTAMP_KEY_${CACHE_KEY}`);
  }

  useEffect(() => {
    if (isCacheExpired && data === undefined) {
      mutate();
    }
  }, [isCacheExpired, data, mutate]);
  return {
    data,
    isLoading,
    isError: error,
  };
};
