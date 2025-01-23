export const isValidTimeInput = (value) =>
  Number.isInteger(value) && value >= 0 && value <= 59;
