const Seconds = () => {
  const seconds = [];
  for (let i = 0; i < 61; i++) {
    seconds.push({ label: `${i}`, id: "swimSeconds" });
  }
  return seconds;
};

export default Seconds;
