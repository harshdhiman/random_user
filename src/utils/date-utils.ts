/**
 *
 * @param offset - offset is a string in format `+/-hh:mm` (eg. `+05:30`)
 */
export function getLocalTimeByOffset(offset: string): Date {
  // parse the offset eg. +05:30
  const [offsetHours, offsetMinutes] = offset
    .split(":")
    .map((x) => parseInt(x, 10));

  const now = new Date();
  const utc = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours() + offsetHours,
    now.getUTCMinutes() + offsetMinutes,
    now.getUTCSeconds()
  );
  return utc;
}
