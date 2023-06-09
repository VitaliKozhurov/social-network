import React from "react";
import { Header } from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { authActions } from "../../redux/authReducer";
import { AppStateType } from "../../redux/redux-store";

type HeaderPropsType = MapStatePropsType & typeof authActions;

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const { id: userID, email, login } = response.data.data;
                    this.props.setAuthUserData({ userID, email, login });
                }
            });
    }

    render() {
        return <Header {...this.props} />;
    }
}

type MapStatePropsType = {
    isAuth: boolean;
    login: string;
};
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect<MapStatePropsType, typeof authActions, {}, AppStateType>(
    mapStateToProps,
    { ...authActions }
)(HeaderContainer);
