/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import apiContext from '../../context/apiContext';
import { Store } from '..';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> { }
}

class HttpClient {
  public instance: AxiosInstance;

  public isRefreshing = false;

  public constructor() {
    this.instance = axios.create({
      baseURL: apiContext(),
    });
    this.initializeResponseInterceptor();
    this.initializeRequestInterceptor();
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  };

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleError,
    );
  };

  private handleRequest = async (config: AxiosRequestConfig) => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken != null && config.headers !== undefined) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  private handleResponse = (response: AxiosResponse) => (response);

  public handleError = (error: any) => {
    this.handleUnauthorizedException(error);
    this.handleBadRequest(error);
    this.handleUnprocessableEntity(error);
    return Promise.reject(error);
  };

  public signOutUser = () => {
    AsyncStorage.removeItem('refreshToken');
    AsyncStorage.removeItem('accessToken');
    Store.dispatch({ type: 'SIGN_OUT' });
  };

  private handleUnprocessableEntity = (error: any) => {
    if (error.response !== undefined && error.response.status === 422) {
      Store.dispatch({ type: 'UNPROCESSABLE_ENTITY' });
    }
    return Promise.reject(error);
  };

  private handleBadRequest = (error: any) => {
    if (error.response !== undefined && error.response.status === 400) {
      console.log('non auth error');
    }
    return Promise.reject(error);
  };

  private handleUnauthorizedException = async (error: any) => {
    const originalRequest = error.config;
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (error.response !== undefined && error.response.status === 401 && !originalRequest.retry && refreshToken) {
      originalRequest.retry = true;
      this.isRefreshing = true;
      return this.refreshTokens(refreshToken, originalRequest);
    }
    return this.signOutUser();
  };

  public refreshTokens(refreshToken: string, originalRequest:AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      this.instance.post('/api/public/access_token',
        {
          refresh_token: refreshToken,
          grant_type: 'refresh_token',
        })
        .then((response:any) => {
          this.asyncStoreTokens(response);
        })
        .catch((err:any) => {
          this.handleBadRequest(err);
          this.signOutUser();
          reject(err);
        })
        .finally(() => { this.isRefreshing = false; });
    });
  }

  private asyncStoreTokens = (response: any) => {
    Store.dispatch({ type: 'SET_AUTH_SUCCESS', data: response });
    AsyncStorage.setItem(
      'refreshToken', response.data.refresh_token,
    );
    AsyncStorage.setItem(
      'accessToken', response.data.access_token,
    );
  };

  public dispatchError(
    error: any, err: any, request: any, resolveAction: any, resolveActionType: string,
  ) {
    const { auth } = Store.getState();
    if (auth.signedIn) {
      Store.dispatch(error(err));
      if (err.response.status && err.response.status === 401) {
        Store.dispatch(request());
        Store.dispatch(resolveAction(resolveActionType));
      }
    }
  }

  public dispatchSuccess(
    response: AxiosResponse<any, any>, success: any,
  ) {
    if (response.status === 200) {
      Store.dispatch(success(response.data));
    }
  }
}

export default HttpClient;
