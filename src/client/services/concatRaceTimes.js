const concatRaceTimes = (hh, mm, ss) => {
  !hh ? (hh = "00") : hh;
  !mm ? (mm = "00") : mm;
  !ss ? (ss = "00") : ss;

  return `${hh}:${mm}:${ss}`;
};

export default concatRaceTimes;
