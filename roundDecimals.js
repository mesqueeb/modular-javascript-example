
/**
 * Rounds up or down x decimals of a given number
 *
 * @param {number} theNumber
 * @param {number} maxDecimalCount eg. 2 if you want to cut off anything beyond 0.00xx
 * @returns {number} eg. fn(0.123, 2) returns 0.12
 */
export default function (theNumber, maxDecimalCount) {
  const decimals = 10 ** maxDecimalCount
  return Math.round(theNumber * decimals) / decimals
}
