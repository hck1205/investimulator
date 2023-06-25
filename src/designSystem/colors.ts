const COLORS = Object.freeze({
  "white-100": "#fff",

  "gray-100": "#353535",

  "blue-50": "#1677ff",
});

export const WHITE = (number: Number) => COLORS[`white-${number}`];
export const BLUE = (number: Number) => COLORS[`blue-${number}`];
export const GRAY = (number: Number) => COLORS[`gray-${number}`];
