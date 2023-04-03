import React from 'react';
import './App.css';
import {Header, NavBar, Profile, Footer} from './components';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className='mainContent container'>
                <NavBar />
                <Profile /> 
            </div>
            <Footer/>
        </div>
    );
}

export default App;
