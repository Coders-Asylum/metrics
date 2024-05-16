const assert = require('chai').assert;
import { Duration } from '../../../src/common/duration';

describe('Duration', function() {
  describe('constructor', function() {
    it('should create a new Duration instance with the correct milliseconds', function() {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      assert.equal(duration.toMilliseconds, 95400000);
    });
  });

  describe('toSeconds getter', function() {
    it('should return the correct number of seconds', function() {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      assert.equal(duration.toSeconds, 95400);
    });
  });

  describe('toMinutes getter', function() {
    it('should return the correct number of minutes', function() {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      assert.equal(duration.toMinutes, 1590);
    });
  });

  describe('toHours getter', function() {
    it('should return the correct number of hours', function() {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      assert.equal(duration.toHours, 26.5);
    });
  });

  describe('toDays getter', function() {
    it('should return the correct number of days', function() {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      assert.equal(duration.toDays, 1.1041666666666667);
    });
  });

  describe('toWeeks getter', function() {
    it('should return the correct number of weeks', function() {
      const duration = new Duration({ days: 1, hours: 2, minutes: 30 });
      assert.equal(duration.toWeeks, 0.15773809523809523);
    });
  });
});