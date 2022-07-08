export const SET_THEME = 'SET_THEME';
export const SET_USER = 'SET_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const SET_AUTH_REQUEST = 'SET_AUTH_REQUEST';
export const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS';
export const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
export const SET_REFRESH_SUCCESS = 'SET_AUTH_SUCCESS';
export const SET_RESOLVE_ACTION = 'SET_RESOLVE_ACTION';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export interface LoginResponse {
  username : string,
  roles?: [],
  access_token : string,
  refresh_token : string,
  token_type : string,
  expires_in : number
}

export interface SetAuthRequest {
  type: typeof SET_AUTH_REQUEST,
}

export interface SetAuthSuccess {
  type: typeof SET_AUTH_SUCCESS,
  payload: LoginResponse
}

export interface SetAuthError {
  type: typeof SET_AUTH_ERROR,
  payload: Object,
}

export interface SetRefreshSuccess {
  type: typeof SET_REFRESH_SUCCESS,
  payload: LoginResponse
}

export interface SetResolveAction {
  type: typeof SET_RESOLVE_ACTION,
  payload: string
}

export interface SetSignOutAction {
  type: typeof SIGN_OUT,
  payload: boolean,
}

export interface AuthState {
  pending: boolean;
  signedIn: boolean;
  resolveAction?: string,
  error?: Object,
  data?: LoginResponse
}

export type AuthAction =
SetAuthRequest
| SetAuthSuccess
| SetAuthError
| SetRefreshSuccess
| SetResolveAction
| SetSignOutAction;
