import {
  LoginResponse,
  SetAuthError, SetAuthRequest, SetAuthSuccess, SetResolveAction, SET_AUTH_ERROR, SET_AUTH_REQUEST, SET_AUTH_SUCCESS, SET_REFRESH_SUCCESS, SET_RESOLVE_ACTION, SIGN_OUT,
} from '../types/Auth';
import { AuthApi } from '../api/AuthApi';

const AuthApiAction = new AuthApi();

export const setLoginRequest = (
): SetAuthRequest => ({
  type: SET_AUTH_REQUEST,
});

export const setLoginSuccess = (
  data: LoginResponse,
): SetAuthSuccess => ({
  type: SET_AUTH_SUCCESS,
  payload: data,
});

export const setLoginError = (
  payload: Object,
): SetAuthError => ({
  type: SET_AUTH_ERROR,
  payload,
});

export const setRefreshSuccess = (
  data: any,
): SetAuthSuccess => ({
  type: SET_REFRESH_SUCCESS,
  payload: data,
});

export const setResolveAction = (
  payload: string,
): SetResolveAction => ({
  type: SET_RESOLVE_ACTION,
  payload,
});

export const setSignOut = () => ({
  type: SIGN_OUT,
  data: undefined,
});

export const loginUser = (email: string, password: string) => async (dispatch:any) => {
  await AuthApiAction.authorizeUser(
    dispatch,
    email,
    password,
    setLoginRequest,
    setLoginSuccess,
    setLoginError,
  );
};

export const registerUser = (newUser:any) => async (dispatch:any) => {
  await AuthApiAction.registerUser(
    dispatch,
    newUser,
    setLoginRequest,
    setLoginSuccess,
    setLoginError,
  );
};
