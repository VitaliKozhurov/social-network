import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserStatusTC, setUserProfileTC, updateUserStatusTC} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';
import {UserProfileType} from '../../appTypes/types';
import {useParams} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type UseParamsType = {
    paramsID: string | undefined;
};
type MapStateToPropsType = {
    profile: UserProfileType;
    profileStatus: string;
    userID: number;
};
type MapDispatchToPropsType = {
    setUserProfile: (paramsID: string | undefined, userID: number) => void
    getUserStatus: (paramsID: string | undefined, userID: number) => void
    updateUserStatus: (status: string) => void
}
type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & UseParamsType;

const withRouter = (WrappedComponent: React.ComponentType<ProfileContainerType>) =>
    (props: Omit<ProfileContainerType, 'paramsID'>) => {
        const {id} = useParams<string>();
        return <WrappedComponent {...props} paramsID={id} />;
    };

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        this.props.setUserProfile(this.props.paramsID, this.props.userID);
        this.props.getUserStatus(this.props.paramsID, this.props.userID);
    }

    componentDidUpdate(prevProps: ProfileContainerType & UseParamsType): void {
        if (prevProps.paramsID !== this.props.paramsID) {
            this.props.setUserProfile(this.props.paramsID, this.props.userID)
            this.props.getUserStatus(this.props.paramsID, this.props.userID)
        }
    }

    render() {
        return (
            <>
                <Profile
                    profile={this.props.profile}
                    profileStatus={this.props.profileStatus}
                    updateUserStatus={this.props.updateUserStatus}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus,
    userID: state.auth.userID,
});

export default compose<ComponentType>( withAuthRedirect,connect(mapStateToProps, {
    setUserProfile: setUserProfileTC,
    getUserStatus: getUserStatusTC,
    updateUserStatus: updateUserStatusTC
}), withRouter)(ProfileContainer)