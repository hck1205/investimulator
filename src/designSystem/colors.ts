const COLORS = Object.freeze({
  'white-100': '#fff',

  'red-50': '#ef5350',

  'blue-30': '#474a53',
  'blue-50': '#1677ff',

  'green-50': '#26A69A',

  'gray-50': '#a8a8a8',
  'gray-100': '#353535',
});

export const WHITE = (number: Number) => COLORS[`white-${number}`];
export const GRAY = (number: Number) => COLORS[`gray-${number}`];
export const RED = (number: Number) => COLORS[`red-${number}`];
export const BLUE = (number: Number) => COLORS[`blue-${number}`];
export const GREEN = (number: Number) => COLORS[`green-${number}`];
