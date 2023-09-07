import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

interface Props {
  label: string;
  onClick?: () => void;
  style?: any;
}

const defaultTheme = {
  primary_color: "blue",
  button: {
    _light: {
      background: "pink",
      text: "black",
    },
    _dark: {
      background: "black",
      text: "pink",
    },
  },
};

function SharedButton({ label = "button", onClick, style }: Props) {
  const { currentTheme, currentMode } = useContext(ThemeContext);
  const color = currentTheme.button[currentMode];
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color.background, color: color.text, ...style }}
    >
      {label}
    </button>
  );
}

export default SharedButton;
