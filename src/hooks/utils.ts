import { CACHE_EXPIRATION_TIME } from "@/utils/config";
import { getLocalStorageItem } from "@/utils/localStorage";

/**
 * Check if the cache linked to a key has expired
 * @param cacheKey - The cache key that is going to be checked
 * @return boolean - Returns true if cache is expired and false if is still valid
 */
export const checkIsCacheExpired = (cacheKey?: string): boolean => {
  const cachedTimestamp = getLocalStorageItem(`CACHE_TIMESTAMP_KEY_${cacheKey}`);
  if (!cachedTimestamp) return true;
  
  const currentTime = new Date().getTime();
  return currentTime - parseInt(cachedTimestamp, 10) > CACHE_EXPIRATION_TIME;
};
