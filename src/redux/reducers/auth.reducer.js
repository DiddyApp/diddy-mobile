import { SET_LOGIN_STATE } from '../constants/auth.constant';

const initialState = {
    isLoggedIn: false,
    userId: '',
    token: '',
    refreshToken: '',
    expiresOn: '',
    data: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LOGIN_STATE:
        return {
          ...state,
          ...action.payload, // this is what we expect to get back from API call and login page input
          isLoggedIn: true, // we set this as true on login
        };
      default:
        return state;
    }
  };
export default authReducer;