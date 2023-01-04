/**
 * This function concats hh mm ss passed from adding a race before it's passed to the backend/db
 * @param hh
 * @param mm
 * @param ss
 * @returns {`${string}:${string}:${string}`}
 */
const concatRaceTimes = (hh, mm, ss) => {
  const regExHours = /2[0-3]|[01][0-9]/;
  const regExMinSec = /[0-5][0-9]/;

  if (
    typeof hh !== "string" ||
    typeof mm !== "string" ||
    typeof ss !== "string"
  ) {
    throw new Error("This function takes three strings as argument");
  }

  hh.length === 1 ? (hh = `0${hh}`) : hh;
  mm.length === 1 ? (mm = `0${mm}`) : mm;
  ss.length === 1 ? (ss = `0${ss}`) : ss;

  if (
    !hh.match(regExHours) ||
    !mm.match(regExMinSec) ||
    !ss.match(regExMinSec)
  ) {
    throw new Error("This function requires all three arguments to be passed");
  }

  return `${hh}:${mm}:${ss}`;
};

export default concatRaceTimes;
