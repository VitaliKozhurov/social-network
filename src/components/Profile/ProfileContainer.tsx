import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {profileActions} from '../../redux/profileReducer';
import {AppStateType} from '../../redux/redux-store';

type ProfileContainerType = MapStateToPropsType & typeof profileActions;

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/2`
            )
            .then((response) => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profile} />
            </>
        )
    }
}

type MapStateToPropsType = any


const mapStateToProps = (state: AppStateType) => (
    {
        profile: state.profilePage.profile
    }
)

export default connect(mapStateToProps, {...profileActions})(ProfileContainer)






