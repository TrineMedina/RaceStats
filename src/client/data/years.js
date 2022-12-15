const years = () => {
  const thisYear = new Date().getFullYear();
  const years = [];

  for (let i = thisYear; i >= 1974; i--) {
    years.push(`${i}`);
  }
  return years;
};

export default years;
