import { FETCH_USER, FETCH_USERS } from '../actions/types';

const INITIAL_STATE = { user: null, all: [] };


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
    case FETCH_USER:
        return { ...state, user: action.payload.data };
    case FETCH_USERS:
        return { ...state, all: action.payload.data };
    default: 
        return state;
    }
}