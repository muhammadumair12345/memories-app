import postReducer from './posts';
import authReducer from './auth';
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
    postReducer,
    authReducer
});