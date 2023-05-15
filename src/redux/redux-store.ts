import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogReducer} from './dialogsReducer';

const rootReducer = combineReducers(
    {
        postsPage:profileReducer,
        dialogsPage:dialogReducer
    }
)
// Типизация стейта всего приложения
export type AppStateType = ReturnType<typeof rootReducer>
// Стор приложения
export const store = createStore(rootReducer);
// Типизация Стора приложения
export type StoreType = typeof store;