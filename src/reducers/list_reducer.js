import types from '../actions/types';

//create default state
const DEFAULT_STATE = {
        all: [],
        single: {}
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

