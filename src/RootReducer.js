import { combineReducers } from 'redux'
import { UserDetailReducer, 
        UserJoinReducer, 
        UserListReducer, 
        UserLoginReducer, 
        UserUpdateReducer
     } from './user/'

export const rootReducer = combineReducers({
        UserDetailReducer, 
        UserJoinReducer, 
        UserListReducer, 
        UserLoginReducer, 
        UserUpdateReducer

})