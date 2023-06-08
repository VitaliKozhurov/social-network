import {combineReducers, compose, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogReducer} from './dialogsReducer';
import {userReducer} from './userReducer';
import {authReducer} from './authReducer';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        usersPage: userReducer,
        auth: authReducer
    }
)

// Типизация стейта всего приложения
export type AppStateType = ReturnType<typeof rootReducer>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Стор приложения
export const store = createStore(rootReducer,composeEnhancers());
// Типизация Стора приложения
export type StoreType = typeof store;