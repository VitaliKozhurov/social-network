import React from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({editMode: true})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
    }

    render() {
        return (
            <>
                {

                    <div className={s.body}>
                        <span className={s.title}>My status</span> : {
                        this.state.editMode
                            ? <input className={s.statusInput} onBlur={this.deactivateEditMode.bind(this)} value={'asdsad'} autoFocus />
                            : <span className={s.statusSpan} onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    }
                    </div>

                }
            </>
        )
    }
};