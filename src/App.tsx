import React from 'react';
import './App.css';
import {Header, NavBar, Profile, Footer, UsersContainer, EmptyChat, DialogsContainer, ChatContainer} from './components';
import {Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="mainContent container">
                <NavBar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/message" element={<DialogsContainer />}>
                            <Route index element={<EmptyChat />} />
                            <Route path={':id'} element={<ChatContainer />} />
                        </Route>
                        <Route path="/users" element={<UsersContainer />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;
