import { GET_ROOMS } from './../types';

const initialState = {
    rooms: []
}

const roomReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_ROOMS:
            return newState.rooms = action.payload;
            break;
        default:
            return state.rooms;
    }
};

export default roomReducer;