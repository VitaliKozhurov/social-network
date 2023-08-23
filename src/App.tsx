import React, {Suspense} from 'react';
import './App.css';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import {LoginContainer} from 'components/Login/LoginContainer';
import {AppStateType, store} from 'redux/redux-store';
import {connect, Provider} from 'react-redux';
import {initializeAppTC, setErrorAppStatusAC} from 'redux/appReducer';
import {Preloader} from 'components/UI/Preloader/Preloader';
import {NavBar} from 'components/NavBar/NavBar';
import {EmptyChat} from 'components/UI/EmptyChat/EmptyChat';
import {ChatContainer} from 'components/Dialogs/Chat/ChatContainer';
import {UsersContainer} from 'components/Users/UsersContainer';
import {Footer} from 'components/Footer/Footer';
import {ErrorNotification} from './components/UI/ErrorNotification/ErrorNotification';
import {InProgress} from './components/InProgress/InProgress';

const DialogsContainer = React.lazy(() => import('components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

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
                            <Route path={'/'} element={<Navigate to={'/profile'} />} />
                            <Route
                                path="/profile/:id?"
                                element={<Suspense fallback={<Preloader />}><ProfileContainer /></Suspense>}
                            />
                            <Route path="/message"
                                   element={<Suspense fallback={<Preloader />}><DialogsContainer /></Suspense>}>
                                <Route index element={<EmptyChat />} />
                                <Route path={':id'} element={<ChatContainer />} />
                            </Route>
                            <Route path="/users" element={<UsersContainer />} />
                            <Route path="/news" element={<InProgress />} />
                            <Route path="/music" element={<InProgress />} />
                            <Route path="/login" element={<LoginContainer />} />
                            <Route path={'*'} element={<h1>Page not found</h1>} />
                        </Routes>
                    </main>
                </div>
                {!!this.props.isAppError && <ErrorNotification isAppError={this.props.isAppError}
                                                               setAppErrorStatus={this.props.setAppErrorStatus} />}
                <Footer />
            </div>
        );
    }

};


type MapStateToPropsType = ({
    isAuth: boolean
    isInitialize: boolean
    isAppError: null | string
})

type MapDispatchToPropsType = {
    initializeApp: () => void
    setAppErrorStatus: (status: null | string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    isInitialize: state.app.isInitialize,
    isAppError: state.app.isAppError
})

export const AppWithRoute = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <ContainerApp />
            </Provider>
        </HashRouter>
    )
}


const ContainerApp = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {initializeApp: initializeAppTC, setAppErrorStatus: setErrorAppStatusAC})(App)

// export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
// (mapStateToProps, {initializeApp: initializeAppTC})(App)

