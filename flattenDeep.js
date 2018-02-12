/**
 * Recursively flattens `array`.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flatten, flattenDepth
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 */

 function flattendeep(arr, res = []) {
     if(arr == null){
         return [];
     }
     for(const val of arr) {
         if(typeof val == 'object') {
             flattendeep(val,res);
         }else{
             res.push(val);
         }
     }
     return res;
 }

 //flattendeepth同理，加个条件判断就好了，不重复写了