import { SET_LOGIN_STATE, SET_GOAL_STATE } from '../constants/auth.constant';

const setLoginState = (loginData) => {
    return {
      type: SET_LOGIN_STATE,
      payload: loginData,
    };
};

function loginAction (data){
    let { email, password } = data;
    return dispatch => {
        console.log(email, password)
        dispatch(success(data));
    }
    function success(user) { return { type: SET_LOGIN_STATE, user } }
}

function setFirstGoal (data){
    console.log(data);
    return dispatch => {
        dispatch({ type: SET_GOAL_STATE});
    }
}
export default actions = {
    setLoginState,
    loginAction,
    setFirstGoal
}