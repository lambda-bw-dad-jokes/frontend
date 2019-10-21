import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions'

const initialState = {
    isFetching: false,
    jokes: [],
    error: ''
}

export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                jokes: []
            }
        default:
            return state;
    }
}