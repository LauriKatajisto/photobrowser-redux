import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Photos from './components/Photos/Photos';
import Photo from './components/Photo/Photo';
import Browser from './components/Browser/Browser';
import User from './components/User/User';


export default (
    <Route path="/" component={Browser}>
        <IndexRedirect to="/photos/1" />
        <Route path='photos/:page' component={Photos} />
        <Route path='photo/:photoId' component={Photo} />
        <Route path='user/:userId' component={User} />
    </Route>
);