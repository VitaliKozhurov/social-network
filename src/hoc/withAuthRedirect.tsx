import React from 'react';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {log} from 'util';

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: React.ElementType) => {
    class RedirectComponent extends React.Component<MapStateToPropsType> {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'} />
            }

            return <Component />;
        }
    }

    return connect<MapStateToPropsType, {}, {}, AppStateType>(mapStateToProps)(RedirectComponent);
};

