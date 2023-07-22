import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {logoutTC} from 'redux/authReducer';
import {AppStateType} from 'redux/redux-store';

type MapStatePropsType = {
    isAuth: boolean;
    login: string;
};
type MapDispatchToPropsType = {
    logout: () => void
}
type HeaderPropsType = MapStatePropsType & MapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect<MapStatePropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    {
        logout: logoutTC
    }
)(HeaderContainer);


