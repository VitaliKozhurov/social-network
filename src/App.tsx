import React from 'react';
import './App.css';
import {Header, NavBar, Profile, Dialogs, Footer} from './components';


const App = () => {
    return (
        <div className="App">
            <Header />
            <div className='mainContent container'>
                <NavBar />
                <main className='content'>
                    {/* <Profile />  */}
                    <Dialogs/>
                </main>  
            </div>
            <Footer/>
        </div>
    );
}

export default App;
