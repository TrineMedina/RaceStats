import calculateSeconds from "../../client/services/calculateSeconds";

describe("Calculate Seconds", () => {
  test("Adds hh mm ss correctly", () => {
    expect(calculateSeconds(1, 10, 10)).toBe(4210);
  });

  test("Adds mm ss correctly", () => {
    expect(calculateSeconds(0, 1, 10)).toBe(70);
  });

  test("Adds hh ss correctly", () => {
    expect(calculateSeconds(1, 0, 10)).toBe(3610);
  });

  test("Converts string to number and adds correctly", () => {
    expect(calculateSeconds("1", "10", "10")).toBe(4210);
  });
});
