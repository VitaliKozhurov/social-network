import React from 'react';
import './App.css';
import {Header, NavBar, Profile, Dialogs, Footer} from './components';
import { Route, Routes } from 'react-router-dom';


const App = () => {
    return (
        <div className="App">
            <Header />
            <div className='mainContent container'>
                <NavBar />
                <main className='content'>
                    <Routes>
                        <Route path='/' element={<Profile/>}/>
                        <Route path='/message' element={<Dialogs/>}/>
                    </Routes>
                    
                </main>  
            </div>
            <Footer/>
        </div>
    );
}

export default App;
