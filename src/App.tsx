import React from "react";
import "./App.css";
import { Header, NavBar, Profile, Dialogs, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { EmptyChat } from "./components/UI/EmptyChat/EmptyChat";
import { Chat } from "./components/Dialogs/Chat/Chat";
import {ActionType, RootStateType} from './redux/store';

type StorePropsType = {
    state: RootStateType;
    dispatch: (action: ActionType) => void;
};

const App: React.FC<StorePropsType> = ({ state, dispatch }) => {
    const { postsPage, dialogsPage } = state;

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
                                <Profile data={postsPage} dispatch={dispatch} />
                            }
                        />
                        <Route
                            path="/message"
                            element={<Dialogs users={dialogsPage.users} />}
                        >
                            <Route index element={<EmptyChat />} />
                            <Route
                                path={":id"}
                                element={
                                    <Chat
                                        dialogs={dialogsPage}
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
