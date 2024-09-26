export const API_BASE_URL = 'https://itunes.apple.com/';
export const TOP_PODCASTS_URL = 'us/rss/toppodcasts/limit=100/genre=1310/json';
export const PODCAST_DETAILS_ID_URL = 'lookup?media=podcast&entity=podcastEpisode&limit=20&id=';
export const PODCAST_LIST_CACHE_KEY = "podcastsListCache";
export const PODCAST_DETAILS_CACHE_KEY = "podcast_";
export const EPISODE_DETAILS_CACHE_KEY = "episode_";
export const CACHE_TIMESTAMP_KEY = "podcastsListCacheTimestamp";
export const CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
