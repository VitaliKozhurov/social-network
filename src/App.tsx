import React, {FC} from 'react';
import "./App.css";
import { Header, NavBar, Profile, Dialogs, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { EmptyChat } from "./components/UI/EmptyChat/EmptyChat";
import { Chat } from "./components/Dialogs/Chat/Chat";
import {AppStateType} from './redux/redux-store';
import {ActionsType} from './appTypes/types';

type StateType = {
    state:AppStateType
    dispatch:(action:ActionsType)=>void
}


const App:FC<StateType> = ({state, dispatch})=> {

    return (
        <div className="App">
            <Header />
            <div className="mainContent container">
                <NavBar />
                <main className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Profile  profileState={state.postsPage} dispatch={dispatch} />
                            }
                        />
                        <Route
                            path="/message"
                            element={<Dialogs users={state.dialogsPage.users} />}
                        >
                            <Route index element={<EmptyChat />} />
                            <Route
                                path={":id"}
                                element={
                                    <Chat
                                        dialogs={state.dialogsPage}
                                        dispatch={dispatch}
                                    />
                                }
                            />
                        </Route>
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;
