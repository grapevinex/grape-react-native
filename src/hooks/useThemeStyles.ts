import { useSelector } from "react-redux";
import { RootState } from "../store";
import { GabbaDarkTheme, GabbaLightTheme } from "../styles/Theme";
import useColorScheme from "./useColorScheme";

export default function useThemeStyles() {
  const userTheme: string = useSelector((state: RootState) => state.user.theme);
  const colorScheme = useColorScheme();
  const theme = () => {
    if (userTheme === "dark") {
      return GabbaDarkTheme;
    }
    if (userTheme === "light") {
      return GabbaLightTheme;
    }
    return colorScheme === "dark" ? GabbaDarkTheme : GabbaLightTheme;
  };
  return theme();
}
