import { describe, expect, it } from "@jest/globals";
import { Duration } from "../../../src/common/duration";
import { toMilliseconds } from "../../helper";

describe("Duration", function () {
  describe("constructor", function () {
    it("should create a new Duration instance with the correct milliseconds", function () {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30, milliseconds: 500, seconds: 30, weeks: 2 });
      expect(duration.toMilliseconds).toStrictEqual(toMilliseconds({ days: 1, hours: 2, minutes: 30, milliseconds: 500, seconds: 30, weeks: 2 }));
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

  describe("Duration static methods", () => {
    it("should create a new Duration instance with the correct milliseconds", () => {
      const duration = Duration.milliseconds(1000);
      expect(duration.toMilliseconds).toBe(toMilliseconds({ milliseconds: 1000 }));
    });

    it("should create a new Duration instance with the correct seconds", () => {
      const duration = Duration.seconds(1);
      expect(duration.toMilliseconds).toBe(toMilliseconds({ seconds: 1 }));
    });

    it("should create a new Duration instance with the correct minutes", () => {
      const duration = Duration.minutes(1);
      expect(duration.toMilliseconds).toBe(toMilliseconds({ minutes: 1 }));
    });

    it("should create a new Duration instance with the correct hours", () => {
      const duration = Duration.hours(1);
      expect(duration.toMilliseconds).toBe(toMilliseconds({ hours: 1 }));
    });

    it("should create a new Duration instance with the correct days", () => {
      const duration = Duration.days(1);
      expect(duration.toMilliseconds).toBe(toMilliseconds({ days: 1 }));
    });

    it("should create a new Duration instance with the correct weeks", () => {
      const duration = Duration.weeks(1);
      expect(duration.toMilliseconds).toBe(toMilliseconds({ weeks: 1 }));
    });
  });
});
