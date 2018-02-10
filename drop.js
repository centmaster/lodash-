/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */

 function drop(arr, n=1) {
     n = Math.max(n,0);
     n = n == NaN ? 0 : n;
     let res = [];
     if(arr == null || arr.length <1) {
         return res;
     }
     res = arr.splice(n);
     return res;
 }


 /**
  *没毛病 
  */

  function redrop(arr, n=1) {
    const length = arr == null ? 0 : arr.length;
    return length ? arr.slice(n < 0 ? 0 : n) : [];
  }
