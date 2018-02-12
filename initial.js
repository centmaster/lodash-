/**
 * Gets all but the last element of `array`.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * initial([1, 2, 3])
 * // => [1, 2]
 */

 function initial(arr) {
     const length = arr ==null ? 0 : arr.length;
     return length ? arr.slice(0,-1) : [];

 }