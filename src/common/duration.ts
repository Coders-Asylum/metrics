// Copyright (c) 2024 the CODERS Asylum project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file.

import assert from "node:assert";

/**
 * A Duration object to represent a time duration.
 *
 * @example
 * const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
 * console.log(duration.toMilliseconds); // 95400000
 * console.log(duration.toSeconds); // 95400
 * console.log(duration.toMinutes); // 1590
 * console.log(duration.toHours); // 26.5
 * console.log(duration.toDays); // 1.1041666666666667
 * console.log(duration.toWeeks); // 0.15773809523809523
 *
 * @class
 */
class Duration {
  private _milliseconds: number;

  /**
   * @param {Object} duration - The duration input.
   * @param {number} [duration.milliseconds=0] - Time in milliseconds.
   * @param {number} [duration.seconds=0] - Time in seconds.
   * @param {number} [duration.minutes=0] - Time in minutes.
   * @param {number} [duration.hours=0] - Time in hours.
   * @param {number} [duration.days=0] - Number of days.
   * @param {number} [duration.weeks=0] - Number of weeks.
   * @constructor
   */
  constructor({
    milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0,
    days = 0,
    weeks = 0,
  }: {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
    weeks?: number;
  }) {
    assert(milliseconds >= 0, new Error("Milliseconds must be non-negative"));
    assert(seconds >= 0, new Error("Seconds must be non-negative"));
    assert(minutes >= 0, new Error("Minutes must be non-negative"));
    assert(hours >= 0, new Error("Hours must be non-negative"));
    assert(days >= 0, new Error("Days must be non-negative"));

    this._milliseconds = milliseconds + seconds * 1000 + minutes * 1000 * 60 + hours * 1000 * 60 * 60 + days * 1000 * 60 * 60 * 24 + weeks * 1000 * 60 * 60 * 24 * 7;
  }

  /**
   * Create a new Duration object with the specified number of milliseconds.
   * @param {number} milliseconds - The number of milliseconds.
   * @return {Duration} A new Duration object.
   */
  static milliseconds(milliseconds: number): Duration {
    return new Duration({ milliseconds: milliseconds });
  }

  /**
   * Create a new Duration instance with the specified number of seconds.
   * @param {number} seconds - The number of seconds.
   * @return {Duration} A new Duration instance.
   */
  static seconds(seconds: number): Duration {
    return new Duration({ seconds: seconds });
  }

  /**
   * Create a new Duration instance with the specified number of minutes.
   * @param {number} minutes - The number of minutes.
   * @return {Duration} A new Duration instance.
   */
  static minutes(minutes: number): Duration {
    return new Duration({ minutes: minutes });
  }

  /**
   * Create a new Duration instance with the specified number of hours.
   * @param {number} hours - The number of hours.
   * @return {Duration} A new Duration instance.
   */
  static hours(hours: number): Duration {
    return new Duration({ hours: hours });
  }

  /**
   * Create a new Duration instance with the specified number of days.
   * @param {number} days - The number of days.
   * @return {Duration} A new Duration instance.
   */
  static days(days: number): Duration {
    return new Duration({ days: days });
  }

  /**
   * Create a new Duration instance with the specified number of weeks.
   * @param {number} weeks - The number of weeks.
   * @return {Duration} A new Duration instance.
   */
  static weeks(weeks: number): Duration {
    return new Duration({ weeks: weeks });
  }

  /**
   * Get the duration in milliseconds.
   * @return {number} The duration in milliseconds.
   */
  get toMilliseconds(): number {
    return this._milliseconds;
  }

  /**
   * Get the duration in seconds.
   * @return {number} The duration in seconds.
   */
  get toSeconds(): number {
    return this._milliseconds / 1000;
  }

  /**
   * Get the duration in minutes.
   * @return {number} The duration in minutes.
   */
  get toMinutes(): number {
    return this._milliseconds / 1000 / 60;
  }

  /**
   * Get the duration in hours.
   * @return {number} The duration in hours.
   */
  get toHours() {
    return this._milliseconds / 1000 / 60 / 60;
  }

  /**
   * Get the duration in days.
   * @return {number} The duration in days.
   */
  get toDays(): number {
    return this._milliseconds / 1000 / 60 / 60 / 24;
  }

  /**
   * Get the duration in weeks.
   * @return {number} The duration in weeks.
   */
  get toWeeks(): number {
    return this._milliseconds / 1000 / 60 / 60 / 24 / 7;
  }
}

export { Duration };
