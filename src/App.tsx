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

const App = (props: { isAuth: boolean }) => {
    const {isAuth} = props;
    return (
        <div className="App">
            <HeaderContainer />
            <div className="mainContent container">
                {isAuth ? < NavBar /> : null}
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
            <Footer />
        </div>
    );
};

const mapDispatchToProps = (state: AppStateType): MapDispatchToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect<MapDispatchToPropsType, {}, {}, AppStateType>(mapDispatchToProps)(App)
type MapDispatchToPropsType = ({
    isAuth: boolean
})
