/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */

 function compact (arr) {
     let res = [];
     if(arr == null){
         return res;
     }
    res = arr.filter(ele=>{
        return !(ele == false);
    })
    return res;
 }

 /**
  * 1.忘了做输入的检查了
  * 2.人家const用的很6
  */

  function recompact(arr) {
      let resindex = 0;
      const res = [];
      if(arr == null) {
        return res;
      }
      for(const ele of arr){
          if(ele){
              res[resindex++] = ele;
          }
      }
      return res;
  }