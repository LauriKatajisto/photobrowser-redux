import { expect } from '../test_helper';
import PhotoReducer from '../../src/reducers/reducer_photos';
import { FETCH_PHOTOS, FETCH_PHOTO } from '../../src/actions/types';

describe('Photos Reducer', () => {
  it('handles action with unknown type', () => {
    expect(PhotoReducer(undefined, {})).to.eql( { photos: [], photo: null } );
  });

  it('handles action of type FETCH_PHOTOS', () => {
    const action = { type: FETCH_PHOTOS, payload: {data: ['photo1','photo2']} };
    expect(PhotoReducer([], action)).to.eql( {photos:['photo1','photo2']} );
  });

  it('handles action of type FETCH_PHOTO', () => {
    const action = { type: FETCH_PHOTO, payload: {data: 'photo' } };
    expect(PhotoReducer([], action)).to.eql( {photo: 'photo'} );
  });
});