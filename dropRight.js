/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */


 function dropRight(arr, n=1) {
     const length = arr == null ? 0 : arr.length;
     return length ? arr.slice(0,length-(n = n > 0 ? n : 0)) : [];
 }