import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from 'components/Login/LoginContainer';
import {AppStateType} from 'redux/redux-store';
import {connect} from 'react-redux';
import {initializeAppTC} from 'redux/appReducer';
import {Preloader} from 'components/UI/Preloader/Preloader';
import {NavBar} from 'components/NavBar/NavBar';
import {DialogsContainer} from 'components/Dialogs/DialogsContainer';
import {EmptyChat} from 'components/UI/EmptyChat/EmptyChat';
import {ChatContainer} from 'components/Dialogs/Chat/ChatContainer';
import {UsersContainer} from 'components/Users/UsersContainer';
import {Footer} from 'components/Footer/Footer';

class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        const {isAuth, isInitialize} = this.props;
        if (!isInitialize) {
            return <Preloader />
        }

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
    }

};


type MapStateToPropsType = ({
    isAuth: boolean
    isInitialize: boolean
})
type MapDispatchToPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    isInitialize: state.app.isInitialize
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {initializeApp: initializeAppTC})(App)

