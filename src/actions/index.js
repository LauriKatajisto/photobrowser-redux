import axios from 'axios';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';

const PHOTOS_URL = 'http://jsonplaceholder.typicode.com/photos?_limit=12&_page=';


export function fetchPhotos(page) {

    const request = axios.get(`${PHOTOS_URL}${page}`);
    return {
        type: FETCH_PHOTOS,
        payload: request
    };
}