export const defaultTheme = (color: { [key: string]: any }) => {
  return {
    primary_color: color?.primary_color || "red",
    button: {
      _light: {
        background: color?.button?._light?.background || "pink",
        text: color?.button?._light?.text || "black",
      },
      _dark: {
        background: color?.button?._dark?.background || "black",
        text: color?.button?._dark?.text || "pink",
      },
    },
    ...color.extend,
  };
};
