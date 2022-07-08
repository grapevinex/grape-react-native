import { SET_USER_THEME } from "../types/User";

export const setUserTheme = (payload: string) => ({
    type: SET_USER_THEME,
    payload,
})