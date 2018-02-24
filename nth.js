/**
 * Gets the element at index `n` of `array`. If `n` is negative, the nth
 * element from the end is returned.
 *
 * @since 4.11.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=0] The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 *
 * nth(array, 1)
 * // => 'b'
 *
 * nth(array, -2)
 * // => 'c'
 */

 function nth(arr,index) {
     if(arr == null || !arr.length || Math.abs(index) > arr.length-1) {
         return undefined;
     }
     index = index >= 0 ? index : arr.length + index;
     return arr[index];
 }