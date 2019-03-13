import { MAX_RESULTS } from '../constants/common';
import {
    YOUTUBE_API_BASE,
    YOUTUBE_API_KEY,
    YOUTUBE_API_SEARCH,
    YOUTUBE_API_PLAYLIST_ITEMS
} from '../constants/api_constants';

export const getUrl = (queryParam, apiEndpoint, nextPageToken = null) => {
    const maxResults = MAX_RESULTS;
    let url = `${YOUTUBE_API_BASE}${apiEndpoint}?maxResults=${maxResults}&part=snippet&key=${YOUTUBE_API_KEY}`;

    switch (apiEndpoint) {
        case YOUTUBE_API_PLAYLIST_ITEMS:
            url += `&q=${queryParam}`;
            break;
        case YOUTUBE_API_SEARCH:
            url += `&playlistId=${queryParam}`;
            break;
        default:
            break;
    }

    if (nextPageToken) {
        url += `&pageToken=${nextPageToken}`;
    }
    return url;
}
