import {combineReducers} from 'redux';
import animReducer from './reducer-anim';

const allReducers = combineReducers({
    anim: animReducer;
});