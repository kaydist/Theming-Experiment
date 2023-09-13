export const defaultDarkTheme = (theme?: { [key: string]: any }) => {
  return {
    primary_theme: theme?.primary_theme || "red",
    button: {
      background: theme?.button?.background || "black",
      text: theme?.button?.text || "red",
    },
    ...theme?.extend,
  };
};
