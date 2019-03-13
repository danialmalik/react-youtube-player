// Server urls
const YOUTUBE_API_KEY = "<YOUR API KEY>";
const YOUTUBE_API_SERVER = "https://www.googleapis.com/";
const YOUTUBE_API_SUFFIX = "youtube/v3/";

// Base to direct all API calls to.
const YOUTUBE_API_BASE = `${YOUTUBE_API_SERVER}${YOUTUBE_API_SUFFIX}`;

// API endpoints
const YOUTUBE_API_SEARCH = "search";
const YOUTUBE_API_PLAYLIST_ITEMS = "playlistItems";

export {
  YOUTUBE_API_KEY,
  YOUTUBE_API_BASE,
  YOUTUBE_API_SEARCH,
  YOUTUBE_API_PLAYLIST_ITEMS
};
