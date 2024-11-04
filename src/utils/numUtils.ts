export const fixedFloatPoint = (
  num: number | string,
  precision: number,
): string => {
  const fixedPoint = Number(num).toFixed(precision);
  return fixedPoint;
};
