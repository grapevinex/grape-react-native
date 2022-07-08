import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from './reducers/AuthReducer';
import UserReducer from './reducers/UserReducer';


const appReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

const rootReducer = (state:any, action:any) => {
  if (action.type === 'SIGN_OUT') {
    AsyncStorage.removeItem(
      'refreshToken',
    );
    AsyncStorage.removeItem(
      'accessToken',
    );
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
export type RootState = ReturnType<typeof rootReducer>;

// @ts-ignore
export const Persisted = persistStore(Store);
