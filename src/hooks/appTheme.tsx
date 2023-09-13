import { useMemo, useState } from "react";
import { customLightTheme } from "../assets/theme/customLightTheme";
import { customDarkTheme } from "../assets/theme/customDarkTheme";

export enum AVAILABLE_CUSTOM_THEMES {
  customDarkTheme = "customDarkTheme",
  customLightTheme = "customLightTheme",
}

const customThemes = {
  customDarkTheme: customDarkTheme,
  customLightTheme: customLightTheme,
};

function appThemeHook() {
  const [currentThemeModeName, setCurrentThemeModeName] = useState(
    AVAILABLE_CUSTOM_THEMES.customDarkTheme
  );
  const [currentThemeMode, setCurrentThemeMode] = useState(
    customThemes[AVAILABLE_CUSTOM_THEMES.customDarkTheme]
  );

  const ToggleCustomTheme = (selectedTheme: AVAILABLE_CUSTOM_THEMES) => {
    setCurrentThemeModeName(selectedTheme);
  };

  useMemo(() => {
    setCurrentThemeMode(customThemes[currentThemeModeName]);
  }, [currentThemeModeName]);

  return { currentThemeMode, ToggleCustomTheme, currentThemeModeName };
}

export default appThemeHook;
