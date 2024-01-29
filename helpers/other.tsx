export const isArrayExist = (arr: any[]) => {
  const result = Array.isArray(arr) && arr.length > 0 && arr.every((item) => !!item);
  return result;
};


