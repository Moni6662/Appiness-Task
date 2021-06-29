import { combineReducers } from 'redux'
import loginUser from './loginReducer';
export default combineReducers({
    login: loginUser,
});


