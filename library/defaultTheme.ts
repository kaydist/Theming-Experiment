const black = "#000000";
const white = "#FFFFFF";
const yellow = "#F6D204";
const purple = "#5904F6";
const blue = "#04A1F6";
const pink = "#FF5576";
const primary_color = {
  50: "#FFEBE0",
  100: "#FDDECD",
  200: "#FBBD9B",
  300: "#FA9B68",
  400: "#F87A36",
  500: "#F65904",
  600: "#C54703",
  700: "#943502",
  800: "#622402",
  900: "#311201",
};
const secondary_color = {
  50: "#E1EEF0",
  100: "#CEE3E5",
  200: "#9CC8CC",
  300: "#6BACB2",
  400: "#399199",
  500: "#08757F",
  600: "#065E66",
  700: "#05464C",
  800: "#032F33",
  900: "#021719",
};
const neutral_color = {
  50: "#F9FAFB",
  100: "#F2F4F7",
  200: "#E4E7EC",
  300: "#D0D5DD",
  400: "#98A2B3",
  500: "#667085",
  600: "#475467",
  700: "#344054",
  800: "#1D2939",
  900: "#101828",
};
const red_color = {
  50: "#FFEBEB",
  100: "#F8D5D5",
  200: "#F2ABAB",
  300: "#EB8181",
  400: "#E45656",
  500: "#DE2C2C",
  600: "#B12323",
  700: "#851B1B",
  800: "#591212",
  900: "#2C0909",
};
const green_color = {
  50: "#E5FFEF",
  100: "#CCF6DB",
  200: "#99EEB7",
  300: "#66E593",
  400: "#33DC6E",
  500: "#00D44A",
  600: "#00A93B",
  700: "#007F2D",
  800: "#00551E",
  900: "#002A0F",
};

export const defaultTheme = (theme?: { [key: string]: any }) => {
  return {
    colors: {
      primary_color: theme?.primary_color || primary_color,
      secondary_color: theme?.secondary_color || secondary_color,
      neutral_color: theme?.neutral_color || neutral_color,
      red_color: theme?.red_color || red_color,
      green_color: theme?.green_color || green_color,
      yellow,
      purple,
      blue,
      pink,
      white,
      black,
      ...theme?.extend?.colors,
    },

    button: {
      background: theme?.button?.background || primary_color[500],
      text: theme?.button?.text || white,
      disabled: theme?.button?.disabled || {
        background: neutral_color[100],
        text: neutral_color[700],
      },
    },

    tooltip: {
      text: theme?.tooltip.text || primary_color[500],
      content: {
        background: theme?.tooltip.content?.background || secondary_color[500],
        text: theme?.tooltip?.content?.text || white,
      },
    },
    ...theme?.extend,
  };
};
