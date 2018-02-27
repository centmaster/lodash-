/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position. A negative index will be treated as an offset from the end. 
 * @param {number} [end=array.length] The end position. A negative index will be treated as an offset from the end. 
 * @returns {Array} Returns the slice of `array`.
 */

 function slice(arr, start = 0, end) {
        if(arr == null) {
            return;
        }
        const res = [];
        let index = start > 0 ? start : length + start;
        const length = arr.length;
        if(length) {
            end = end ? end : length;
            while(index < end) {
                res.push(arr[index++]);
            }
            return res;
        }
        return ;
 }

 //没有考虑-start<length,end > length这种情况，对于每种参数都要仔细考虑