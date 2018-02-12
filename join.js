//这个没找到源码，自己实现一版本
function join(arr, str) {
    if(arr == null || !arr.length) {
        return '';
    }
    const length = arr.length;
    let res = arr[0];
    for(let i = 1 ; i < length ; i++) {
        res += str+arr[i];
    }
    return res;
}