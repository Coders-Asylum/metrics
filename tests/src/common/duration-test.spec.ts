import { describe, expect, it, jest } from "@jest/globals";
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

    it("should create a new Duration instance with the correct nanoseconds", () => {
      const duration = Duration.nanoseconds(BigInt(1000));
      expect(duration.toNanoseconds).toBe(BigInt(1000));
    });

    it("should create a new Duration instance with the correct microseconds", () => {
      const duration = Duration.microseconds(BigInt(1000));
      expect(duration.toMicroseconds).toBe(BigInt(1000));
    });
  });

  describe("Duration when exceeds max safe value", () => {
    const warningmessage: string =
      "[METRICS][WARN]The duration value exceeds the maximum value of a 64-bit signed integer. To get the exact value, please use 'toNanoseconds' or 'toMicroseconds' methods.";

    it("should set the respective flag to true when the duration exceeds the max safe value", () => {
      // arrange and act
      const duration = Duration.milliseconds(Number.MAX_SAFE_INTEGER + 1);
      // assert
      expect(duration.exceedsMaxSafeValue).toBe(true);
    });

    it("should show a warning message when the duration exceeds the max safe value", () => {
      // Arrange
      console.warn = jest.fn();
      const duration = Duration.milliseconds(Number.MAX_SAFE_INTEGER + 1);

      // Act
      duration.toMilliseconds;
      duration.toSeconds;
      duration.toMinutes;
      duration.toHours;
      duration.toDays;
      duration.toWeeks;

      // Assert
      expect(console.warn).toHaveBeenCalledTimes(6);
      expect(console.warn).toHaveBeenCalledWith(warningmessage);
    });
  });
});
