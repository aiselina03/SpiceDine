import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import "./style.scss"


function useDarkLightMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  function handleLight() {
    setTheme("light");
  }

  function handleDark() {
    setTheme("dark");
  }

  return { theme, handleLight, handleDark };
}

export default useDarkLightMode;






