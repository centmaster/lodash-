/**
 * Gets all but the first element of `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * tail([1, 2, 3])
 * // => [2, 3]
 */

 function tail(arr) {
     if(arr == null) {
         return ;
     }
     const length = arr.length;
     if(length) {
         return arr.slice(1);
     }
     return;
 }

 //优秀啊
 const [first,...result] = arr;