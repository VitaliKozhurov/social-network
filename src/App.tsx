import React from "react";
import "./App.css";
import { Header, NavBar, Profile, Dialogs, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { EmptyChat } from "./components/UI/EmptyChat/EmptyChat";
import { Chat } from "./components/Dialogs/Chat/Chat";
import { StoreType } from "./redux/state";

type StorePropsType = {
    store: StoreType;
};

const App: React.FC<StorePropsType> = ({ store }) => {
    const { postsPage, dialogsPage } = store._state;
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
                                <Profile
                                    data={postsPage}
                                    addPost={store.addPost.bind(store)}
                                    changeText={store.changeText.bind(store)}
                                />
                            }
                        />
                        <Route
                            path="/message"
                            element={<Dialogs users={dialogsPage.dialogs} />}
                        >
                            <Route index element={<EmptyChat />} />
                            <Route
                                path={":id"}
                                element={
                                    <Chat
                                        messages={dialogsPage}
                                        addPost={store.addPost.bind(store)}
                                        changeText={store.changeText.bind(
                                            store
                                        )}
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
