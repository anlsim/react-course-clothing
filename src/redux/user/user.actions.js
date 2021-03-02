import {UserActionTypeps} from './user.types';
export const setCurrentUser = user  => ({
    type: UserActionTypeps.SET_CURRENT_USER,
    payload: user
})