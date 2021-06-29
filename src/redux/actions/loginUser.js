import { login_request } from '../constant/constants'
import loginData from '../../utils/logindata.json';
export const apiRequest = () => {
  return {
    type: login_request.LOGIN_REQUEST
  }
}
export const fetchData = (data) => {
  return {
    type: login_request.LOGIN_SUCCESS,
    data
  }
};
export const loginUser = (data, browserHistory) => {
  return (dispatch) => {
    dispatch(apiRequest());
    if (loginData.email == data.email && loginData.password == data.password) {
      localStorage.setItem("Authorization", loginData.token);
      browserHistory.push('/dashboard');
      
    }
    else {
      console.log("Authorization failed: Please enter valid username and password");
    }
  };
};
