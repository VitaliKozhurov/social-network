import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Login} from './Login';
import {loginTC} from '../../redux/authReducer';

type MapStateToPropsType = {
    isFetching: boolean
    isAuth: boolean
    error:string
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const mapDispatchToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        error:state.auth.error
    }
}

export const LoginContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapDispatchToProps, {login: loginTC})(Login)