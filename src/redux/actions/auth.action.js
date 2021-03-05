import { SET_LOGIN_STATE } from '../constants/auth.constant';

const setLoginState = (loginData) => {
    return {
      type: SET_LOGIN_STATE,
      payload: loginData,
    };
};
const Login = (data) => {
    let { email, password } = data;
    return dispatch => {
        console.log(email, password)
        dispatch(success(data));
    }
    function success(user) { return { type: SET_LOGIN_STATE, user } }
}
export default {
    setLoginState,
    Login
}