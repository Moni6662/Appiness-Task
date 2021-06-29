import { login_request } from '../constant/constants'
const initialState = {
    loading: false,
    data: null
};


export default function loginUser(state = initialState, action) {
    switch (action.type) {
        case login_request.LOGIN_REQUEST:
            return { ...action.data, loading: true }
        case login_request.LOGIN_SUCCESS:
            return { users: action.data, loading: false };
        default:
            return state;
    }
}