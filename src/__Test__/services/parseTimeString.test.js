import {
  getHours,
  getMinutes,
  getSeconds,
} from "../../client/services/parseTimeString";

describe("Parse Time String", () => {
  test("Parses string representation of time correctly - hours", () => {
    expect(getHours("02:30:22")).toBe("02");
  });

  test("Parses string representation of time correctly - minutes", () => {
    expect(getMinutes("02:30:22")).toBe("30");
  });

  test("Parses string representation of time correctly - seconds", () => {
    expect(getSeconds("02:30:22")).toBe("22");
  });

  test("Throws an error if a string in hh:mm:ss is not passed", () => {
    expect(() => {
      getHours("NotRight");
    }).toThrowError();
  });
});
