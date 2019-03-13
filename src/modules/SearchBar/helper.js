
export const getSearchResults = jsonResponse => {
    return {
        results: jsonResponse.items,
        nextPageToken: jsonResponse.nextPageToken
    }
}

export const getSugggestionsArray = jsonResponse => {
    const { results } = getSearchResults(jsonResponse);
    return results.map(function (video, index) {
        return video.snippet.title
    });
}
