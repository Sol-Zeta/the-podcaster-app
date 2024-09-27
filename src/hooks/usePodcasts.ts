import { useEffect } from "react";
import useSWR from "swr";
import { fetchTopPodcasts } from "@/services/api";
import {
  CACHE_EXPIRATION_TIME,
  PODCAST_LIST_CACHE_KEY,
  CACHE_TIMESTAMP_KEY,
} from "@/utils/config";
import { checkIsCacheExpired } from "./utils";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  setLocalStorageTimestamp,
} from "@/utils/localStorage";
import { useLoader } from "../context/LoaderContext";

export const usePodcasts = () => {
  const { showLoader, hideLoader } = useLoader();
  const CACHE_KEY = PODCAST_LIST_CACHE_KEY;
  const isCacheExpired = checkIsCacheExpired(CACHE_KEY);

  const { data, error, mutate, isLoading } = useSWR(
    CACHE_KEY,
    isCacheExpired ? fetchTopPodcasts : null,
    {
      revalidateOnFocus: false,
      dedupingInterval: CACHE_EXPIRATION_TIME,
      fallbackData: getLocalStorageItem(CACHE_KEY),
    }
  );

  if (data) {
    setLocalStorageItem(CACHE_KEY, data);
    setLocalStorageTimestamp(CACHE_TIMESTAMP_KEY);
  }

  useEffect(() => {
    if (isCacheExpired && data === undefined) {
      mutate();
    }
  }, [isCacheExpired, data, mutate]);

  useEffect(() => {
    if (isLoading) {
      showLoader();
      return;
    }
    hideLoader();
  }, [isLoading]);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
