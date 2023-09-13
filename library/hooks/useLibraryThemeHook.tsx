import { useContext } from 'react'
import { ThemeContext } from "../themeContext";

function useLibraryThemeHook() {
    const { toggleThemeMode, currentTheme, currentMode } = useContext(ThemeContext);
  return   ({ toggleThemeMode, currentTheme, currentMode } )
}

export default useLibraryThemeHook