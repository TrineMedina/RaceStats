const Minutes = () => {
  const minutes = [];
  for (let i = 0; i < 61; i++) {
    minutes.push({ label: `${i}`, id: "swimMinutes" });
  }
  return minutes;
};

export default Minutes;
