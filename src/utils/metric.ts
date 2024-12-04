// Copyright (c) 2024 the CODERS Asylum project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file.

/**
 * A metric class to act as a base for all classes that represent a metric.
 * @template T The type of the value that this metric represents.
 */
export abstract class Metric<T> {
  readonly name: string;
  readonly value: T;
  readonly unit: string;
  readonly timestamp: number;
  readonly tags: Map<string, string>;

  /**
   * Constructs a new Metric object.
   * @param {string} name - The name of the metric.
   * @param {T} value - The value of the metric.
   * @param {string} unit - The unit of the metric.
   * @param {number} timestamp - The timestamp of the metric.
   * @param {Map<string, string>} tags - The tags associated with the metric.
   */
  constructor(name: string, value: T, unit: string, timestamp: number, tags: Map<string, string>) {
    this.name = name;
    this.value = value;
    this.unit = unit;
    this.timestamp = timestamp;
    this.tags = tags;
  }

  /**
   * Converts the Metric object to a JSON-friendly object.
   * @returns {object} The JSON-friendly representation of the Metric object.
   */
  toJSON(): object {
    const obj: { [key: string]: any } = {
      name: this.name,
      value: this.value,
      unit: this.unit,
      timestamp: this.timestamp.toString(),
      tags: JSON.stringify(Array.from(this.tags.entries())),
    };
    return obj;
  }
}

/**
 * Class is an data class to hold timing metrics,
 *
 * This will have an end time and start time and the difference between them will be the value.
 *
 * All time will be recodrded in UTC and then using {@link toLocal} will be converted to local time.
 * @extends Metric<number>
 */
export class TimeMetric extends Metric<number> {
  public _startTime: number;
  public _endTime: number;
  private timeDiff: number;

  /**
   * Constructs a new TimeMetric object.
   * @param {string} name - The name of the metric.
   * @param {number} startTime - The start time of the metric.
   * @param {number} endTime - The end time of the metric.
   * @param {string} unit - The unit of the metric.
   * @param {Map<string, string>} tags - The tags associated with the metric.
   */
  constructor(name: string, startTime: Date, endTime: Date, unit: string, tags: Map<string, string>) {
    super(name, endTime.getTime() - startTime.getTime(), unit, startTime.getTime(), tags);

    this._startTime = startTime.getTime();
    this._endTime = endTime.getTime();
    this.timeDiff = this._endTime - this._startTime;
  }

  /**
   * Gets the time difference.
   * @returns {number} The time difference.
   */
  get timeDifference(): number {
    return this.timeDiff;
  }

  /**
   * Gets the start time.
   * @returns {number} The start time.
   */
  get startTime(): number {
    return this._startTime;
  }

  /**
   * Gets the end time.
   * @returns {number} The end time.
   */
  get endTime(): number {
    return this._endTime;
  }
}
