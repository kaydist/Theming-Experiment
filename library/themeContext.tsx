import { useState, createContext } from "react";
import { defaultTheme } from "./defaultTheme";

interface Props {
  children: any;
  color: any;
}

const ThemeContext = createContext(null as any);

function ThemeProvider({ children, color }: Props) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme(color));
  const [currentMode, setCurrentMode] = useState("_light");

  const toggleThemeMode = () => {
    if (currentMode === "_dark") {
      setCurrentMode("_light");
      return;
    }
    setCurrentMode("_dark");
  };

  return (
    <>
      <ThemeContext.Provider
        value={{ currentTheme, setCurrentTheme, currentMode, toggleThemeMode }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export { ThemeProvider, ThemeContext };
