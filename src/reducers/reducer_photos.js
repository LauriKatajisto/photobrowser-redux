import { FETCH_PHOTOS, FETCH_PHOTO } from '../actions/index';

const INITIAL_STATE = { photos: [], photo: null };


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
    case FETCH_PHOTOS:
        return { ...state, photos: action.payload.data };
    case FETCH_PHOTO:
        return { ...state, photo: action.payload.data };
    default: 
        return state;
    }
}