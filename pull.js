/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `without`, this method mutates `array`. Use `remove`
 * to remove elements from an array by predicate.
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @see pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pull(array, 'a', 'c')
 * console.log(array)
 * // => ['b', 'b']
 */

 function pull(arr, ...ele) {
    const length = arr == null ? 0 : arr.length;
    if(!length) {
        return ;
    }
    const res = arr.slice(0);
    for(let i=0; i<length; i++) {
        for(let j=0; j<ele.length; j++) {
            console.log('i,j',i,j,arr[i],ele[j])
            if(arr[i] == ele[j]) {
                res.splice(i,1);
                break; 
            }
        }
    }
    return res;
 }

//仔细一读发现也没啥心意
