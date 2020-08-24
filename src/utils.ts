export const dateStrToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/')
    .map((numStr: string): number => parseInt(numStr, 10));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
