import {
  AuthAction,
  SET_AUTH_ERROR,
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS,
  SET_RESOLVE_ACTION,
  SIGN_OUT,
} from '../types/Auth';

const initialState = {
  pending: false,
  signedIn: false,
};

export default (state:any = initialState, action: AuthAction) => {
  switch (action.type) {
    case SET_AUTH_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SET_AUTH_SUCCESS:
      return {
        ...state,
        signedIn: true,
        pending: false,
        error: undefined,
        data: action.payload,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        signedIn: false,
        pending: false,
        error: action.payload,
      };
    case SET_RESOLVE_ACTION:
      return {
        ...state,
        signedIn: true,
        pending: false,
        error: undefined,
        resolveAction: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        signedIn: false,
        pending: false,
        error: undefined,
        data: undefined,
      };
    default:
      return state;
  }
};
