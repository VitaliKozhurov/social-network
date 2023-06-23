import React from 'react';

export class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({editMode: true})
    }
    deactivateEditMode(){
        this.setState({editMode: false})
    }

    render() {
        return (
            <>
                {
                    this.state.editMode
                        ? <div>
                            <input onBlur={this.deactivateEditMode.bind(this)} value={'asdsad'} autoFocus />
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode.bind(this)}>Hello</span>
                        </div>
                }
            </>
        )
    }
};