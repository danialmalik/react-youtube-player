
import {getUrl} from './helper';


const APICaller = (queryParam, apiEndpoint, nextPageToken = null) => {
    const url = getUrl ( queryParam, apiEndpoint, nextPageToken );
    return fetch(url)
            .then(response => response.text())
            .then(responseText => responseText ? JSON.parse(responseText) : '');
}

export default APICaller;
