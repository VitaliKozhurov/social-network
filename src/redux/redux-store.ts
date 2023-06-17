import {combineReducers, applyMiddleware, compose, createStore} from 'redux';
import {ProfileReducerActionType, profileReducer} from './profileReducer';
import {DialogsReducerActionType, dialogReducer} from './dialogsReducer';
import {UsersActionsType, userReducer} from './userReducer';
import {AuthReducerActionType, authReducer} from './authReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer,
});

// Типизация стейта всего приложения
export type AppStateType = ReturnType<typeof rootReducer>;
// типизация всех actions
export type AppActionsType =
    | AuthReducerActionType
    | DialogsReducerActionType
    | ProfileReducerActionType
    | UsersActionsType;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionsType
>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Стор приложения
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);
// Типизация Стора приложения
export type StoreType = typeof store;
