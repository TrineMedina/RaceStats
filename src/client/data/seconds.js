const Seconds = () => {
  const seconds = [];
  for (let i = 0; i < 61; i++) {
    //Added conditional to ensure each number has two digits for future render purposes
    if (i < 10) seconds.push(`0${i}`);
    else seconds.push(`${i}`);
  }
  return seconds;
};

export default Seconds;
