/**
 * Uses a binary search to determine the lowest index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * sortedIndex([30, 50], 40)
 * // => 1
 */

 function sortedIndex(arr, value) {
     if(arr == null) {
         return;
     }
     const length = arr.length;
     if(!length) {
         return;
     }
     if(value > Math.max(arr[0],arr[length-1]) || Math.min(arr[0],arr[length-1])) {
        if((arr[0] < arr[length-1] && arr[0] > value) || (arr[0] > arr[length-1] && arr[0] < value)) {
            arr.unshift(value);
        }else{
            arr.push(value);
        }
     }
     let insertIndex = Math.floor(length/2);

 }

 //键盘练烦了，直接读了