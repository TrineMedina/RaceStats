const Hours = () => {
  const hours = [];
  for (let i = 0; i < 25; i++) {
    hours.push({ label: `${i}`, id: "swimHour" });
  }
  return hours;
};

export default Hours;
