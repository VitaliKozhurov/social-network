import React from 'react';
import './App.css';
import {
    NavBar,
    Footer,
    UsersContainer,
    EmptyChat,
    DialogsContainer,
    ChatContainer,
} from './components';
import {Route, Routes} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from './components/Login/LoginContainer';
import {AppStateType} from './redux/redux-store';
import {connect} from 'react-redux';


const App = (props: MapDispatchToPropsType) => {
    const {isAuth} = props;
    return (
        <div className="App">
            <HeaderContainer />
            {isAuth
                ? <div className="mainContent container">
                    <NavBar />
                    <main className="content">
                        <Routes>
                            <Route
                                path="/profile/:id?"
                                element={<ProfileContainer />}
                            />

                            <Route path="/message" element={<DialogsContainer />}>
                                <Route index element={<EmptyChat />} />
                                <Route path={':id'} element={<ChatContainer />} />
                            </Route>
                            <Route path="/users" element={<UsersContainer />} />
                            <Route path="/login" element={<LoginContainer />} />
                        </Routes>
                    </main>
                </div>
                : <LoginContainer />
            }
            <Footer />
        </div>
    );
};

type MapDispatchToPropsType = {
    isAuth: boolean
}
const mapDispatchToProps = (state: AppStateType): MapDispatchToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect<MapDispatchToPropsType, {}, {}, AppStateType>(mapDispatchToProps)(App)