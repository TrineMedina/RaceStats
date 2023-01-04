const parseTimeString = (time) => {
  const regEx = /(?:[01]\d|2[0123]):[012345]\d:[012345]\d/;
  if (!time.match(regEx)) {
    console.log("time: ", time);
    throw new Error("Time argument format must match hh:mm:ss");
    return;
  }
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
