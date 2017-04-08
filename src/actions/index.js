import axios from 'axios';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_PHOTO = 'FETCH_PHOTO';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USERS = 'FETCH_USERS';

const PHOTOS_URL = '//jsonplaceholder.typicode.com/photos?_limit=12&_page=';
const PHOTO_URL = '//jsonplaceholder.typicode.com/photos/';
const USER_URL = '//jsonplaceholder.typicode.com/users/';


export function fetchPhotos(page) {

    const request = axios.get(`${PHOTOS_URL}${page}`);
    return {
        type: FETCH_PHOTOS,
        payload: request
    };
}


export function fetchPhoto(id) {
    const request = axios.get(`${PHOTO_URL}${id}?_expand=album`);

    return {
        type: FETCH_PHOTO,
        payload: request
    };
}

export function fetchUsers() {
    const request = axios.get(`${USER_URL}`);

    return {
        type: FETCH_USERS,
        payload: request
    };
}

export function fetchUser(id) {
    const request = axios.get(`${USER_URL}${id}?_embed=albums`);

    return {
        type: FETCH_USER,
        payload: request
    };
}