import React from 'react';
import s from './Profile.module.css';
import {UserProfile} from './UserProfile/UserProfile';
import {AddPostComponent} from './AddPostComponent/AddPostComponent';
import {Posts} from './Posts/Posts';
import {addPostAC, updatePostAC} from '../../redux/profileReducer';
import {StoreContext} from '../../StoreContext';

export const Profile = () => {
    return (
        <div>
            <div className={s.bgBody}>
                <div className={s.bg}></div>
            </div>
            <UserProfile />
            <StoreContext.Consumer>
                {
                    (store)=>{
                        const addPost = (value: string) => {
                            store.dispatch(addPostAC(value));
                        };
                        const updatePost = (value: string) => {
                            store.dispatch(updatePostAC(value));
                        };

                        return (
                            <>
                                <AddPostComponent
                                    title={'My new Post'}
                                    value={store.getState().postsPage.newPostText}
                                    placeholder={'Enter your message post'}
                                    addPost={addPost}
                                    updatePost={updatePost}
                                />
                                <Posts posts={store.getState().postsPage.posts} />
                            </>
                        )
                    }
                }
            </StoreContext.Consumer>
        </div>
    );
};
