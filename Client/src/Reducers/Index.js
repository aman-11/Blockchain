import { combineReducers } from 'redux'

import {intialState,userReducer} from './User.js'
import Story from './Story.js';
export default combineReducers({
    userReducer,
    Story
});