/**
 * The inverse of `toPairs`is method returns an object composed
 * from key-value `pairs`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * fromPairs([['a', 1], ['b', 2]])
 * // => { 'a': 1, 'b': 2 }
 */


 function fromPairs(arr) {
     if(arr == null || !arr.length) {
         return [];
     }
     const res = new Object();
     for(const val  of arr) {
        res[val[0]] = val[1];   
     }
     return res;
 }