/**
 * This method is like `indexOf` except that it iterates over elements of
 * `array` from right to left.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 *
 * // Search from the `fromIndex`.
 * lastIndexOf([1, 2, 1, 2], 2, 2)
 * // => 1
 */

 function lastIndexOf(array,value,fromIndex) {
     if(array == null) {
         return undefined;
     }
     if(fromIndex) {
         return lastIndexOf(array.slice(0,fromIndex+1),value);
     }
     const length = array.length;
     if(length) {
         let index = length;
         while(index) {
             if(array[index] == value) {
                 return index;
             }
             index--;
         }
     }
     return -1;
 }

 /**
  * 没有做后两项input的校验
  */