/**
 * Gets the last element of `array`.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */

function last(array) {
    const length = array == null ? 0 : array.length;
    return (length ? array[length-1] : undefined );
}

//对照着head.js终于写出了个和源码一模一样的