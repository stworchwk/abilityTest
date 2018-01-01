import { combineReducers } from "redux";

import roomReducer from './roomReducer';

const RootReducer = combineReducers({
    rooms: roomReducer
});

export default RootReducer;
