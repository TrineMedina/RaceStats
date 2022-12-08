const Hours = () => {
  const hours = [];
  for (let i = 0; i < 25; i++) {
    //Added conditional to ensure each number has two digits for future render purposes
    if (i < 10) hours.push(`0${i}`);
    else hours.push(`${i}`);
  }
  return hours;
};

export default Hours;
