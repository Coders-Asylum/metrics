import { describe, expect, it } from "@jest/globals";
import { TimeMetric } from "../../../../src/utils/metric";

describe("TimeMetric", () => {
  it("should construct a new TimeMetric object", () => {
    const tags = new Map<string, string>();
    tags.set("tag1", "value1");
    const startTime = new Date("2022-01-01T00:00:00Z");
    const endTime = new Date("2022-01-01T01:00:00Z");
    const metric = new TimeMetric("testMetric", startTime, endTime, "ms", tags);

    expect(metric.name).toBe("testMetric");
    expect(metric.value).toBe(3600000); // 1 hour in milliseconds
    expect(metric.unit).toBe("ms");
    expect(metric.startTime).toBe(startTime.getTime());
    expect(metric.endTime).toBe(endTime.getTime());
    expect(metric.timeDifference).toBe(3600000); // 1 hour in milliseconds
    expect(metric.tags).toEqual(tags);
  });

  it("should convert the metric to a JSON object", () => {
    // Arrange
    const tags = new Map<string, string>();
    tags.set("tag1", "value1");
    const startTime = new Date("2022-01-01T00:00:00Z");
    const endTime = new Date("2022-01-01T01:00:00Z");
    const metric = new TimeMetric("testMetric", startTime, endTime, "ms", tags);
    const expectedJsonObj = {
      name: "testMetric",
      value: 3600000,
      unit: "ms",
      timestamp: startTime.getTime().toString(),
      tags: JSON.stringify(Array.from(tags.entries())),
    };

    // Act
    const createdJsonObj = metric.toJSON();

    // Assert
    expect(createdJsonObj).toEqual(expectedJsonObj);
  });
});
