import React from 'react';
import './App.css';
import {Header, NavBar, Profile, Dialogs, Footer} from './components';
import {Route, Routes} from 'react-router-dom';
import {EmptyChat} from './components/UI/EmptyChat/EmptyChat';
import {Chat} from './components/Dialogs/Chat/Chat';


const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="mainContent container">
                <NavBar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/message" element={<Dialogs />}>
                            <Route index element={<EmptyChat />} />
                            <Route path={':id'} element={<Chat />}
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
