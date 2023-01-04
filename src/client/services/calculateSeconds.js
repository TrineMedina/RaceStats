/*
This function takes the hh, mm and ss inputs from the user and calculates
the total number of seconds. This is needed for the comparison in the chart
view and will be passed as values to the database
 */
const calculateSeconds = (hh, mm, ss) => {
  return hh * 3600 + mm * 60 + ss * 1;
};

export default calculateSeconds;
