export const getItemsCount = (width: number) => {
  if (width > 1195) return 8;
  if (width > 587) return 6;
  return 4;
};

