import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogReducer} from './dialogsReducer';

const rootReducer = combineReducers(
    {
        postsPage:profileReducer,
        dialogsPage:dialogReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

export type StoreType = typeof store;