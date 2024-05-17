import { describe, expect, it } from "@jest/globals";
import { Duration } from "../../../src/common/duration";
import { toMilliseconds } from "../../helper";

describe("Duration", function () {
  describe("constructor", function () {
    it("should create a new Duration instance with the correct milliseconds", function () {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      expect(duration.toMilliseconds).toStrictEqual(toMilliseconds({ days: 1, hours: 2, minutes: 30 }));
    });
  });

  describe("toSeconds getter", function () {
    it("should return the correct number of seconds", function () {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      expect(duration.toSeconds).toStrictEqual(toMilliseconds({ days: 1, hours: 2, minutes: 30 }) / 1000);
    });
  });

  describe("toMinutes getter", function () {
    it("should return the correct number of minutes", function () {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      expect(duration.toMinutes).toStrictEqual(toMilliseconds({ days: 1, hours: 2, minutes: 30 }) / 1000 / 60);
    });
  });

  describe("toHours getter", function () {
    it("should return the correct number of hours", function () {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      expect(duration.toHours).toStrictEqual(toMilliseconds({ days: 1, hours: 2, minutes: 30 }) / 1000 / 60 / 60);
    });
  });

  describe("toDays getter", function () {
    it("should return the correct number of days", function () {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      expect(duration.toDays).toStrictEqual(toMilliseconds({ days: 1, hours: 2, minutes: 30 }) / 1000 / 60 / 60 / 24);
    });
  });

  describe("toWeeks getter", function () {
    it("should return the correct number of weeks", function () {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      expect(duration.toWeeks).toStrictEqual(toMilliseconds({ days: 1, hours: 2, minutes: 30 }) / 1000 / 60 / 60 / 24 / 7);
    });
  });
});
