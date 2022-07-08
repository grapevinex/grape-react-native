import { useSelector } from "react-redux";
import { RootState } from "../store";
import useColorScheme from "./useColorScheme";

export default function useTheme() {
  const userTheme: string = useSelector((state: RootState) => state.user.theme);
  const colorScheme = useColorScheme();
  const theme = () => {
    if (userTheme === "dark") {
      return "dark";
    }
    if (userTheme === "light") {
      return "light";
    }
    return colorScheme === "dark" ? "dark" : "light";
  };
  return theme();
}
