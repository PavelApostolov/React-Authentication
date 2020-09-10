import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (
  token: string,
  userId: number,
  username: string
) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    admin: username === "admin", // the role of admin gives access to Admin page
  };
};

export const authFail = (error: string) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  // in case of using localStorage - remove token and userId from there
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const auth = (username: string, password: string) => {
  // in case of calls to DB there will be a flag for handling properly signup and login
  return (dispatch) => {
    dispatch(authStart());

    dispatch(authSuccess("12345", 12345, username));
    // token and userId will be stored in localStorage
    // authFail for errors with try/catch block
  };
};

export const setAuthRedirectPath = (path: string) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};
