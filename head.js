/**
 * Gets the first element of `array`.
 *
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @see last
 * @example
 *
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */

 function head(arr) {
     if(arr == null || !arr.length) {
         return [];
     }
     return arr.slice(0,1);
 }



 /**
  * 一句话的事
  */


  function rehead(arr) {
      return (arr != null && arr.length) ? arr[0] : undefined;
  }