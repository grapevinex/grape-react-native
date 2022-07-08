export const SET_USER_THEME = "SET_USER_THEME";

export interface UserTheme {
  theme: "dark" | "light" | "system";
}

export interface SetUserTheme {
  type: typeof SET_USER_THEME;
  payload: UserTheme;
}

export type UserAction = SetUserTheme;
