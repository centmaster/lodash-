/**
 * Creates a slice of `array` excluding elements dropped from the end.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * dropRightWhile(users, ({ active }) => active)
 * // => objects for ['barney']
 */

 function dropRightWhile(arr, iterater) {
    const res = [];
    if(arr == null) {
        return res;
    }
    const length = arr.length;
    let resindex = 0;
    for(val of arr) {
        if(iterater(val)) {
            res[resindex++] = val;
        }
    }
    return res;
 }

 /**
  * 一开始只看用例没理解要干什么，写的函数也是错的，他想表达的是，知道操作到某一个位置的时候return false，就drop了
  */

function redropRightWhile(arr, predicate) {
    if(arr == null || !arr.length) {
        return [];
    }
    const length = arr.length;
    let index = length;
    while(index-- && predicate(arr[index])) {}
    return arr.slice(0,index);
}
