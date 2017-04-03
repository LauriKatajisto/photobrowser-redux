import { combineReducers } from 'redux';
import PhotoReducer from './reducer_photos.js';

const rootReducer = combineReducers({
  photos: PhotoReducer
});

export default rootReducer;
