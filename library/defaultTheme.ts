export const defaultTheme = (theme?: { [key: string]: any }) => {
  return {
    primary_theme: theme?.primary_theme || "red",
    button: {
      background: theme?.button?.background || "pink",
      text: theme?.button?.text || "black",
    },
    ...theme?.extend,
  };
};
