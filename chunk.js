/** 
* @param {Array} array The array to process.
* @param {number} [size=1] The length of each chunk
* @returns {Array} Returns the new array of chunks.
* @example
*
* chunk(['a', 'b', 'c', 'd'], 2)
* // => [['a', 'b'], ['c', 'd']]
*
* chunk(['a', 'b', 'c', 'd'], 3)
* // => [['a', 'b', 'c'], ['d']]
*/

function chunk(arr,size=1){
    if(!Array.isArray(arr) || size<1 ){
        console.log('请输入正确参数');
        return [];
    }

    if(size == 1){
        return arr;
    }
    var res = [], 
        temp = [],
        count = 0;
    temp = arr.slice(0);
    while(temp.length > size){
        res.push(temp.splice(0,size));
    }
    res.push(temp);
    return res;
    
}

/**
 * 1.没有对于异常传入给出正确的返回值，return 空
 * 2.他把return数组的长度写死，其实没明白为啥要写死？
 * 3.(index += size)，size = Math.max(size, 0) 这种写法我一般都不会用
 * 还有个我觉得算是他不太好的习惯？都没有分号啊
 */

 //看完之后默写实现一把

 function rechunk(arr,size){
     size = Math.max(size,0);
     const length = arr == null ? 0 : arr.length;
     if(!length || size == 0){
         return [];
     }
     var index = 0,
         resindex = 0;
     const res = new Array(Math.ceil(length/size));
     while(index < length){
         res[resindex++] = arr.slice(index,(index += size));
     }
     return res;
 }
