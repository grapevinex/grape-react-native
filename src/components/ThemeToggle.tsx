import React from "react";
import { useColorMode,  } from "native-base";
import { useDispatch } from "react-redux";
import { setUserTheme } from "../store/actions/UserActions";
import useTheme from "../hooks/useTheme";
import { TouchableOpacity } from "react-native";
import { Text } from './Themed';
import { DarkModeSwitchStyles } from "../styles/AppStyles";

export default function UseColorMode() {
  const { toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const theme = useTheme()

  const themeHandler = () => {
    if (theme === "light") {
      dispatch(setUserTheme("dark"));
    }
    if (theme === "dark") {
      dispatch(setUserTheme("light"));
    }
    toggleColorMode();
  };

  return     <TouchableOpacity
  onPress={() => themeHandler()}
  style={theme === 'light'
    ? [DarkModeSwitchStyles.lightPressable, DarkModeSwitchStyles.link]
    : [DarkModeSwitchStyles.darkPressable, DarkModeSwitchStyles.link]}
>
  <Text
    style={theme === 'light'
      ? [DarkModeSwitchStyles.lightText, DarkModeSwitchStyles.linkText]
      : [DarkModeSwitchStyles.darkText, DarkModeSwitchStyles.linkText]}
  >
    Enable
    {' '}
    {theme === 'light' ? 'Dark' : 'Light'}
    {' '}
    Mode
  </Text>
</TouchableOpacity>;
}
