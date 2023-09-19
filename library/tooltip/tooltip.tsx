import React from "react";
import Styles from "./_tooltip.module.scss";
import useLibraryThemeHook from "../hooks/useLibraryThemeHook";

export interface TooltipProps {
  content: string;
  children: string | React.ReactNode; //this is the parent Item
  className?: string;
}

export default function Tooltip({
  className,
  children,
  content,
}: TooltipProps) {
  const { currentTheme } = useLibraryThemeHook();
  const tooltipTheme = currentTheme.tooltip;

  return (
    <div
      style={{ color: tooltipTheme.text }}
      className={`${Styles.tooltip} ${className ? className : ""}`}
    >
      <div>{children}</div>
      <div
        className={Styles.tooltip_content}
        style={{
          "--tooltip-bg_2d23": tooltipTheme.content.background, //Passes the variable to the stylesheet
          color: tooltipTheme.content.text,
        }}
      >
        {content}
      </div>
    </div>
  );
}
