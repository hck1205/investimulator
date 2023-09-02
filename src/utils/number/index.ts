export const convertToNumberLocale = (value: number, options?: any) => {
  if (value) {
    return new Intl.NumberFormat("ko-KR", {
      notation: "standard",
      ...options,
    }).format(value);
  } else {
    return 0;
  }
};

export const convertToPercentage = (value: number) => {
  if (value) {
    return convertToNumberLocale(Number(value), {
      style: "percent",
      maximumSignificantDigits: 2,
      minimumSignificantDigits: 2,
    });
  } else {
    return 0;
  }
};
