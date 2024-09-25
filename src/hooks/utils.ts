import { CACHE_EXPIRATION_TIME, CACHE_TIMESTAMP_KEY } from "@/utils/config";
import { getLocalStorageItem } from "@/utils/localStorage";

export const checkIsCacheExpired = () => {
  const cachedTimestamp = getLocalStorageItem(CACHE_TIMESTAMP_KEY);
  if (!cachedTimestamp) return true;
  const currentTime = new Date().getTime(); 
  return currentTime - parseInt(cachedTimestamp, 10) > CACHE_EXPIRATION_TIME;
};
