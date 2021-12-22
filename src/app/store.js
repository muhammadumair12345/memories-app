import { createStore, compose, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default createStore(rootReducer, compose(applyMiddleware(thunk)));
