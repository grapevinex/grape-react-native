/* eslint-disable @typescript-eslint/naming-convention */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';
import { SET_AUTH_ERROR } from '../types/Auth';
import HttpClient from './HttpClient';

export class AuthApi extends HttpClient {
  public authorizeUser = async (
    dispatch:any, email: string, pass: string, setLoginRequest:any, setLoginSuccess:any, setLoginError:any,
  ): Promise<AxiosResponse> => {
    dispatch(setLoginRequest());
    await this.instance
      .post('/api/auth/signin',
        {
          username: email,
          password: pass,
        })
      .then(({ data }) => {
        dispatch(setLoginSuccess(data));
        AsyncStorage.setItem(
          'refreshToken', data.refresh_token,
        );
        AsyncStorage.setItem(
          'accessToken', data.access_token,
        );
      })
      .catch((response) => {
        dispatch(setLoginError(response));
      });
  };
  registerUser = async (dispatch:any, userData:any, setLoginRequest:any, setLoginSuccess:any, setLoginError:any) => {
    dispatch(setLoginRequest());
    await this.instance
      .post("/api/auth/signup", userData)
      .then(({data}) => {
        dispatch(setLoginSuccess(data));
      })
      .catch(err =>
        dispatch(setLoginError(err))
      );
  }
}
