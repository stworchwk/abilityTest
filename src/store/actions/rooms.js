import axios from 'axios';

import { GET_ROOMS } from './../types';

const getRooms = () => dispatch => {
    axios.get('http://localhost:3001/rooms').then(response => {
        dispatch(gotRooms(response.data))
    });
};

const gotRooms = data => ({
    type: GET_ROOMS,
    payload: data
})

export { getRooms };