import types from '../actions/types';

//create default state
const DEFAULT_STATE = {
        all: [],
        single: {}
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_LIST_DATA:
            // console.log('Get Data Action:', action);
            return { ...state, all: action.payload.data.todos };
        default:
            return state;
    }
}

