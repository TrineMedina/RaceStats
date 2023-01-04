import concatRaceTimes from "../../client/services/concatRaceTimes";

describe("Concatenates race times from hh mm ss to 'hh:mm:ss' ", () => {
  test("Concatenate hh mm ss correctly", () => {
    expect(concatRaceTimes("1", "2", "3")).toBe("01:02:03");
  });

  test("Throws an error if an incorrect number is passed - hours", () => {
    expect(() => {
      concatRaceTimes("28", "22", "33");
    }).toThrowError();
  });

  test("Throws an error if an incorrect number is passed - minutes", () => {
    expect(() => {
      concatRaceTimes("22", "88", "13");
    }).toThrowError();
  });

  test("Throws an error if an incorrect number is passed - seconds", () => {
    expect(() => {
      concatRaceTimes("22", "22", "88");
    }).toThrowError();
  });

  test("Throws an error if an number is passed instead of a string", () => {
    expect(() => {
      concatRaceTimes(14, 33, 23);
    }).toThrowError();
  });
});
