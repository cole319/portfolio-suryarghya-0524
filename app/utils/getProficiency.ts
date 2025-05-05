export const getProficiency = (proficiency: number) => {
  const width = Math.floor((proficiency / 10) * 100);
  return width.toString() + "%";
};
