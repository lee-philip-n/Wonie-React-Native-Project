import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, RESET, VERIFY_PASSWORD_CHANGED } from './types';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email,
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password,
  };
};

export const verifyPasswordChanged = (password) => {
  return {
    type: VERIFY_PASSWORD_CHANGED,
    payload: password,
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.homepage_logout({ type: 'reset' });
};

const loginUserFail = (dispatch, error) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: error });
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        loginUserSuccess(dispatch, user);
      })
      .catch((error) => {
        loginUserFail(dispatch, error);
      })
  };
};

export const createUser = ({ email, password, verifyPassword }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    if (password !== verifyPassword) {
      loginUserFail(dispatch, { message: 'Password did not match.' });
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          loginUserSuccess(dispatch, user);
        })
        .catch((error) => {
          loginUserFail(dispatch, error);
        });
    }
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
