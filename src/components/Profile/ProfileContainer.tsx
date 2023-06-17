import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { profileActions } from "../../redux/profileReducer";
import { AppStateType } from "../../redux/redux-store";
import { UserProfileType } from "../../appTypes/types";
import { useParams } from "react-router-dom";
import { profileAPI } from "../../api/api";

const withRouter =
    (
        WrappedComponent: React.ComponentType<
            ProfileContainerType & UseParamsType
        >
    ) =>
    (props: ProfileContainerType) => {
        const { id } = useParams<string>();
        return <WrappedComponent {...props} paramsID={id} />;
    };

type ProfileContainerType = MapStateToPropsType & typeof profileContainerAction;
type UseParamsType = {
    paramsID: string | undefined;
};
const profileContainerAction = {
    setUserProfile: profileActions.setUserProfile,
};

class ProfileContainer extends React.Component<
    ProfileContainerType & UseParamsType
> {
    componentDidMount() {
        profileAPI
            .getProfile(this.props.paramsID, this.props.userID)
            .then((data) => {
                this.props.setUserProfile(data);
            });
    }

    componentDidUpdate(prevProps: ProfileContainerType & UseParamsType): void {
        if (prevProps.paramsID !== this.props.paramsID) {
            profileAPI
                .getProfile(this.props.paramsID, this.props.userID)
                .then((data) => {
                    this.props.setUserProfile(data);
                });
        }
    }

    render() {
        console.log(this.props.paramsID);
        return (
            <>
                <Profile profile={this.props.profile} />
            </>
        );
    }
}

type MapStateToPropsType = {
    profile: UserProfileType;
    userID: number;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    userID: state.auth.userID,
});

export default connect<
    MapStateToPropsType,
    typeof profileContainerAction,
    {},
    AppStateType
>(mapStateToProps, { ...profileContainerAction })(withRouter(ProfileContainer));
