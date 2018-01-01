import { GET_ROOMS } from './../types';

const initialState = {
    rooms: []
}

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ROOMS:
            return state.rooms;
            break;
        default:
            return state.rooms;
    }
};

export default roomReducer;