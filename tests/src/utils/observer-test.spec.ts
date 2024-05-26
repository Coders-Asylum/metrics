import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { TimeObserver } from "../../../src/utils/observer";

describe("TimeObserver", () => {
  let observer: TimeObserver;
  jest.useFakeTimers();

  beforeEach(() => {
    observer = new TimeObserver();
  });

  it("should start the timer correctly", () => {
    expect(observer.timeDiff).not.toBe(BigInt(0));
  });

  it("should end the timer correctly", () => {
    observer.start();
    setTimeout(() => {}, 1000);
    observer.end();
    // assert
    expect(observer.timeDiff).not.toBe(BigInt(0));
  });

  it("should return the time difference in seconds", () => {
    observer.start();
    setTimeout(() => {}, 1000);
    jest.advanceTimersByTime(1000);
    observer.end();
    // assert
    expect(observer.diffInSeconds).toBeGreaterThan(0);
  });

  it("should return the time difference in milliseconds", () => {
    observer.start();
    setTimeout(() => {}, 1000);
    jest.advanceTimersByTime(1000);
    observer.end();

    // assert
    expect(observer.diffInMilliSeconds).toBeGreaterThan(0);
  });

  it("should calculate the time difference correctly", () => {
    /// arrange act
    observer.start();
    setTimeout(() => {}, 1000);

    jest.advanceTimersByTime(1000);
    observer.end();

    // assert
    expect(observer.diffInMilliSeconds).toBeGreaterThanOrEqual(1000);
  });
});
