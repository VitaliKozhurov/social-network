import React from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { profileActions } from "../../redux/profileReducer";
import { AppStateType } from "../../redux/redux-store";
import { UserProfileType } from "../../appTypes/types";

type ProfileContainerType = MapStateToPropsType & typeof profileContainerAction;

const profileContainerAction = {
    setUserProfile: profileActions.setUserProfile,
};

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                console.log(response);
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profile} />
            </>
        );
    }
}

type MapStateToPropsType = {
    profile: UserProfileType;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
});

export default connect<
    MapStateToPropsType,
    typeof profileContainerAction,
    {},
    AppStateType
>(mapStateToProps, { ...profileContainerAction })(ProfileContainer);
