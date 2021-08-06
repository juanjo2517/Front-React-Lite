import { combineReducers } from 'redux';
import bussinesReducer from './bussinesReducer';

export default combineReducers({
    bussines: bussinesReducer
});