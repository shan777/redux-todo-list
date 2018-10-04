import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listReducer from './list_reducer';

//rootReducer is one reducer that contains all the reducers we create
//any new reducer, add here
const rootReducer = combineReducers({
    list: listReducer,
    form: formReducer
});

export default rootReducer;
