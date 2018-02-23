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
     const map = new Map();
     const res = [];
     const length = arrs.length;
     for(let i=0;i<arrs.length;i++) {
         for(let j=0;j<arrs[i].length;j++) {  
                let temp = map.get(arrs[i][j]);
                if(map.has(arrs[i][j])){
                    map.set(arrs[i][j],++temp);
                }else{
                    map.set(arrs[i][j],1);
                }
         }
     }
     map.forEach((ele,index)=> {
         if(ele == length) {
             res.push(index);
         }
     })
     const testmap = new Map(arrs);
     console.log('testmap',testmap,testmap[0],testmap.length)
     return res;
 }



 /**
  * 1.首先发现map可以自己count出现次数
  * 2.人家基本都是一个功能封装成一个函数耦合度比较低
  * 3.我表示有些东西没理解，这个intersection回头再看下
  */