/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * intersection([2, 1], [2, 3])
 * // => [2]
 */

 function intersection(...arrs) {
     if(arrs == null || arrs.length < 1) {
         return [];
     }
     if(arrs.length == 1) {
         return arrs[0];
     }
     const temp = [];
     for(let i=0;i<arrs.length;i++) {
         for(let j=0;j<arrs[i].length;j++) {
                temp[arrs[i][j]] = temp[arrs[i][j]]++ || 0;
         }
     }
     temp.filter((ele)=>{
         return temp[ele] == arrs.length;
     })
     return temp;
 }