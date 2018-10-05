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
        case types.GET_SINGLE_ITEM:
            // console.log('Single Item Action:', action);
            return { ...state, single: action.payload.data.todo };
        case types.CLEAR_SINGLE_ITEM:
            return { ...state, single: {} }; //single back to an empty object
        case types.TOGGLE_COMPLETE:
            // console.log('Toggle Complete Action: ', action);
            return { ...state, single: action.payload.data.todo };
        default:
            return state;
    }
}

