//就是最基本的遍历，把看result里有没有现在遍历这个数组的值
//利用了数组之间传引用。

let seen = result;
outer:
while (++index < length) {
  let value = array[index]
  const computed = iteratee ? iteratee(value) : value

  value = (comparator || value !== 0) ? value : 0
  if (isCommon && computed === computed) {
    let seenIndex = seen.length
    while (seenIndex--) {
      if (seen[seenIndex] === computed) {
        continue outer
      }
    }
    if (iteratee) {
      seen.push(computed)
    }
    result.push(value)
}
