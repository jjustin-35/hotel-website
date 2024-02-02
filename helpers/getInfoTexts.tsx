export const getInfoTexts = (data: { isProvide: boolean; title: string }[]) => {
  if (!data) return [];
  return data.reduce<string[]>((acc, cur) => {
    if (cur.isProvide) {
      return [...acc, cur.title];
    }
    return acc;
  }, []);
};
