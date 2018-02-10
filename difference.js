/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 *
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */


 function difference(arr1,arr2) {
    if(arr2 == null || arr2.length < 1){
        return arr1;
    }
    const res = [];
    let resindex = 0;
    if(!Array.isArray(arr1)) {
        return res;
    }
    for(const i of arr1) {
        if(checkInArray(i,arr2)) {
            res[resindex++] = i;
        }
    }
    return res;
 }

 function checkInArray(val,arr) {
     for(const i of arr) {
         if(val == i){
             return true;
         }
     }
     return false;
 }


 /**
  * 1.判断了arr2但是没有判断arr1是否是数组
  * 2.baseFlatten的作用是把嵌套数组做成一维数组
  * 3.baseDifference有一些地方看不懂
  */