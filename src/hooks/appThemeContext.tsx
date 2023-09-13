import { useState, createContext } from "react";
import { defaultTheme } from "./defaultTheme";
import { defaultDarkTheme } from "./defaultDarkTheme";
interface Props {
  children: any;
  theme?: any;
}

const ThemeContext = createContext(null as any);

function ThemeProvider({ children, theme }: Props) {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme(theme));
  const [currentMode, setCurrentMode] = useState("light");

  const toggleThemeMode = () => {
    if (currentMode === "dark") {
      setCurrentMode('light')
      setCurrentTheme(defaultTheme(theme))
      return;
    }
    setCurrentMode('dark')
    setCurrentTheme(defaultDarkTheme(theme))
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setCurrentTheme, currentMode, toggleThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
