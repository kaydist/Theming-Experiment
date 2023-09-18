import { ReactElement, useState } from "react";
import useLibraryThemeHook from "../hooks/useLibraryThemeHook";

interface Props {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  style?: any;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  iconClassName?: string;
  disabled?: boolean;
}

function SharedButton({
  label = "button",
  onClick,
  style,
  leftIcon,
  rightIcon,
  variant = "primary",
  iconClassName = "",
  disabled,
}: Props) {
  const { currentTheme } = useLibraryThemeHook();
  const buttonTheme = currentTheme.button;
  let buttonStyle = {
    backgroundColor: disabled
      ? buttonTheme.disabled.background
      : variant === "primary"
      ? buttonTheme.background
      : "transparent",
    color: disabled
      ? buttonTheme.disabled.text
      : variant !== "primary"
      ? buttonTheme.background
      : buttonTheme.text,
    border:
      variant === "outline" && !disabled
        ? `1px solid ${buttonTheme.background}`
        : "transparent",
    ...style,
  };

  let [over, setOver] = useState(false);

  if (over && !disabled) {
    buttonStyle.outline = `0.25rem solid ${currentTheme.colors.primary_color[100]}`;
    buttonStyle.transition = "outline 0.1s ease-in-out";
  } else {
    buttonStyle.outline = "";
  }

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      className={`shared-button variant-${variant}`}
    >
      {leftIcon && <div className={`icon ${iconClassName}`}>{leftIcon}</div>}

      {label}

      {rightIcon && <div className={`icon ${iconClassName}`}>{rightIcon}</div>}
    </button>
  );
}

export default SharedButton;
