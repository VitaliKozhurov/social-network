import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogReducer} from './dialogsReducer';

const reducers = combineReducers(
    {
        postsPage:profileReducer,
        dialogsPage:dialogReducer
    }
)

const store = createStore(reducers);
export default store;