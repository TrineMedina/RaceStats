const Minutes = () => {
  const minutes = [];
  for (let i = 0; i < 60; i++) {
    //Added conditional to ensure each number has two digits for future render purposes
    if (i < 10) minutes.push(`0${i}`);
    else minutes.push(`${i}`);
  }
  return minutes;
};

export default Minutes;
