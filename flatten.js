/**
 * Flattens `array` a single level deep.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep, flattenDepth
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 */


 function flatten(arr) {
     if(arr == null || !arr.length) {
         return [];
     }
     const length =  arr.length;
     const res = [];
     for(const value of arr) {
        res.push(...(typeof value == 'object'? value : [value]))
     }
     return res;
 }

 //...1这种数组结构如果遇到非数组情况会报错，所以需要判断类型，不明白为啥源代码没有这个还能跑