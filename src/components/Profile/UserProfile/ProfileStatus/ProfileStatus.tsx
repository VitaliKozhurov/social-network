import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: ProfileStatusType) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    onChangeStatus(e: ChangeEvent<HTMLInputElement>) {
        this.setState({status: e.currentTarget.value})
    }

    activateEditMode() {
        this.setState({editMode: true})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
        if (this.state.status.length) {
            this.props.updateUserStatus(this.state.status)
        }
    }

    render() {
        return (
            <>
                <div className={s.body}>
                    <span className={s.title}>My status</span> : {
                    this.state.editMode
                        ? <input className={s.statusInput} onBlur={this.deactivateEditMode.bind(this)}
                                 value={this.state.status} onChange={this.onChangeStatus.bind(this)} autoFocus />
                        : <span className={s.statusSpan}
                                onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'No status'}</span>
                }
                </div>
            </>
        )
    }
}