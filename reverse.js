function reverse(arr) {
    const res = [];
    let index = 0;
    const length = arr == null ? 0 : arr.length;
    if(length) {
        while(index < length) {
            res.unshift(arr[index++]);
        }
    }
    return res;
}