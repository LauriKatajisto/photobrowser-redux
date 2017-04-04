import { combineReducers } from 'redux';
import PhotoReducer from './reducer_photos.js';
import UserReducer from './reducer_users.js';

const rootReducer = combineReducers({
  photos: PhotoReducer,
  users: UserReducer
});

export default rootReducer;
