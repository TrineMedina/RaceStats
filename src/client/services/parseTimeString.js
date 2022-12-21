const parseTimeString = (time) => {
  const times = time.split(":");

  return times;
};

const getHours = (time) => {
  return parseTimeString(time)[0];
};

const getMinutes = (time) => {
  return parseTimeString(time)[1];
};

const getSeconds = (time) => {
  return parseTimeString(time)[2];
};

export { getHours, getMinutes, getSeconds };
