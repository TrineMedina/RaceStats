/*
This function takes the hh, mm and ss inputs from the user and calculates
the total number of seconds. This is needed for the comparison in the chart
view and will be passed as values to the database
 */
const calculateSeconds = (hh, mm, ss) => {
  //Setting any undefined values to zero to ensure
  //calculation of seconds is done correctly. It's
  //guaranteed that only a number is passed
  !+hh ? (hh = 0) : +hh;
  !+mm ? (mm = 0) : +mm;
  !+ss ? (ss = 0) : +ss;

  console.log("passed number type: ", typeof hh, typeof mm, typeof ss);

  return hh * 3600 + mm * 60 + ss;
};

export default calculateSeconds;
