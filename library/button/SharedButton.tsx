import { ReactElement, useContext } from "react";
import { ThemeContext } from "../themeContext";


interface Props {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  style?: any;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
}

function SharedButton({
  label = "button",
  onClick,
  style,
  leftIcon,
  rightIcon,
  variant = 'primary',
}: Props) {
  const { currentTheme } = useContext(ThemeContext);
  const color = currentTheme.button;
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color.background, color: color.text, ...style }}
      className={`variant-${variant}`}
    >
      <div>{leftIcon}</div>
      {label}
      <div>{rightIcon}</div>
    </button>
  );
}

export default SharedButton;
