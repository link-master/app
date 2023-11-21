/**
 * Counts the percentage of completed items in the list
 * @param totalLength - total length
 * @param currentLength - current length
 */
export default function (
  totalLength: number,
  currentLength: number
): `${number}%` {
  return `${(currentLength / totalLength) * 100}%`;
}
