import React from 'react';
import './App.css';
import {Header, NavBar, Profile} from './components';

const App = () => {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Profile />
        </div>
    );
}

export default App;
