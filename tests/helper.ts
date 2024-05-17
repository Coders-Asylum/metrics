/**
 * Converts the given time duration to milliseconds.
 *
 * @param {Object} Duration - The time duration parameters.
 * @param {number} Duration.weeks - The number of weeks. Defaults to 0.
 * @param {number} Duration.days - The number of days. Defaults to 0.
 * @param {number} Duration.hours - The number of hours. Defaults to 0.
 * @param {number} Duration.minutes - The number of minutes. Defaults to 0.
 * @param {number} Duration.milliseconds - The number of milliseconds. Defaults to 0.
 * @param {number} Duration.seconds - The number of seconds. Defaults to 0.
 * @returns {number} The total time duration in milliseconds.
 */
export const toMilliseconds = ({
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    milliseconds = 0,
    seconds = 0
  }: {
    weeks?: number,
    days?: number,
    hours?: number,
    minutes?: number,
    milliseconds?: number,
    seconds?: number
  } = {}): number => {
    return (
      milliseconds +
      seconds * 1000 +
      minutes * 1000 * 60 +
      hours * 1000 * 60 * 60 +
      days * 1000 * 60 * 60 * 24 +
      weeks * 1000 * 60 * 60 * 24 * 7
    );
  };