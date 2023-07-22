export const convertToNumberLocale = (value: number, options?: any) => {
  return new Intl.NumberFormat("ko-KR", {
    notation: "standard",
    ...options,
  }).format(value);
};

export const convertToPercentage = (value: number) => {
  return convertToNumberLocale(Number(value), {
    style: "percent",
    maximumSignificantDigits: 2,
    minimumSignificantDigits: 2,
  });
};
