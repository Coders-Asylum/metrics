// Copyright (c) 2024 the CODERS Asylum project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file.

import { Duration } from "../common/duration";
/**
 * An observer class to act as a base for all classes that represent an observer.
 *
 * This is used
 */
export abstract class Observer {}

/**
 * `TimeObserver` is a class that extends `Observer` to measure the time difference between two events.
 * It uses `process.hrtime.bigint()` to get a high-resolution timestamp and calculates the difference in various units.
 */
export class TimeObserver extends Observer {
  private _startTime: bigint;
  private _endTime: bigint;
  public timeDiff: Duration;

  /**
   * Constructs a new `TimeObserver` instance.
   * @param metric - The metric to be used.
   */
  constructor() {
    super();
    this._startTime = BigInt(0);
    this._endTime = BigInt(0);
    this.timeDiff = Duration.nanoseconds(BigInt(0));
  }

  /**
   * Starts the timer by recording the current high-resolution timestamp.
   */
  start() {
    this._startTime = process.hrtime.bigint();
  }

  /**
   * Ends the timer by recording the current high-resolution timestamp and calculates the time difference.
   */
  end() {
    this._endTime = process.hrtime.bigint();
    this.timeDiff = Duration.nanoseconds(this._endTime - this._startTime);
  }

  /**
   * Returns the time difference in seconds.
   */
  get diffInSeconds() {
    return this.timeDiff.toSeconds;
  }

  /**
   * Returns the time difference in milliseconds.
   */
  get diffInMilliSeconds() {
    return this.timeDiff.toMilliseconds;
  }
}




