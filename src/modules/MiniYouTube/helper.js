
export const getPlaylistResults = jsonResponse => {
    const nextPageToken = jsonResponse.nextPageToken;
    const items = jsonResponse.items.map(function (item, index) {
        item.id = item.snippet.resourceId;
        return item;
    });
    return {
        items,
        nextPageToken
    };
}


export const filterOutChannels = items => {
    return items.filter(function (item, index, array) {
        return item.id.kind !== "youtube#channel"
    });
}
