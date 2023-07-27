import {UserPageType} from '../appTypes/types';
import {UsersIntitialStateType} from '../redux/userReducer';
type UserUpdateType = Partial<UserPageType>
export const updateObjectInUserArray = (userID:number, state:UsersIntitialStateType, updateModel: UserUpdateType) =>{
    return state.users.map((user) =>
        user.id === userID
            ? {
                ...user,
               ...updateModel
            }
            : user
    )
}