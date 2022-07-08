import {
    UserAction,
    SET_USER_THEME,
  } from '../types/User';
  
  const initialState = {
    theme: 'system',
  };
  
  export default (state:any = initialState, action: UserAction) => {
    switch (action.type) {
      case SET_USER_THEME:
        return {
          ...state,
          theme: action.payload,
        };
      default:
        return state;
    }
  };
  